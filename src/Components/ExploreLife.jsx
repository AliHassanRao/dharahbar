import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Ambulance,
  Cctv,
  FireFighter,
  Ground,
  Markets,
  Mosque,
  Park,
  Security,
  WaterFilter,
} from "../Assets";

// Color mapping for dynamic styling
const colorMap = {
  green: "text-green-600 bg-green-500",
  orange: "text-orange-600 bg-orange-500",
  blue: "text-blue-600 bg-blue-500",
  red: "text-red-600 bg-red-500",
  teal: "text-teal-600 bg-teal-500",
  rose: "text-rose-600 bg-rose-500",
  yellow: "text-yellow-600 bg-yellow-500",
  cyan: "text-cyan-600 bg-cyan-500",
  purple: "text-purple-600 bg-purple-500",
};

// Facilities content
const cardData = [
  {
    title: "Parks",
    img: Park,
    color: "green",
    description:
      "Beautiful green spaces, walking tracks, and serene picnic areas for the whole family.",
  },
  {
    title: "Mosques",
    img: Mosque,
    color: "orange",
    description:
      "Peaceful places of worship fostering community, faith, and togetherness.",
  },
  {
    title: "CCTV Surveillance",
    img: Cctv,
    color: "blue",
    description:
      "24/7 monitoring for your safety with advanced high-definition CCTV coverage.",
  },
  {
    title: "Security",
    img: Security,
    color: "red",
    description:
      "Professional security staff ensuring a safe and secure environment.",
  },
  {
    title: "Ambulance",
    img: Ambulance,
    color: "teal",
    description:
      "Emergency ambulance services available around the clock for residents.",
  },
  {
    title: "Fire Fighter",
    img: FireFighter,
    color: "rose",
    description:
      "Rapid-response firefighting team for emergencies and safety drills.",
  },
  {
    title: "Markets",
    img: Markets,
    color: "yellow",
    description:
      "Convenient shopping markets offering fresh produce and daily essentials.",
  },
  {
    title: "Water Filter Plant",
    img: WaterFilter,
    color: "cyan",
    description:
      "Pure, clean, and safe drinking water available through our filtration plant.",
  },
  {
    title: "Sports Ground",
    img: Ground,
    color: "purple",
    description:
      "Well-maintained grounds for cricket, football, and outdoor activities.",
  },
];

// Framer Motion Variant
const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ExploreLife = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore Your Best Life
      </motion.h2>

      <motion.p
        className="text-center text-gray-700 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        DHA Rahbar provides the backdrop where you can live life to the fullest.
        Do more of what you already love, learn something new and make great
        friendships along the way.{" "}
        <span className="font-semibold text-green-900">
          Your lifestyle begins here... what will you do today?
        </span>
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cardData.map((card, index) => {
          const [textColor, bgColor] = colorMap[card.color].split(" ");

          return (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.03] hover:shadow-lg group"
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              {/* Image */}
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />

              {/* Accent bar */}
              <div className={`h-1.5 ${bgColor}`}></div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3
                  className={`text-xl sm:text-2xl font-semibold mb-2 ${textColor}`}
                >
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base flex items-center justify-center gap-2">
                  {card.description}
                  <FaArrowRight
                    className={`transition-transform duration-300 group-hover:translate-x-1 text-xs ${textColor}`}
                  />
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreLife;
