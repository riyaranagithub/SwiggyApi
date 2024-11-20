import React from 'react';
import Slider from 'react-slick'; // Import Slick
import 'slick-carousel/slick/slick.css'; // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme CSS

function TopRest({ TopCards }) {

  // Custom left and right arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      style={{ marginTop: '-30px' }} // Adjust this value as needed for better alignment
    >
      &#8249; {/* Left Arrow */}
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
      style={{ marginTop: '-30px' }} // Adjust this value as needed for better alignment
    >
      &#8250; {/* Right Arrow */}
    </button>
  );

  // Slick Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Default: 3 slides visible
    slidesToScroll: 3, // Scroll 1 slide at a time
    arrows: true, // Enable left and right arrows
    prevArrow: <CustomPrevArrow />, // Custom left arrow
    nextArrow: <CustomNextArrow />, // Custom right arrow
    responsive: [
      {
        breakpoint: 1024, // Medium screens like tablets
        settings: {
          slidesToShow: 4, // Show 2 slides at a time
          slidesToScroll: 4, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 768, // Small screens like mobile
        settings: {
          slidesToShow: 2, // Show 1 slide at a time
          slidesToScroll: 2, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="relative w-full md:w-4/5 h-64 overflow-hidden mx-auto mb-5">
      <Slider {...settings}>
        {TopCards.map((card) => (
          <div
            key={card.info.id}
            className="relative mr-10 flex-shrink-0 mx-2" // Added margin for spacing between cards
          >
            {/* Image with shadow */}
            <div className="relative rounded-t-lg overflow-hidden ml-4">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_273,h_183/${card.info.cloudinaryImageId}`}
                alt={card.accessibility?.altText || "Image"}
                className="w-[273px] h-[183px] object-cover rounded-t-lg"
              />

              {/* Bottom Overlay for Header & Subheader */}
              <div className="absolute bottom-0 left-0 w-[273px] bg-gradient-to-t from-black to-transparent p-2 rounded-b-lg">
                <h2 className="text-xs font-semibold text-white">
                  {card.info.aggregatedDiscountInfoV3?.header || "No Discount"}
                </h2>
              </div>
            </div>

            {/* Info Card at Bottom of Image with No Shadow */}
            <div
              className="bg-white rounded-b-lg shadow-md mt-2"
              style={{ width: '273px', height: '100px' }} // Match width of image
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
      </Slider>
    </div>
  );
}

export default TopRest;
