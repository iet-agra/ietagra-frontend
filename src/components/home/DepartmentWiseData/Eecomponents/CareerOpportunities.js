import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaBolt,
  FaIndustry,
  FaCar,
  FaNetworkWired,
  FaCogs,
} from 'react-icons/fa';

const CareerOpportunities = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const governmentSectors = [
    { icon: <FaIndustry className="text-2xl text-blue-600" />, name: 'Indian Railways' },
    {
      icon: <FaBolt className="text-2xl text-blue-600" />,
      name: 'NTPC (National Thermal Power Corporation)',
    },
    {
      icon: <FaBuilding className="text-2xl text-blue-600" />,
      name: 'BHEL (Bharat Heavy Electricals Limited)',
    },
    {
      icon: <FaNetworkWired className="text-2xl text-blue-600" />,
      name: 'PGCIL (Power Grid Corporation of India Limited)',
    },
  ];

  const privateSectors = [
    { icon: <FaCar className="text-2xl text-blue-600" />, name: 'Electric Vehicle Industry' },
    { icon: <FaCogs className="text-2xl text-blue-600" />, name: 'PLC SCADA Systems' },
    { icon: <FaIndustry className="text-2xl text-blue-600" />, name: 'Industrial Automation' },
    { icon: <FaBolt className="text-2xl text-blue-600" />, name: 'EV Charging Infrastructure' },
  ];

  return (
    <section id="careers" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Career Opportunities</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Electrical Engineering graduates have diverse career opportunities across government and
            private sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-md border border-blue-100"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaBriefcase className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Government & Public Sector</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {governmentSectors.map((sector, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-blue-100"
                >
                  <div className="p-2 bg-blue-50 rounded-full mr-3 flex-shrink-0">
                    {sector.icon}
                  </div>
                  <span className="text-gray-800">{sector.name}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600">
              Government sectors offer stable careers with benefits and opportunities to contribute
              to national infrastructure development.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 md:p-8 shadow-md text-white"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white/20 rounded-full mr-4">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold">Private Sector & MNCs</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {privateSectors.map((sector, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                  <div className="p-2 bg-white/20 rounded-full mr-3 flex-shrink-0">
                    {React.cloneElement(sector.icon, { className: 'text-2xl text-white' })}
                  </div>
                  <span>{sector.name}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/80">
              The private sector offers competitive salaries, innovation-driven environments, and
              opportunities to work with cutting-edge technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
