import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preserve Property Management | Central Florida',
  description: 'Bespoke property care and vacation rental management with a commitment to excellence and a no-contract philosophy.',
};

export default function PropertyManagement() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/head.jpg" 
            alt="Luxury Property Management" 
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="flex justify-center mb-10">
            <div className="w-40 h-40 relative group">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl group-hover:bg-secondary/40 transition-all duration-700" />
              <Image 
                src="/ppm-logo.png" 
                alt="Preserve Property Management" 
                fill 
                className="object-contain relative z-10" 
                sizes="160px" 
                priority 
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Preserve <span className="text-secondary">Property</span> Management
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Professional care for your investment properties, delivered with 
            unwavering transparency and exceptional standards.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding overflow-hidden">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-24 relative">
             <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary/5 text-9xl font-display font-bold whitespace-nowrap select-none">TRUSTED CARE</div>
            <h2 className="text-accent font-sans font-bold uppercase tracking-[0.3em] text-sm mb-6 relative">The Preserve Promise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
              A Philosophy Built on <br />Performance, Not Contracts.
            </h3>
            <div className="p-10 bg-accent/5 rounded-2xl border border-accent/20 italic text-xl text-primary leading-relaxed shadow-soft">
              &ldquo;We don&apos;t believe in locking our clients into restrictive contracts. We are so confident in 
              the quality of our service that if we don&apos;t deliver excellence, you are free to transition 
              without penalty.&rdquo;
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vacation Rentals */}
            <ManagementCard 
              type="vacation"
              title="Vacation Rentals"
              description="Maximizing revenue through professional marketing and meticulous guest relations for short-term resort stays."
              features={[
                "Global marketing across major travel platforms",
                "Dynamic pricing and occupancy optimization",
                "5-star guest screening and check-in services",
                "Premium housekeeping and linen services",
                "24/7 emergency owner & guest support",
                "Detailed monthly financial performance reports"
              ]}
            />

            {/* Long Term */}
            <ManagementCard 
              type="longterm"
              title="Long-Term Leasing"
              description="Protecting your long-term assets with rigorous tenant selection and proactive maintenance management."
              features={[
                "Comprehensive nationwide tenant screening",
                "Professional lease preparation and legal oversight",
                "Automated rent collection and direct disbursements",
                "Proactive property maintenance coordination",
                "Bi-annual detailed property inspections",
                "Complete legal compliance and documentation"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="section-padding bg-surface border-y border-border">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary">Ancillary Services</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <AncillaryItem title="Maintenance & Repairs" description="Vetted, licensed tradesmen for every property requirement." />
            <AncillaryItem title="Pool & Landscape" description="Specialized care for your outdoor amenities and curb appeal." />
            <AncillaryItem title="Security Systems" description="Modern monitoring solutions for peace of mind." />
            <AncillaryItem title="Interior Design" description="Elevated furniture packages designed to increase rental yields." />
            <AncillaryItem title="Regular Inspections" description="Detailed digital reports with photographic documentation." />
            <AncillaryItem title="Financial Services" description="Seamless tax document preparation and financial reporting." />
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}

function ManagementCard({ title, description, features, type }: { title: string; description: string; features: string[]; type: 'vacation' | 'longterm' }) {
  const accentColor = type === 'vacation' ? 'border-accent' : 'border-secondary';
  const iconColor = type === 'vacation' ? 'text-accent' : 'text-secondary';

  return (
    <div className={`bg-white p-10 lg:p-16 rounded-2xl shadow-luxury border-t-8 ${accentColor} h-full flex flex-col`}>
      <h4 className="text-3xl font-display font-bold text-primary mb-6">{title}</h4>
      <p className="text-muted text-lg mb-12 leading-relaxed">{description}</p>
      <ul className="space-y-5 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-4 text-primary font-medium border-b border-border/50 pb-4 last:border-0 last:pb-0">
            <svg className={`w-5 h-5 ${iconColor} mt-1 shrink-0`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[15px]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AncillaryItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-8 hover:bg-background rounded-2xl transition-all duration-300 group border border-transparent hover:border-border">
      <h4 className="text-xl font-display font-bold text-primary mb-3 group-hover:text-accent transition-colors">{title}</h4>
      <p className="text-muted leading-relaxed text-sm">{description}</p>
    </div>
  );
}
