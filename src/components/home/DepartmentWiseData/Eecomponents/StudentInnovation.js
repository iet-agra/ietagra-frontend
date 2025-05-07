import React from 'react';
import { motion } from 'framer-motion';
import {
  FaAward,
  FaExternalLinkAlt,
  FaHandshake,
  FaRobot,
  FaYoutube,
  FaUniversity,
} from 'react-icons/fa';
import { GiDeliveryDrone } from 'react-icons/gi';

const StudentInnovation = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const teamMembers = [
    'Pradeep Kumar',
    'Adarsh Singh',
    'Akanksha Srivastava',
    'Shalini Singh',
    'Mohd. Adil',
    'Achint Kumar',
  ];

  const achievements = [
    { icon: <FaAward className="text-2xl text-yellow-500" />, title: 'NSRCEL @ IIMB Launchpad' },
    {
      icon: <FaHandshake className="text-2xl text-yellow-500" />,
      title: 'Mentorship by IIM Bangalore & TI',
    },
    { icon: <FaAward className="text-2xl text-yellow-500" />, title: 'Funded by IIT Patna' },
    {
      icon: <GiDeliveryDrone className="text-2xl text-yellow-500" />,
      title: 'Startup: Hoverin Aerospace',
    },
  ];

  return (
    <section id="innovation" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Student Innovation</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 shadow-lg border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <GiDeliveryDrone className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Agri-drone Project</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Award Recognition</h4>
                <p className="text-gray-700 bg-white p-4 rounded-lg border border-blue-100">
                  <span className="font-semibold text-blue-700">
                    India Innovation Challenge Design Contest
                  </span>{' '}
                  <br />
                  <span className="text-sm">
                    Organized by AICTE, DST, Texas Instruments, and IIM Bangalore
                  </span>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Project Mentor</h4>
                <p className="text-blue-700 font-medium bg-white p-4 rounded-lg border border-blue-100">
                  Dr. D. Shakina Deiv
                </p>
              </div>

              <a
                href="https://youtu.be/NLLZNR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                <FaExternalLinkAlt className="mr-2" /> Watch Demo Video
              </a>
            </div>

            <div>
              <div className="bg-white rounded-xl p-6 shadow-md mb-6 border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Team Members</h4>
                <div className="grid grid-cols-2 gap-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-blue-50 px-3 py-2 rounded-lg text-center">
                      <span className="text-blue-700">{member}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-blue-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h4>
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <div className="p-2 bg-blue-50 rounded-full mr-3">{achievement.icon}</div>
                      <span className="text-gray-800">{achievement.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const RoboticsParticipation = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 flex items-center">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              <FaRobot className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">IIT Bombay TechFest Participation</h3>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-600 rounded-full mr-3">
                      <FaUniversity className="text-xl text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Robotics Challenge: "Cosmo-clench"
                    </h4>
                  </div>

                  <p className="text-gray-700 mb-4">
                    Our student team participated in the prestigious robotics challenge at IIT
                    Bombay's TechFest and successfully qualified for the Zonal Level Competition.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://youtu.be/NLLZNReXUO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm shadow-md"
                    >
                      <FaYoutube className="mr-2" /> Watch Video
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <FaRobot className="text-4xl text-blue-600 mx-auto mb-2" />
                    <p className="text-gray-700">Robot Design Image</p>
                    <p className="text-sm text-gray-600">Cosmo-clench Challenge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <a
                href="https://techfest.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
              >
                <FaExternalLinkAlt className="mr-2" /> Visit IIT Bombay TechFest
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { StudentInnovation, RoboticsParticipation };
