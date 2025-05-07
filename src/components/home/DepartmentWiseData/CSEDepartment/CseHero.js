import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaNetworkWired,
  FaMicrochip,
  FaBrain,
  FaDatabase,
} from 'react-icons/fa';

const CseHero = () => {
  // Animation variants
  const floatingIconVariants = {
    animate: (i) => ({
      y: [0, -10, 0],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'loop',
        delay: i * 0.2,
      },
    }),
  };

  const techIcons = [
    { icon: <FaCode className="text-white/80" />, top: '15%', left: '10%', size: 'text-2xl' },
    {
      icon: <FaLaptopCode className="text-white/80" />,
      top: '25%',
      right: '15%',
      size: 'text-3xl',
    },
    { icon: <FaServer className="text-white/80" />, top: '60%', left: '7%', size: 'text-2xl' },
    {
      icon: <FaNetworkWired className="text-white/80" />,
      bottom: '20%',
      right: '10%',
      size: 'text-2xl',
    },
    { icon: <FaMicrochip className="text-white/80" />, top: '40%', left: '20%', size: 'text-xl' },
    { icon: <FaBrain className="text-white/80" />, top: '30%', right: '25%', size: 'text-xl' },
    { icon: <FaDatabase className="text-white/80" />, bottom: '30%', left: '25%', size: 'text-xl' },
  ];

  // Binary code animation for tech look
  const binaryVariants = {
    visible: { opacity: 0.07, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0px 7px 25px rgba(0, 0, 0, 0.2)',
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 via-blue-700 to-indigo-800 text-white">
      {/* Binary pattern overlay */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={binaryVariants}
        className="absolute inset-0 overflow-hidden z-0"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/binary.png')] opacity-40"></div>
      </motion.div>

      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
      </div>

      {/* Floating tech icons */}
      {techIcons.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatingIconVariants}
          animate="animate"
          className={`absolute ${item.size} ${item.top ? `top-[${item.top}]` : ''} 
                      ${item.bottom ? `bottom-[${item.bottom}]` : ''}
                      ${item.left ? `left-[${item.left}]` : ''} 
                      ${item.right ? `right-[${item.right}]` : ''} opacity-30`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Glowing orbs for modern tech feel */}
      <div className="hidden lg:block">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-28 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 360 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
            >
              <FaLaptopCode className="text-4xl md:text-5xl text-white" />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Computer Science & Engineering
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-blue-400 to-indigo-300 mx-auto mb-6"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto px-2"
          >
            Institute of Engineering and Technology, Swami Vivekanand Campus, Dr. Bhimrao Ambedkar
            University, Agra
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <motion.a
              href="#about"
              variants={buttonVariants}
              whileHover="hover"
              className="px-6 py-3 bg-white text-blue-800 rounded-lg font-medium transition-all duration-300 shadow-lg text-base inline-flex items-center justify-center space-x-2"
            >
              <span>Explore Department</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </motion.a>
            <motion.a
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              className="px-6 py-3 bg-transparent border-2 border-white/70 backdrop-blur-sm text-white rounded-lg font-medium transition-all duration-300 shadow-lg text-base inline-flex items-center justify-center space-x-2 mt-3 sm:mt-0 hover:bg-white/10"
            >
              <span>Contact Us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </motion.a>
          </div>

          {/* Stats indicators - Quick CS department highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">12+</h3>
              <p className="text-blue-100 text-sm">Modern Labs</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">95%</h3>
              <p className="text-blue-100 text-sm">Placement Rate</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white">8+</h3>
              <p className="text-blue-100 text-sm">Research Areas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern wave separator with dual waves for depth */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="rgba(255,255,255,0.3)"
            d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,90.7C672,96,768,160,864,186.7C960,213,1056,203,1152,181.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto absolute bottom-0"
        >
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

export default CseHero;
