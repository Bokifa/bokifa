import { api } from '@/lib/api';
import { z } from '@/lib/z'
import { USER_API_ENDPOINTS } from './user.endpoints';
import { dataTransformToFormData } from '@/lib/utils';



export const UserService = {
	login: async (data) => {
		const loginSchema = z.object({
			UsernameOrEmail: z.string(),
			Password: z.string().min(8),
			RememberMe: z.boolean().optional()
		})
		const parsed = loginSchema.safeParse({
			UsernameOrEmail: data.email,
			Password: data.password,
			RememberMe: !!data.rememberMe
		});

		if (!parsed.success) {
			return Promise.reject(parsed.error);	
		}
		return api(USER_API_ENDPOINTS.login(), {
			method: 'POST',
			body: dataTransformToFormData(parsed.data)
		})
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