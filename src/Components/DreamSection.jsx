import React from "react";

const DreamSection = () => {
  return (
    <section className="text-center px-4 py-10">
      {/* Title */}
      <h1 className="text-5xl font-extrabold">
        <span
          className="text-[60px] font-[400] mr-2"
          style={{
            fontFamily: "'Great Vibes', cursive",
            color: "#F97316",
           
          }}
        >
          Dream
        </span>
        <span className="text-green-900 text-3xl font-serif">
          your life in DHA
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mt-4 text-gray-800 leading-relaxed font-normal text-[15px]">
        <span className="font-bold text-green-800">DHA Rahbar</span> offers a
        premium lifestyle where comfort, security, and elegance meet. Whether
        you envision a peaceful family haven or a vibrant community life, DHA
        provides the perfect environment to turn your aspirations into reality.
        Explore world-class amenities, scenic surroundings, and a community
        built for excellence — your dream home awaits here.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
        <button className="bg-green-900 hover:bg-green-800 text-white font-bold px-6 py-3 rounded transition duration-200 border border-green-900">
          Book a Visit
        </button>
        <button className="bg-green-900 hover:bg-green-800 text-white font-bold px-6 py-3 rounded transition duration-200 border border-green-900">
          Get Information Catalog
        </button>
      </div>
    </section>
  );
};

export default DreamSection;
