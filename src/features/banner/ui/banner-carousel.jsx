'use client';

import { useState } from 'react';

import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BannerCarouselItem } from './banner-carousel-item';

export const BannerCarousel = ({ banners }) => {
    console.log(banners);
    
    const [activeIndex, setActiveIndex] = useState(0);
    const pagination = {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
    };
    return (
        <section className="h-9/12 w-screen sm:h-11/12 md:h-full">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
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
                {banners?.map((bannerItem, i) => (
                        <SwiperSlide
                            key={i}
                            className="flex items-center justify-center bg-gray-800 text-4xl font-bold text-white"
                        >
                            <BannerCarouselItem isActive={activeIndex === i} banner={bannerItem}/>
                        </SwiperSlide>
                    ))}
                <div className="swiper-pagination mt-4" />
            </Swiper>
        </section>
    );
};
