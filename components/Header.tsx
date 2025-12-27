'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 relative">
              <Image 
                src="/logo.png" 
                alt="Chamberlains Real Estate" 
                fill
                className="object-contain"
                sizes="48px"
                priority
              />
            </div>
            <div className="hidden lg:block">
              <div className="text-lg font-bold text-navy">Chamberlains Real Estate International</div>
              <div className="text-sm text-slate">+1 (407) 569-7595</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-navy font-medium hover:text-gold transition-colors">Home</Link>
            <Link href="/buy" className="text-navy font-medium hover:text-gold transition-colors">Buy</Link>
            <Link href="/sell" className="text-navy font-medium hover:text-gold transition-colors">Sell</Link>
            <Link href="/property-management" className="text-navy font-medium hover:text-gold transition-colors">Management</Link>
            <Link href="/about" className="text-navy font-medium hover:text-gold transition-colors">About</Link>
            <Link 
              href="/contact" 
              className="bg-gold hover:bg-gold/90 text-white px-6 py-2.5 rounded-md font-semibold transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-navy font-medium">Home</Link>
              <Link href="/buy" className="text-navy font-medium">Buy</Link>
              <Link href="/sell" className="text-navy font-medium">Sell</Link>
              <Link href="/property-management" className="text-navy font-medium">Management</Link>
              <Link href="/about" className="text-navy font-medium">About</Link>
              <Link href="/contact" className="bg-gold text-white px-6 py-3 rounded-md font-semibold text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
