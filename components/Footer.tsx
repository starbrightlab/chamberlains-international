import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-24 pb-12 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-8">
              <div className="w-12 h-12 relative">
                <Image 
                  src="/logo.png" 
                  alt="Chamberlains" 
                  fill 
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="text-xl font-display font-bold block">Chamberlains</span>
                <span className="text-xs text-secondary uppercase tracking-widest font-sans">International</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
              Delivering bespoke real estate experiences and professional property management 
              with an international perspective since 2003.
            </p>
            {/* Social Links 
            <div className="flex gap-4">
              <SocialLink href="#" label="Facebook" />
              <SocialLink href="#" label="Instagram" />
              <SocialLink href="#" label="LinkedIn" />
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 text-secondary">Expertise</h4>
            <ul className="space-y-4">
              <FooterLink href="/search">Property Search</FooterLink>
              <FooterLink href="/buy">Buying Property</FooterLink>
              <FooterLink href="/sell">Selling Property</FooterLink>
              <FooterLink href="/property-management">Property Management</FooterLink>
              <FooterLink href="/property-management">Vacation Rentals</FooterLink>
              <FooterLink href="/property-management">Long-Term Leasing</FooterLink>
              <FooterLink href="/about">About Our Firm</FooterLink>
              <FooterLink href="/contact">Private Consultation</FooterLink>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-display font-bold mb-8 text-secondary">Offices</h4>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-white mb-2 uppercase tracking-tighter text-sm">Headquarters</p>
                <p className="text-white/70 text-[15px] leading-relaxed">
                  213 Cardinal Court<br />
                  Champions Gate, FL 33896
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <a href="tel:+14075697595" className="text-white hover:text-secondary transition-colors inline-flex items-center gap-2">
                  <span className="text-xs">PH:</span> +1 (407) 569-7595
                </a>
                <a href="mailto:tdonaghue@tampabay.rr.com" className="text-white/70 hover:text-white transition-colors text-[15px]">
                  tdonaghue@tampabay.rr.com
                </a>
              </div>
            </div>
          </div>

          {/* Credentials
          <div>
            <h4 className="text-lg font-display font-bold mb-8 text-secondary">Affiliations</h4>
            <div className="grid grid-cols-2 gap-6 opacity-60">
              <div className="h-12 flex items-center justify-center border border-white/20 rounded-lg text-[10px] text-center p-2 uppercase tracking-widest">NAR® REALTOR®</div>
              <div className="h-12 flex items-center justify-center border border-white/20 rounded-lg text-[10px] text-center p-2 uppercase tracking-widest">MLS® Search</div>
              <div className="h-12 flex items-center justify-center border border-white/20 rounded-lg text-[10px] text-center p-2 uppercase tracking-widest">EHO</div>
              <div className="h-12 flex items-center justify-center border border-white/20 rounded-lg text-[10px] text-center p-2 uppercase tracking-widest">FAR Member</div>
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-white/50">
          <p>© {currentYear} Chamberlains Real Estate International, Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <p>Design by <a href="https://starbrightlab.com" className="text-secondary hover:text-white transition-colors">Starbright Lab</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-white/70 hover:text-secondary transition-all duration-300 flex items-center group"
      >
        <span className="w-0 group-hover:w-3 h-[1px] bg-secondary mr-0 group-hover:mr-2 transition-all"></span>
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all group"
      aria-label={label}
    >
      <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-125 transition-transform" />
    </a>
  );
}
