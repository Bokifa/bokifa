'use client';

import { useState } from 'react';

import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BannerCarouselItem } from './banner-carousel-item';

export const BannerCarousel = ({ banners }) => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const pagination = {
        el: '.swiper-pagination',
        clickable: true,
        bulletClass: 'custom-bullet',
        bulletActiveClass: 'custom-bullet-active',
    };
    return (
        <section className="h-11/12 w-screen md:h-full min-h-[400px] md:min-h-[530px]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={300}
                pagination={pagination}
                navigation={true}
                grabCursor={true}
                loop={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-1%', 0, -1],
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
                            className="flex items-center justify-center text-4xl font-bold"
                        >
                            <BannerCarouselItem activeIndex={activeIndex} itemIndex={i} bannerItem={bannerItem}/>
                        </SwiperSlide>
                    ))}
                <div className="swiper-pagination mt-4" />
            </Swiper>
        </section>
    );
};
