import { API_ENDPOINTS } from '@/config/api.config'
import { api } from '@/lib/api'
import { ANNOUNCEMENT_ENDPOINTS } from './announcement.endpoints'

export const AnnouncementService = {
	getAnnouncements: async () => {
		return api(ANNOUNCEMENT_ENDPOINTS.getAll(), {
			method: 'GET',
			next: {
				revalidate: 300, 
			}
		})
	},
	getById: async (id) => {
		return api(ANNOUNCEMENT_ENDPOINTS.getById(id))
	}
}