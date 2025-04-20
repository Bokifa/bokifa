import { API_ENDPOINTS } from '@/config/api.config';

export const BOOK_ENDPOINTS = {
	getAll: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBook/get-all${url}`, queryParams),

	getById: (id = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBook/get-by-id?id=${id}`, queryParams),

	create: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBook/create${url}`, queryParams),

	update: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBook/update${url}`, queryParams),

	delete: (id = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBook/delete?id=${id}`, queryParams),
}