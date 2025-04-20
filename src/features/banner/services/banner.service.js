import { api } from '@/lib/api'
import { BANNER_ENDPOINTS } from '../banner.config'


export const BannerService = {

	getAll: () => {
		return api(BANNER_ENDPOINTS.getAll(), {
			next: {
				tags: ['banner'],
				revalidate: 0
			}
		})
	},
	
	getById: (id) => {
		return api(BANNER_ENDPOINTS.getById(id))	
	}
}