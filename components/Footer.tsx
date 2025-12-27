import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Chamberlains Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 relative mr-3 flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="Chamberlains" 
                  fill 
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <h3 className="font-semibold text-sm">Chamberlains Real Estate</h3>
            </div>
            <p className="text-sm opacity-75">
              International real estate expertise serving Central Florida since 2003.
            </p>
          </div>

          {/* Preserve Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 relative mr-3 flex-shrink-0">
                <Image 
                  src="/ppm-logo.png" 
                  alt="Preserve" 
                  fill 
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <h3 className="font-semibold text-sm">Preserve Property Management</h3>
            </div>
            <p className="text-sm opacity-75">
              Professional property management and vacation rental services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gold-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/buy" className="opacity-75 hover:opacity-100 hover:text-gold-primary transition-all">Buy Property</Link></li>
              <li><Link href="/sell" className="opacity-75 hover:opacity-100 hover:text-gold-primary transition-all">Sell Property</Link></li>
              <li><Link href="/property-management" className="opacity-75 hover:opacity-100 hover:text-gold-primary transition-all">Property Management</Link></li>
              <li><Link href="/about" className="opacity-75 hover:opacity-100 hover:text-gold-primary transition-all">About Us</Link></li>
              <li><Link href="/contact" className="opacity-75 hover:opacity-100 hover:text-gold-primary transition-all">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-gold-primary">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-75">
                213 Cardinal Court<br />
                Champions Gate, FL 33896
              </li>
              <li>
                <a href="tel:+14075697595" className="opacity-75 hover:opacity-100 hover:text-gold-primary transition-all">
                  +1 (407) 569-7595
                </a>
              </li>
              <li>
                <a href="tel:+18638528418" className="opacity-75 hover:text-gold-primary transition-all">
                  Fax: +1 (863) 852-8418
                </a>
              </li>
              <li>
                <a href="mailto:info@chamberlainsinternational.com" className="opacity-75 hover:opacity-100 hover:text-gold-primary transition-all">
                  info@chamberlainsinternational.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75 gap-4">
            <p>© {new Date().getFullYear()} Chamberlains Real Estate International, LLC. All rights reserved.</p>
            <p>Website by <a href="https://starbrightlab.com" className="hover:text-gold-primary transition-colors">Starbright Lab LLC</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
