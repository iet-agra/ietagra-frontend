import React from 'react';
import { motion } from 'framer-motion';

const FacultyProfiles = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const facultyMembers = [
    {
      name: 'Dr. D. Shakina Deiv',
      qualification: 'B.E., M.E., Ph.D.',
      expertise: 'Machine Learning, Speech Processing, Electrical Machines, Power Electronics',
      image: '', // Add image path when available
    },
    {
      name: 'Dr. Mayank Pratap Singh',
      qualification: 'B.E., M.Tech., Ph.D.',
      expertise: 'Electrical Machines, Soft Computing, Solar Energy',
      image: '', // Add image path when available
    },
    {
      name: 'Er. Ashish Sharma',
      qualification: 'B.Tech., M.Tech.',
      expertise: 'Antenna & Wave Propagation, Instrumentation, Sensors',
      image: '', // Add image path when available
    },
    {
      name: 'Er. Shivam Srivastava',
      qualification: 'B.Tech., M.Tech.',
      expertise: 'Power Systems, Power Electronics, SCADA',
      image: '', // Add image path when available
    },
    {
      name: 'Dr. A. K. Verma',
      qualification: 'B.Tech., M.Tech., Ph.D.',
      expertise: 'DSP, Image Processing, Analog & Digital Communication, Control Systems',
      image: '', // Add image path when available
    },
    {
      name: 'Er. Rishabh Upadhyay',
      qualification: 'B.Tech., M.Tech. (Ph.D. Pursuing)',
      expertise: 'Control Systems, Network Analysis and Synthesis',
      image: '', // Add image path when available
    },
  ];

  const FacultyCard = ({ member }) => {
    const initials = `${member.name[0]}${member.name.split(' ').slice(-1)[0][0]}`;

    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-white rounded-lg shadow-md overflow-hidden p-6 border border-gray-200"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-md bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-700">
            {member.image ? (
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            ) : (
              initials
            )}
          </div>
          <h4 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h4>
          <p className="text-blue-700 font-medium text-sm mb-2">{member.qualification}</p>
          <div className="w-12 h-1 bg-blue-200 mx-auto mb-3"></div>
          <p className="text-gray-600 text-sm">{member.expertise}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="faculty" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Faculty</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our department is home to highly qualified and dedicated faculty members with expertise
            across various domains of electrical engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((member, index) => (
            <FacultyCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyProfiles;
