import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with Brand Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary opacity-95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-accent),transparent_50%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--color-secondary),transparent_50%)] opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        <div className="glass-card bg-white/5 border-white/10 text-white text-center md:text-left py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to <span className="text-secondary">Transform</span> Your Florida Property Journey?
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-0">
              Whether you are looking to acquire a luxury residence, sell your property at a premium, 
              or require expert management services, we are here to exceed your expectations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 shrink-0">
            <a 
              href="tel:+14075697595"
              className="btn-secondary text-lg flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 004.872 4.872l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <Link 
              href="/contact"
              className="bg-white text-primary hover:bg-background px-10 py-3.5 rounded-lg font-bold transition-all text-center flex items-center justify-center"
            >
              Send Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
