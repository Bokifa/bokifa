import { SearchProcesses } from '@/features/search/processes'
import Image from 'next/image'


export const HeaderMain = () => {
	return (
		<section className='container-center'>
			<div className='flex justify-between container-center'>
				<div className='flex items-center gap-4 md:hidden'>
					<SearchProcesses/>
				</div>
				<Image src={'/bokifa-logo.webp'} alt='bokifa logo' width={150} height={37.5}/>
				<div className='items-center gap-4 hidden md:flex'>
					<SearchProcesses/>
				</div>
			</div>
			
		</section>
	)
}