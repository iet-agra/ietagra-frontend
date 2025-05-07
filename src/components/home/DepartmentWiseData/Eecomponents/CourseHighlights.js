import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaFlask,
  FaIndustry,
  FaLaptopCode,
  FaHandshake,
  FaUsers,
  FaCertificate,
} from 'react-icons/fa';

const CourseHighlights = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const courseFeatures = [
    {
      icon: <FaGraduationCap className="text-3xl text-blue-600" />,
      title: 'CBCS System',
      description: 'Choice Based Credit System for flexibility',
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
      title: 'Experienced Faculty',
      description: 'Qualified professors with industry experience',
    },
    {
      icon: <FaFlask className="text-3xl text-blue-600" />,
      title: 'Modern Labs',
      description: 'State-of-the-art laboratory facilities',
    },
    {
      icon: <FaIndustry className="text-3xl text-blue-600" />,
      title: 'Industrial Internships',
      description: 'Real-world experience with industry partners',
    },
    {
      icon: <FaLaptopCode className="text-3xl text-blue-600" />,
      title: 'Project-based Learning',
      description: 'Hands-on project experience throughout the program',
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      title: 'Industry Events',
      description: 'Seminars, workshops and industry interactions',
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: 'Technical & Cultural Clubs',
      description: 'Opportunities for holistic development',
    },
    {
      icon: <FaCertificate className="text-3xl text-blue-600" />,
      title: 'Value-added Courses',
      description: 'Additional career-focused training',
    },
  ];

  const specializedCourses = [
    'Electric/Hybrid Vehicles',
    'Robotics',
    'Machine Learning',
    'Artificial Intelligence',
    'Arduino Programming',
    'Internet of Things (IoT)',
    'Mobile App Development',
    'Solar Energy Systems',
  ];

  return (
    <section id="courses" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">B.E. in Electrical Engineering</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our comprehensive Bachelor of Engineering program in Electrical Engineering offers a
            blend of theoretical knowledge, practical skills, and industry exposure to prepare
            students for successful careers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {courseFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-700 text-center text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-blue-50 rounded-xl p-6 md:p-8 shadow-md border border-blue-100"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Value-added & Job-oriented Courses
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {specializedCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center shadow-sm border border-blue-100"
              >
                <span className="text-blue-700 font-medium">{course}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseHighlights;
