import { FaBriefcase, FaBuilding, FaCheckCircle, FaMedal } from 'react-icons/fa';

export default function ExperiencePage() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-16">
          Professional Experience
        </h1>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Current Position */}
          <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <FaBriefcase className="text-4xl text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-blue-800">Independent Executive Biometrics Consultant</h2>
                <p className="text-gray-600">August 2024 - Present</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Provide biometrics consulting services for mid to small size biotechnology companies for:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Strategic decisions regarding due diligence activities for acquisition of clinical assets</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Clinical development programs and infrastructure setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Guidance on protocol development, study design, and sample size calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Statistical analysis plans and data cleaning activities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bolt Biotherapeutics */}
          <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <FaBuilding className="text-4xl text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-blue-800">Vice President, Biometrics</h2>
                <p className="text-xl text-blue-600">Bolt Biotherapeutics Inc.</p>
                <p className="text-gray-600">December 2023 - July 2024</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Led strategic direction for the biometrics group across all oncology projects:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Provided oversight and direction for all studies in the clinical development program</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Collaborated with Chief Medical Officer for data presentations to the Board and business development</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Established best practices, standards and processes for clinical trials</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Zymeworks */}
          <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <FaBuilding className="text-4xl text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-blue-800">Vice President, Biometrics</h2>
                <p className="text-xl text-blue-600">Zymeworks Inc.</p>
                <p className="text-gray-600">January 2022 - May 2023</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Led biometrics group for oncology projects with significant achievements:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Developed biometrics infrastructure for 9 clinical trials across 2 molecules</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Managed $10 million budget and team of 30+ employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Successfully completed first clinical study report for the company</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Exelixis */}
          <div className="mb-16 bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <FaBuilding className="text-4xl text-blue-600" />
              <div>
                <h2 className="text-2xl font-bold text-blue-800">Executive Director to Associate Director</h2>
                <p className="text-xl text-blue-600">Exelixis, Inc.</p>
                <p className="text-gray-600">November 2007 - December 2021</p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Progressive leadership roles with increasing responsibilities:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Key contributor to 6 successful NDA/sNDA submissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Managed portfolio of 5 clinical development programs</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Led collaborations with external pharmaceutical partners</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Earlier Positions */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-blue-800 mb-6">Earlier Positions</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Consulting Biostatistician</h4>
                <p className="text-blue-600">Genentech, Inc.</p>
                <p className="text-gray-600">February 2006 - November 2007</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Senior Biostatistician</h4>
                <p className="text-blue-600">Quintiles Strategic Research Services</p>
                <p className="text-gray-600">October 2003 - January 2005</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Senior Biostatistician</h4>
                <p className="text-blue-600">Guidant Corporation</p>
                <p className="text-gray-600">September 2000 - March 2002</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Scientist</h4>
                <p className="text-blue-600">Abbott Diagnostics Division</p>
                <p className="text-gray-600">March 1996 - August 2000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-blue-900 text-white rounded-xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <FaMedal className="text-4xl text-yellow-400" />
              <h2 className="text-3xl font-bold">Career Highlights</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-yellow-400" />
                    <span>18+ years in Oncology clinical trials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-yellow-400" />
                    <span>Expert in phase 1-4 trial designs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-yellow-400" />
                    <span>Regulatory submission experience</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Leadership Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-yellow-400" />
                    <span>Built and led multiple biometrics teams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-yellow-400" />
                    <span>Successful FDA/EMA interactions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-yellow-400" />
                    <span>Strategic partnerships with pharma companies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 