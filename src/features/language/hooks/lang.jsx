
import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';


export const LOCALES = {
	AZ: 'az',
	EN: 'en',
	RU: 'ru'
};



export const ALL_LOCALES = Object.values(LOCALES);

export const routing = defineRouting({
    locales: ALL_LOCALES,

    defaultLocale: LOCALES.EN,
});

export const navigationWithLanguage = createNavigation(routing);
