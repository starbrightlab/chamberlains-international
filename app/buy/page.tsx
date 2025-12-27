import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acquire Florida Property | Chamberlains Real Estate',
  description: 'Expert acquisition services for local and international buyers seeking premium Florida real estate.',
};

export default function BuyProperty() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/head.jpg" 
            alt="Florida Real Estate" 
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Buying in <span className="text-secondary">Florida</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            From luxury resort residences to strategic investment assets, 
            we provide the expertise needed to navigate the Florida market.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4">Acquisition</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                Your Strategic Buying <br />Partner
              </h3>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Whether you are a local resident looking for your next home or an international investor 
                building a portfolio, Chamberlains provides a bespoke service tailored to your specific goals.
              </p>
              
              <div className="grid gap-8 mt-12">
                <ServiceHighlight 
                  title="Market Intelligence" 
                  description="Detailed comparative market analysis and trend analysis to ensure you make an informed investment. (CMA)"
                />
                <ServiceHighlight 
                  title="Negotiation Advocacy" 
                  description="Aggressive representation to secure the best possible terms and price."
                />
                <ServiceHighlight 
                  title="International Coordination" 
                  description="Expert handling of cross-border transactions and legal requirements."
                />
              </div>
            </div>

            <div className="bg-surface rounded-2xl shadow-luxury border border-border p-10 lg:p-16">
              <h4 className="text-2xl font-display font-bold text-primary mb-8">Comprehensive Services</h4>
              <ul className="space-y-6">
                <BuyingServiceItem text="MLS access and potential off-market searches" />
                <BuyingServiceItem text="In-depth market and property analysis" />
                <BuyingServiceItem text="Professional offer preparation and negotiation" />
                <BuyingServiceItem text="Coordination of inspections and due diligence" />
                <BuyingServiceItem text="Post-purchase management integration" />
              </ul>
              
              <div className="mt-12 pt-10 border-t border-border">
                 <p className="font-bold text-primary uppercase tracking-widest text-sm mb-6">Need Immediate Assistance?</p>
                 <a href="tel:+14075697595" className="btn-primary w-full text-center inline-block">
                   Call (407) 569-7595
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

function BuyingServiceItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-4 text-muted border-b border-border pb-4 last:border-0 last:pb-0">
      <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
      <span className="text-[17px]">{text}</span>
    </li>
  );
}

function ServiceHighlight({ title, description }: { title: string; description: string }) {
  return (
    <div className="group">
      <h4 className="text-xl font-display font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{title}</h4>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  );
}
