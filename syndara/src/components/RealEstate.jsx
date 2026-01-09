import React from 'react';

const RealEstate = () => {
  return (
    <div className='relative top-0 h-[50vh] md:h-[70vh] w-full overflow-hidden'>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${"/bluey.png"})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5] via-gray-900/60 to-transparent"></div>
      <div className='font-serif text-white pt-32 md:pt-50 text-3xl md:text-5xl lg:text-7xl drop-shadow-lg justify-center items-center flex text-center px-6'>
        <h1>Real Estate. Real Results.</h1>
      </div>
    </div>
  );
};

export default RealEstate;