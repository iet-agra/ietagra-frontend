import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaBook, FaFan, FaBed, FaRunning } from 'react-icons/fa';
import { GiMolecule, GiAtomicSlashes } from 'react-icons/gi';
import { TbMathFunction } from 'react-icons/tb';

const FacilitiesSection = () => {
  const facilities = [
    {
      name: 'Smart Class Room',
      icon: <FaChalkboardTeacher size={32} />,
      description:
        'Modern classrooms equipped with interactive technology for enhanced learning experience.',
    },
    {
      name: 'Library',
      icon: <FaBook size={32} />,
      description:
        'Extensive collection of academic resources, reference materials and scientific journals.',
    },
    {
      name: 'AC Library Reading Hall',
      icon: <FaFan size={32} />,
      description: 'Comfortable air-conditioned reading space for focused study and research.',
    },
    {
      name: 'Sports and Cultural Club',
      icon: <FaRunning size={32} />,
      description:
        'Facilities for physical fitness and cultural activities to ensure holistic development.',
    },
    {
      name: 'Girls & Boys Hostels',
      icon: <FaBed size={32} />,
      description:
        'Well-maintained residential facilities providing a comfortable living environment.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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
      y: ['0%', i % 2 === 0 ? '-8%' : '8%', '0%'],
      x: ['0%', i % 3 === 0 ? '5%' : '-5%', '0%'],
      rotate: [0, i % 2 === 0 ? 10 : -10, 0],
      transition: {
        duration: 4 + i,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    }),
  };

  return (
    <section
      className="py-20 relative bg-gradient-to-b from-slate-100 to-indigo-50 overflow-hidden"
      id="facilities"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute -right-20 top-40 w-64 h-64 rounded-full bg-gradient-to-br from-cyan-300/10 to-indigo-300/10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-40 w-80 h-80 rounded-full bg-gradient-to-tr from-indigo-300/10 to-emerald-300/10 blur-3xl"></div>
      </div>

      {/* Floating science-related icons */}
      <motion.div
        className="absolute top-20 left-10 text-4xl text-indigo-500/10"
        variants={floatingIconVariants}
        animate="animate"
        custom={1.5}
      >
        <GiMolecule />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-5xl text-cyan-500/10"
        variants={floatingIconVariants}
        animate="animate"
        custom={2.2}
      >
        <GiAtomicSlashes />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-1/4 text-4xl text-teal-500/10"
        variants={floatingIconVariants}
        animate="animate"
        custom={1.8}
      >
        <TbMathFunction />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.span
            className="text-sm uppercase tracking-wider text-indigo-600 font-semibold mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What We Offer
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-3 text-slate-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
              Facilities
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          ></motion.div>

          <motion.p
            className="mt-6 text-center text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            The Department of Applied Sciences is equipped with state-of-the-art facilities to
            ensure students receive the best educational experience and resources.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Top accent bar with gradient */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500"></div>

              <div className="p-8">
                <div className="mb-5 inline-flex p-3 rounded-lg bg-gradient-to-br from-indigo-100 to-cyan-100">
                  <div className="w-12 h-12 flex items-center justify-center text-indigo-600 group-hover:text-cyan-600 transition-colors duration-300">
                    {facility.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {facility.name}
                </h3>

                <p className="text-slate-600">{facility.description}</p>
              </div>

              {/* Bottom decorative element */}
              <div className="absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r from-cyan-300/50 to-indigo-300/50"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
