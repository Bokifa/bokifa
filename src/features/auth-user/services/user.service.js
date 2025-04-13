import { api } from '@/lib/api';
import { z } from '@/lib/z'
import { USER_API_ENDPOINTS } from './user.endpoints';
import { dataTransformToFormData } from '@/lib/utils';



export const UserService = {
	login: async (data) => {
		const schema = z.object({
			UsernameOrEmail: z.string(),
			Password: z.string().min(8),
			RememberMe: z.boolean().optional()
		})
		const parsed = schema.safeParse({
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
	
	register: async (email, password) => {

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