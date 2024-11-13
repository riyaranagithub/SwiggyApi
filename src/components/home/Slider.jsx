// src/components/Slider.jsx

import React, { useState } from 'react';
function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
   
    <div className="relative w-4/5 h-64 overflow-hidden ">
  
      <div
        className="absolute inset-0 transition-transform duration-500 flex pl-10 pr-10"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
      
        {images.map((image) => (
          <img
            key={image.id}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${image.imageId}`}
            alt={image.accessibility}
            className=" object-cover mr-8"
          />
        ))}
        
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8249; {/* Left Arrow */}
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8250; {/* Right Arrow */}
      </button>
    
    </div>
    </>
  );
}

export default Slider;
