import Image from 'next/image';
import { FaChartLine, FaClipboardCheck, FaFileAlt, FaLaptopCode, FaUserMd, FaChalkboardTeacher } from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaChartLine className="w-8 h-8 text-blue-600" />,
    title: "Statistical Analysis",
    description: "Comprehensive statistical analysis using advanced methodologies for clinical trials, observational studies, and research projects."
  },
  {
    icon: <FaClipboardCheck className="w-8 h-8 text-blue-600" />,
    title: "Clinical Trial Design",
    description: "Expert guidance in designing robust clinical trials, including sample size calculations, randomization strategies, and protocol development."
  },
  {
    icon: <FaFileAlt className="w-8 h-8 text-blue-600" />,
    title: "Regulatory Support",
    description: "Assistance with FDA submissions, including statistical analysis plans, study reports, and regulatory documentation."
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />,
    title: "Data Management",
    description: "Efficient data management solutions, including database design, data cleaning, and quality control procedures."
  },
  {
    icon: <FaUserMd className="w-8 h-8 text-blue-600" />,
    title: "Medical Research",
    description: "Statistical support for medical research, including study design, power analysis, and results interpretation."
  },
  {
    icon: <FaChalkboardTeacher className="w-8 h-8 text-blue-600" />,
    title: "Statistical Consulting",
    description: "One-on-one consulting sessions to discuss your research needs and develop tailored statistical solutions."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Comprehensive biostatistics consulting services to support your research from conception to publication.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-500 transition-colors">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 