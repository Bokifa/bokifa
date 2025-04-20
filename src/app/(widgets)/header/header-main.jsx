import Image from 'next/image';

import { BasketButtonOnHeader } from '@/features/basket/basket-button/ui';
import { ChangeCurrency } from '@/features/currency/processes/change-currency';
import { LanguageChange } from '@/features/language/processes/language-change';
import { SearchProcesses } from '@/features/search/processes';
import { UserAvatar } from '@/features/auth-user/processes/mini-avatar';
import { WishlistIndicatorBtn } from '@/features/wishlist/ui/wishlist-indicator-btn';

import { NavbarSidebarWButton } from './header-navbar';

export const HeaderMain = () => {
    return (
        <section className="container-center py-[26px]">
            <div className="flex w-full justify-center pb-2 md:hidden md:pb-0">
                <Image src={'/bokifa-logo.webp'} alt="bokifa logo" width={150} height={37} />
            </div>
            <div className="flex items-center justify-between relative">
                <div className="flex-1 flex items-center gap-4 md:col-span-4 lg:col-span-3 lg:hidden">
                    <SearchProcesses />
                    <NavbarSidebarWButton />
                </div>

                <div className="mx-auto hidden flex-1 justify-center md:col-span-4 md:flex lg:col-span-3 lg:mx-0 lg:justify-start">
                    <Image src={'/bokifa-logo.webp'} alt="bokifa logo" width={150} height={37} />
                </div>

                <div className="flex-1 mx-auto hidden w-full min-w-[480px] xl:min-w-[650px] 2xl:min-w-[900px] items-center justify-center px-5 lg:flex">
                    <SearchProcesses />
                </div>

                <div className="flex-1 flex items-center justify-end gap-1 md:col-span-4 lg:col-span-3">
                    <div className="hidden items-center md:flex">
                        <ChangeCurrency />
                        <div className="bg-muted-foreground/50 mx-1 h-5 w-[1px]"></div>
                        <LanguageChange />
                    </div>
                    <div className="flex items-center gap-3">
                        <UserAvatar />
                        <WishlistIndicatorBtn />
                        <BasketButtonOnHeader />
                    </div>
                </div>
            </div>
        </section>
    );
};
