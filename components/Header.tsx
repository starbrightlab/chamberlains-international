'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-warm-white border-b border-soft-gray sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Info */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
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
            <div className="hidden lg:block">
              <div className="font-semibold text-base leading-tight text-navy-dark">
                Chamberlains Real Estate International
              </div>
              <a 
                href="tel:+14075697595" 
                className="text-sm text-gold-dark hover:text-gold-primary transition-colors font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                +1 (407) 569-7595
              </a>
            </div>
            <div className="hidden md:block lg:hidden">
              <div className="font-semibold text-sm leading-tight text-navy-dark">
                Chamberlains Real Estate
              </div>
              <a 
                href="tel:+14075697595" 
                className="text-xs text-gold-dark hover:text-gold-primary transition-colors font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                (407) 569-7595
              </a>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-navy-text hover:text-gold-primary hover:bg-gold-light/30 rounded-lg transition-all text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/buy" 
              className="px-4 py-2 text-navy-text hover:text-gold-primary hover:bg-gold-light/30 rounded-lg transition-all text-sm font-medium"
            >
              Buy
            </Link>
            <Link 
              href="/sell" 
              className="px-4 py-2 text-navy-text hover:text-gold-primary hover:bg-gold-light/30 rounded-lg transition-all text-sm font-medium"
            >
              Sell
            </Link>
            <Link 
              href="/property-management" 
              className="px-4 py-2 text-navy-text hover:text-gold-primary hover:bg-gold-light/30 rounded-lg transition-all text-sm font-medium whitespace-nowrap"
            >
              Management
            </Link>
            <Link 
              href="/about" 
              className="px-4 py-2 text-navy-text hover:text-gold-primary hover:bg-gold-light/30 rounded-lg transition-all text-sm font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="ml-2 bg-gold-primary hover:bg-gold-dark text-white px-6 py-2 rounded-lg transition-all text-sm font-semibold shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-navy-dark hover:bg-gold-light/30 rounded-lg transition-colors"
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
          <div className="md:hidden mt-4 pb-4 border-t border-soft-gray pt-4">
            <nav className="flex flex-col gap-2">
              <Link 
                href="/" 
                className="px-4 py-3 text-navy-text hover:bg-gold-light/30 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/buy" 
                className="px-4 py-3 text-navy-text hover:bg-gold-light/30 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Buy Property
              </Link>
              <Link 
                href="/sell" 
                className="px-4 py-3 text-navy-text hover:bg-gold-light/30 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sell Property
              </Link>
              <Link 
                href="/property-management" 
                className="px-4 py-3 text-navy-text hover:bg-gold-light/30 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Property Management
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-3 text-navy-text hover:bg-gold-light/30 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-3 text-navy-text hover:bg-gold-light/30 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="tel:+14075697595" 
                className="mt-2 px-4 py-3 bg-gold-primary hover:bg-gold-dark text-white rounded-lg transition-colors font-semibold text-center"
              >
                📞 Call (407) 569-7595
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
