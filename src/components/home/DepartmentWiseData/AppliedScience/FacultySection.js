import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAtom, FaFilter, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { GiMolecule } from 'react-icons/gi';
import { TbMathFunction } from 'react-icons/tb';
import FacultyCard from './FacultyCard';

const FacultySection = () => {
  const [showAllFaculty, setShowAllFaculty] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const initialFacultyCount = 3;

  // Faculty data based on content from slides 4-10
  const facultyData = [
    {
      name: 'Dr. Rekha Sharma',
      position: 'In-Charge, Assistant Professor',
      qualification: 'Ph.D, M.Sc.(Physics, B.H.U), M. Phil',
      experience: '16 years',
      department: 'physics',
      researchArea: 'Solid state Physics & Condensed matter Physics',
      committees:
        'In-Charge of Applied Science, In-Charge of NSS Examination Cell, Admission Cell, Proctorial Board, Women Grievances Cell, Sports and Cultural Club',
      email: 'sharmarswarup@rediffmail.com',
      image: '/images/asm/rekha.png',
      phone: '9456494427',
    },
    {
      name: 'Dr. Shalini Sharma',
      position: 'Assistant Professor',
      qualification:
        'M.Sc. Ph.D (Mathematics), II Position in Agra University & Post Graduate Diploma in Computer Program(PGDCA)',
      experience: '25 Years',
      department: 'mathematics',
      researchArea: 'Fluid Dynamics',
      researchInterest: 'Graph Theory, Numerical Methods & Cryptography',
      achievements: [
        'Best Paper presentation Award in International Conference on RAEP, 2019',
        'Worked as Convener of the one week online workshop EMF, EAP, Gender Sensitization & Human Values, 2020',
        'Certified in 3 SWAYAM Courses, 2018 &19: Advanced Graph Theory (Gold Medal), Discrete Mathematics (Gold Medal), Machine Learning',
        'Worked as Director-Incharge, IET, Khandari Agra, 2008 - 09',
      ],
      email: 'ietshalini@gmail.com',
      image: '/images/asm/shalini.png',
      phone: '9412535306',
    },
    {
      name: 'Mr. Pushpendra Singh',
      position: 'Assistant Professor',
      qualification: 'M.Phil., CSIR-NET',
      experience: '16 Years',
      department: 'physics',
      researchArea: 'Electronics, Electromagnetics Theory, Quantum Mechanics',
      email: 'pushpendra.skb@gmail.com',
      image: '/images/asm/pushpendra.png',
      phone: '9897119127',
    },
    {
      name: 'Dr. Sunil Kumar',
      position: 'Assistant Professor',
      qualification: 'M.Sc., M.Phil., Ph.D. (With RGNF –JRF, UGC Delhi)',
      experience: '12 Years',
      department: 'physics',
      researchArea:
        'Condensed Matter Physics, High Temperature High Pressure Physics and Equations of State',
      reviewer: [
        'International Journal Of Modern Physics B',
        'Journal of Computational Electronics',
        'Indian Journal of Pure and Applied Physics',
      ],
      hIndex: '05 (2022)',
      publications:
        'Papers Published in National/International/SCI Journals = 12, Papers Presented in Conferences/Workshops = 04',
      email: 'k.sunil.ibs@gmail.com',
      image: '/images/asm/sunil.png',
      phone: '9012072933',
    },
    {
      name: 'Dr. Ashok Kumar Singh',
      position: 'Assistant Professor',
      qualification: 'M.Sc (Mathematics), Ph.D.',
      experience: '16 Years',
      department: 'mathematics',
      researchArea: 'Operation Research, Applied Mathematics',
      email: 'singhdrashokkumar96@gmail.com',
      image: '/images/asm/ak.png',
      phone: '9411652027',
    },
    {
      name: 'Dr. Sangeeta',
      position: 'Assistant Professor',
      qualification: 'M.Sc, (Organic & Physical Chemistry), Ph.D., PDF',
      experience: 'More than 12 Years',
      department: 'chemistry',
      researchArea: 'Physical Chemistry',
      email: 'sangeeta.kumar47@rediffmail.com',
      image: '/images/asm/sangeeta.emf',
      phone: '9219955607',
    },
  ];

  // Filter faculty by department
  const filteredFaculty =
    activeFilter === 'all'
      ? facultyData
      : facultyData.filter((faculty) => faculty.department === activeFilter);

  // Determine which faculty to display based on showAllFaculty toggle
  const displayedFaculty = showAllFaculty
    ? filteredFaculty
    : filteredFaculty.slice(0, initialFacultyCount);

  // Count faculty by department for filter badges
  const facultyCounts = {
    all: facultyData.length,
    physics: facultyData.filter((f) => f.department === 'physics').length,
    chemistry: facultyData.filter((f) => f.department === 'chemistry').length,
    mathematics: facultyData.filter((f) => f.department === 'mathematics').length,
    humanities: facultyData.filter((f) => f.department === 'humanities').length,
  };

  // Auto-hide filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const filterElement = document.getElementById('filter-dropdown');
      if (
        filterElement &&
        !filterElement.contains(event.target) &&
        !event.target.closest('.filter-toggle-btn')
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFacultyDisplay = () => {
    setShowAllFaculty(!showAllFaculty);
  };

  // Get appropriate icon for department
  const getDepartmentIcon = (dept) => {
    switch (dept) {
      case 'physics':
        return <FaAtom className="text-indigo-500" />;
      case 'chemistry':
        return <GiMolecule className="text-cyan-600" />;
      case 'mathematics':
        return <TbMathFunction className="text-emerald-600" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      id="faculty"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-indigo-600"></div>
        <div className="absolute -right-20 top-1/4 w-80 h-80 rounded-full bg-cyan-600"></div>
        <div className="absolute left-1/3 bottom-10 w-60 h-60 rounded-full bg-emerald-600"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block relative">
            <span className="text-sm uppercase tracking-wider text-indigo-600 font-semibold block mb-1">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Distinguished{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-600">
                Faculty
              </span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded mx-auto mt-3"></div>
          </div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Our department consists of highly qualified and experienced faculty members who are
            dedicated to providing excellent education and conducting innovative research.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative inline-block">
            <button
              className="flex items-center gap-2 bg-white py-2 px-4 rounded-lg shadow-md border border-slate-200 text-slate-700 filter-toggle-btn"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <FaFilter className="text-indigo-500" />
              <span>Filter by Specialization</span>
              {isFilterOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isFilterOpen && (
              <div
                id="filter-dropdown"
                className="absolute z-10 mt-2 w-full bg-white shadow-lg rounded-lg border border-slate-200 py-2"
              >
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-indigo-50 flex items-center justify-between ${
                    activeFilter === 'all' ? 'bg-indigo-50 text-indigo-700 font-medium' : ''
                  }`}
                  onClick={() => setActiveFilter('all')}
                >
                  <span>All Departments</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                    {facultyCounts.all}
                  </span>
                </button>

                <button
                  className={`w-full text-left px-4 py-2 hover:bg-indigo-50 flex items-center justify-between ${
                    activeFilter === 'physics' ? 'bg-indigo-50 text-indigo-700 font-medium' : ''
                  }`}
                  onClick={() => setActiveFilter('physics')}
                >
                  <div className="flex items-center gap-2">
                    <FaAtom />
                    <span>Physics</span>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                    {facultyCounts.physics}
                  </span>
                </button>

                <button
                  className={`w-full text-left px-4 py-2 hover:bg-indigo-50 flex items-center justify-between ${
                    activeFilter === 'chemistry' ? 'bg-indigo-50 text-indigo-700 font-medium' : ''
                  }`}
                  onClick={() => setActiveFilter('chemistry')}
                >
                  <div className="flex items-center gap-2">
                    <GiMolecule />
                    <span>Chemistry</span>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                    {facultyCounts.chemistry}
                  </span>
                </button>

                <button
                  className={`w-full text-left px-4 py-2 hover:bg-indigo-50 flex items-center justify-between ${
                    activeFilter === 'mathematics' ? 'bg-indigo-50 text-indigo-700 font-medium' : ''
                  }`}
                  onClick={() => setActiveFilter('mathematics')}
                >
                  <div className="flex items-center gap-2">
                    <TbMathFunction />
                    <span>Mathematics</span>
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                    {facultyCounts.mathematics}
                  </span>
                </button>

                {facultyCounts.humanities > 0 && (
                  <button
                    className={`w-full text-left px-4 py-2 hover:bg-indigo-50 flex items-center justify-between ${
                      activeFilter === 'humanities'
                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                        : ''
                    }`}
                    onClick={() => setActiveFilter('humanities')}
                  >
                    <div className="flex items-center gap-2">
                      <span>Humanities</span>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full">
                      {facultyCounts.humanities}
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Filter Results Display */}
        {activeFilter !== 'all' && (
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-700">
              <span>Showing:</span>
              <div className="flex items-center gap-1 font-medium">
                {getDepartmentIcon(activeFilter)}
                {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
              </div>
              <button
                onClick={() => setActiveFilter('all')}
                className="ml-2 bg-white text-xs rounded-full w-5 h-5 flex items-center justify-center hover:bg-indigo-200 transition-colors"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}

        {/* No Results Message */}
        {displayedFaculty.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-slate-500 text-lg">No faculty members found in this category.</div>
          </motion.div>
        )}

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {displayedFaculty.map((faculty, index) => (
              <motion.div
                key={faculty.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <FacultyCard faculty={faculty} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button (only if there are more faculty to show) */}
        {filteredFaculty.length > initialFacultyCount && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={toggleFacultyDisplay}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 
                      text-white rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 
                      hover:shadow-xl flex items-center justify-center mx-auto gap-2 group"
            >
              {showAllFaculty ? (
                <>
                  <span>Show Less</span>
                  <motion.div
                    animate={{ y: [-2, 2, -2] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaChevronUp className="text-white group-hover:text-indigo-200 transition-colors" />
                  </motion.div>
                </>
              ) : (
                <>
                  <span>View All Faculty</span>
                  <motion.div
                    animate={{ y: [2, -2, 2] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <FaChevronDown className="text-white group-hover:text-indigo-200 transition-colors" />
                  </motion.div>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FacultySection;
