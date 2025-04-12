import { queryParamsBuilder } from '@/lib/utils';

export const URL_CREATOR = (url = '', urlParams = {}) => {
    const params = queryParamsBuilder(urlParams);
    return `${url}${params || ''}`;
};



export const APP_URLS = {
    ROOT: (url = '', queryParams = {}) => URL_CREATOR(`/${url}`, queryParams),
    home: (url = '', queryParams = {}) => APP_URLS.ROOT(`/${url}`, queryParams),

};