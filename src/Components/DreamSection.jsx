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
            color: "#F75B28",
           
          }}
        >
          Dream
        </span>
        <span className="text-green-900 text-3xl font-serif">
          your life in DHA Rahbar
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

    </section>
  );
};

export default DreamSection;
