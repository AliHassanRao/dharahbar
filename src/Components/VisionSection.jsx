import React from 'react';
import { motion } from 'framer-motion';
import { visionImages } from '../Assets';

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const VisionSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start px-6 lg:px-24 md:py-20 py-10 bg-white overflow-hidden">
      {/* Left Section */}
      <motion.div
        className="lg:w-1/2 space-y-4 md:space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-[#F75B28] uppercase tracking-tight"
          variants={textVariant}
          custom={0}
        >
          Our Vision
        </motion.h2>

        <motion.h3
          className="text-lg md:text-xl font-semibold text-[#F75B28] uppercase tracking-widest"
          variants={textVariant}
          custom={1}
        >
          Sustainable Future for DHA Rahbar
        </motion.h3>

        <motion.p
          className="text-gray-700 leading-[1.9] text-justify text-base md:text-lg"
          variants={textVariant}
          custom={2}
        >
          Provision of remarkable opportunity to deliver a world class, integrated, sustainable city
          to enable people of DHA Rahbar to live, work & learn in a socially, environmentally and
          economically sustainable manner. To deliver a holistically master planned township
          complemented by residential, commercial, institutional, cultural, civic and recreational
          opportunities to create desired life style.
        </motion.p>
      </motion.div>

      {/* Right Section - Image Grid */}
      <motion.div
        className="lg:w-1/2 grid grid-cols-3 gap-4 mt-12 lg:mt-0 lg:ml-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {visionImages.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-md aspect-[4/3] transform hover:scale-105 transition-transform duration-300"
            variants={imageVariant}
            custom={index}
          >
            <img
              src={src}
              alt={`vision-img-${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default VisionSection;
