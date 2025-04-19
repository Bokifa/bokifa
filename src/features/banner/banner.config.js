import { API_ENDPOINTS } from '@/config/api.config';


export const BANNER_ENDPOINTS = {
    getAll: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBanner/get-all${url}`, queryParams),
	getById: (id = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBanner/get-by-id?id=${id}`, queryParams),

	create: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBanner/create${url}`, queryParams),
	update: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBanner/update${url}`, queryParams),
	delete: (id = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/TBanner/delete?id=${id}`, queryParams),
}