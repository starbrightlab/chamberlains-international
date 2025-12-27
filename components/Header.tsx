'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-chamberlains-navy text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Contact */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image 
                src="/logo.png" 
                alt="Chamberlains Real Estate International" 
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <div className="hidden md:block">
              <div className="font-semibold text-sm">Chamberlains Real Estate International</div>
              <a href="tel:+14075697595" className="text-xs opacity-90 hover:text-chamberlains-blue transition-colors">
                +1 (407) 569-7595
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <Link href="/" className="hover:text-chamberlains-blue transition-colors">
              Home
            </Link>
            <Link href="/buy" className="hover:text-chamberlains-blue transition-colors">
              Buy Property
            </Link>
            <Link href="/sell" className="hover:text-chamberlains-blue transition-colors">
              Sell Property
            </Link>
            <Link href="/property-management" className="hover:text-chamberlains-blue transition-colors">
              Property Management
            </Link>
            <Link href="/about" className="hover:text-chamberlains-blue transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-chamberlains-blue transition-colors bg-chamberlains-blue/20 px-4 py-2 rounded">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <nav className="flex flex-col space-y-3 mt-4">
              <Link href="/" className="hover:text-chamberlains-blue transition-colors">
                Home
              </Link>
              <Link href="/buy" className="hover:text-chamberlains-blue transition-colors">
                Buy Property
              </Link>
              <Link href="/sell" className="hover:text-chamberlains-blue transition-colors">
                Sell Property
              </Link>
              <Link href="/property-management" className="hover:text-chamberlains-blue transition-colors">
                Property Management
              </Link>
              <Link href="/about" className="hover:text-chamberlains-blue transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-chamberlains-blue transition-colors">
                Contact
              </Link>
              <a href="tel:+14075697595" className="text-chamberlains-blue font-semibold">
                📞 +1 (407) 569-7595
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
