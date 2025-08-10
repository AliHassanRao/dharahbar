import React from 'react';

const MarqueeTicker = () => {
  const text = [
    'Emergency Security Contact: 0311-7770587',
    'General Complain Contact : 0311-7770545',
    'General Complain Contact : 0331-4913340',
    'Office Hours: 9:00 AM – 5:00 PM',
    'DHA Rahbar Lahore Residents: Power shutdown scheduled tonight from 10 PM to 2 AM.',
    'Water tank cleaning operation will take place on 15th August, please prepare accordingly.',
    'For any emergencies during these operations, contact emergency numbers immediately.'
  ];

  // Combine with non-breaking spaces for proper spacing
  const combinedText = text.join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');

  return (
    <div className='bg-[#0d2649] py-2 overflow-hidden whitespace-nowrap'>
      <div
        className='text-white md:text-[16px] text-[14px] font-medium inline-block animate-marquee'
        style={{ paddingLeft: '100%' }}
      >
        {combinedText}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MarqueeTicker;
