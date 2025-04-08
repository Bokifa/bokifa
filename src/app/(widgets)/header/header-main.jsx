import { ChangeCurrency } from '@/features/currency/processes/change-currency'
import { LanguageChange } from '@/features/language/processes/language-change'
import { SearchProcesses } from '@/features/search/processes'
import { WishlistIndicatorBtn } from '@/features/wishlist/ui/wishlist-indicator-btn'
import Image from 'next/image'


export const HeaderMain = () => {
	return (
		<section className='container-center py-[26px]'>
			<div className='grid grid-cols-12 items-center'>
				<div className='flex items-center gap-4 lg:hidden col-span-2'>
					<SearchProcesses/>
				</div>
				<div className='mx-auto flex lg:flex-auto lg:mx-0 col-span-8 lg:col-span-2'>
					<Image src={'/bokifa-logo.webp'} alt='bokifa logo' width={150} height={37}/>
				</div>
				<div className='items-center hidden lg:flex w-full px-5 max-w-[1050px] mx-auto col-span-8'>
					<SearchProcesses/>
				</div>
				<div className='flex gap-1 items-center col-span-4 lg:col-span-2'>
					<ChangeCurrency/>
					<div className='w-[1px] h-5 mx-1 bg-muted-foreground/50'></div>
					<LanguageChange/>
					<WishlistIndicatorBtn/>
				</div>
			</div>
			
		</section>
	)
}