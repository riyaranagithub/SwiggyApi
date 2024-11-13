import React, { useState } from 'react';

function TopRest({ TopCards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TopCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TopCards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-4/5 h-64 overflow-hidden mx-auto mb-5">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {TopCards.map((card) => (
          <div
            key={card.info.id}
            className="relative flex-shrink-0 mr-8"
            style={{ width: '273px' }}
          >
            {/* Image */}
            <div className="relative shadow-lg rounded-t-lg">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_273,h_183/${card.info.cloudinaryImageId}`}
                alt={card.accessibility?.altText || "Image"}
                className="w-[273px] h-[183px] object-cover rounded-t-lg"
              />

              {/* Bottom Overlay for Header & Subheader */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
                <h2 className="text-xs font-semibold text-white">{card.info.aggregatedDiscountInfoV3?.header||""+" "+ card.info.aggregatedDiscountInfoV3?.subHeader || "No Discount"}</h2>
                
              </div>
            </div>

            {/* Info Card at Bottom of Image with Shadow */}
            <div
              className="bg-white rounded-b-lg shadow-md mt-2"
              style={{ width: '261px', height: '100px' }}
            >
              <h3 className="text-sm font-bold">{card.info.name}</h3>
              <div className="flex items-center text-gray-600 text-xs space-x-1">
                <span className="text-green-600 font-semibold">{card.info.avgRating || "N/A"} ★</span>
                <span>•</span>
                <span>{card.info.sla.slaString || "N/A"}</span>
              </div>
              <p className="text-xs text-gray-500">{card.info.cuisines?.join(', ') || "N/A"}</p>
              <p className="text-xs text-gray-500">{card.info.areaName || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8249;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
}

export default TopRest;
