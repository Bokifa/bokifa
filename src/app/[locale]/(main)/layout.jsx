import { Footer } from '@/app/(widgets)';
import { Header } from '@radix-ui/react-accordion';

export default function MainLayout({ children }) {
	return (
		<div className='grid min-h-screen grid-rows-[auto_auto_1fr_auto]'>
			<Header />
			{children}
			<Footer/>
		</div>
	)
}
