import { AnnouncementService } from '../services/announcement.service'

export const useAnnouncement = async () => {
	const response = await AnnouncementService.getAnnouncements();
	const announcements = response?.flatMap(res => res.content)
	return {
		announcements
	}
}