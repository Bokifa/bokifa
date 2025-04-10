
import { AnnouncementService } from '../services/announcement.service';
import { AnnouncementBanner } from '../ui/banner';

export const Announcement = async () => {
    const response = await AnnouncementService.getAnnouncements();
	const announcements = response?.flatMap(res => res.content)
    
    return <AnnouncementBanner announcements={announcements} />;
};
