import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaCalendarAlt, FaUsers, FaBriefcase, FaUniversity } from 'react-icons/fa';

const AboutDepartment = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">About The Department</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Department Overview</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">
                The Department of Electrical Engineering was established in 2018 under the Institute
                of Engineering & Technology, Dr. Bhimrao Ambedkar University, Agra. We offer a
                comprehensive B.E. program in Electrical Engineering with an integrated curriculum
                of core electrical engineering subjects complemented by software engineering
                disciplines.
              </p>

              <p className="text-gray-700 mb-5 leading-relaxed">
                Our alumni have been successfully placed in multinational corporations like Toshiba,
                Wipro, and Mitsubishi Electric. Many of our GATE qualified students have been
                admitted to prestigious national institutions.
              </p>

              <p className="text-gray-700 mb-5 leading-relaxed">
                The department organized a National Conference in March 2021, showcasing our
                commitment to academic excellence and research.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-xl transition-transform hover:scale-105 duration-300">
                <FaCalendarAlt className="text-3xl text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Established</h4>
                <p className="text-blue-800 font-medium">2018</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl transition-transform hover:scale-105 duration-300">
                <FaUsers className="text-3xl text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Program</h4>
                <p className="text-blue-800 font-medium">B.E. in Electrical Engineering</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl transition-transform hover:scale-105 duration-300">
                <FaBriefcase className="text-3xl text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Internships</h4>
                <p className="text-blue-800 font-medium">Industry Partnerships</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl transition-transform hover:scale-105 duration-300">
                <FaUniversity className="text-3xl text-blue-600 mb-3" />
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Projects</h4>
                <p className="text-blue-800 font-medium">Minor & Major Projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const DepartmentStats = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const stats = [
    { number: 9, suffix: '+', title: 'Students Placed', subtitle: 'In Leading Companies' },
    { number: 5, suffix: '+', title: 'GATE Qualified', subtitle: 'Students' },
    { number: 6, suffix: '', title: 'Faculty Members', subtitle: 'Experienced Educators' },
    { number: 1, suffix: '', title: 'National Conference', subtitle: 'Organized' },
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white rounded-xl shadow-md p-6 text-center border border-blue-100"
            >
              <CountUp
                end={stat.number}
                suffix={stat.suffix}
                duration={2.5}
                className="text-4xl font-bold text-blue-700"
              />
              <p className="text-gray-800 font-semibold mt-2">{stat.title}</p>
              <p className="text-sm text-gray-600">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AboutDepartment, DepartmentStats };
