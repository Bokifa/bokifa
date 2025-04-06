import { useAnnouncement } from '../hooks/useAnnouncement';
import { AnnouncementBanner } from '../ui/banner';

export const Announcement = () => {
    const {} = useAnnouncement();
	
    return <AnnouncementBanner />;
};
