import { API_ENDPOINTS } from '@/config/api.config';

export const ANNOUNCEMENT_ENDPOINTS = {
	getAll: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/THeadBanner/get-all${url}`, queryParams),

	getById: (id = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/THeadBanner/get-by-id?id=${id}`, queryParams),

	create: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/THeadBanner/create${url}`, queryParams),

	update: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/THeadBanner/update${url}`, queryParams),

	delete: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/THeadBanner/create${url}`, queryParams),
}