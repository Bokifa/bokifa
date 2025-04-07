import { useAnnouncement } from '../hooks/useAnnouncement';
import { AnnouncementBanner } from '../ui/banner';

export const Announcement = async () => {
    const { announcements } = await useAnnouncement();
	
    return <AnnouncementBanner announcements={announcements} />;
};
