import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';


export const LOCALES = {
	AZ: 'az',
	EN: 'en',
	RU: 'ru'
};



export const ALL_LOCALES = ['az', 'en', 'ru'];

export const routing = defineRouting({
    locales: ALL_LOCALES,

    defaultLocale: LOCALES.EN,

	pathnames: {
		'/': '/',
		'/[locale]/': '/:locale',
	}
});

export const navigationWithLanguage = createNavigation(routing);
