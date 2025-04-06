import { Announcement } from '@/features/announcement'

const Navbar = () => {
	return (
		<nav className='block'>

		</nav>
	)
}

export const Header = () => {
	return (
		<header className='block min-h-14'>
			<Announcement/>
			<section>
			</section>
			<Navbar />
		</header>
	)
}