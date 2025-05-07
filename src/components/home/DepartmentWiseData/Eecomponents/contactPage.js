import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUniversity,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaBolt,
  FaLightbulb,
  FaGraduationCap,
  FaUserTie,
  FaChalkboardTeacher,
  FaFlask,
  FaBriefcase,
  FaAward,
} from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 2,
      },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
      },
    },
  };

  const iconBackgroundVariants = {
    animate: {
      background: [
        'linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(59,130,246,1) 100%)',
        'linear-gradient(90deg, rgba(59,130,246,1) 0%, rgba(29,78,216,1) 100%)',
        'linear-gradient(90deg, rgba(37,99,235,1) 0%, rgba(59,130,246,1) 100%)',
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  // Department highlights for summary
  const departmentHighlights = [
    {
      icon: <FaLightbulb className="text-yellow-400 text-2xl" />,
      title: 'Established 2018',
      description: 'Young and dynamic department with modern curriculum',
    },
    {
      icon: <FaGraduationCap className="text-blue-500 text-2xl" />,
      title: 'B.E. Program',
      description: "Comprehensive Bachelor's in Electrical Engineering",
    },
    {
      icon: <FaUserTie className="text-indigo-500 text-2xl" />,
      title: 'Expert Faculty',
      description: '6 highly qualified professors with industry experience',
    },
    {
      icon: <FaBriefcase className="text-green-500 text-2xl" />,
      title: 'Strong Placements',
      description: 'Students placed in Toshiba, HCL, GAIL, Adani & more',
    },
    {
      icon: <FaAward className="text-amber-500 text-2xl" />,
      title: 'Research Excellence',
      description: 'Award-winning student projects & innovations',
    },
    {
      icon: <FaFlask className="text-purple-500 text-2xl" />,
      title: 'Modern Labs',
      description: 'State-of-the-art laboratories with latest equipment',
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      {/* Animated Elements (Decorative) */}
      <div className="hidden lg:block">
        <motion.div
          initial={{ x: -100, y: 100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.07 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-500 filter blur-3xl"
        />
        <motion.div
          initial={{ x: 100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.05 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-1/2 -right-20 w-72 h-72 rounded-full bg-indigo-500 filter blur-3xl"
        />
      </div>

      {/* Floating Electric Icon */}
      <div className="absolute right-10 top-20 hidden lg:block">
        <motion.div variants={floatVariants} animate="float" className="text-blue-500 opacity-20">
          <FaBolt className="text-9xl" />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              variants={pulseVariants}
              animate="pulse"
              className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-full"
            >
              <FaEnvelope className="text-3xl text-white" />
            </motion.div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Connect with the Department of Electrical Engineering at Dr. Bhimrao Ambedkar
            University, Agra for inquiries about admissions, research collaboration, or general
            information.
          </p>
        </motion.div>

        {/* Department Summary Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
            <FaUniversity className="w-full h-full" />
          </div>

          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-blue-800 mb-6">
            Department Overview
          </motion.h3>

          <motion.p variants={itemVariants} className="text-gray-700 mb-6">
            The Department of Electrical Engineering at IET Agra provides quality education through
            comprehensive curriculum, expert faculty, and modern laboratories. Our focus on
            combining theoretical knowledge with practical skills prepares students for successful
            careers in various sectors.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex bg-blue-50 p-4 rounded-lg border border-blue-100"
              >
                <div className="bg-white p-2 rounded-full mr-4 h-10 w-10 flex items-center justify-center shadow-sm">
                  {highlight.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{highlight.title}</h4>
                  <p className="text-gray-600 text-sm">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <FaPhone className="mr-2" /> Contact Information
              </h3>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-start">
                  <motion.div
                    variants={iconBackgroundVariants}
                    animate="animate"
                    className="p-3 rounded-full mr-4 flex-shrink-0 text-white"
                  >
                    <FaMapMarkerAlt className="text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Department of Electrical Engineering,
                      <br />
                      Institute of Engineering & Technology,
                      <br />
                      Swami Vivekanand Campus,
                      <br />
                      Dr. Bhimrao Ambedkar University, Agra - 282005
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start">
                  <motion.div
                    variants={iconBackgroundVariants}
                    animate="animate"
                    className="p-3 rounded-full mr-4 flex-shrink-0 text-white"
                  >
                    <FaEnvelope className="text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a href="mailto:ee.hod@ietagra.ac.in" className="text-blue-600 hover:underline">
                      ee.hod@ietagra.ac.in
                    </a>
                    <br />
                    <a
                      href="mailto:ee.office@ietagra.ac.in"
                      className="text-blue-600 hover:underline"
                    >
                      ee.office@ietagra.ac.in
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex items-start">
                  <motion.div
                    variants={iconBackgroundVariants}
                    animate="animate"
                    className="p-3 rounded-full mr-4 flex-shrink-0 text-white"
                  >
                    <FaPhone className="text-xl" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 562-2570450</p>
                    <p className="text-gray-600">+91 562-2570451</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="border-t border-gray-200 pt-5">
                  <h4 className="font-semibold text-gray-800 mb-3">Connect With Us</h4>
                  <div className="flex space-x-3">
                    <motion.a
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <FaFacebook className="text-xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <FaTwitter className="text-xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <FaLinkedin className="text-xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="bg-blue-100 p-2 rounded-full text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      <FaYoutube className="text-xl" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <FaChalkboardTeacher className="mr-2" /> Send Us a Message
              </h3>
            </div>

            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter subject"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write your message here..."
                    ></textarea>
                  </motion.div>

                  <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full py-3 px-6 text-white font-medium rounded-lg transition-colors shadow-md
                      ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                  <p className="text-gray-600 text-center">
                    Thank you for contacting us. We'll respond to your inquiry as soon as possible.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Wave */}
      <div className="relative h-24 mt-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full"
        >
          <path
            fill="#1e40af"
            fillOpacity="0.5"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,234.7C960,245,1056,203,1152,176C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full"
        >
          <path
            fill="#1e3a8a"
            fillOpacity="0.8"
            d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,229.3C672,224,768,192,864,181.3C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ContactPage;
