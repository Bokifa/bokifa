import { routing } from '@/features/language/hooks/lang';
import { notFound } from 'next/navigation';

export default async function Layout({ children, params }) {
	const { locale } = await params;
	if (!routing.locales.includes(locale)) {
        notFound();
    }
	return (
		<>
			{children}
		</>
	);
}