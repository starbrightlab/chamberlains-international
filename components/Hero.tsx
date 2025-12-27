import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-navy-dark to-navy-primary">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/head.jpg')",
          opacity: 0.3
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display leading-tight">
          Your Gateway to Florida Real Estate
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          International expertise. Local knowledge. Professional property management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/buy"
            className="bg-blue-accent hover:bg-blue-500 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Find Your Property
          </Link>
          <Link 
            href="/property-management"
            className="bg-gold-accent hover:bg-gold-accent/90 text-navy-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Manage My Property
          </Link>
        </div>
      </div>
    </section>
  );
}
