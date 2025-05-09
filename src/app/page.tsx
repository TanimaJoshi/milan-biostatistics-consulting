import Image from 'next/image';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import { FaChartLine, FaFlask, FaDna, FaUserMd, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4 relative">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Expert Biostatistics Consulting
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Transforming complex data into actionable insights for clinical research and healthcare innovation
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Link href="/contact" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
              Get Started
            </Link>
            <Link href="/about"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Key Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaChartLine className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">20+ Years</h3>
            <p className="text-gray-600">Experience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaFlask className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">300+</h3>
            <p className="text-gray-600">Clinical Trials</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaDna className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-600">FDA Approvals</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <FaUserMd className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">100+</h3>
            <p className="text-gray-600">Team Leadership</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-600 animate-scroll">
          <FaArrowDown className="text-2xl" />
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p className="mb-2">Email: milan_mangeshkar@yahoo.com</p>
              <p>Phone: 415-254-0803</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p>San Francisco, CA</p>
              <p>United States</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} Milan Biostatistics Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 