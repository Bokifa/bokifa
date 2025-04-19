import { api } from '@/lib/api';
import { USER_API_ENDPOINTS } from './user.endpoints';
import { dataTransformToFormData } from '@/lib/utils';
import { loginSchema, registerSchema } from './user.schemas';



export const UserService = {
	login: async (data) => {
		
		return api(USER_API_ENDPOINTS.login(), {
			method: 'POST',
			data: dataTransformToFormData(data),
		});
	},
	
	register: async (data) => {
		return api(USER_API_ENDPOINTS.register(), {
			method: 'POST',
			data: dataTransformToFormData(data)
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