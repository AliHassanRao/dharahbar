import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

import cur1 from '../Assets/Svg/cur1.png';
import cur2 from '../Assets/Svg/cur2.png';
import cur3 from '../Assets/Svg/cur3.png';
import cur4 from '../Assets/Svg/cur4.png';

const images = [cur1, cur2, cur3, cur4];
const transitionTime = 5000; 

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, transitionTime);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background Image Carousel */}
            <div className="absolute inset-0 w-full h-full z-0">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={images[currentIndex]}
                        src={images[currentIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="w-full h-full object-cover absolute inset-0"
                        alt={`background-${currentIndex}`}
                    />
                </AnimatePresence>
            </div>

            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-black/50 z-[1]" />

            {/* Foreground Content */}
            <div className="relative z-[2] flex flex-col justify-center items-start min-h-screen px-6 md:px-12 lg:px-20 max-w-7xl mx-auto text-white">
                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                    <span className="inline-block border-l-4 border-yellow-400 pl-4 text-yellow-400">
                        Welcome to DHA Rahbar Lahore
                    </span>
                </motion.h1>

                {/* Subheading with Typewriter effect */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
                    className="mt-6 text-base md:text-lg lg:text-xl font-medium"
                >
                    <span className="font-bold">We provide&nbsp;</span>
                    <span className="text-yellow-300 font-semibold">
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
