import React, { useState, useEffect } from 'react';

const TopMovingText = () => {
const text = [
  'Emergency Security Contact: 0311-7770587',
  'General Inquiries: 0311-7770545',
  'Office Hours: 9:00 AM – 5:00 PM'
];



  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [text.length]);

  return (
    <div className='bg-[#0d2649] py-2 text-center flex justify-center items-center'>
     <div> <span className='text-white md:text-[16px] text-[14px]  text-sm md:text-base font-medium  '>
        {text[currentIndex]}
      </span></div>
    </div>
  );
};

export default TopMovingText;