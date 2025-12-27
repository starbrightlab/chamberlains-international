import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Florida Property | Chamberlains Real Estate',
  description: 'Maximize your property value with expert marketing and negotiation from Chamberlains Real Estate International.',
};

export default function SellProperty() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-br from-warm-accent to-yellow-600">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 font-display">Sell Your Property</h1>
          <p className="text-xl opacity-90">Maximize your value with expert marketing</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-chamberlains-navy mb-6">Expert Property Marketing</h2>
          
          <p className="text-lg text-slate-gray mb-8">
            At Chamberlains Real Estate International, we use comprehensive marketing strategies and 
            40+ years of experience to ensure your property reaches the right buyers and achieves maximum value.
          </p>

          <div className="bg-light-gray p-6 rounded-lg my-8">
            <h3 className="text-2xl font-semibold text-chamberlains-navy mb-4">Our Selling Services</h3>
            <ul className="space-y-3 text-slate-gray">
              <li className="flex items-start">
                <span className="text-warm-accent mr-2">✓</span>
                <span>Professional property valuation and pricing strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-accent mr-2">✓</span>
                <span>High-quality photography and virtual tours</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-accent mr-2">✓</span>
                <span>Multiple Listing Service (MLS) exposure</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-accent mr-2">✓</span>
                <span>International marketing reach</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-accent mr-2">✓</span>
                <span>Open houses and private showings</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-accent mr-2">✓</span>
                <span>Expert negotiation and contract management</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-accent mr-2">✓</span>
                <span>Closing coordination and support</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-chamberlains-navy mb-4 mt-8">Marketing That Works</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl mb-3">📸</div>
              <h4 className="font-semibold text-chamberlains-navy mb-2">Professional Media</h4>
              <p className="text-slate-gray text-sm">High-quality photos and virtual tours that showcase your property</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h4 className="font-semibold text-chamberlains-navy mb-2">Online Presence</h4>
              <p className="text-slate-gray text-sm">MLS, real estate portals, and international marketing</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold text-chamberlains-navy mb-2">Broker Network</h4>
              <p className="text-slate-gray text-sm">Connections with agents and buyers worldwide</p>
            </div>
          </div>

          <div className="bg-warm-accent/10 p-8 rounded-lg text-center my-8">
            <h3 className="text-2xl font-bold text-chamberlains-navy mb-4">Ready to Sell Your Property?</h3>
            <p className="text-slate-gray mb-6">Get a free property valuation and marketing plan</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+14075697595" className="bg-warm-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                📞 Call (407) 569-7595
              </a>
              <a href="/contact" className="bg-white text-warm-accent border-2 border-warm-accent px-8 py-3 rounded-lg font-semibold hover:bg-warm-accent hover:text-white transition-colors">
                ✉️ Request Valuation
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
