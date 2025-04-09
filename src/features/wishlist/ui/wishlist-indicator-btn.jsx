import { CiHeart } from "react-icons/ci";


export const WishlistIndicatorBtn = ({ count = 0}) => {
	return (
		<button className='relative'>
			<CiHeart size={24}/>
			<div className='w-3.5 h-3.5 rounded-full flex items-center justify-center-safe absolute -right-1 -top-1 bg-red-500 text-white truncate text-[9px] text-semibold'>
				{count}
			</div>
		</button>
	)
}