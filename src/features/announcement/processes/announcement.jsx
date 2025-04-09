import { useAnnouncement } from '../hooks/useAnnouncement';
import { AnnouncementBanner } from '../ui/banner';

export const Announcement = async () => {
    const { announcements } = await useAnnouncement();
	console.log(announcements);
    
    return <AnnouncementBanner announcements={announcements} />;
};
