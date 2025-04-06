
import { queryParamsBuilder } from '@/lib/utils';

export const URL_CREATOR = (url = '', urlParams = {}) => {
	const params = queryParamsBuilder(urlParams);
	return `${url}${params || ''}`;
};

export const API_ENDPOINTS = {
	ROOT: (url = '', queryParams = {}) => URL_CREATOR(`/api${url}`, queryParams),

	Contact: {
		ROOT: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`${API_ENDPOINTS.ROOT}/Contact/${url}`, queryParams)
	},

	

	FileUpload: {
		image: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`${API_ENDPOINTS.ROOT}/FileUpload/image${url}`, queryParams),
		file: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`${API_ENDPOINTS.ROOT}/FileUpload/file${url}`, queryParams),
		video: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`${API_ENDPOINTS.ROOT}/FileUpload/video${url}`, queryParams),
	},

	User: {
		login: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/login${url}`, queryParams),
		register: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/register/${url}`, queryParams),
		forgotPassword: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/forgot-password/${url}`, queryParams),
		resetPassword: (url = '', queryParams = {}) => API_ENDPOINTS.Auth.ROOT(`${API_ENDPOINTS.ROOT}/User/reset-password/${url}`, queryParams),
	},
}