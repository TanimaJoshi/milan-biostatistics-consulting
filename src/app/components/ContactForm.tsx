'use client';

import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">Get in Touch</h2>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-semibold text-blue-800 mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-2xl text-blue-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">milan_mangeshkar@yahoo.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-2xl text-blue-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-gray-600">415-254-0803</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-2xl text-blue-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Location</h4>
                      <p className="text-gray-600">San Francisco, CA</p>
                      <p className="text-gray-600">Available for remote consultations worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaClock className="text-2xl text-blue-600 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Office Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM PST</p>
                      <p className="text-gray-600">Weekends: By appointment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 