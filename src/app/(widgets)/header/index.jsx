import { Announcement } from '@/features/announcement';

import { HeaderMain } from './header-main';
import { HeaderNavbar } from './header-navbar';

export const Header = () => {
    return (
        <>
            <div className="block min-h-14 border-b border-b-accent">
                <Announcement />
            </div>
            <header className='w-full sticky top-0 left-0 min-h-14 border-b border-b-accent bg-white'>
                <HeaderMain />
                <HeaderNavbar />
                
            </header>
        </>
    );
};
