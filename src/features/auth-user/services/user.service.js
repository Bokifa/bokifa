import { api } from '@/lib/api';
import { USER_API_ENDPOINTS } from './user.endpoints';
import { dataTransformToFormData } from '@/lib/utils';
import { loginSchema } from './user.schemas';



export const UserService = {
	login: async (data) => {
		const parsed = loginSchema.safeParse(data);
		if (!parsed.success) {
			debugger
			return Promise.reject(parsed.error);
		}

		return api(USER_API_ENDPOINTS.login(), {
			method: 'POST',
			data: dataTransformToFormData(parsed.data),
		});
	},
	
	register: async (data) => {
		const registerSchema = z.object({
			Name: z.string().min(3),
			Surname: z.string().min(3),
			Username: z.string().min(3),
			Email: z?.string(),
			Password: z.string().min(8),
			ConfirmPassword: z.string().min(8)
		})

		const parsed = registerSchema.safeParse({
			Name: data.name,
			Surname: data.surname,
			Username: data.username,
			Email: data.email,
			Password: data.password,
			ConfirmPassword: data.confirmPassword
		});

		if (!parsed.success) {
			return Promise.reject(parsed.error);	
		}

		return api(USER_API_ENDPOINTS.register(), {
			method: 'POST',
			body: dataTransformToFormData(parsed.data)
		})
	},

	logout: async () => {

	},
	forgotPassword: async (email) => {

	},

	refreshToken: async () => {

	},

	resetPassword: async (token, password) => {

	},
	
}