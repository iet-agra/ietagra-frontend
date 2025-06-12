import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaResearchgate,
  FaBookOpen,
  FaChalkboardTeacher,
  FaAward,
  FaUserTie,
  FaLinkedin,
  FaChevronDown,
  FaChevronUp,
  FaUserGraduate,
  FaAtom,
} from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdInterests } from 'react-icons/md';
import { GiMolecule } from 'react-icons/gi';
import { TbMathFunction } from 'react-icons/tb';

const FacultyCard = ({ faculty }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-200 h-full"
      whileHover={{
        y: -5,
        boxShadow: '0 15px 30px -10px rgba(59, 130, 246, 0.4)',
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Top gradient bar */}
      <div className="h-2 bg-gradient-to-r from-indigo-600 to-cyan-500"></div>

      {/* Faculty Image - Centered & Rounded */}
      <div className="relative px-6 pt-6 pb-2 flex justify-center">
        <div className="w-40 h-40 relative rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg">
          {imageLoaded ? (
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                console.log('Image failed to load:', faculty.image);
                setImageLoaded(false);
              }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-100 to-cyan-50 flex items-center justify-center">
              <FaUserGraduate className="text-5xl text-indigo-400" />
            </div>
          )}

          {/* Department indicator on corner of image */}
          <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
            {faculty.department === 'physics' && <FaAtom className="text-indigo-500" />}
            {faculty.department === 'chemistry' && <GiMolecule className="text-cyan-600" />}
            {faculty.department === 'mathematics' && (
              <TbMathFunction className="text-emerald-600" />
            )}
            {!['physics', 'chemistry', 'mathematics'].includes(faculty.department) && (
              <FaUserTie className="text-slate-600" />
            )}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-600/10 to-cyan-500/10 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-indigo-600/10 to-cyan-500/10 rounded-full pointer-events-none"></div>
      </div>

      {/* Basic Info - Below Image */}
      <div className="p-6 pt-2 bg-white">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-slate-800">{faculty.name}</h3>
          <p className="text-indigo-600 font-medium">{faculty.position}</p>
        </div>

        {/* Qualification & Experience - Always visible */}
        <div className="grid grid-cols-2 gap-4 mb-5">
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center mb-1">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                <FaBookOpen className="text-indigo-600 text-xs" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Qualification</p>
            </div>
            <p className="text-sm text-slate-700 pl-8 line-clamp-2">{faculty.qualification}</p>
          </div>

          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center mb-1">
              <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                <FaChalkboardTeacher className="text-indigo-600 text-xs" />
              </div>
              <p className="text-xs text-slate-500 font-medium">Experience</p>
            </div>
            <p className="text-sm text-slate-700 pl-8">{faculty.experience}</p>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          <a
            href={`mailto:${faculty.email}`}
            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors"
          >
            <FaEnvelope className="mr-1.5" /> Email
          </a>
          <a
            href={`tel:${faculty.phone}`}
            className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-3 py-1.5 rounded-full hover:bg-indigo-100 transition-colors"
          >
            <FaPhone className="mr-1.5" /> Call
          </a>

          {/* LinkedIn button if available */}
          {faculty.linkedin && (
            <a
              href={faculty.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors"
            >
              <FaLinkedin className="mr-1.5" /> LinkedIn
            </a>
          )}
        </div>

        {/* Expand/Collapse Button */}
        <motion.button
          className="flex items-center justify-center w-full py-2.5 text-sm text-indigo-600 hover:text-indigo-800 border-t border-slate-200 mt-2"
          onClick={() => setExpanded(!expanded)}
          whileTap={{ scale: 0.98 }}
        >
          {expanded ? (
            <>
              Show Less <FaChevronUp className="ml-1" />
            </>
          ) : (
            <>
              Show More <FaChevronDown className="ml-1" />
            </>
          )}
        </motion.button>
      </div>

      {/* Additional details (expandable) section */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="p-6 bg-slate-50 border-t border-slate-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Research Section */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-3 pb-2 border-b border-slate-200 flex items-center">
                <FaResearchgate className="mr-2 text-indigo-600" />
                Research Profile
              </h4>

              <div className="space-y-4">
                {/* Research Area */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                      <FaResearchgate className="text-indigo-600" />
                    </div>
                    <h5 className="font-medium text-slate-800">Research Area</h5>
                  </div>
                  <p className="text-slate-700 ml-10">{faculty.researchArea}</p>
                </div>

                {/* Research Interest if available */}
                {faculty.researchInterest && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                        <MdInterests className="text-indigo-600" />
                      </div>
                      <h5 className="font-medium text-slate-800">Research Interest</h5>
                    </div>
                    <p className="text-slate-700 ml-10">{faculty.researchInterest}</p>
                  </div>
                )}

                {/* h-index if available */}
                {faculty.hIndex && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                        <IoSchoolSharp className="text-indigo-600" />
                      </div>
                      <h5 className="font-medium text-slate-800">h-index</h5>
                    </div>
                    <p className="text-slate-700 ml-10">{faculty.hIndex}</p>
                  </div>
                )}

                {/* Publications if available */}
                {faculty.publications && (
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                        <FaBookOpen className="text-indigo-600" />
                      </div>
                      <h5 className="font-medium text-slate-800">Publications</h5>
                    </div>
                    <p className="text-slate-700 ml-10">{faculty.publications}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Committees if available */}
            {faculty.committees && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-3 pb-2 border-b border-slate-200 flex items-center">
                  <FaUserTie className="mr-2 text-indigo-600" />
                  Committees & Roles
                </h4>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-slate-700">{faculty.committees}</p>
                </div>
              </div>
            )}

            {/* Achievements if available */}
            {faculty.achievements && (
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3 pb-2 border-b border-slate-200 flex items-center">
                  <FaAward className="mr-2 text-indigo-600" />
                  Achievements
                </h4>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <ul className="space-y-2 list-disc pl-5">
                    {faculty.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-slate-700">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FacultyCard;
