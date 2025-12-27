import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Property in Central Florida | Chamberlains Real Estate',
  description: 'Find your perfect Florida property with expert guidance from Chamberlains Real Estate International. Serving local and international buyers.',
};

export default function BuyProperty() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-br from-chamberlains-navy to-chamberlains-blue">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 font-display">Buy Property in Florida</h1>
          <p className="text-xl opacity-90">Expert guidance for your perfect Central Florida home</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-chamberlains-navy mb-6">Find Your Perfect Florida Property</h2>
            
            <p className="text-lg text-slate-gray mb-6">
              Whether you're a local buyer or an international investor, Chamberlains Real Estate International 
              provides expert guidance through every step of the property buying process in Central Florida.
            </p>

            <div className="bg-light-gray p-6 rounded-lg my-8">
              <h3 className="text-2xl font-semibold text-chamberlains-navy mb-4">Our Buying Services</h3>
              <ul className="space-y-3 text-slate-gray">
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Property search and MLS access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Market analysis and property valuation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Negotiation and offer preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Inspection coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>Closing assistance and legal coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-preserve-green mr-2">✓</span>
                  <span>International buyer support</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-chamberlains-navy mb-4 mt-8">Why Buy in Central Florida?</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Investment Opportunity</h4>
                <p className="text-slate-gray text-sm">Strong rental market near Disney World and Orlando attractions</p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Quality of Life</h4>
                <p className="text-slate-gray text-sm">Beautiful weather, excellent amenities, and resort-style living</p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Growing Market</h4>
                <p className="text-slate-gray text-sm">Consistent property appreciation and development</p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">No State Income Tax</h4>
                <p className="text-slate-gray text-sm">Florida's tax-friendly environment for residents</p>
              </div>
            </div>

            <div className="bg-chamberlains-blue/10 p-8 rounded-lg text-center my-8">
              <h3 className="text-2xl font-bold text-chamberlains-navy mb-4">Ready to Start Your Property Search?</h3>
              <p className="text-slate-gray mb-6">Contact us today for a free consultation and property recommendations</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+14075697595" className="bg-chamberlains-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  📞 Call (407) 569-7595
                </a>
                <a href="/contact" className="bg-white text-chamberlains-blue border-2 border-chamberlains-blue px-8 py-3 rounded-lg font-semibold hover:bg-chamberlains-blue hover:text-white transition-colors">
                  ✉️ Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
