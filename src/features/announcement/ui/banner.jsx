'use client';

import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const AnnouncementBanner = ({ announcements = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(1);
    const touchStartY = useRef(null);

    const announcementSectionId = 'announcement-heading';

    const nextAnnouncement = () => {
        setDirection(1);
        setCurrentIndex((prevIndex) => (prevIndex === announcements.length - 1 ? 0 : prevIndex + 1));
    };

    const prevAnnouncement = () => {
        setDirection(-1);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? announcements.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(nextAnnouncement, 5000);
            return () => clearInterval(interval);
        }
    }, [isHovered, announcements]);

    // Touch swipe (vertical)
    const handleTouchStart = (e) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (touchStartY.current === null) return;
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY.current - touchEndY;

        if (diff > 50) nextAnnouncement(); // swipe up
        if (diff < -50) prevAnnouncement(); // swipe down
        touchStartY.current = null;
    };

    const variants = {
        enter: (direction) => ({
            y: direction > 0 ? 100 : -100,
            opacity: 0,
            position: 'absolute',
        }),
        center: {
            y: 0,
            opacity: 1,
            position: 'relative',
        },
        exit: (direction) => ({
            y: direction > 0 ? -100 : 100,
            opacity: 0,
            position: 'absolute',
        }),
    };

    return (
        <section
            aria-labelledby={announcementSectionId}
            className="bg-primary-foreground w-full md:p-4 text-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="@max-lg:container-center mx-auto flex items-center justify-center md:justify-between lg:w-1/2">
                <button onClick={prevAnnouncement} aria-label="Previous announcement" className='hidden md:block'>
                    <FiChevronLeft />
                </button>
                <div className="relative flex items-center justify-center py-3 px-2 md:py-0 truncate max-w-screen w-screen md:w-auto">
                    <AnimatePresence custom={direction} initial={false}>
                        <motion.h3
                            key={currentIndex}
                            id={announcementSectionId}
                            className="text-center text-sm font-bold truncate"
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            custom={direction}
                            transition={{ duration: 0.5 }}
                        >
                            {announcements[currentIndex]}
                        </motion.h3>
                    </AnimatePresence>
                </div>

                <button onClick={nextAnnouncement} aria-label="Next announcement" className='hidden md:block'>
                    <FiChevronRight />
                </button>
            </div>
        </section>
    );
};
