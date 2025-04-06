import { LanguageChange } from '@/features/language/processes/language-change'

const Navbar = () => {
	return (
		<nav className='block'>

		</nav>
	)
}

export const Header = () => {
	return (
		<header className='block min-h-14'>
			<section aria-labelledby='head-banner'>
				<LanguageChange/>
				
			</section>
			<section>
			</section>
			<Navbar />
		</header>
	)
}