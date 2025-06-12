import React from 'react';
import { motion } from 'framer-motion';
import { FaAtom, FaFlask, FaDna, FaMicroscope, FaCalculator } from 'react-icons/fa';
import { GiMolecule, GiAtomicSlashes } from 'react-icons/gi';
import { TbMathFunction, TbMathSymbols } from 'react-icons/tb';

const HeroSection = () => {
  const floatingIcons = [
    { icon: <FaAtom />, left: '10%', top: '30%', size: '5xl', delay: 0 },
    { icon: <GiMolecule />, left: '85%', top: '20%', size: '6xl', delay: 1 },
    { icon: <FaFlask />, left: '75%', top: '65%', size: '4xl', delay: 2 },
    { icon: <TbMathFunction />, left: '15%', top: '70%', size: '5xl', delay: 0.5 },
    { icon: <FaDna />, left: '25%', top: '15%', size: '5xl', delay: 1.5 },
    { icon: <FaMicroscope />, left: '5%', top: '50%', size: '5xl', delay: 3 },
    { icon: <FaCalculator />, left: '50%', top: '85%', size: '4xl', delay: 1.7 },
    { icon: <GiAtomicSlashes />, left: '80%', top: '45%', size: '6xl', delay: 0.8 },
    { icon: <TbMathSymbols />, left: '35%', top: '75%', size: '5xl', delay: 2.2 },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30,10 L70,10' /%3E%3Cpath d='M10,30 L90,30' /%3E%3Cpath d='M20,50 L80,50' /%3E%3Cpath d='M10,70 L90,70' /%3E%3Cpath d='M30,90 L70,90' /%3E%3Cpath d='M10,10 L10,90' /%3E%3Cpath d='M30,20 L30,80' /%3E%3Cpath d='M50,10 L50,90' /%3E%3Cpath d='M70,20 L70,80' /%3E%3Cpath d='M90,10 L90,90' /%3E%3Ccircle cx='10' cy='30' r='2' fill='%23ffffff' /%3E%3Ccircle cx='10' cy='70' r='2' fill='%23ffffff' /%3E%3Ccircle cx='30' cy='10' r='2' fill='%23ffffff' /%3E%3Ccircle cx='30' cy='50' r='2' fill='%23ffffff' /%3E%3Ccircle cx='30' cy='90' r='2' fill='%23ffffff' /%3E%3Ccircle cx='50' cy='30' r='2' fill='%23ffffff' /%3E%3Ccircle cx='50' cy='70' r='2' fill='%23ffffff' /%3E%3Ccircle cx='70' cy='10' r='2' fill='%23ffffff' /%3E%3Ccircle cx='70' cy='50' r='2' fill='%23ffffff' /%3E%3Ccircle cx='70' cy='90' r='2' fill='%23ffffff' /%3E%3Ccircle cx='90' cy='30' r='2' fill='%23ffffff' /%3E%3Ccircle cx='90' cy='70' r='2' fill='%23ffffff' /%3E%3Cpath d='M50,30 L50,40 M46,40 L54,40 M46,44 L54,44 M50,44 L50,70' /%3E%3Cpath d='M30,50 L40,50 M40,46 L40,54 M44,46 L44,54 M44,50 L70,50' /%3E%3Crect x='27' y='27' width='6' height='6' stroke-width='1' /%3E%3Crect x='67' y='67' width='6' height='6' stroke-width='1' /%3E%3C/g%3E%3C/svg%3E")`, // unchanged
          opacity: 0.05,
          backgroundSize: '100px 100px',
        }}
      ></div>

      {/* Gradient Background */}
      <motion.div
        className="relative bg-gradient-to-br from-blue-900 via-sky-900 to-indigo-900 py-24 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute text-${item.size}} text-white/30 drop-shadow-sm`}
            style={{ left: item.left, top: item.top }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              x: [0, 10, 0],
              y: [0, -10, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 4,
              ease: 'easeInOut',
              delay: item.delay,
            }}
          >
            {item.icon}
          </motion.div>
        ))}

        {/* Content */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Left: Text */}
              <div className="lg:w-2/3 mb-10 lg:mb-0 lg:pr-8">
                <motion.div
                  className="mb-4"
                  initial={{ width: 0 }}
                  animate={{ width: '80px' }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="h-1 w-20 bg-cyan-400"></div>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Department of{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-300">
                    Applied Sciences
                  </span>{' '}
                  & Humanities
                </motion.h1>

                <motion.p
                  className="text-blue-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Building foundations for excellence through innovative education in Physics,
                  Chemistry, Mathematics, and Humanities.
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4 items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="bg-white/20 backdrop-blur-lg px-4 py-3 rounded-lg border border-white/30 shadow-md hover:scale-105 transition-transform">
                    <div className="text-cyan-300 text-sm font-semibold">Core Disciplines</div>
                    <div className="text-white font-medium">Physics • Chemistry • Mathematics</div>
                  </div>

                  <div className="bg-white/20 backdrop-blur-lg px-4 py-3 rounded-lg border border-white/30 shadow-md hover:scale-105 transition-transform">
                    <div className="text-cyan-300 text-sm font-semibold">Established</div>
                    <div className="text-white font-medium">
                      Institute of Engineering & Technology
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right: Molecule */}
              <motion.div
                className="lg:w-1/3 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="relative w-64 h-64 mx-auto">
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-dashed border-cyan-400/30"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
                  />
                  <motion.div
                    className="absolute inset-8 rounded-full border-4 border-dashed border-emerald-400/30"
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                  />

                  {/* Central */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                    >
                      <GiMolecule className="text-white text-5xl" />
                    </motion.div>
                  </div>

                  {/* Inner Orbit - 1 icon, clockwise */}
                  {/* Inner Orbit - FaAtom, clockwise, small radius */}
                  <motion.div
                    className="absolute left-1/2 top-1/2"
                    style={{ transformOrigin: 'center' }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                  >
                    <div className="transform translate-x-20 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
                      <FaAtom className="text-white text-lg" />
                    </div>
                  </motion.div>

                  {/* Outer Orbit - TbMathFunction, anticlockwise */}
                  <motion.div
                    className="absolute left-1/2 top-1/2"
                    style={{ transformOrigin: 'center' }}
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
                  >
                    <div className="transform -translate-y-28 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center shadow-md">
                      <TbMathFunction className="text-white text-2xl" />
                    </div>
                  </motion.div>

                  {/* Outer Orbit - FaFlask, anticlockwise */}
                  <motion.div
                    className="absolute left-1/2 top-1/2"
                    style={{ transformOrigin: 'center' }}
                    animate={{ rotate: -360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                  >
                    <div className="transform translate-x-24 translate-y-20 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-md">
                      <FaFlask className="text-white text-2xl" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#0f172a"
              fillOpacity="1"
              d="M0,64L60,64C120,64,240,64,360,58.7C480,53,600,43,720,48C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
