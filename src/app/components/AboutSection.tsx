import Image from 'next/image';
import { FaChartLine, FaFlask, FaBriefcase, FaUsers, FaHospital, FaFileAlt, FaUserMd, FaLightbulb } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">About Dr. Milan Mangeshkar</h2>
        
        <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
          <div className="flex flex-col items-center">
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 mb-8">
              <Image
                src="/profile.jpg"
                alt="Dr. Milan Mangeshkar"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
              />
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Biometrics Executive</h3>
              <p className="text-gray-700 leading-relaxed">
                Accomplished executive with 20+ years of experience working for multi-faceted health care organizations.
                Proficient in providing strategic direction for data management, biostatistics and programming functions
                in all aspects of clinical development.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-between h-full">
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <FaChartLine className="text-4xl text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-lg mb-1">20+ Years</p>
                <p className="text-gray-600">Industry Experience</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <FaFlask className="text-4xl text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-lg mb-1">6+ NDAs</p>
                <p className="text-gray-600">FDA Submissions</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <FaHospital className="text-4xl text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-lg mb-1">18+ Years</p>
                <p className="text-gray-600">Oncology Trials</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <FaUserMd className="text-4xl text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-lg mb-1">30+ Teams</p>
                <p className="text-gray-600">Leadership</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <FaFileAlt className="text-4xl text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-lg mb-1">100+</p>
                <p className="text-gray-600">Clinical Trials</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg text-center transform hover:scale-105 transition-transform shadow-md hover:shadow-lg">
                <FaLightbulb className="text-4xl text-blue-600 mx-auto mb-3" />
                <p className="font-semibold text-lg mb-1">10+ Global</p>
                <p className="text-gray-600">Partnerships</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaBriefcase className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Recent Positions</h3>
            <ul className="space-y-4">
              <li className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold">Independent Executive Biometrics Consultant</p>
                <p className="text-gray-600 text-sm">August 2024 - Present</p>
              </li>
              <li className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold">Vice President, Biometrics</p>
                <p className="text-gray-600">Bolt Biotherapeutics Inc.</p>
                <p className="text-sm text-gray-500">December 2023 - July 2024</p>
              </li>
              <li className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold">Vice President, Biometrics</p>
                <p className="text-gray-600">Zymeworks Inc.</p>
                <p className="text-sm text-gray-500">January 2022 - May 2023</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaUsers className="text-3xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700">Strategic Planning & Clinical Research</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700">Statistical Methodologies & CDISC Standards</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700">Regulatory Guidelines & Submissions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700">Clinical Development Programs</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span className="text-gray-700">Cross-functional Team Leadership</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-6 rounded-2xl">
          <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>18+ years experience in Oncology clinical trials</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>Key contributor to six successful NDA/sNDA submissions</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>Expert in phase 1-4 clinical trial designs</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>Led successful Phase 1-4 oncology studies</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>Experience with cloud-based infrastructure</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-yellow-400">•</span>
                <span>Strong collaboration with C-Suite executives</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 