import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaBuilding,
  FaRupeeSign,
  FaSearch,
  FaMedal,
  FaGraduationCap,
  FaCalendarAlt,
} from 'react-icons/fa';

const PlacementRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const placementData = [
    { name: 'Rupali Verma', company: 'Toshiba', package: '5.5 LPA', batch: '2019-23' },
    {
      name: 'Ankit Srivastava',
      company: 'Nippon Technologies',
      package: '8.61 LPA',
      batch: '2019-23',
    },
    {
      name: 'Diwakar Ranjan Srivastava',
      company: 'PI Infocom',
      package: '4.5 LPA',
      batch: '2019-23',
    },
    { name: 'Yuvraj Nigam', company: 'GAIL India', package: '4 LPA', batch: '2020-24' },
    { name: 'Aman Pratap Pandey', company: 'HCL Tech', package: '4.25 LPA', batch: '2020-24' },
    { name: 'Gautam Patel', company: 'Hitachi Energy', package: '5.2 LPA', batch: '2020-24' },
    {
      name: 'Shivam Gond',
      company: 'Mitsubishi Electricals',
      package: '3.93 LPA',
      batch: '2020-24',
    },
    { name: 'Mohit Verma', company: 'STAUNCH Pvt. Ltd.', package: '4 LPA', batch: '2020-24' },
    {
      name: 'Avanish Kumar Maurya',
      company: 'Adani Cements',
      package: '5.5 LPA',
      batch: '2020-24',
    },
  ];

  const filteredData = placementData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.batch.includes(searchTerm)
  );

  return (
    <section id="placements" className="py-16 px-4 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Student Placements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our department has a strong track record of placements in prestigious companies across
            various sectors.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center">
                <div className="p-3 bg-white/20 rounded-full mr-4">
                  <FaBriefcase className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">2019-2024 Placement Records</h3>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, company or batch..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="py-2 pl-10 pr-4 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                    Student Name
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                    Company
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                    Package
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">
                    Batch
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((student, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                    <td className="py-3 px-4 text-gray-800">{student.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="p-1 bg-blue-100 rounded-full mr-2 flex-shrink-0">
                          <FaBuilding className="text-blue-600" />
                        </div>
                        <span className="text-gray-800">{student.company}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="p-1 bg-green-100 rounded-full mr-2 flex-shrink-0">
                          <FaRupeeSign className="text-green-600" />
                        </div>
                        <span className="text-gray-800">{student.package}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                        {student.batch}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="py-10 text-center text-gray-500">No matching records found.</div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const GateQualifiers = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const gateData = [
    { name: 'Mayank Pandey', batch: '2018-22', year: '2022' },
    { name: 'Divyank Maurya', batch: '2018-22', year: '2022' },
    { name: 'Nitesh Singh', batch: '2019-23', year: '2022' },
    { name: 'Yuvraj Nigam', batch: '2020-24', year: '2023' },
    { name: 'Ratinesh Kumar', batch: '2019-23', year: '2024' },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-3">GATE Qualified Students</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Several students from our department have successfully qualified the prestigious
            Graduate Aptitude Test in Engineering (GATE).
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-white/20 rounded-full mr-4">
              <FaMedal className="text-4xl text-yellow-300" />
            </div>
            <h3 className="text-2xl font-bold text-white">Our GATE Achievers</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {gateData.map((student, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaGraduationCap className="text-xl text-white" />
                  </div>
                  <h4 className="text-white font-medium mb-2">{student.name}</h4>
                  <div className="flex justify-center gap-3 text-xs">
                    <div className="bg-blue-900/50 px-2 py-1 rounded flex items-center">
                      <FaCalendarAlt className="mr-1" /> {student.batch}
                    </div>
                    <div className="bg-blue-900/50 px-2 py-1 rounded flex items-center">
                      <FaMedal className="mr-1" /> {student.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm">
              Students qualifying GATE exams demonstrate the quality of education and technical
              preparation provided by our department.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { PlacementRecords, GateQualifiers };
