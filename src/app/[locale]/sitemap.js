

import { host } from '@/config';
import { routing } from '@/features/language/hooks/lang';
import { getPathname } from '@/features/navigation';

export default function sitemap() {
    return [...getEntries('/'), ...getEntries('/pathnames')];
}

function getEntries(href) {
    return routing.locales.map((locale) => ({
        url: getUrl(href, locale),
        alternates: {
            languages: Object.fromEntries(routing.locales.map((cur) => [cur, getUrl(href, cur)])),
        },
    }));
}

function getUrl(href, locale) {
    const pathname = getPathname({ locale, href });
    return host + pathname;
}
