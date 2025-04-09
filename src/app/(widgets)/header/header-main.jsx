import Image from 'next/image';

import { BasketButtonOnHeader } from '@/features/basket/basket-button/ui';
import { ChangeCurrency } from '@/features/currency/processes/change-currency';
import { LanguageChange } from '@/features/language/processes/language-change';
import { SearchProcesses } from '@/features/search/processes';
import { WishlistIndicatorBtn } from '@/features/wishlist/ui/wishlist-indicator-btn';
import { NavbarSidebarWButton } from './header-navbar';

export const HeaderMain = () => {
    return (
        <section className="container-center py-[26px]">
            <div className="grid grid-cols-12 items-center">

                <div className="col-span-1 flex items-center gap-4 lg:hidden">
                    <SearchProcesses />
					<NavbarSidebarWButton/>
                </div>

                <div className="col-span-6 mx-auto flex lg:col-span-2 lg:mx-0 flex-1 justify-center lg:justify-start">
                    <Image src={'/bokifa-logo.webp'} alt="bokifa logo" width={150} height={37} />
                </div>

                <div className="col-span-8 mx-auto hidden w-full max-w-[1050px] items-center px-5 lg:flex">
                    <SearchProcesses />
                </div>

                <div className="col-span-4 flex items-center gap-1 lg:col-span-2">
                    <ChangeCurrency />
                    <div className="bg-muted-foreground/50 mx-1 h-5 w-[1px]"></div>
                    <LanguageChange />
                    <WishlistIndicatorBtn />
                    <BasketButtonOnHeader />
                </div>
            </div>
        </section>
    );
};
