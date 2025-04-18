'use client';

import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import { EffectCreative, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const BannerCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const pagination = {
		el: '.swiper-pagination',
		clickable: true,
		bulletClass: 'custom-bullet',
		bulletActiveClass: 'custom-bullet-active',
	};
    return (
        <section className="h-full w-screen">
            <Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
				  delay: 3000,
				  disableOnInteraction: false,
				}}
				speed={500}
				pagination={pagination}
				navigation={true}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-4%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                modules={[EffectCreative, Autoplay, Pagination, Navigation]}
                className="h-full w-full"
            >
                {Array.from({ length: 9 }, (_, i) => (
                    <SwiperSlide
                        key={i}
                        className="flex items-center justify-center bg-gray-800 text-4xl font-bold text-white"
                    >
                        Salam
                    </SwiperSlide>
                ))}
				<div className="swiper-pagination mt-4" />
            </Swiper>
        </section>
    );
};
