import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property Search | Chamberlains Real Estate',
  description: 'Search for properties on the market in Florida using our interactive MLS search tool.',
};

export default function SearchPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/head.jpg" 
            alt="Florida Real Estate Search" 
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Property <span className="text-secondary">Search</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Explore the latest listings in the Florida market with our real-time MLS integration.
          </p>
        </div>
      </section>

      {/* Search Tool Section */}
      <section className="section-padding py-12 lg:py-20">
        <div className="container-custom">
          <div className="bg-surface rounded-2xl shadow-luxury border border-border overflow-hidden">
            <div className="p-6 md:p-10 border-b border-border bg-white">
              <h2 className="text-3xl font-display font-bold text-primary mb-4">MLS Property Finder</h2>
              <p className="text-muted leading-relaxed">
                Use the tool below to filter properties by location, price, type, and more. All listings are updated in real-time directly from the Stellar MLS.
              </p>
            </div>
            
            <div className="relative w-full h-[1000px] md:h-[1200px]">
              <iframe 
                src="https://stellar.mlsmatrix.com/Matrix/public/IDX.aspx?idx=a022599" 
                className="w-full h-full border-0"
                title="MLS Property Search"
                allowFullScreen
              />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted">
              Property data provided by Stellar MLS. Listings are updated frequently.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-12">
            <SearchFeature 
              title="Real-Time Data" 
              description="Direct connection to the Stellar MLS ensures you see listings the moment they hit the market."
            />
            <SearchFeature 
              title="Global Perspective" 
              description="Our tools are designed for both local buyers and international investors seeking Florida assets."
            />
            <SearchFeature 
              title="Expert Guidance" 
              description="Found something you like? Our team is ready to provide deep-dive analysis on any listing."
            />
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}

function SearchFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-xl font-display font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  );
}

