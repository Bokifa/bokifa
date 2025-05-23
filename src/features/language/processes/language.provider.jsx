
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
    // if (!routing.locales.includes(locale)) {
    //     notFound();
    // }
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
