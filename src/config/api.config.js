
import { queryParamsBuilder } from '@/lib/utils';
import { config } from './constants';

export const URL_CREATOR = (url = '', urlParams = {}) => {
	const params = queryParamsBuilder(urlParams);
	return `${url}${params || ''}`;
};

export const API_ENDPOINTS = {
	ROOT: (url = '', queryParams = {}) => URL_CREATOR(`${config.server.url}/api${url}`, queryParams),

	Contact: {
		ROOT: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/Contact/${url}`, queryParams)
	},

	FileUpload: {
		image: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/FileUpload/image${url}`, queryParams),
		file: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/FileUpload/file${url}`, queryParams),
		video: (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/FileUpload/video${url}`, queryParams),
	},
}