import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-chamberlains-navy mb-6">
                Why Choose Chamberlains & Preserve?
              </h2>
              <p className="text-lg text-slate-gray mb-6">
                With over 40 years of combined experience in real estate and property management, 
                we bring international expertise to the Central Florida market.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-preserve-green mr-3 mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold text-chamberlains-navy mb-1">International Reach</h3>
                    <p className="text-sm text-slate-gray">Serving clients from USA, UK, Europe, and beyond</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-preserve-green mr-3 mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold text-chamberlains-navy mb-1">Full-Service Solutions</h3>
                    <p className="text-sm text-slate-gray">From purchase to property management, we handle it all</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-preserve-green mr-3 mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold text-chamberlains-navy mb-1">Local Expertise</h3>
                    <p className="text-sm text-slate-gray">Deep knowledge of Champions Gate, Davenport, and Kissimmee</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-preserve-green mr-3 mt-1">✓</div>
                  <div>
                    <h3 className="font-semibold text-chamberlains-navy mb-1">Professional Standards</h3>
                    <p className="text-sm text-slate-gray">NAR REALTOR® members committed to excellence</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-chamberlains-blue/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-chamberlains-blue mb-2">40+</div>
                <div className="text-sm text-slate-gray">Years Experience</div>
              </div>
              <div className="bg-preserve-green/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-preserve-green mb-2">100s</div>
                <div className="text-sm text-slate-gray">Properties Managed</div>
              </div>
              <div className="bg-warm-accent/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-warm-accent mb-2">3</div>
                <div className="text-sm text-slate-gray">Service Areas</div>
              </div>
              <div className="bg-chamberlains-navy/10 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-chamberlains-navy mb-2">24/7</div>
                <div className="text-sm text-slate-gray">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-chamberlains-navy mb-4">Service Areas</h2>
            <p className="text-lg text-slate-gray">
              Proudly serving Central Florida's most desirable communities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-chamberlains-navy mb-2">Champions Gate</h3>
              <p className="text-sm text-slate-gray">
                Our headquarters location, offering easy access to world-class golf and resort living.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-chamberlains-navy mb-2">Davenport</h3>
              <p className="text-sm text-slate-gray">
                Perfect for vacation rentals and investment properties near Disney World.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-chamberlains-navy mb-2">Kissimmee</h3>
              <p className="text-sm text-slate-gray">
                Growing market with excellent opportunities for both buyers and investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
