import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="bg-chamberlains-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-sm opacity-90">Contact us today for a free consultation</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:+14075697595"
              className="bg-chamberlains-blue hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              📞 Call Now
            </a>
            <Link 
              href="/contact"
              className="bg-white text-chamberlains-navy hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              ✉️ Email Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
