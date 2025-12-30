'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 relative transition-transform duration-300 group-hover:scale-105">
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
              <div className={`text-xl font-display font-bold transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white'}`}>
                Chamberlains <span className={`${scrolled ? 'text-secondary' : 'text-secondary-dark'} font-sans font-medium text-base uppercase tracking-widest ml-1`}>International</span>
              </div>
              <div className={`text-xs font-medium tracking-wider uppercase transition-colors duration-300 ${scrolled ? 'text-muted opacity-80' : 'text-white/70'}`}>Real Estate & Property Management</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              <NavLink href="/" scrolled={scrolled}>Home</NavLink>
              <NavLink href="/buy" scrolled={scrolled}>Buy</NavLink>
              <NavLink href="/search" scrolled={scrolled}>Search</NavLink>
              <NavLink href="/sell" scrolled={scrolled}>Sell</NavLink>
              <NavLink href="/property-management" scrolled={scrolled}>Management</NavLink>
              <NavLink href="/about" scrolled={scrolled}>About</NavLink>
            </div>
            
            <Link 
              href="/contact" 
              className={`${scrolled ? 'btn-secondary' : 'bg-white text-primary hover:bg-secondary hover:text-white'} px-7 py-2.5 text-sm rounded-lg font-semibold transition-all duration-300 shadow-lg active:scale-[0.98]`}
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-primary hover:bg-primary/5' : 'text-white hover:bg-white/10'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`md:hidden absolute top-full left-0 right-0 bg-surface shadow-luxury transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[500px] border-t border-border' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col p-6 gap-4">
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/buy" onClick={() => setMobileMenuOpen(false)}>Buy</MobileNavLink>
            <MobileNavLink href="/search" onClick={() => setMobileMenuOpen(false)}>Search Properties</MobileNavLink>
            <MobileNavLink href="/sell" onClick={() => setMobileMenuOpen(false)}>Sell</MobileNavLink>
            <MobileNavLink href="/property-management" onClick={() => setMobileMenuOpen(false)}>Management</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <Link 
              href="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-secondary w-full text-center mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) {
  return (
    <Link 
      href={href} 
      className={`text-[15px] font-medium transition-all duration-300 relative group ${
        scrolled ? 'text-primary/80 hover:text-primary' : 'text-white/90 hover:text-white'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${scrolled ? 'bg-secondary' : 'bg-white'} transition-all duration-300 group-hover:w-full`}></span>
    </Link>
  );
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="text-lg font-medium text-primary hover:text-secondary transition-colors py-2 border-b border-border/50"
    >
      {children}
    </Link>
  );
}
