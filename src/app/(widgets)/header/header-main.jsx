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
            <div className="flex md:hidden w-full justify-center pb-2 md:pb-0">
                <Image src={'/bokifa-logo.webp'} alt="bokifa logo" width={150} height={37} />
            </div>
            <div className="grid grid-cols-12 items-center">

                <div className="col-span-6 md:col-span-4 lg:col-span-3 flex items-center gap-4 lg:hidden">
                    <SearchProcesses />
					<NavbarSidebarWButton/>
                </div>

                <div className="col-span-6 md:col-span-4 lg:col-span-3 mx-auto hidden md:flex lg:mx-0 flex-1 justify-center lg:justify-start">
                    <Image src={'/bokifa-logo.webp'} alt="bokifa logo" width={150} height={37} />
                </div>

                <div className="col-span-6 mx-auto hidden w-full max-w-[1050px] items-center px-5 lg:flex justify-center">
                    <SearchProcesses />
                </div>

                <div className="col-span-6 md:col-span-4 lg:col-span-3 flex items-center justify-end gap-1">
                    <div className='hidden md:flex items-center'>
                        <ChangeCurrency />
                        <div className="bg-muted-foreground/50 mx-1 h-5 w-[1px]"></div>
                        <LanguageChange />
                    </div>
                    <WishlistIndicatorBtn />
                    <BasketButtonOnHeader />
                </div>
            </div>
        </section>
    );
};
