import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[700px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/head.jpg')" }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/70" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 font-display">
          Your Gateway to<br />Florida Real Estate
        </h1>
        <p className="text-xl sm:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
          International expertise. Local knowledge. Professional property management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/buy"
            className="bg-white text-navy hover:bg-gray-100 px-10 py-4 rounded-md text-lg font-bold transition-colors shadow-xl"
          >
            Find Your Property
          </Link>
          <Link 
            href="/property-management"
            className="bg-gold text-white hover:bg-gold/90 px-10 py-4 rounded-md text-lg font-bold transition-colors shadow-xl"
          >
            Manage My Property
          </Link>
        </div>
      </div>
    </section>
  );
}
