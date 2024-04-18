import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
  const sliderRef = useRef(null);

  const handlePreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      {/* Featured Products section in the middle */}
      <div className="text-center mt-12 mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        {/* Add any other content for the Featured Products section here */}
      </div>
      {/* Slider container */}
      <div className="relative">
        {/* Slider */}
        <div className="border rounded-lg shadow-lg relative overflow-hidden mx-auto max-w-3xl mt-12 mb-12">
          <Slider ref={sliderRef} autoplay={true} autoplaySpeed={1500} className="border">
            <div>
              <img src="src\assets\s1.jpg" alt="Slider Image 1" />
            </div>
            <div>
              <img src="src\assets\s1.jpg" alt="Slider Image 2" />
            </div>
            <div>
              <img src="src\assets\s1.jpg" alt="Slider Image 3" />
            </div>
          </Slider>
        </div>
        {/* Previous arrow */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md" onClick={handlePreviousSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </button>
        {/* Next arrow */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md" onClick={handleNextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)' }}>
            <path d="M14 6l1.41 1.41L10.83 12l4.58 4.59L14 18l-6-6 6-6z" />
          </svg>
        </button>
      </div>
      {/* Add a border beneath the slider */}
      <div className="my-4 w-full md:w-2/3 mx-auto border-b-2 border-gray-300 shadow-lg"></div>
    </div>
  );
}

export default Sliders;
