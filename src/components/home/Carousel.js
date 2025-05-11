import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const placementImages = [
  {
    id: 1,
    src: '/images/tnp01.jpg',
    title: 'Traning and Placememts at a Glance',
    description: 'Our students secured offers from top companies across industries',
  },
  {
    id: 2,
    src: '/images/tnp02.jpg',
    title: 'Events and Workshops',
    description: 'Engaging workshops and events to enhance skills and knowledge',
  },
];

const PlacementGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === placementImages.length - 1 ? 0 : prevIndex + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? placementImages.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Placement Records
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-10 max-w-3xl mx-auto px-2">
          Explore the impressive placement achievements of our students and the leading companies
          that recruit from our Campus.
        </p>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl mx-auto w-full max-w-5xl mb-8">
          {/* Main Carousel */}
          <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] overflow-hidden">
            {placementImages.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent p-3 sm:p-4 md:p-6 lg:p-8 text-white">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">
                    {image.title}
                  </h3>
                  <p className="text-xs xs:text-sm md:text-base font-medium opacity-90 line-clamp-2 sm:line-clamp-none">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden xs:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 text-gray-800 p-1 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 items-center justify-center"
            aria-label="Previous slide"
          >
            {/* Arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden xs:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 text-gray-800 p-1 sm:p-2 rounded-full backdrop-blur-sm transition-all duration-300 items-center justify-center"
            aria-label="Next slide"
          >
            {/* Arrow SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Swipe Indicator - Only on small screens */}
          <div className="xs:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/80 text-xs z-20 flex items-center">
            {/* Swipe indicators */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Swipe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>

          {/* Indicator Dots */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 md:space-x-3 z-20">
            {placementImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* MOVED: Enhanced "View More" Button - Now below the carousel */}
        <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-10">
          <motion.a
            href="/tandpcell"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 p-0.5 font-bold shadow-lg transition duration-300 hover:shadow-xl"
          >
            <span className="relative flex items-center gap-1 rounded-full bg-gray-900 px-5 py-2.5 transition-all duration-500 ease-in-out group-hover:bg-opacity-0">
              <span className="relative z-10 text-sm sm:text-base text-white group-hover:text-white">
                View Placements
              </span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>

              {/* Shine Effect */}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full animate-shimmer" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PlacementGallery;
