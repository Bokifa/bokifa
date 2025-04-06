import { API_ENDPOINTS } from '@/config/api.config'
import { api } from '@/lib/api'

export const AnnouncementService = {
	// const getEndpoints = API_ENDPOINTS
	getAnnouncements: async () => {
		return api()
	}
}