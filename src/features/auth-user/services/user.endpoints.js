import { API_ENDPOINTS } from '@/config/api.config';

export const USER_API_ENDPOINTS = {
	login: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/login${url}`, queryParams),
	register: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/register${url}`, queryParams),
	refreshToken: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/refresh-token${url}`, queryParams),
	forgotPassword: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/forgot-password${url}`, queryParams),
	resetPassword: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/reset-password${url}`, queryParams),
	user: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`${API_ENDPOINTS.ROOT}/User${url}`, queryParams),
	profile: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`${API_ENDPOINTS.ROOT}/User/profile${url}`, queryParams),
}