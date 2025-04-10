import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';


export const LOCALES = {
	AZ: 'az',
	EN: 'en',
	RU: 'ru'
} ;



export const ALL_LOCALES = Object.values(LOCALES)

export const routing = defineRouting({
    locales: ALL_LOCALES,

    defaultLocale: LOCALES.AZ,
});

export const navigationWithLanguage = createNavigation(routing);
