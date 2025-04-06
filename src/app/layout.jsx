import { Manrope } from 'next/font/google';

import { LocaleLayout } from '@/features/language/processes/language.provider';

import Providers from './(initialize)/providers';
import './globals.css';

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default async function RootLayout({ children, params }) {
    const { locale } = await params;
    const className = `${manrope.variable} antialiased min-h-screen max-w-screen`;
    return (
        <LocaleLayout
            params={{ locale }}
            htmlBodyProps={{
                className: className,
            }}
        >
            <Providers>{children}</Providers>
        </LocaleLayout>
    );
}
