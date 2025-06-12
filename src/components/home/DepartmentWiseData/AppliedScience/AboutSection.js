import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaRocket, FaQuoteLeft, FaAtom } from 'react-icons/fa';
import { GiMolecule, GiAtomicSlashes } from 'react-icons/gi';
import { TbMathFunction } from 'react-icons/tb';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingIconVariants = {
    animate: (i) => ({
      y: ['0%', '5%', '0%'],
      rotate: [0, i % 2 === 0 ? 5 : -5, 0],
      transition: {
        duration: 3 + i,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    }),
  };

  return (
    <section
      className="py-16 relative bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden"
      id="about"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-indigo-600"></div>
        <div className="absolute -left-20 top-1/3 w-64 h-64 rounded-full bg-cyan-500"></div>
        <div className="absolute right-20 bottom-10 w-72 h-72 rounded-full bg-teal-500"></div>
      </div>

      {/* Subtle floating icons */}
      <motion.div
        className="absolute top-10 left-10 text-4xl text-indigo-900/10"
        variants={floatingIconVariants}
        animate="animate"
        custom={1}
      >
        <GiMolecule />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-3xl text-cyan-900/10"
        variants={floatingIconVariants}
        animate="animate"
        custom={2}
      >
        <FaAtom />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-5xl text-teal-900/10"
        variants={floatingIconVariants}
        animate="animate"
        custom={3}
      >
        <TbMathFunction />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-40 text-4xl text-indigo-900/10"
        variants={floatingIconVariants}
        animate="animate"
        custom={2.5}
      >
        <GiAtomicSlashes />
      </motion.div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div className="flex flex-col items-center mb-16" variants={itemVariants}>
          <span className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-2">
            Our Department
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
              Applied Sciences
            </span>
          </h2>
          <div className="mt-3 w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded"></div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto backdrop-blur-sm bg-white/80 rounded-2xl shadow-xl p-8 mb-14 border-t border-l border-white/50 border-r border-b border-white/30 relative"
          variants={itemVariants}
        >
          <div className="absolute -top-5 -left-5 text-indigo-200 text-4xl">
            <FaQuoteLeft />
          </div>
          <p className="text-slate-700 leading-relaxed text-lg">
            The Department of Applied Sciences and Humanities of the Institute of Engineering &
            Technology caters to the need of the first year students mainly. The aim of the
            Department is to enable the students to apply the basic knowledge of science and
            humanities. The department includes the various fundamental streams of engineering i.e.
            Physics, Chemistry, Mathematics, English & Humanities.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4 text-lg">
            The department works to inculcate the spirit of creativity, innovation and
            entrepreneurship; it also tries to develop a learning community of the students where
            they can learn from each other, work with each other and respect each other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div className="relative overflow-hidden group" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl transform -skew-y-3 group-hover:-skew-y-2 transition-transform duration-300 -z-10"></div>
            <div className="bg-white rounded-2xl p-8 shadow-xl transform group-hover:translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 bg-gradient-to-br from-indigo-600 to-purple-700 p-4 rounded-xl shadow-lg text-white">
                  <FaBullseye size={28} />
                </div>
                <h3 className="ml-5 text-2xl font-bold text-slate-800">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To build foundation for excellence and development of the Institution by igniting
                and nurturing enthusiasm, interests and passion in the study of applied sciences as
                a part of curriculum.
              </p>
            </div>
          </motion.div>

          <motion.div className="relative overflow-hidden group" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-teal-700 rounded-2xl transform -skew-y-3 group-hover:-skew-y-2 transition-transform duration-300 -z-10"></div>
            <div className="bg-white rounded-2xl p-8 shadow-xl transform group-hover:translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 bg-gradient-to-br from-cyan-600 to-teal-700 p-4 rounded-xl shadow-lg text-white">
                  <FaRocket size={28} />
                </div>
                <h3 className="ml-5 text-2xl font-bold text-slate-800">Our Mission</h3>
              </div>
              <ul className="text-slate-600 space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center text-white text-xs mt-1">
                    •
                  </span>
                  <span className="ml-3">
                    To awaken the young minds and discover their talents both in theory and
                    practical through dedication to teaching, commitment to students.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center text-white text-xs mt-1">
                    •
                  </span>
                  <span className="ml-3">
                    To support the developmental activities of the institute and make the department
                    vibrant.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center text-white text-xs mt-1">
                    •
                  </span>
                  <span className="ml-3">
                    To make vital contributions in areas of emphasis such as faculty, labs, library
                    and demonstrate a high level of competence in the study of applied sciences.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center text-white text-xs mt-1">
                    •
                  </span>
                  <span className="ml-3">
                    To evolve strategies in the department for continuous improvement.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
