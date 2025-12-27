'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj as any).toString()
      });

      if (response.ok) {
        router.push('/contact/success');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      setError('Failed to send message. Please try calling us directly at (407) 569-7595');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background min-h-screen">
      <Header />
      
      {/* Header Section */}
      <section className="relative pt-48 pb-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">Connect With <span className="text-secondary">Us</span></h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest text-sm font-bold">
            Private Consultations for Global Clients
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-20 items-start">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-secondary font-sans font-bold uppercase tracking-widest text-sm mb-6">Our Presence</h2>
                <h3 className="text-4xl font-display font-bold text-primary mb-8">Get In Touch</h3>
                <p className="text-lg text-muted leading-relaxed mb-12">
                  Whether you are initiating a property search or require specialized management for your 
                  Florida portfolio, our team of experts is ready to assist.
                </p>
              </div>

              <div className="space-y-10">
                <ContactMethod 
                  icon="📍" 
                  title="Global Headquarters"
                  content={<>213 Cardinal Court<br />Champions Gate, FL 33896</>}
                />
                <ContactMethod 
                  icon="📞" 
                  title="Direct Inquiries"
                  content={<>
                    <a href="tel:+14075697595" className="hover:text-secondary transition-colors">+1 (407) 569-7595</a><br />
                    <span className="text-sm opacity-60">Fax: +1 (863) 852-8418</span>
                  </>}
                />
                <ContactMethod 
                  icon="✉️" 
                  title="Digital Correspondence"
                  content={<a href="mailto:info@chamberlainsinternational.com" className="hover:text-secondary transition-colors">info@chamberlainsinternational.com</a>}
                />
                <ContactMethod 
                  icon="⏰" 
                  title="Consultation Hours"
                  content={<>Monday – Friday: 9:00 AM – 5:00 PM<br /><span className="text-sm opacity-60 italic">Weekends by Appointment Only</span></>}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface p-10 lg:p-16 rounded-2xl shadow-luxury border border-border relative overflow-hidden">
                {/* Subtle design element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px]" />
                
                <h3 className="text-2xl font-display font-bold text-primary mb-10">Inquiry Submission</h3>
                
                {error && (
                  <div className="bg-red-50 border border-red-100 text-red-600 px-6 py-4 rounded-xl mb-8 text-sm font-medium">
                    {error}
                  </div>
                )}

                <form 
                  name="contact" 
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="hidden"><input name="bot-field" /></div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <FormInput 
                      label="Full Name" 
                      id="name" 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, name: e.target.value})}
                    />
                    <FormInput 
                      label="Email Address" 
                      id="email" 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <FormInput 
                      label="Telephone" 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, phone: e.target.value})}
                    />
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-primary/60">Subject of Inquiry</label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFormData({...formData, subject: e.target.value})}
                        className="bg-transparent border-b-2 border-border py-3 focus:border-secondary outline-none transition-colors text-primary font-medium appearance-none cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        <option value="Buying Property">Bespoke Acquisition</option>
                        <option value="Selling Property">Strategic Listing</option>
                        <option value="Property Management">Preserve Management</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-primary/60">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, message: e.target.value})}
                      className="bg-transparent border-b-2 border-border py-3 focus:border-secondary outline-none transition-colors text-primary font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full group flex items-center justify-center gap-3 disabled:bg-slate-400"
                  >
                    {isSubmitting ? 'Processing Submission...' : (
                      <>
                        Send Inquiry
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ContactMethod({ icon, title, content }: { icon: string; title: string; content: React.ReactNode }) {
  return (
    <div className="flex gap-6 group">
      <div className="w-14 h-14 bg-surface rounded-2xl shadow-soft flex items-center justify-center text-2xl border border-border group-hover:border-secondary/20 group-hover:shadow-luxury transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">{title}</h4>
        <div className="text-primary font-bold text-lg leading-relaxed">{content}</div>
      </div>
    </div>
  );
}

function FormInput({ label, id, ...props }: { label: string; id: string; [key: string]: any }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs font-bold uppercase tracking-widest text-primary/60">{label}</label>
      <input
        id={id}
        name={id}
        {...props}
        className="bg-transparent border-b-2 border-border py-3 focus:border-secondary outline-none transition-colors text-primary font-medium"
      />
    </div>
  );
}
