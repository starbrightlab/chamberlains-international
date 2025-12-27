import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Management Services | Preserve Property Management',
  description: 'Professional vacation rental and long-term property management in Central Florida. No-contract, transparent service since 2003.',
};

export default function PropertyManagement() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-br from-preserve-green to-green-700">
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 relative mr-3">
              <Image src="/ppm-logo.jpg" alt="Preserve Property Management" fill className="object-contain" />
            </div>
            <h1 className="text-5xl font-bold font-display">Property Management</h1>
          </div>
          <p className="text-xl opacity-90">Professional care for your investment</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-chamberlains-navy mb-4">Preserve Property Management</h2>
            <p className="text-lg text-slate-gray max-w-3xl mx-auto">
              Established in 2003, Preserve Property Management specializes in professional leasing and 
              management of residential and investment properties. We offer both vacation rentals and 
              long-term leasing in Polk County (Davenport) and Osceola County (Champions Gate & Kissimmee).
            </p>
          </div>

          {/* No Contract Promise */}
          <div className="bg-preserve-green/10 p-8 rounded-lg mb-12 text-center">
            <h3 className="text-2xl font-bold text-chamberlains-navy mb-3">No-Contract Philosophy</h3>
            <p className="text-lg text-slate-gray max-w-2xl mx-auto">
              We don't believe in locking our clients into contracts. We're so confident in our services 
              that if we don't deliver what we promise, you're free to move to another company without 
              any penalty. But we know that won't happen.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Vacation Rentals */}
            <div className="bg-white border-2 border-preserve-green/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-chamberlains-navy mb-4">Vacation Rentals</h3>
              <ul className="space-y-3 text-slate-gray">
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Property evaluation and rental pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Professional marketing and listing management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Guest screening and check-in/check-out</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Professional housekeeping services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>24/7 emergency support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Regular property inspections</span>
                </li>
              </ul>
            </div>

            {/* Long-Term Leasing */}
            <div className="bg-white border-2 border-chamberlains-blue/20 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-chamberlains-navy mb-4">Long-Term Leasing</h3>
              <ul className="space-y-3 text-slate-gray">
                <li className="flex items-start">
                  <span className="text-chamberlains-blue mr-2">✓</span>
                  <span>Comprehensive tenant screening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chamberlains-blue mr-2">✓</span>
                  <span>Lease preparation and management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chamberlains-blue mr-2">✓</span>
                  <span>Rent collection and accounting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chamberlains-blue mr-2">✓</span>
                  <span>Property maintenance coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chamberlains-blue mr-2">✓</span>
                  <span>Regular property inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-chamberlains-blue mr-2">✓</span>
                  <span>Legal compliance and documentation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-light-gray p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-chamberlains-navy mb-6 text-center">Additional Services</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Maintenance & Repairs</h4>
                <p className="text-sm text-slate-gray">Qualified tradesmen for all property maintenance needs</p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Pool & Landscaping</h4>
                <p className="text-sm text-slate-gray">Professional pool service and landscape maintenance</p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Security Systems</h4>
                <p className="text-sm text-slate-gray">Installation and monitoring recommendations</p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Interior Design</h4>
                <p className="text-sm text-slate-gray">Furniture packages and property upgrades</p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Property Inspections</h4>
                <p className="text-sm text-slate-gray">Regular monitoring and detailed reports</p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Financial Reporting</h4>
                <p className="text-sm text-slate-gray">Monthly statements and annual tax documents</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-preserve-green/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-chamberlains-navy mb-4">Ready to Protect Your Investment?</h3>
            <p className="text-slate-gray mb-6">Let us show you how professional management maximizes your returns</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14075697595" className="bg-preserve-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                📞 Call (407) 569-7595
              </a>
              <a href="/contact" className="bg-white text-preserve-green border-2 border-preserve-green px-8 py-3 rounded-lg font-semibold hover:bg-preserve-green hover:text-white transition-colors">
                ✉️ Request Information
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
