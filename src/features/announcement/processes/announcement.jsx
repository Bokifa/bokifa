import { useAnnouncement } from '../hooks/useAnnouncement';
import { AnnouncementBanner } from '../ui/banner';

export const Announcement = () => {
    const { announcements } = useAnnouncement();
	
    return <AnnouncementBanner announcements={announcements} />;
};
