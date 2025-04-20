import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { MdKeyboardArrowRight } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';

import BgDiscount1 from '../assets/bg-discount-1.png';
import BgDiscount2 from '../assets/bg-discount-2.png';
import { cn } from '@/lib/utils';
import { config } from '@/config/constants';

export const BannerCarouselItem = ({ activeIndex, itemIndex, bannerItem }) => {
    
    const isActive = activeIndex === itemIndex;
    const t = useTranslations('Banner');
    const isFirstDiscount = (itemIndex + 1) % 3 !== 0;

    const discount = () => {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, delay: 0.5 }}
                transition={{ duration: 0.25, delay: 0.2 }}
                key="discount"
                className={cn(
                    `absolute top-1/2 xl-2:left-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 lg:flex`,
                    isFirstDiscount ? 'hidden lg:left-3/4 xl:left-4/6' : 'hidden lg:left-1/4 xl:left-2/6'
                )}
            >
                <div className="relative h-full w-full">
                    <span className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-white">
                        {bannerItem?.banner?.discount}% OFF
                    </span>
                    <motion.div
                        className="h-full w-full"
                        animate={{ rotate: 360 }}
                        transition={{
                            rotate: {
                                duration: 11,
                                repeat: Infinity,
                                ease: 'linear',
                            },
                        }}
                    >
                        <Image
                            src={isFirstDiscount ? BgDiscount1.src : BgDiscount2.src}
                            alt="discount"
                            fill
                        />
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    return (
        <AnimatePresence mode="wait">
            <>
                <div 
                    className='w-screen h-full absolute top-0 left-0'
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), 
                            url(${config.server.url}/${bannerItem?.banner?.imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div className='w-full h-full container-center'>
                    {isActive && (
                        <div
                            className={cn(
                                "relative flex h-full w-full items-center max-w-full justify-start",
                                ((itemIndex + 1) % 3 === 1  && Number(bannerItem?.banner?.discount) !== 0)
                                    ? 'lg:justify-start' 
                                    : bannerItem?.banner?.discount === 0
                                    ?  'lg:justify-center' 
                                    : 'lg:justify-end' 
                            )}
                        >
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0, y: 130 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 130, delay: 0.5 }}
                                    transition={{ duration: 0.4, delay: 0.3 }}
                                    className={cn(
                                        "bg-opacity-5 text-foreground w-fit max-w-[550px]", 
                                        bannerItem?.banner?.discount === 0 && "flex flex-col items-center justify-center text-center max-w-full",
                                    )}
                                >
                                    <span className="text-primary pb-2.5 text-base xs:text-lg font-medium">{bannerItem?.title}</span>
                                    <h2 className="font-fraunces pb-3.5 text-2xl xs:text-5xl sm:text-6xl font-semibold uppercase text-shadow-md/30 text-shadow-white/40">
                                        {bannerItem?.name}
                                    </h2>
                                    <p className="text-base font-light pb-3">{bannerItem?.description}</p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.6 }}
                                    >
                                        <Button variant="secondary" size="lg">
                                            {/* t('discoverNow') */}
                                            {bannerItem?.btnName}
                                            <MdKeyboardArrowRight/>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            {/* discount */}
                            {String(bannerItem?.banner?.discount) !== '0' && discount()}
                        </div>
                    )}
                </div>
            </>
        </AnimatePresence>
    );
};
