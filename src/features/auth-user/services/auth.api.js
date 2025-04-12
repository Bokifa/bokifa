import { api } from '@/lib/api'

export const authApi = (url, { method = 'GET', data, headers = {}, ...rest } = {}) => {
	const accessToken = 'sdfghfgdf'
	return api(url, {
		method,
		data,
		headers,
		accessToken,
		...rest,
	})
}