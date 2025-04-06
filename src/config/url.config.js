import { queryParamsBuilder } from '@/lib/utils';

const URL_CREATOR = (url = '', urlParams = {}) => {
    const params = queryParamsBuilder(urlParams);
    return `${url}${params || ''}`;
};

export const AUTH_PAGES = {
	LOGIN: 'login',
	REGISTER: 'register',
}

export const APP_URLS = {
    ROOT: (url = '', queryParams = {}) => URL_CREATOR(`/${url}`, queryParams),

    home: (url = '', queryParams = {}) => APP_URLS.ROOT(`/${url}`, queryParams),


	login: (url = '', queryParams = {}) => APP_URLS.ROOT(`auth/${AUTH_PAGES.LOGIN}/${url}`, queryParams),
	register: (url = '', queryParams = {}) => APP_URLS.ROOT(`auth/${AUTH_PAGES.REGISTER}/${url}`, queryParams),
};

export const getUrls = () => APP_URLS;