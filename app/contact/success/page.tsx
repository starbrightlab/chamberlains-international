import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Chamberlains Real Estate',
  description: 'Thank you for contacting Chamberlains Real Estate International. We will be in touch shortly.',
};

export default function ContactSuccess() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      <section className="section-padding pt-48 bg-surface">
        <div className="container-custom max-w-3xl text-center">
          {/* Success Icon */}
          <div className="mb-12 relative inline-block">
            <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto relative z-10">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl z-0 scale-150 opacity-50" />
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Inquiry <span className="text-secondary">Received</span>
          </h1>
          
          <p className="text-xl text-muted mb-12 leading-relaxed">
            Thank you for reaching out to Chamberlains Real Estate International & Preserve Property Management. 
            A specialist will review your request and contact you within 24 hours.
          </p>

          <div className="glass-card text-left p-10 mb-12 border-border/40">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-6">What Happens Next?</h2>
            <div className="space-y-6">
              <SuccessStep number="01" title="Expert Review" description="Our leadership team will personally review your inquiry to assign the best specialist for your needs." />
              <SuccessStep number="02" title="Direct Contact" description="We will reach out via your preferred method within one business day." />
              <SuccessStep number="03" title="Private Consultation" description="We'll schedule a comprehensive discussion to detail how we can elevate your property goals." />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/search"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search Properties
            </Link>
            <a 
              href="tel:+14075697595"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 004.872 4.872l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Immediate Assistance
            </a>
            <Link 
              href="/"
              className="btn-outline flex items-center justify-center"
            >
              Return Home
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-20 pt-10 border-t border-border">
            <p className="text-xs font-bold uppercase tracking-widest text-muted mb-6">Explore Our Services</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              <FooterLink href="/search">Property Search</FooterLink>
              <FooterLink href="/buy">Buying</FooterLink>
              <FooterLink href="/sell">Selling</FooterLink>
              <FooterLink href="/property-management">Management</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SuccessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6">
      <div className="text-2xl font-display font-bold text-secondary/30">{number}</div>
      <div>
        <h3 className="font-bold text-primary mb-1">{title}</h3>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-bold text-primary hover:text-secondary transition-colors uppercase tracking-widest">
      {children}
    </Link>
  );
}
