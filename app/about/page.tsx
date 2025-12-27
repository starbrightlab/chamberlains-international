import Header from '@/components/Header';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Chamberlains Real Estate & Preserve Property Management',
  description: 'Meet our experienced team serving Central Florida real estate and property management needs since 2003.',
};

export default function About() {
  return (
    <main>
      <Header />
      
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center bg-gradient-to-br from-chamberlains-navy to-slate-800">
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 font-display">About Us</h1>
          <p className="text-xl opacity-90">40+ years of real estate excellence</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-chamberlains-navy mb-6">Chamberlains Real Estate International</h2>
            <p className="text-lg text-slate-gray mb-4">
              A well established USA, UK & European real estate company, Chamberlains Real Estate International 
              was founded to provide excellent service to local and International clients. We are one of the 
              most respected real estate companies in the UK, Europe and the Mediterranean, and have now 
              expanded our operations with offices in Orlando and Fort Lauderdale Florida.
            </p>
            <p className="text-lg text-slate-gray mb-4">
              We serve clients across the USA & Canada, Caribbean, Central & South America. We are a team of 
              real estate specialists, dealing with straightforward, difficult, and complex transactions on 
              behalf of our clients to make the process of investing in property as easy and comfortable as possible.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-chamberlains-navy mb-6">Preserve Property Management</h2>
            <p className="text-lg text-slate-gray">
              Preserve Property Management was established in 2003, and specializes in the professional 
              leasing and management of residential & investment properties. We handle both long-term 
              leasing and short-term vacation rentals located in Polk County (Davenport) and Osceola County 
              (Champions Gate & Kissimmee). Applying extremely high standards in the day to day running of 
              the business ensures the results that you would expect, while the owner retains control of 
              the investment at all times.
            </p>
          </div>

          <div className="bg-light-gray p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-semibold text-chamberlains-navy mb-4">Why Choose Us?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">REALTOR® Commitment</h4>
                <p className="text-sm text-slate-gray">
                  Only real estate licensees who are members of the NATIONAL ASSOCIATION OF REALTORS® 
                  are properly called Realtors®. We subscribe to a strict code of ethics and maintain 
                  a higher level of knowledge of the buying and selling process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">International Expertise</h4>
                <p className="text-sm text-slate-gray">
                  Our commitment as your International REALTOR® is to provide you with the specialized 
                  real estate service you deserve, keeping you informed on trends in the marketplace 
                  using the latest statistics.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Professional Team</h4>
                <p className="text-sm text-slate-gray">
                  We&apos;ve established a strong professional team with unparalleled client service ethics, 
                  offering superior support services than the standard real estate company.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-chamberlains-navy mb-2">Local Knowledge</h4>
                <p className="text-sm text-slate-gray">
                  Deep understanding of the Central Florida market, combined with international 
                  perspective and connections.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-chamberlains-navy mb-6">Our Team</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-chamberlains-blue pl-6">
                <h4 className="text-xl font-semibold text-chamberlains-navy mb-2">Terry</h4>
                <p className="text-sm font-semibold text-chamberlains-blue mb-2">Principal Broker</p>
                <p className="text-slate-gray">
                  As the Principal Broker, Terry oversees and is responsible for all company operations. 
                  He has over 40 years experience in a commercial environment where he accumulated his 
                  knowledge through project/sales management and Financial Services. Terry has used this 
                  understanding, combined with his experience to enhance the services the company now offers.
                </p>
              </div>

              <div className="border-l-4 border-preserve-green pl-6">
                <h4 className="text-xl font-semibold text-chamberlains-navy mb-2">Sona</h4>
                <p className="text-sm font-semibold text-preserve-green mb-2">Attorney</p>
                <p className="text-slate-gray">
                  Sona is an Attorney specializing in condominium contracts and enforcement. She graduated 
                  from Nova Law School in Fort Lauderdale, Florida. She has experience in both real estate 
                  and immigration law, which allows her to partner with Chamberlains Real Estate International 
                  to provide legal services pertaining to property purchases by domestic and overseas clients.
                </p>
              </div>  

              <div className="border-l-4 border-warm-accent pl-6">
                <h4 className="text-xl font-semibold text-chamberlains-navy mb-2">Lissette</h4>
                <p className="text-sm font-semibold text-warm-accent mb-2">Director of Communications, Marketing & IT</p>
                <p className="text-slate-gray">
                  Speaking fluent English and Spanish, Lissette maintains and develops excellent communication 
                  channels between all our Clients, Corporate Bodies and the Media. She designs and develops 
                  all branding, marketing, and advertising material along with designing and maintaining the 
                  company website and all computerized functions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
