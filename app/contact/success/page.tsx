import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Chamberlains Real Estate',
  description: 'Thank you for contacting Chamberlains Real Estate International',
};

export default function ContactSuccess() {
  return (
    <main>
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-preserve-green/10 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-12 h-12 text-preserve-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-chamberlains-navy mb-4">
            Thank You for Contacting Us!
          </h1>
          
          <p className="text-xl text-slate-gray mb-6">
            We've received your message and will get back to you within 24 hours.
          </p>

          <div className="bg-light-gray p-6 rounded-lg mb-8">
            <h2 className="font-semibold text-chamberlains-navy mb-3">What Happens Next?</h2>
            <ul className="text-left text-slate-gray space-y-2 max-w-md mx-auto">
              <li className="flex items-start">
                <span className="text-preserve-green mr-2">1.</span>
                <span>Our team reviews your inquiry</span>
              </li>
              <li className="flex items-start">
                <span className="text-preserve-green mr-2">2.</span>
                <span>We'll reach out to you within 24 hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-preserve-green mr-2">3.</span>
                <span>We'll discuss how we can best help you</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-slate-gray">
              Need immediate assistance?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+14075697595"
                className="bg-chamberlains-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
              >
                📞 Call (407) 569-7595
              </a>
              <Link 
                href="/"
                className="bg-white text-chamberlains-blue border-2 border-chamberlains-blue px-8 py-3 rounded-lg font-semibold hover:bg-chamberlains-blue hover:text-white transition-colors inline-flex items-center justify-center"
              >
                Return Home
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-slate-gray">
              In the meantime, feel free to explore our services:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Link href="/buy" className="text-chamberlains-blue hover:underline text-sm">
                Buy Property
              </Link>
              <Link href="/sell" className="text-chamberlains-blue hover:underline text-sm">
                Sell Property
              </Link>
              <Link href="/property-management" className="text-chamberlains-blue hover:underline text-sm">
                Property Management
              </Link>
              <Link href="/about" className="text-chamberlains-blue hover:underline text-sm">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
