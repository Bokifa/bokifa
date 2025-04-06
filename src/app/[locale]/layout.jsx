import { routing } from '@/features/language/hooks/lang';
import { notFound } from 'next/navigation';
import { Footer, Header } from '../(widgets)';

export default async function Layout({ children, params }) {
	const { locale } = await params;
	if (!routing.locales.includes(locale)) {
        notFound();
    }
	return (
		<div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
			<Header />
			{children}
			<Footer/>
		</div>
	);
}