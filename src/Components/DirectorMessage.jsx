import React from "react";
import { motion } from "framer-motion";
import { Director } from "../Assets";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const DirectorMessage = () => {
  return (
    <section className="bg-[#FDF6EE] py-10 px-6 md:px-12 lg:px-20">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Image */}
        <motion.div
          className="border-4 border-green-700 p-1 rounded-md shadow-lg flex-shrink-0"
          variants={scaleFade}
        >
          <img
            src={Director}
            alt="Director"
            className="w-full md:w-80 h-auto object-cover rounded"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex flex-col justify-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-[#F75B28] font-bold text-3xl uppercase tracking-wide"
            variants={fadeUp}
            custom={0}
          >
            Director's Message
          </motion.h2>

          <motion.h3
            className="text-lg text-gray-700 font-semibold mt-1"
            variants={fadeUp}
            custom={1}
          >
            Col (R) ------
          </motion.h3>

          <motion.p
            className="font-medium italic text-green-800 mt-3"
            variants={fadeUp}
            custom={2}
          >
            “Building communities is more than developing land; it’s about
            creating a better future for generations.”
          </motion.p>

          <motion.p
            className="text-gray-800 mt-5 leading-relaxed"
            variants={fadeUp}
            custom={3}
          >
            As the Director of DHA Housing Society, I am deeply committed to
            ensuring that our community thrives in an environment of safety,
            sustainability, and modern living. Our vision is to not just
            provide residences, but to build a place where families can grow,
            neighbors connect, and life flourishes with dignity and pride.
          </motion.p>

          <motion.p
            className="text-gray-800 mt-4 leading-relaxed"
            variants={fadeUp}
            custom={4}
          >
            I extend my sincere gratitude to our dedicated team, valued
            residents, and stakeholders for their trust and cooperation. Let us
            continue working hand in hand to maintain the high standards and
            values that make our society a benchmark for excellence.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DirectorMessage;
