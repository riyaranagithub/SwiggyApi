import React from 'react';
import Slider from 'react-slick'; // Import Slick
import 'slick-carousel/slick/slick.css'; // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme CSS

function ImageSlider({ images }) {
  // Custom left and right arrow components
  const CustomPrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
    >
      &#8249; {/* Left Arrow */}
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
    >
      &#8250; {/* Right Arrow */}
    </button>
  );

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Default: 1 slide visible
    slidesToScroll: 4, // Scroll 1 slide at a time
    arrows: true, // Enable left and right arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay speed in ms
    prevArrow: <CustomPrevArrow />, // Custom left arrow
    nextArrow: <CustomNextArrow />, // Custom right arrow
    responsive: [
      {
        breakpoint: 1024, // Medium screens like tablets
        settings: {
          slidesToShow: 4, // Show 1 slide at a time
          slidesToScroll: 4, // Scroll 1 slide at a time
        },
      },
      {
        breakpoint: 768, // Small screens like mobile
        settings: {
          slidesToShow: 3, // Show 1 slide at a time on small screens
          slidesToScroll: 3, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="relative w-full md:w-4/5 h-64 overflow-hidden mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${image.imageId}`}
              alt={image.accessibility}
              className="object-cover w-full h-full" // Ensures the image fills its container, without resizing on smaller screens
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
