'use client';

import { RxHamburgerMenu } from 'react-icons/rx';

import * as DrawerPrimitive from '@/components/ui/drawer';

import { Link } from '@/features/navigation';
import { useState } from 'react';

const navbarLinks = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/about',
        label: 'About',
    },
    {
        href: '/contact',
        label: 'Contact',
    },
    {
        href: '/faq',
        label: 'FAQ',
    },
];

export const HeaderNavbar = () => {
    return (
        <nav className="container-center lg:flex hidden py-3">
            <ul className="flex gap-7 text-[16px] font-semibold">
                {navbarLinks?.map((link) => (
                    <li key={link.href} className="hover:text-primary transition-all">
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export const NavbarSidebar = ({ open = false, setOpen }) => {
    return (
        <DrawerPrimitive.Drawer open={open} onOpenChange={setOpen} direction="left">
            <DrawerPrimitive.DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerPrimitive.DrawerHeader>
                        <DrawerPrimitive.DrawerTitle>Move Goal</DrawerPrimitive.DrawerTitle>
                        <DrawerPrimitive.DrawerDescription>
                            Set your daily activity goal.
                        </DrawerPrimitive.DrawerDescription>
                    </DrawerPrimitive.DrawerHeader>
                    <div className="p-4 pb-0"></div>
                    <DrawerPrimitive.DrawerFooter>
                        <DrawerPrimitive.DrawerClose asChild>
                            <button variant="outline">Cancel</button>
                        </DrawerPrimitive.DrawerClose>
                    </DrawerPrimitive.DrawerFooter>
                </div>
            </DrawerPrimitive.DrawerContent>
        </DrawerPrimitive.Drawer>
    );
};

export const NavbarSidebarWButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(prev => !prev)}>
				<RxHamburgerMenu size={24}/>
			</button>
            <NavbarSidebar open={open} setOpen={setOpen} />
        </>
    );
};
