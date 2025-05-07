import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaLightbulb, FaMicrochip } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <FaBolt className="text-4xl md:text-5xl text-yellow-300" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Department of Electrical Engineering
          </h1>

          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>

          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Institute of Engineering & Technology, Swami Vivekanand Campus,
            <br />
            Dr. Bhimrao Ambedkar University, Agra
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explore Department
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#faculty"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-lg border border-blue-600"
            >
              Meet Our Faculty
            </motion.a>
          </div>

          <div className="mt-12 flex justify-center gap-8 md:gap-16">
            <div className="text-center">
              <FaLightbulb className="text-2xl md:text-3xl text-yellow-300 mx-auto mb-2" />
              <p className="text-sm md:text-base font-medium">Established 2018</p>
            </div>

            <div className="text-center">
              <FaMicrochip className="text-2xl md:text-3xl text-yellow-300 mx-auto mb-2" />
              <p className="text-sm md:text-base font-medium">B.E. Program</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
