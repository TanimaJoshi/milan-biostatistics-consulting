import { FaGraduationCap, FaBook, FaUniversity, FaAward, FaFileAlt } from 'react-icons/fa';

export default function EducationPage() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-16">Education & Publications</h1>

        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 flex items-center">
            <FaGraduationCap className="mr-4" />
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <FaUniversity className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Ph.D. in Statistics</h3>
                  <p className="text-lg text-gray-700">The Ohio State University</p>
                  <p className="text-gray-600">2000 - 2003</p>
                  <p className="mt-2 text-gray-700">Specialized in Biostatistics and Clinical Trial Design</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <FaUniversity className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">M.S. in Statistics</h3>
                  <p className="text-lg text-gray-700">The Ohio State University</p>
                  <p className="text-gray-600">1998 - 2000</p>
                  <p className="mt-2 text-gray-700">Focus on Statistical Methods and Data Analysis</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <FaUniversity className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">B.S. in Statistics</h3>
                  <p className="text-lg text-gray-700">University of Mumbai</p>
                  <p className="text-gray-600">1994 - 1998</p>
                  <p className="mt-2 text-gray-700">Foundation in Statistical Theory and Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div>
          <h2 className="text-3xl font-semibold text-blue-800 mb-8 flex items-center">
            <FaBook className="mr-4" />
            Publications
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Research Publications</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">
                      Sherman SI, Clary DO, Elisei R, et al. Correlative analyses of RET and RAS mutations in a phase 3 trial of cabozantinib in patients with progressive, metastatic medullary thyroid cancer.
                    </p>
                    <p className="text-blue-600 font-semibold mt-1">Cancer. 2016;122(24):3856-3864</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">
                      Hessel C, Mangeshkar M, Motzer RJ, et al. Evaluation of the novel "trial within a trial" design of METEOR, a randomized phase 3 trial of cabozantinib versus everolimus in patients with advanced renal cell carcinoma.
                    </p>
                    <p className="text-blue-600 font-semibold mt-1">Ann Oncol. 2016;27(6 suppl:815P)</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">
                      Cella D, Escudier B, Tannir N, et al. Quality of life in the phase 3 METEOR trial of cabozantinib vs everolimus for advanced renal cell carcinoma.
                    </p>
                    <p className="text-blue-600 font-semibold mt-1">Ann Oncol. 2016;27(6 suppl: 816P)</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">
                      Escudier BJ, Motzer RJ, Powles T, et al. Subgroup analyses of METEOR, a randomized phase 3 trial of cabozantinib versus everolimus in patients with advanced renal cell carcinoma.
                    </p>
                    <p className="text-blue-600 font-semibold mt-1">J Clin Oncol. 2016;34(suppl 2S; abstr 499)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-blue-900 mb-6">Earlier Publications</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">
                      Basch EM, Scholz MC, De Bono JS, et al. Final analysis of COMET-2: Cabozantinib versus mitoxantrone/prednisone in metastatic castration-resistant prostate cancer patients with moderate to severe pain.
                    </p>
                    <p className="text-blue-600 font-semibold mt-1">J Clin Oncol. 2015;33(suppl 7; abstr 141)</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">
                      Sherman SI, Cohen E, Schoffski P, et al. Efficacy of cabozantinib in a phase 3 study of medullary thyroid cancer patients with RET or RAS mutations.
                    </p>
                    <p className="text-blue-600 font-semibold mt-1">Eur Thyroid J. 2013;2(suppl 1;15)</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <FaFileAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">
                      Elisei R, Mueller S, Schoffski P, et al. Clinical and biochemical activity in the EXAM trial, a phase 3 study of cabozantinib in patients with hereditary and non-hereditary medullary thyroid cancer.
                    </p>
                    <p className="text-blue-600 font-semibold mt-1">Eur Thyroid J. 2012;1(suppl 1;75-76)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 