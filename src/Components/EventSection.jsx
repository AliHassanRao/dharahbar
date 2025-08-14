// src/components/EventSection.jsx
import React from 'react';


import img4 from '../Assets/Svg/img4.png';
import img6 from '../Assets/Svg/img6.jpg';
import cultural from '../Assets/Svg/cultural.jpg';
import sports from '../Assets/Svg/sports.jpg';
import sports2 from '../Assets/Svg/sports2.jpg';
import cultural2 from '../Assets/Svg/cultural2.jpg';
import inauguration from '../Assets/Svg/inauguration.jpg';
import inauguration2 from '../Assets/Svg/inauguration2.jpg';
import meetups from '../Assets/Svg/meetups.jpg';
const categories = [
  {
    name: "Inauguration",
    image: inauguration,
  },
  {
    name: "Cultural",
    image: cultural,
  },
  {
    name: "Sports",
    image: sports,
  },
  {
    name: "Meet ups",
    image: meetups,
  },
];

const eventImages = [
  { src: inauguration, title: "D, F & N Obsession Ceremony" },
  { src: cultural, title: "Live Music Show at DHA  3rd Mango Festival 2025" },
  { src: sports, title: "Sports Winners" },
  { src: img6, title: "Outdoor Dinner Meetup" },
  { src: inauguration2, title: "Speaker on Stage" },
  { src: cultural2, title: "Indoor Festival Crowd" },
  { src: sports2, title: "Stage Performers" },
  { src: img4, title: "DHA Bahawalpur Faisalabad Roadshow" },
];

const EventSection = () => {
  return (
    <div className="p-6 md:px-20">
      <h2 className="text-4xl font-semibold text-[#F75B28] mb-4">EVENTS</h2>

      {/* Category Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative h-32 bg-gray-800 text-white rounded overflow-hidden"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center font-semibold text-lg">
              {cat.name}
            </div>
          </div>
        ))}
      </div>

      {/* Event Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventImages.map((event, index) => (
          <div
            key={index}
            className="relative h-64 rounded overflow-hidden shadow-md group cursor-pointer"
          >
            <img
              src={event.src}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            {/* Title overlay on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4 font-semibold text-lg">
              {event.title}
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default EventSection;
