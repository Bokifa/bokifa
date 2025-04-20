'use client'

import { motion } from 'motion/react'
import Image from 'next/image';
import IconScroll from './assets/iconscroll.png'

export const MiniStatisticsInfiniteScroll = ({ statistics }) => {

	return (
		<div className="flex items-center justify-center overflow-hidden bg-secondary">
			<div className="relative w-full overflow-x-hidden">
				<motion.div
					className="flex gap-12 px-8 whitespace-nowrap py-5"
					animate={{
						x: ['0%', '-100%'],
					}}
					transition={{
						repeat: Infinity,
						duration: 30,
						ease: 'linear',
					}}
				>
					{[...Array(6)].flatMap(() => statistics).map((item, index) => (
						<div className='flex gap-8 items-center text-lg'>
							<Image src={IconScroll.src} width={18} height={18} alt='mini-statistics'/>
							<div
								key={`${index}-${item.total * index}`}
								className="flex gap-2"
							>
								<span className="text-primary">{item.total}</span>
								<span className="">{item.title}</span>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	)
};
