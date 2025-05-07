import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaLaptop,
  FaIndustry,
  FaBook,
  FaAward,
} from 'react-icons/fa';
import { fadeIn } from '../../../../utils/animations';

const CivilAcademics = () => {
  const [activeTab, setActiveTab] = useState('course');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Publication data
  const publications = [
    {
      title: 'Energy Audit and Efficiency Improvement',
      authors: 'Er. Chandan Kumar',
      journal: 'Solid State Technology',
      year: '2023',
    },
    {
      title: 'Vapour Adsorption Refrigeration Systems',
      authors: 'Er. Pratap Singh Birla',
      journal: 'IJRASET',
      year: '2022',
    },
    {
      title: 'Sustainable Construction Materials Research',
      authors: 'Er. Anil Singh',
      journal: 'IJSER',
      year: '2023',
    },
    {
      title: 'Soil Remediation Techniques',
      authors: 'Er. Shobhit Mohan Sharma',
      journal: 'IJRASET',
      year: '2022',
    },
    {
      title: 'Heat Pump Optimization Methods',
      authors: 'Er. Diksha Jain',
      journal: 'IJSER',
      year: '2023',
    },
  ];

  // Book chapters data
  const bookChapters = [
    {
      title: 'Mensuration in Ancient India',
      author: 'Er. Chandan Kumar',
      publication: 'Engineering Heritage of India',
    },
    {
      title: 'Town Planning & Harappan Architecture',
      author: 'Er. Shobhit Mohan Sharma',
      publication: 'Engineering Heritage of India',
    },
    {
      title: 'Sustainable Development in Ancient India',
      author: 'Er. Anil Singh',
      publication: 'Engineering Heritage of India',
    },
    {
      title: 'Mining & Metallurgy in Ancient India',
      author: 'Er. Pratap Singh Birla',
      publication: 'Engineering Heritage of India',
    },
    {
      title: 'Comparative Study of Ancient and Modern Structures',
      author: 'Er. Diksha Jain',
      publication: 'Engineering Heritage of India',
    },
  ];

  // Industrial visits data
  const industrialVisits = [
    {
      place: 'Radhey Testing & Consultant Pvt. Ltd., Tundla',
      description:
        'Students visited the testing facilities to understand practical implementation of materials testing.',
      date: 'November 2023',
    },
    {
      place: '78 MLD Sewage Treatment Plant, Dhandupura, Agra',
      description:
        'Students learned about wastewater treatment processes and environmental engineering applications.',
      date: 'February 2024',
    },
  ];

  // Best practices data
  const bestPractices = [
    {
      title: 'Smart Learning',
      description: 'Implementation of NPTEL, MOOC courses and E-learning with smart boards',
      icon: <FaLaptop className="text-teal-600 text-2xl" />,
    },
    {
      title: 'Personalized Attention',
      description: 'Remedial classes for slow learners and advanced topics for fast learners',
      icon: <FaChalkboardTeacher className="text-teal-600 text-2xl" />,
    },
    {
      title: 'Feedback Mechanism',
      description: 'Regular student and alumni feedback systems for continuous improvement',
      icon: <FaGraduationCap className="text-teal-600 text-2xl" />,
    },
    {
      title: 'Virtual Labs',
      description: 'Access to virtual labs for enhanced learning experience',
      icon: <FaLaptop className="text-teal-600 text-2xl" />,
    },
    {
      title: 'Industry Focus',
      description: 'Emphasis on GATE training and real-life problem-solving approaches',
      icon: <FaIndustry className="text-teal-600 text-2xl" />,
    },
  ];

  return (
    <section id="civil-academics" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-14"
        >
          <span className="bg-teal-50 text-teal-700 py-1 px-3 rounded-full text-sm font-medium mb-3 inline-block">
            Academic Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Education & Research
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-5 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our department offers comprehensive education in Civil Engineering with focus on both
            theoretical knowledge and practical applications, supported by active research
            initiatives.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="inline-flex bg-white rounded-xl shadow-md p-1.5">
            {['course', 'research', 'visits', 'practices'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white font-medium shadow-lg'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="flex items-center justify-center">
                  {tab === 'course' && (
                    <>
                      <FaGraduationCap className="mr-2" /> Course Structure
                    </>
                  )}
                  {tab === 'research' && (
                    <>
                      <FaBook className="mr-2" /> Research & Publications
                    </>
                  )}
                  {tab === 'visits' && (
                    <>
                      <FaIndustry className="mr-2" /> Industrial Visits
                    </>
                  )}
                  {tab === 'practices' && (
                    <>
                      <FaAward className="mr-2" /> Best Practices
                    </>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Course Structure Tab */}
        {activeTab === 'course' && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-10"
          >
            <div className="bg-gradient-to-r from-green-500 to-teal-600 py-4 px-6">
              <h3 className="text-xl font-bold text-white">
                Bachelor of Engineering in Civil Engineering
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-teal-500 pl-3">
                    Teaching-Learning Process
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">
                        After every unit: Summary + internal/external assessments
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">
                        Internal: 3 Periodical Tests (Best 2), Assignments, Tutorials (40 Marks)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">External: University Exams (60 Marks)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">
                        Smart board teaching for enhanced learning experience
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-teal-500 pl-3">
                    Additional Learning Activities
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">
                        Weekly seminars by students to improve presentation skills
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">
                        2-hour tutorials for difficult topics and problem-solving
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">
                        Regular assignments and project work for practical experience
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700">
                        Self-learning resources through e-learning platforms
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Research & Publications Tab */}
        {activeTab === 'research' && (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                Research Publications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{pub.title}</h4>
                    <p className="text-teal-600 text-sm mb-1">{pub.authors}</p>
                    <p className="text-gray-500 text-sm">
                      <span className="font-medium">{pub.journal}</span>, {pub.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Book Chapters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {bookChapters.map((chapter, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{chapter.title}</h4>
                    <p className="text-teal-600 text-sm mb-1">{chapter.author}</p>
                    <p className="text-gray-500 text-sm">
                      <span className="font-medium">{chapter.publication}</span>
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-full mr-4">
                  <FaIndustry className="text-teal-600 text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Consultancy Initiatives</h3>
              </div>
              <p className="text-gray-700 mb-4">
                The Civil Engineering Department at IET Agra has signed an MoU with Radhey Training
                & Placement Institute on January 23, 2024 to provide consultancy services under
                university policy, enabling practical industry exposure for students and faculty.
              </p>
            </div>
          </motion.div>
        )}

        {/* Industrial Visits Tab */}
        {activeTab === 'visits' && (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industrialVisits.map((visit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 py-3 px-6">
                    <h3 className="text-lg font-bold text-white">{visit.place}</h3>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-col h-full">
                      <p className="text-gray-600 flex-grow mb-4">{visit.description}</p>
                      <div className="text-sm text-gray-500 mt-auto">
                        <span className="bg-teal-50 text-teal-700 py-1 px-2 rounded-full">
                          {visit.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                Benefits of Industrial Visits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-teal-50 rounded-lg p-4 text-center">
                  <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <FaIndustry className="text-teal-600 text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Practical Exposure</h4>
                  <p className="text-sm text-gray-600">
                    Gain hands-on experience with industrial processes
                  </p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 text-center">
                  <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <FaLaptop className="text-teal-600 text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Technology Awareness</h4>
                  <p className="text-sm text-gray-600">
                    Learn about latest technologies and equipment
                  </p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4 text-center">
                  <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 shadow-sm">
                    <FaGraduationCap className="text-teal-600 text-xl" />
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">Career Insights</h4>
                  <p className="text-sm text-gray-600">
                    Understand potential career paths and opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Best Practices Tab */}
        {activeTab === 'practices' && (
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                    boxShadow:
                      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="h-1.5 bg-gradient-to-r from-green-500 to-teal-600"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-teal-50 rounded-full p-3 mr-4">{practice.icon}</div>
                      <h3 className="text-lg font-bold text-gray-800">{practice.title}</h3>
                    </div>
                    <p className="text-gray-600">{practice.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-green-600 to-teal-700 rounded-xl text-white p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                Quality Improvement Initiatives
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FaAward className="mr-2" /> Student-Centric Approach
                  </h4>
                  <p className="text-sm text-white/90">
                    We follow a student-centric teaching approach that focuses on individual
                    learning needs and styles, with regular feedback mechanisms to improve the
                    teaching process.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FaAward className="mr-2" /> Industry-Academia Connection
                  </h4>
                  <p className="text-sm text-white/90">
                    Regular industry interactions ensure our curriculum remains relevant to current
                    industry needs, providing students with practical knowledge and skills.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CivilAcademics;
