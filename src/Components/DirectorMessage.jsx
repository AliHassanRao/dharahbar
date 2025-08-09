import React from "react";
// import { Director } from "../Assets";

const DirectorMessage = () => {
  return (
    <section className="bg-[#FDF6EE] py-10 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Image */}
        <div className="border-4 border-green-700 p-1 rounded-md shadow-lg flex-shrink-0">
          <img
            src=''
            alt="Director"
            className="w-full md:w-80 h-auto object-cover rounded"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-center md:text-left">
          {/* Heading */}
          <h2 className="text-[#F97316] font-bold text-3xl uppercase tracking-wide">
            Director's Message
          </h2>
          <h3 className="text-lg text-gray-700 font-semibold mt-1">
            Col (R) ------
          </h3>

          {/* Quote */}
          <p className="font-medium italic text-green-800 mt-3">
            “Building communities is more than developing land; it’s about creating a better future for generations.”
          </p>

          {/* Paragraphs */}
          <p className="text-gray-800 mt-5 leading-relaxed">
            As the Director of DHA Housing Society, I am deeply committed to
            ensuring that our community thrives in an environment of safety,
            sustainability, and modern living. Our vision is to not just
            provide residences, but to build a place where families can grow,
            neighbors connect, and life flourishes with dignity and pride.
          </p>

          <p className="text-gray-800 mt-4 leading-relaxed">
            I extend my sincere gratitude to our dedicated team, valued
            residents, and stakeholders for their trust and cooperation. Let us
            continue working hand in hand to maintain the high standards and
            values that make our society a benchmark for excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;
