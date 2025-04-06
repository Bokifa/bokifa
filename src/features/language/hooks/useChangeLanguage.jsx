'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { LOCALES } from './lang';

export const useChangeLanguage = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const pathname = usePathname();

	const onChangeLanguage = (locale) => {
		startTransition(() => {
			const segments = pathname.split('/');
			segments[1] = locale;
			const newPath = segments.join('/') || '/';

			router.replace(newPath);
		});
	};

	return {
		isPending,
		onChangeLanguage,
		defaultLanguage: pathname.split('/')[1] || LOCALES.EN,
	};
};
