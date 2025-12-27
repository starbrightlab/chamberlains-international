'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission (Netlify Forms or email service)
    alert('Form submission will be implemented with email service');
  };

  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-br from-chamberlains-navy to-chamberlains-blue">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 font-display">Contact Us</h1>
          <p className="text-xl opacity-90">We're here to help with all your real estate needs</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-chamberlains-navy mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-gray mb-8">
                Whether you're looking to buy, sell, or manage property in Central Florida, 
                we're here to help. Contact us today for a free consultation.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-chamberlains-navy mb-2">📍 Office Location</h3>
                  <p className="text-slate-gray">
                    213 Cardinal Court<br />
                    Champions Gate, FL 33896<br />
                    United States
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-chamberlains-navy mb-2">📞 Phone</h3>
                  <p className="text-slate-gray">
                    Office: <a href="tel:+14075697595" className="text-chamberlains-blue hover:underline">+1 (407) 569-7595</a><br />
                    Fax: <a href="tel:+18638528418" className="text-slate-gray">+1 (863) 852-8418</a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-chamberlains-navy mb-2">✉️ Email</h3>
                  <p className="text-slate-gray">
                    <a href="mailto:info@chamberlainsinternational.com" className="text-chamberlains-blue hover:underline">
                      info@chamberlainsinternational.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-chamberlains-navy mb-2">⏰ Office Hours</h3>
                  <p className="text-slate-gray">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-light-gray p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-chamberlains-navy mb-6">Send Us A Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-chamberlains-navy mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chamberlains-blue focus:border-transparent"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-chamberlains-navy mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chamberlains-blue focus:border-transparent"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-chamberlains-navy mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chamberlains-blue focus:border-transparent"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-chamberlains-navy mb-1">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chamberlains-blue focus:border-transparent"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option value="">Select a subject...</option>
                      <option value="buy">Buying Property</option>
                      <option value="sell">Selling Property</option>
                      <option value="management">Property Management</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-chamberlains-navy mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chamberlains-blue focus:border-transparent"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-chamberlains-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-xs text-slate-gray mt-4 text-center">
                  * Required fields. We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
