import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaPaperPlane,
  FaExclamationCircle,
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    hasError: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      hasError: false,
      message: '',
    });

    // Simulate form submission with timeout
    setTimeout(() => {
      // Here you would normally handle the actual form submission to a backend
      console.log('Form submitted with data:', formData);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        hasError: false,
        message: 'Thank you! Your message has been sent successfully.',
      });
    }, 1500);
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      id="contact"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-indigo-600"></div>
        <div className="absolute -right-20 top-1/4 w-80 h-80 rounded-full bg-cyan-600"></div>
        <div className="absolute left-1/3 bottom-10 w-60 h-60 rounded-full bg-indigo-600"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative">
            <span className="text-sm uppercase tracking-wider text-indigo-600 font-semibold block mb-1">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Contact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                Us
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded mx-auto mt-3"></div>
          </div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Have questions about our programs, faculty, or department activities? We're here to
            help! Reach out to us using the contact information below or fill out the form.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 h-full">
              <div className="h-2 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Department Information</h3>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaMapMarkerAlt className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-slate-700 mb-1">Address</h4>
                      <p className="text-slate-600">
                        Department of Applied Science & Humanities
                        <br />
                        Institute of Engineering & Technology
                        <br />
                        Dr. B.R. Ambedkar University
                        <br />
                        Khandari Campus, Agra - 282002
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaPhone className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-slate-700 mb-1">Phone</h4>
                      <p className="text-slate-600">
                        <a
                          href="tel:+915622982800"
                          className="hover:text-indigo-600 transition-colors"
                        >
                          +91-562-2982800
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaEnvelope className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-slate-700 mb-1">Email</h4>
                      <p className="text-slate-600">
                        <a
                          href="mailto:iet.appliedscience@dbrau.ac.in"
                          className="hover:text-indigo-600 transition-colors"
                        >
                          iet.appliedscience@dbrau.ac.in
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <FaClock className="text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-slate-700 mb-1">Office Hours</h4>
                      <p className="text-slate-600">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-4 border-t border-slate-200">
                    <h4 className="text-md font-semibold text-slate-700 mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                      >
                        <FaFacebookSquare className="text-blue-600 text-xl" />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center hover:bg-sky-200 transition-colors"
                      >
                        <FaTwitterSquare className="text-sky-500 text-xl" />
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center hover:bg-indigo-200 transition-colors"
                      >
                        <FaLinkedin className="text-indigo-600 text-xl" />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center hover:bg-pink-200 transition-colors"
                      >
                        <FaInstagramSquare className="text-pink-600 text-xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 h-full">
              <div className="h-2 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Send us a message</h3>

                {formStatus.isSubmitted ? (
                  <motion.div
                    className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 flex items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mr-3 text-green-500 text-xl">
                      <FaPaperPlane />
                    </div>
                    <p>{formStatus.message}</p>
                  </motion.div>
                ) : formStatus.hasError ? (
                  <motion.div
                    className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 flex items-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mr-3 text-red-500 text-xl">
                      <FaExclamationCircle />
                    </div>
                    <p>{formStatus.message}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Your message here..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                      <motion.button
                        type="submit"
                        disabled={formStatus.isSubmitting}
                        className={`px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 
                          text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 
                          hover:shadow-xl flex items-center justify-center gap-2 ${
                            formStatus.isSubmitting ? 'opacity-75 cursor-wait' : ''
                          }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        {formStatus.isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                          </>
                        ) : (
                          <>
                            Send Message <FaPaperPlane className="ml-1" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          className="mt-12 bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="h-2 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>
          <div className="aspect-w-16 aspect-h-7 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.325038702372!2d78.00514641505626!3d27.20027798299523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4e82b3fffff%3A0x3ccc7972e22c90ac!2sInstitute%20of%20Engineering%20%26%20Technology%2C%20Dr.%20B.R.%20Ambedkar%20University!5e0!3m2!1sen!2sin!4v1622197242174!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Department Location on Google Maps"
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
