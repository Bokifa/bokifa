import { AnimatePresence, motion } from 'framer-motion';

export const BannerCarouselItem = ({ isActive, bannerItem }) => {
	console.log(bannerItem);
	
    return (
        <AnimatePresence mode="wait">
            {isActive && (
                <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${bannerItem?.banner?.imgUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="p-4 bg-black bg-opacity-50 text-white text-2xl rounded-xl w-fit"
                    >
                        {bannerItem?.banner?.name}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
