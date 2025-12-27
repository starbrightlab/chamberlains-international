import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sell Your Florida Residence | Chamberlains Real Estate',
  description: 'Maximize the value of your Florida property with our international marketing reach and 40 years of expertise.',
};

export default function SellProperty() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/head.jpg" 
            alt="Selling Luxury Florida Real Estate" 
            fill
            className="object-cover opacity-30 scale-x-[-1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Exquisite <span className="text-secondary">Marketing</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Elevating your property to reach a global audience of qualified buyers 
            with precision and sophistication.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="order-2 lg:order-1 relative">
               <div className="aspect-[4/5] bg-surface rounded-2xl shadow-luxury border border-border overflow-hidden relative z-10 p-12 flex flex-col justify-center">
                 <div className="space-y-12">
                   <MarketingPillar 
                     icon="📸" 
                     title="Cinematic Media" 
                     description="High-definition photography and 4K virtual tours that capture the essence of your home."
                   />
                   <MarketingPillar 
                     icon="🌐" 
                     title="Global Exposure" 
                     description="Instant listing on major international portals and our exclusive global network."
                   />
                   <MarketingPillar 
                     icon="📊" 
                     title="Data-Driven Pricing" 
                     description="Strategic valuation to ensure your property is positioned for maximum interest."
                   />
                 </div>
               </div>
               <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4">The Strategy</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                Designed to Achieve <br />Maximum Value
              </h3>
              <p className="text-lg text-muted mb-10 leading-relaxed">
                Selling a property in today's market requires more than just a listing. 
                It requires a comprehensive strategy that combines traditional expertise 
                with modern digital reach.
              </p>
              
              <div className="space-y-6">
                <SellingPoint title="Bespoke Marketing Plans" description="Every home is unique; your marketing should be too." />
                <SellingPoint title="Expert Negotiation" description="Securing the highest possible return for your investment." />
                <SellingPoint title="Seamless Coordination" description="Managing every detail from listing to the final closing." />
              </div>

              <div className="mt-12">
                <Link 
                  href="/contact" 
                  className="btn-secondary text-lg px-10 inline-block"
                >
                  Request a Valuation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-surface border-y border-border">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary">Full-Service Selling</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard text="Professional staging consultation" />
            <ServiceCard text="Premium signage and brochures" />
            <ServiceCard text="Social media ad campaigns" />
            <ServiceCard text="Broker open house events" />
            <ServiceCard text="Direct email marketing" />
            <ServiceCard text="International portal distribution" />
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}

import Link from 'next/link';

function MarketingPillar({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="text-4xl">{icon}</div>
      <div>
        <h4 className="text-xl font-display font-bold text-primary mb-2">{title}</h4>
        <p className="text-muted leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  );
}

function SellingPoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-1.5 h-6 bg-secondary mt-1 shrink-0" />
      <div>
        <h4 className="font-bold text-primary">{title}</h4>
        <p className="text-muted text-sm">{description}</p>
      </div>
    </div>
  );
}

function ServiceCard({ text }: { text: string }) {
  return (
    <div className="p-8 bg-background rounded-xl border border-border text-center hover:border-secondary/30 transition-colors">
      <p className="font-medium text-primary uppercase tracking-wider text-xs">{text}</p>
    </div>
  );
}
