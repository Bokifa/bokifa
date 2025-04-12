import { API_ENDPOINTS } from '@/config/api.config'
import { APP_URLS } from '@/config/url.config'


export const USER_ENDPOINTS = {
    login:  (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/User/login${url}`, queryParams),
    register:  (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/User/register${url}`, queryParams),
    logout:  (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/User/logout${url}`, queryParams),

    profile:  (url = '', queryParams = {}) => API_ENDPOINTS.ROOT(`/User/profile${url}`, queryParams),
}

export const AUTH_PAGES = {
	LOGIN: 'login',
	REGISTER: 'register',
}

export const USER_URLS = {
    login: (url = '', queryParams = {}) => APP_URLS.ROOT(`auth/${AUTH_PAGES.LOGIN}/${url}`, queryParams),
	register: (url = '', queryParams = {}) => APP_URLS.ROOT(`auth/${AUTH_PAGES.REGISTER}/${url}`, queryParams),
}