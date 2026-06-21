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
      
      <div className="min-h-screen flex flex-col font-sans bg-[#FAFAFA] text-[#0A1128] selection:bg-[#0066FF] selection:text-white">
        <GlobalNavbar />

        <main className="flex-1 flex flex-col items-center justify-center py-20 px-5 md:px-8">
          
          <div className="w-full max-w-2xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <Link to="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-[#0A1128] transition-colors mb-8 text-[13px] font-semibold group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A1128] mb-4">
                Let's build something great.
              </h1>
              <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                Fill out the details below and our technical team will get back to you within 24 hours to discuss your project.
              </p>
            </div>

            {/* Form Section */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-[13px] font-extrabold text-gray-600 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#0A1128] focus:ring-0 transition-colors text-[16px] font-bold text-[#0A1128] placeholder:text-gray-400 placeholder:font-medium"
                    placeholder="e.g. John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-[13px] font-extrabold text-gray-600 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#0A1128] focus:ring-0 transition-colors text-[16px] font-bold text-[#0A1128] placeholder:text-gray-400 placeholder:font-medium"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-[13px] font-extrabold text-gray-600 uppercase tracking-widest">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#0A1128] focus:ring-0 transition-colors text-[16px] font-bold text-[#0A1128] placeholder:text-gray-400 placeholder:font-medium"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label htmlFor="details" className="block text-[13px] font-extrabold text-gray-600 uppercase tracking-widest">Project Details / Message</label>
                  <textarea 
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    rows="3"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 focus:border-[#0A1128] focus:ring-0 transition-colors text-[16px] font-bold text-[#0A1128] placeholder:text-gray-400 placeholder:font-medium resize-none"
                    placeholder="Briefly describe what you're looking to build..."
                  ></textarea>
                </div>

                {/* Honeypot field */}
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

                <div className="pt-6">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#0A1128] hover:bg-black text-white font-bold py-4 px-6 rounded-lg transition-all flex justify-center items-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
                
                {isSuccess && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm text-center font-medium flex items-center justify-center gap-2 mt-4">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    Thank you! Your request has been sent.
                  </div>
                )}

                {isError && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center font-medium flex items-center justify-center gap-2 mt-4">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Something went wrong. Please try again or email us.
                  </div>
                )}
                
                <p className="text-center text-[11px] text-gray-400 mt-6 uppercase tracking-wider font-semibold">
                  By submitting, you agree to our{' '}
                  <Link to="/privacy-policy" className="text-gray-600 hover:text-[#0A1128] transition-colors">Privacy Policy</Link>
                </p>
              </form>
            </div>
            
            {/* Value Props / Trust Elements below form */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-[13px] font-semibold text-gray-500">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A1128]" /> Tailored Software
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A1128]" /> AI Automation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0A1128]" /> Seamless Integration
              </span>
            </div>

          </div>
        </main>
        
        <GlobalFooter />
      </div>
    </>
  );
}

export default Consultation;
