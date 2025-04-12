import { PiShoppingBagLight } from "react-icons/pi";
import { useBasketButton } from './useBasketButton';

export const BasketButtonOnHeader = () => {
	const { count = 0 } = useBasketButton();
	return (
		<button className='relative'>
			<PiShoppingBagLight size={24}/>
			<span 
				className='w-3.5 h-3.5 rounded-full flex items-center justify-center-safe absolute -right-1 -top-1 bg-red-500 text-white truncate text-[9px] text-semibold'
			>
				{count}
			</span>
		</button>
	)
}