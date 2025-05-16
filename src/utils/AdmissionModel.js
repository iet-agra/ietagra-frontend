import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const AdmissionModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPoster, setCurrentPoster] = useState(0);

  // Array of admission poster images
  const posterImages = [
    '/images/admissionPoster.jpg', // Front side of brochure
    '/images/admissionPosterI.jpg', // Back side of brochure
  ];

  useEffect(() => {
    // Check if the modal should be shown based on expiration date
    const shouldShowModal = () => {
      // Get expiration timestamp from localStorage
      const expirationTimestamp = localStorage.getItem('admissionModalExpiration');

      // If no expiration is set, set one and show modal
      if (!expirationTimestamp) {
        // Set expiration to 2 months from now
        const expirationDate = new Date();
        expirationDate.setMonth(expirationDate.getMonth() + 2);
        localStorage.setItem('admissionModalExpiration', expirationDate.getTime());
        return true;
      }

      // If current date is past expiration date, don't show modal
      const currentDate = new Date().getTime();
      return currentDate < parseInt(expirationTimestamp);
    };

    // Set visibility based on expiration check
    setIsVisible(shouldShowModal());
  }, []);

  const closeModal = () => {
    setIsVisible(false);
  };

  const nextPoster = (e) => {
    e.stopPropagation();
    setCurrentPoster((prev) => (prev + 1) % posterImages.length);
  };

  const prevPoster = (e) => {
    e.stopPropagation();
    setCurrentPoster((prev) => (prev === 0 ? posterImages.length - 1 : prev - 1));
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: {
      y: -50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: 0.1,
      },
    },
    exit: {
      y: 50,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-4xl w-11/12 mx-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              className="absolute -top-4 -right-4 bg-red-600 text-white p-2 rounded-full z-50 shadow-lg"
              onClick={closeModal}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes size={18} />
            </motion.button>

            {/* Poster display */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Image */}
              <motion.div
                className="relative aspect-[1/1.4] sm:aspect-[4/3] md:aspect-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={posterImages[currentPoster]}
                  alt={`IET Agra Admissions 2025-26 Poster ${currentPoster + 1}`}
                  className="w-full h-full object-contain bg-transparent md:bg-white rounded-lg"
                />
              </motion.div>

              {/* Navigation buttons */}
              {posterImages.length > 1 && (
                <>
                  <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full"
                    onClick={prevPoster}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-60 text-white p-3 rounded-full"
                    onClick={nextPoster}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaChevronRight />
                  </button>

                  {/* Pagination indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {posterImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          currentPoster === index ? 'bg-white' : 'bg-gray-400'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPoster(index);
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Call to action button */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="https://dbrauadm.samarth.edu.in/"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 rounded-lg inline-block shadow-lg"
                target="_blank"
                rel="noopener noreferrer" // Security best practice
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0px 8px 15px rgba(0,0,0,0.2)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Apply Now
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionModal;
