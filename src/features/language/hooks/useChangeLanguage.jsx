'use client';

import { useRouter } from '@/features/navigation';
import { useTransition } from 'react';
import { LOCALES } from './lang';
import { permanentRedirect, usePathname } from 'next/navigation';

export const useChangeLanguage = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const pathname = usePathname();

	const onChangeLanguage = (locale) => {
		startTransition(() => {
			permanentRedirect(`/${locale}`);
			// const segments = pathname.split('/');
			// segments[1] = locale;
			// const newPath = segments.join('/') || '/';

			// router.replace(newPath);
		});
	};
	console.log(pathname);
	
	return {
		isPending,
		onChangeLanguage,
		defaultLanguage: pathname.split('/')[1] || LOCALES.EN,
	};
};
