import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Our Firm | Chamberlains Real Estate & Preserve Management',
  description: 'Meet the team behind Central Florida\'s premier real estate and property management firm. Over 40 years of combined international expertise.',
};

export default function About() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our Legacy</h1>
          <p className="text-xl text-secondary font-sans uppercase tracking-[0.3em] font-medium">40+ Years of Combined Excellence</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4">The Firm</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                Chamberlains Real Estate <br />International
              </h3>
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  Founded on the principles of integrity and unparalleled service, Chamberlains has evolved from 
                  a respected European agency into a global force with deep roots in Central Florida.
                </p>
                <p>
                  Our expansion into Orlando and Fort Lauderdale brings a sophisticated, international perspective 
                   to the local market, serving clients across the USA, Canada, and Europe with a level of 
                  precision rarely found in standard firms.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-surface rounded-2xl shadow-luxury border border-border overflow-hidden relative z-10 p-12 flex flex-col justify-center">
                <h4 className="text-2xl font-display font-bold text-primary mb-6 italic">&ldquo;Our commitment is to provide the specialized real estate service you deserve, keeping you informed on trends in the marketplace using global intelligence.&rdquo;</h4>
                <div className="w-12 h-1 bg-secondary mb-4"></div>
                <p className="font-bold text-primary uppercase tracking-widest text-sm">Terry, Principal Broker</p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl z-0" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center flex-row-reverse">
             <div className="order-2 lg:order-1 relative">
              <div className="aspect-square bg-primary rounded-2xl shadow-luxury overflow-hidden relative z-10 flex items-center justify-center p-16">
                 <div className="text-center text-white">
                    <div className="text-6xl font-display font-bold text-secondary mb-2">2003</div>
                    <p className="uppercase tracking-[0.2em] text-sm opacity-80">Established in Florida</p>
                 </div>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-accent font-sans font-bold uppercase tracking-widest text-sm mb-4">Property Care</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                Preserve Property <br />Management
              </h3>
              <div className="space-y-6 text-lg text-muted leading-relaxed">
                <p>
                  Established in 2003, Preserve was built to solve a critical need: professional, transparent 
                  management for high-value residential and investment properties.
                </p>
                <p>
                  By applying extremely high standards to daily operations, we ensure that owners retain 
                  full control of their investment while we handle the complexities of resort-style 
                  management in Polk and Osceola Counties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-surface border-y border-border">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6 text-center">Our Commitment</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ValueCard 
              title="REALTOR® Standards" 
              description="Subscribing to a strict code of ethics and maintaining a higher level of knowledge."
            />
            <ValueCard 
              title="Global Intelligence" 
              description="Providing specialized services informed by global market trends and statistics."
            />
            <ValueCard 
              title="Ethical Excellence" 
              description="A strong professional team built on unparalleled client service ethics."
            />
            <ValueCard 
              title="Local Authority" 
              description="Deep local knowledge combined with international perspective and connections."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4">Leadership</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary">Our Specialists</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TeamCard 
              name="Terry" 
              role="Principal Broker"
              color="secondary"
              description="With over 40 years of experience in commercial project and sales management, Terry oversees all operations with a focus on financial precision and client advocacy."
            />
            <TeamCard 
              name="Sona" 
              role="Attorney at Law"
              color="primary"
              description="Specializing in real estate and immigration law, Sona provides essential legal oversight for domestic and international property transactions."
            />
            <TeamCard 
              name="Lissette" 
              role="Director of Communications"
              color="accent"
              description="Fluent in English and Spanish, Lissette develops the firm's global communication strategy, branding, and digital infrastructure."
            />
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center group">
      <div className="w-1.5 h-12 bg-secondary/30 mx-auto mb-6 group-hover:bg-secondary transition-colors" />
      <h4 className="text-xl font-display font-bold text-primary mb-4">{title}</h4>
      <p className="text-muted leading-relaxed text-[15px]">{description}</p>
    </div>
  );
}

function TeamCard({ name, role, description, color }: { name: string; role: string; description: string; color: 'primary' | 'secondary' | 'accent' }) {
  const colorMap = {
    primary: 'border-primary text-primary',
    secondary: 'border-secondary text-secondary',
    accent: 'border-accent text-accent'
  };

  return (
    <div className="bg-white p-10 rounded-2xl shadow-soft border border-border hover:border-transparent hover:shadow-luxury transition-all duration-500">
      <div className={`w-12 h-1 border-b-4 mb-8 ${colorMap[color]}`} />
      <h4 className="text-2xl font-display font-bold text-primary mb-1">{name}</h4>
      <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${colorMap[color]}`}>{role}</p>
      <p className="text-muted leading-relaxed italic">&ldquo;{description}&rdquo;</p>
    </div>
  );
}
