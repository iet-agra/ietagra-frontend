import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBuilding,
  FaFlask,
  FaTools,
  FaChalkboardTeacher,
  FaBook,
  FaLaptop,
  FaChartLine,
} from 'react-icons/fa';
import { fadeIn } from '../../../../utils/animations';

const CivilInfrastructure = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Labs and facilities images
  // Update the labImages in CivilInfrastructure.js:
  const labImages = [
    { src: '/images/civil/geotechLab.jpg', alt: 'Geotechnical Engineering Lab' },
    { src: '/images/civil/structuralLab.jpg', alt: 'Structural Engineering Lab' },
    { src: '/images/civil/classroom.jpg', alt: 'ICT Classroom' },
    { src: '/images/civil/carousel1.jpg', alt: 'Civil Engineering Department' },
  ];

  // Auto-rotate lab images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === labImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [labImages.length]);

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

  // Labs data
  const labsData = [
    {
      name: 'Geotechnical Engineering Lab',
      description: 'Equipped with soil testing apparatus for conducting tests on soil samples.',
      icon: <FaFlask className="text-4xl text-green-500" />,
    },
    {
      name: 'Structural Engineering Lab',
      description:
        'Includes equipment for testing concrete, reinforced concrete and structural elements.',
      icon: <FaBuilding className="text-4xl text-green-600" />,
    },
    {
      name: 'Surveying Lab',
      description: 'Contains modern surveying instruments including total stations and levels.',
      icon: <FaTools className="text-4xl text-green-700" />,
    },
    {
      name: 'Building Materials Lab',
      description: 'Features equipment for testing various construction materials.',
      icon: <FaTools className="text-4xl text-teal-600" />,
    },
    {
      name: 'Hydraulics Lab',
      description:
        'Includes hydraulic bench, flow measurement devices, and fluid mechanics apparatus.',
      icon: <FaFlask className="text-4xl text-teal-700" />,
    },
    {
      name: 'Transportation Engineering Lab',
      description: 'Equipped for testing road materials and pavement design.',
      icon: <FaFlask className="text-4xl text-teal-800" />,
    },
  ];

  // Facilities
  const facilities = [
    {
      title: 'ICT Classrooms',
      description: '2 classrooms equipped with smart boards and projectors',
      icon: <FaChalkboardTeacher className="text-2xl text-green-500" />,
    },
    {
      title: 'Well-equipped Labs',
      description: '8 specialized laboratories for practical training',
      icon: <FaFlask className="text-2xl text-teal-500" />,
    },
    {
      title: 'Department Library',
      description: 'Resource collection of textbooks and reference materials',
      icon: <FaBook className="text-2xl text-amber-500" />,
    },
    {
      title: 'Computer Lab',
      description: 'Computing facilities with relevant civil engineering software',
      icon: <FaLaptop className="text-2xl text-blue-500" />,
    },
  ];

  return (
    <section id="infrastructure" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-14"
        >
          <span className="bg-green-50 text-green-700 py-1 px-3 rounded-full text-sm font-medium mb-3 inline-block">
            Learning Facilities
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Infrastructure</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-5 rounded-full"></div>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The Civil Engineering Department is equipped with modern facilities including
            specialized laboratories, ICT-enabled classrooms, and other resources to provide
            students with an excellent learning environment.
          </p>
        </motion.div>

        {/* Side-by-side layout for carousel and content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="my-10 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Carousel - Left Side */}

            <div className="relative h-72 md:h-full md:min-h-[28rem] bg-gray-800 overflow-hidden">
              {labImages.map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    scale: index === currentSlide ? 1 : 1.05,
                  }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="absolute inset-0 h-full w-full flex items-center justify-center"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-contain p-2" // Changed from object-cover to object-contain with padding
                    onError={(e) => {
                      e.target.src = '/images/placeholder-lab.jpg';
                    }}
                  />
                </motion.div>
              ))}

              {/* Enhanced carousel indicators - Fixed click handling */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3 z-10">
                {labImages.map((_, index) => (
                  <button
                    key={`indicator-${index}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentSlide(index);
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white scale-125'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Content - Right Side */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-4">
                Department Infrastructure
              </h3>

              <div className="space-y-5">
                <p className="text-gray-600 leading-relaxed">
                  Our department is well-equipped with modern infrastructure to support quality
                  education and research in Civil Engineering, providing students with hands-on
                  experience and practical knowledge.
                </p>

                <div className="grid grid-cols-1 gap-4 mt-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaBuilding className="text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">3 Modern Classrooms</p>
                      <p className="text-xs text-gray-500">Spacious learning environment</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaFlask className="text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        8 Specialized Laboratories
                      </p>
                      <p className="text-xs text-gray-500">Well-equipped for practical training</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaChalkboardTeacher className="text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">2 ICT-based Classrooms</p>
                      <p className="text-xs text-gray-500">Smart boards and projectors</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaBook className="text-green-500" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Department Library</p>
                      <p className="text-xs text-gray-500">Reference books and journals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Labs Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {labsData.map((lab, index) => (
            <motion.div
              key={lab.name}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-1.5 bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-5">
                  {lab.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{lab.name}</h3>
                <p className="text-sm text-gray-600">{lab.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infrastructure Features */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl shadow-xl p-8 mt-12 text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full opacity-5 -mt-20 -mr-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 -mb-20 -ml-20"></div>

          <h3 className="text-2xl font-bold text-center mb-8 relative">Facility Highlights</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
            {facilities.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:bg-white/20 hover:transform hover:scale-105"
              >
                <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Placements Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Alumni Success Stories</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our graduates have secured prestigious positions in various organizations, showcasing
              the quality of education at our department.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
                  Notable Alumni Placements
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaChartLine className="text-green-500 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-800">Er. Ramanand Prajapati</span>
                      <p className="text-sm text-gray-600">
                        Junior Engineer, Border Roads Organization
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaChartLine className="text-green-500 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-800">Er. Akash Pal</span>
                      <p className="text-sm text-gray-600">
                        Junior Engineer, Military Engineering Services
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaChartLine className="text-green-500 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-800">Kuwar Jeet Singh</span>
                      <p className="text-sm text-gray-600">General Manager, PNC Infratech Ltd</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4 border-l-4 border-green-500 pl-3">
                  Recent Placements
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaChartLine className="text-green-500 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-800">AUTOCADD DESIGNER</span>
                      <p className="text-sm text-gray-600">PIE Infocom Pvt. Ltd</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaChartLine className="text-green-500 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-800">Pawan Kumar Verma</span>
                      <p className="text-sm text-gray-600">SynapsIQ LLC</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaChartLine className="text-green-500 mr-2 mt-1" />
                    <div>
                      <span className="font-medium text-gray-800">Anand Prakash Mahato</span>
                      <p className="text-sm text-gray-600">Nakshatra Engineering</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CivilInfrastructure;
