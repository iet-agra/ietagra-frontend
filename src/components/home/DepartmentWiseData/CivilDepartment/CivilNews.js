import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaNewspaper, FaCalendarAlt, FaExternalLinkAlt, FaRegFilePdf } from 'react-icons/fa';
import { fadeIn } from '../../../../utils/animations';

const CivilNews = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      title: 'Civil Department Secures NABL Accreditation for Materials Testing Lab',
      date: 'March 15, 2025',
      brief:
        "The Department's Materials Testing Laboratory has been accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL).",
      image: '/images/civil/news/nabl-news.jpg',
      type: 'news',
      link: '#',
    },
    {
      id: 2,
      title:
        'Faculty Research on Sustainable Construction Materials Published in International Journal',
      date: 'February 22, 2025',
      brief:
        'The research paper by Dr. Chandan Kumar and team on eco-friendly construction materials was published in the International Journal of Civil Engineering.',
      image: '/images/civil/news/research-paper.jpg',
      type: 'publication',
      link: '#',
    },
    {
      id: 3,
      title: 'Civil Engineering Students Win National Level Design Competition',
      date: 'January 10, 2025',
      brief:
        'A team of 5 students from the Civil Engineering Department secured first place in the National Infrastructure Design Challenge 2025.',
      image: '/images/civil/news/competition-win.jpg',
      type: 'achievement',
      link: '#',
    },
    {
      id: 4,
      title: 'Department Hosts Workshop on Advanced Structural Analysis',
      date: 'December 5, 2024',
      brief:
        'A two-day workshop on Advanced Structural Analysis using modern computational tools was conducted with industry experts from leading construction firms.',
      image: '/images/civil/news/workshop.jpg',
      type: 'event',
      link: '#',
    },
  ];

  const tabs = [
    { id: 'news', label: 'All News' },
    { id: 'publication', label: 'Publications' },
    { id: 'achievement', label: 'Achievements' },
    { id: 'event', label: 'Events' },
  ];

  const filteredNews =
    activeTab === 'news' ? newsItems : newsItems.filter((item) => item.type === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="civil-news" className="py-16 px-4 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-4">
            Stay Updated
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">News at a Glance</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Explore the latest updates, achievements, and events from our Civil Engineering
            Department.
          </p>
        </motion.div>

        {/* News Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredNews.map((news) => (
            <motion.div
              key={news.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 uppercase z-10 rounded-bl-lg">
                  {news.type}
                </div>
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-news.jpg';
                  }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2" />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{news.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">{news.brief}</p>
                <a
                  href={news.link}
                  className="inline-flex items-center text-green-600 text-sm font-medium hover:text-green-800 mt-auto"
                >
                  Read more
                  <FaExternalLinkAlt className="ml-1 text-xs" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Department Publications Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 bg-white rounded-xl shadow-md p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRegFilePdf className="text-green-600 mr-3" />
            Recent Publications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 transition-colors">
              <h4 className="text-lg font-medium text-gray-800">
                Sustainable Construction Materials for Rural Infrastructure
              </h4>
              <p className="text-sm text-gray-600 mb-1">
                Authors: Chandan Kumar, Anil Singh, et al.
              </p>
              <p className="text-xs text-gray-500">
                International Journal of Civil Engineering, Vol. 45, Issue 3
              </p>
              <a
                href="#"
                className="mt-2 inline-flex items-center text-sm text-green-600 hover:text-green-800"
              >
                View PDF <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 transition-colors">
              <h4 className="text-lg font-medium text-gray-800">
                Analysis of Water Conservation Techniques in Urban Areas
              </h4>
              <p className="text-sm text-gray-600 mb-1">
                Authors: Shobhit Mohan Sharma, Diksha Jain
              </p>
              <p className="text-xs text-gray-500">
                Journal of Environmental Engineering, Vol. 12, Issue 8
              </p>
              <a
                href="#"
                className="mt-2 inline-flex items-center text-sm text-green-600 hover:text-green-800"
              >
                View PDF <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 transition-colors">
              <h4 className="text-lg font-medium text-gray-800">
                Seismic Performance of Reinforced Concrete Buildings
              </h4>
              <p className="text-sm text-gray-600 mb-1">
                Authors: Pratap Singh Birla, Chandan Kumar
              </p>
              <p className="text-xs text-gray-500">
                Journal of Structural Engineering, Vol. 27, Issue 5
              </p>
              <a
                href="#"
                className="mt-2 inline-flex items-center text-sm text-green-600 hover:text-green-800"
              >
                View PDF <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 transition-colors">
              <h4 className="text-lg font-medium text-gray-800">
                Modern Techniques in Highway Design and Safety Analysis
              </h4>
              <p className="text-sm text-gray-600 mb-1">Authors: Anil Singh, Diksha Jain</p>
              <p className="text-xs text-gray-500">
                Transportation Engineering Journal, Vol. 18, Issue 2
              </p>
              <a
                href="#"
                className="mt-2 inline-flex items-center text-sm text-green-600 hover:text-green-800"
              >
                View PDF <FaExternalLinkAlt className="ml-1 text-xs" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2 border border-green-500 text-sm font-medium rounded-full text-green-700 bg-transparent hover:bg-green-50"
            >
              View All Publications
              <FaExternalLinkAlt className="ml-2 text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CivilNews;
