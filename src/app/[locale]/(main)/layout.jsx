import { Footer, Header } from '@/app/(widgets)';

export default function MainLayout({ children }) {
	return (
		<div className='grid min-h-screen grid-rows-[auto_auto_1fr_auto]'>
			<Header />
			{children}
			<Footer/>
		</div>
	)
}
