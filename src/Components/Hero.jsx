import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

// Assets
import cur1 from '../Assets/Svg/cur1.png';
import cur2 from '../Assets/Svg/cur2.png';
import cur3 from '../Assets/Svg/cur3.png';
import cur4 from '../Assets/Svg/cur4.png';
import mobCar1 from '../Assets/Svg/mobCar1.png';
import mobCar2 from '../Assets/Svg/mobCar2.png';
import mobCar3 from '../Assets/Svg/mobCar3.png';

const DESKTOP_IMAGES = [cur1, cur2, cur3, cur4];
const MOBILE_IMAGES = [mobCar1, mobCar2, mobCar3];
const TRANSITION_INTERVAL = 5000;

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Debounced Resize Handler
    useEffect(() => {
        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                setIsMobile(window.innerWidth < 768);
            }, 150);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Choose image set
    const images = useMemo(() => (isMobile ? MOBILE_IMAGES : DESKTOP_IMAGES), [isMobile]);

    // Image carousel logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, TRANSITION_INTERVAL);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <section
            className="relative w-full h-[60vh] sm:h-[40vh] overflow-hidden text-white"
            aria-label="Hero Section"
        >
            {/* Image Carousel */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={images[currentIndex]}
                        src={images[currentIndex]}
                        alt={`Background ${currentIndex + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className="w-full h-full object-cover absolute inset-0"
                        loading="lazy"
                        draggable={false}
                    />
                </AnimatePresence>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-14 lg:px-24 max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                >
                    <span className="inline-block border-l-4 border-yellow-400 pl-5 text-yellow-400">
                        Welcome to DHA Rahbar Lahore
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl lg:text-2xl font-medium"
                >
                    <span className="font-semibold">We provide&nbsp;</span>
                    <span className="text-yellow-300 font-bold">
                        <Typewriter
                            words={[
                                'The Future Of Living.',
                                'The Best Living Standards.',
                                'Modern Housing Solutions.',
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={2000}
                        />
                    </span>
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
