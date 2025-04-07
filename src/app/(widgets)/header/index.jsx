import { Announcement } from '@/features/announcement';

import { HeaderMain } from './header-main';

const Navbar = () => {
    return <nav className="block"></nav>;
};

export const Header = () => {
    return (
        <header className="block min-h-14">
            <Announcement />
            <HeaderMain />
            <Navbar />
        </header>
    );
};
