import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/head.jpg')",
          opacity: 0.4
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
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
            className="bg-chamberlains-blue hover:bg-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Find Your Property
          </Link>
          <Link 
            href="/property-management"
            className="bg-preserve-green hover:bg-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Manage My Property
          </Link>
        </div>
      </div>
    </section>
  );
}
