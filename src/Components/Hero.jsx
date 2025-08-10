import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import BackgroundVideo from '../Assets/Svg/Video.mp4';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    className="w-full h-full object-cover"
                    src={BackgroundVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Optional Overlay for readability */}
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
