import Link from 'next/link';

const services = [
  {
    title: 'Bespoke Buying',
    description: 'Personalized property search and acquisition for international investors and local families alike.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: 'text-primary',
    link: '/buy'
  },
  {
    title: 'Preserve Management',
    description: 'Comprehensive property care, from vacation rental optimization to long-term asset management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'text-accent',
    link: '/property-management'
  },
  {
    title: 'Strategic Selling',
    description: 'Elevated marketing strategies designed to maximize value and reach qualified global buyers.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-secondary',
    link: '/sell'
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-6">
            Comprehensive Real Estate <br />& Management Solutions
          </h3>
          <p className="text-lg text-muted max-w-2xl leading-relaxed">
            From first-time buyers to international investors, we provide 
            the local knowledge and global reach needed to succeed in Florida's dynamic market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-10 rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-500 border border-border/50 hover:border-secondary/20 flex flex-col h-full"
            >
              <div className={`w-16 h-16 ${service.color} bg-background rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-display font-bold text-primary mb-4">
                {service.title}
              </h4>
              <p className="text-muted mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="inline-flex items-center text-primary font-bold tracking-tight hover:text-secondary transition-colors group/link"
              >
                Learn More
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
