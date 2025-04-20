import { Button } from '@/components/ui/button';
import { Rate } from '@/components/ui/rate';
import Image from 'next/image';
import Link from 'next/link';
import { CiHeart as HeartIcon } from "react-icons/ci";
import { FiPlus as PlusIcon } from "react-icons/fi";

export const BookCard = (/* {bookItem} */) => {
    const bookItem = {
        name: 'Complete Set of 7 Books: 30 Days to Change Yourself...',
		discount: 15,
		rate: 4.5,
        images: {
            thumbnail: 'https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_7.jpg?v=1728615154&width=520',
            extra: 'https://ap-bokifa.myshopify.com/cdn/shop/files/bo_pro_3.jpg?v=1728615010&width=800',
        },
		company: 'Ap Bokifa',
		price: 29.95,
    };

	const discount = () => {
		return (
			<span className='flex items-center justify-center w-8.5 h-8.5 rounded-full bg-red-500 cursor-button text-xs text-white'>
				-{bookItem?.discount}%
			</span>
		)
	}

	const addToWishlist = () => {
		return (
			<button className='flex items-center justify-center w-8.5 h-8.5 rounded-full bg-secondary cursor-button'>
				<HeartIcon/>
			</button>
		)
	}

    const cardImage = () => (
		<div className="relative aspect-[3/4] min-w-[188px] overflow-hidden rounded-xl">
			<Image
				src={bookItem?.images?.thumbnail}
				alt={bookItem?.name}
				fill
				className="object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
			/>
			<Image
				src={bookItem?.images?.extra}
				alt={bookItem.name}
				fill
				className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			/>
			<Link href={'/gooks'} className='absolute left-0 top-0 w-full h-full overflow-hidden'/>
		</div>
	);
	
	const cardHeader = () => (
		<div className='relative'>
			{cardImage()}
			<div className='absolute right-2 top-2'>
				{addToWishlist()}
			</div>
			<div className='absolute left-2 top-2'>
				{discount()}
			</div>
		</div>
	);


	const cardRating = () => (
		<div className='relative w-full min-h-4'>
			<div className='absolute left-1/2 -translate-x-1/2 -top-3 py-1 px-2 rounded-t-2xl bg-white flex gap-1 text-sm'>
				<Rate defaultState={bookItem.rate}/>
				<span>({bookItem?.rate})</span>
			</div>
		</div>
	)
    const cardBody = () => (
		<div className='flex flex-col gap-2 text-center items-center px-3'>
			{cardRating()}
			<h4>{bookItem?.name}</h4>
			<span className='text-sm text-gray-500'>{bookItem?.company}</span>
			<span className='text-primary'>{`$${bookItem?.price}`}</span>
		</div>
	);

	const addToCart = () => (
		<div className="transition-all duration-300 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
			<Button className="w-full mt-2 flex items-center justify-center gap-2">
				<PlusIcon />
				Add to Cart
			</Button>
		</div>
	);

    return (
		<div className="rounded-xl hover:shadow-md p-2 group">
			{cardHeader()}
			{cardBody()}
			{addToCart()}
		</div>
	);
};
