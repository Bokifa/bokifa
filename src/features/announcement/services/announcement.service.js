import { API_ENDPOINTS } from '@/config/api.config'
import { api } from '@/lib/api'
import { ANNOUNCEMENT_ENDPOINTS } from './announcement.endpoints'
import { getLanguageRemoteDatas } from '@/features/language/helpers/lang.helper'

export const AnnouncementService = {
	getAnnouncements: async () => {
		const response = await api(ANNOUNCEMENT_ENDPOINTS.getAll(), {
			method: 'GET',
			next: {
				revalidate: 300, 
			}
		})

		return await getLanguageRemoteDatas(response)
	},
	getById: async (id) => {
		return api(ANNOUNCEMENT_ENDPOINTS.getById(id))
	}
}