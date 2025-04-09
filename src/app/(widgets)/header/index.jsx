import { Announcement } from '@/features/announcement';

import { HeaderMain } from './header-main';
import { HeaderNavbar } from './header-navbar';

export const Header = () => {
    return (
        <header className="block min-h-14 border-b border-b-accent">
            <Announcement />
            <HeaderMain />
            <HeaderNavbar />
        </header>
    );
};
