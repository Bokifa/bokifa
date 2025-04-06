import { HTMLProps } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
// import { notFound } from 'next/navigation';
import { routing } from '../hooks/lang';


export async function LocaleLayout({
    children,
    params: { locale },
    htmlProps,
    htmlBodyProps,
}) {

    const messages = await getMessages();

    return (
        <html lang={locale} {...htmlProps}>
            <body {...htmlBodyProps}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
