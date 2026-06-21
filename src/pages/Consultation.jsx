import React, { useState } from 'react';
import GlobalNavbar from '../components/GlobalNavbar';
import GlobalFooter from '../components/GlobalFooter';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, CheckCircle2, AlertCircle } from 'lucide-react';

function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: '',
    _honey: '' // Honeypot field - must stay empty for real users
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot check — bots fill hidden fields, real users don't
    if (formData._honey) return;
    setIsSubmitting(true);
    setIsError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/forten.solutions@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "New Consultation Request | Forten Solutions",
          _captcha: "false",
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          Project_Details: formData.details
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', details: '', _honey: '' });
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      }
    } catch (error) {
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Book a Free Business Consultation | Forten Solutions"
        description="Ready to build something great? Book a free business consultation to discuss strategy, operations, and technical software architecture."
        canonical="/consultation"
      />
        <div className="min-h-screen bg-white flex flex-col lg:flex-row min-h-screen font-sans text-[#0A1128]">
      <GlobalNavbar />

      
      {/* Left Column - Image & Branding */}
      <div className="relative w-full lg:w-1/2 h-[35vh] lg:h-screen bg-[#0A1128] overflow-hidden">
        {/* Background Image */}
        <img 
          src="/cons.jpg" 
          alt="Consulting Session" 
          className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-overlay"
         loading="lazy"/>
        
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent lg:bg-gradient-to-tr lg:from-[#0A1128] lg:via-[#0A1128]/80 lg:to-transparent"></div>
        
        {/* Floating Back Button (Desktop) */}
        <div className="absolute top-8 left-8 lg:top-12 lg:left-12 hidden lg:block z-20">
          <Link to="/" className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold text-sm tracking-wide">Back to Home</span>
          </Link>
        </div>

        {/* Hero Content over image */}
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 z-10 flex flex-col justify-end">
          <div className="w-12 h-1 bg-[#0066FF] mb-8"></div>
          <h2 className="text-3xl lg:text-[54px] font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            Let's build<br />something great.
          </h2>
          <p className="text-gray-300 text-lg lg:text-xl max-w-md font-medium leading-relaxed mb-10">
            Join hundreds of manufacturers who have transformed their operations with Forten Solutions.
          </p>

          <div className="space-y-4 hidden md:block">
            <div className="flex items-center gap-3 text-white/90">
              <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
              <span className="font-semibold">Tailored Software Solutions</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
              <span className="font-semibold">AI & Automation Experts</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <CheckCircle2 className="w-5 h-5 text-[#0066FF]" />
              <span className="font-semibold">Seamless System Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="w-full lg:w-1/2 flex flex-col h-auto lg:h-screen overflow-y-auto bg-white relative">
        
        {/* Mobile Back Button */}
        <div className="lg:hidden absolute top-6 left-6 z-10">
          <Link to="/" className="flex items-center space-x-2 text-gray-500 hover:text-[#0A1128] transition-colors bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-semibold text-sm">Back</span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center px-5 md:px-12 lg:px-24 py-24 lg:py-12 max-w-2xl mx-auto w-full">
          <div className="mb-10">
            <h1 className="text-3xl lg:text-4xl font-extrabold mb-3 text-[#0A1128] tracking-tight">Book a Consultation</h1>
            <p className="text-gray-500 text-[15px] leading-relaxed">Fill out the details below and our technical team will get back to you within 24 hours to discuss your project.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide">Full Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all text-[15px]"
                placeholder="e.g. John Doe"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all text-[15px]"
                  placeholder="john@company.com"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all text-[15px]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="details" className="block text-[13px] font-bold text-gray-700 uppercase tracking-wide">Project Details / Message</label>
              <textarea 
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3.5 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF]/20 focus:border-[#0066FF] transition-all resize-none text-[15px]"
                placeholder="Tell us a little bit about what you're looking to build..."
              ></textarea>
            </div>

            {/* Honeypot field - hidden from real users, catches bots */}
            <input
              type="text"
              name="_honey"
              value={formData._honey}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#0066FF] hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all flex justify-center items-center space-x-2 mt-4 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Submit Request</span>
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
            
            {isSuccess && (
              <div className="p-4 bg-green-50 text-green-700 rounded-xl text-sm text-center font-medium border border-green-200 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                Thank you! Your request has been sent. We'll be in touch within 24 hours!
              </div>
            )}

            {isError && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm text-center font-medium border border-red-200 flex items-center justify-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Something went wrong. Please try again or email us directly.
              </div>
            )}
            
            <p className="text-center text-xs text-gray-400 mt-4">
              By submitting, you agree to our{' '}
              <Link to="/privacy-policy" className="underline hover:text-gray-600 transition-colors">Privacy Policy</Link>
              {' '}and{' '}
              <Link to="/terms" className="underline hover:text-gray-600 transition-colors">Terms of Service</Link>.
            </p>
          </form>
        </div>
      </div>
      <GlobalFooter />
    </div>
    </>
  );
}

export default Consultation;
