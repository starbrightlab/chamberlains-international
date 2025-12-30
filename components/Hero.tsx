'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image with elegant mask */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/head.jpg" 
          alt="Florida Luxury Real Estate" 
          fill
          className="object-cover object-center scale-105 animate-subtle-zoom"
          priority
        />
        {/* Sophisticated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/30" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1.1] animate-fade-in-up animation-delay-200 drop-shadow-2xl">
            Elevating Your <br />
            <span className="text-secondary drop-shadow-none">Florida</span> Experience
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in-up shadow-lg">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            International Expertise • Local Excellence
          </div>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl leading-relaxed animate-fade-in-up animation-delay-400 drop-shadow-lg">
            Boutique real estate services and premium property management 
            for the most discerning local and international clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up animation-delay-600">
            <Link 
              href="/search"
              className="btn-secondary text-lg px-10 shadow-xl hover:scale-105 transition-transform"
            >
              Search Properties
            </Link>
            <Link 
              href="/property-management"
              className="bg-white backdrop-blur-md border-2 border-white text-primary hover:bg-white hover:text-primary text-lg px-10 py-3.5 rounded-lg font-semibold transition-all duration-300 shadow-xl active:scale-[0.98] hover:scale-105"
            >
              Management Services
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s infinite alternate ease-in-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
}
