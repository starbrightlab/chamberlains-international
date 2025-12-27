import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-surface overflow-hidden relative">
        {/* Subtle Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/2" />
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in">
              <h2 className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4">Our Advantage</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-8 leading-tight">
                International Perspective, <br />Local Expertise.
              </h3>
              <p className="text-lg text-muted mb-10 leading-relaxed max-w-xl">
                With over four decades of collective experience, we bridge the gap between 
                global investment standards and Central Florida&apos;s unique real estate landscape.
              </p>
              
              <div className="grid gap-6">
                <FeatureItem 
                  title="Global Reach" 
                  description="Serving a sophisticated clientele across the USA, UK, and Europe."
                />
                <FeatureItem 
                  title="End-to-End Solutions" 
                  description="Seamless transitions from acquisition to professional management."
                />
                <FeatureItem 
                  title="Market Intelligence" 
                  description="Deep insights into Champions Gate, Davenport, and Kissimmee."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
              {/* Stats Cards */}
              <div className="space-y-6 mt-12">
                <StatCard number="40+" label="Years Experience" color="secondary" />
                <StatCard number="100+" label="Properties Managed" color="primary" />
              </div>
              <div className="space-y-6">
                <StatCard number="3" label="Key Service Areas" color="accent" />
                <StatCard number="24/7" label="Dedicated Support" color="primary" />
              </div>
              
              {/* Decorative Circle */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4">Prime Locations</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">Service Communities</h3>
            <p className="text-lg text-muted">
              We specialize in Central Florida&apos;s most prestigious and high-growth resort communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AreaCard 
              title="Champions Gate" 
              description="World-class golf resorts and luxury vacation residences near the heart of the action."
            />
            <AreaCard 
              title="Davenport" 
              description="High-yield investment opportunities and family-oriented communities with excellent amenities."
            />
            <AreaCard 
              title="Kissimmee" 
              description="Established markets offering diverse residential and short-term rental possibilities."
            />
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-5 p-4 rounded-xl hover:bg-primary/5 transition-colors group">
      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
        <svg className="w-3.5 h-3.5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">{title}</h4>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ number, label, color }: { number: string; label: string; color: 'primary' | 'secondary' | 'accent' }) {
  const colorMap = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    accent: 'bg-accent text-white'
  };

  return (
    <div className={`${colorMap[color]} p-8 rounded-2xl shadow-luxury transform transition-transform hover:-translate-y-2 duration-300`}>
      <div className="text-4xl md:text-5xl font-display font-bold mb-2">{number}</div>
      <div className="text-sm font-sans font-medium uppercase tracking-widest opacity-80">{label}</div>
    </div>
  );
}

function AreaCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass-card group hover:bg-primary hover:border-primary transition-all duration-500">
      <h4 className="text-2xl font-display font-bold text-primary mb-4 group-hover:text-white transition-colors">
        {title}
      </h4>
      <p className="text-muted group-hover:text-white/80 transition-colors leading-relaxed">
        {description}
      </p>
      <div className="mt-8 flex justify-end">
        <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-white/40 transition-colors">
          <svg className="w-5 h-5 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
