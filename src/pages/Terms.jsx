import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Ban, Mail } from 'lucide-react';

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service | Forten Solutions"
        description="Read the Terms of Service for using Forten Solutions website and digital services."
        canonical="/terms"
      />
        <div className="min-h-screen bg-white text-[#0A1128] font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 lg:px-24 py-6 w-full border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <img src="/FL.jpeg" alt="FL Logo" className="h-14 mix-blend-multiply" />
          <span className="font-bold text-xl">Forten Solutions</span>
        </div>
        <Link to="/" className="flex items-center space-x-2 text-gray-500 hover:text-[#0066FF] transition-colors text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </nav>

      {/* Hero Banner */}
      <div className="bg-[#0A1128] py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#0066FF] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#0066FF] font-bold text-xs tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-base">Last updated: June 2025 &nbsp;·&nbsp; Effective: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-0 py-16">
        <div className="prose max-w-none">
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            Please read these Terms of Service carefully before using the <strong>Forten Solutions</strong> website or engaging our services. By accessing or using our website, you agree to be bound by these terms.
          </p>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-[#0066FF]" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0A1128]">1. Acceptance of Terms</h2>
            </div>
            <div className="pl-11 text-gray-600 text-[15px] leading-relaxed">
              <p>By accessing and using the Forten Solutions website located at <strong className="text-[#0A1128]">fortensolutions.com</strong>, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-[#0066FF]" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0A1128]">2. Our Services</h2>
            </div>
            <div className="pl-11 text-gray-600 text-[15px] leading-relaxed space-y-3">
              <p>Forten Solutions provides custom software development, AI automation, web and mobile application development, API design, and technology consulting services. Our services are subject to separate agreements or statements of work agreed upon between Forten Solutions and the client.</p>
              <p>Submitting a consultation request on this website does not constitute a binding contract. Engagements only begin after a formal agreement is signed by both parties.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-[#0A1128] mb-4">3. Intellectual Property</h2>
            <div className="pl-4 text-gray-600 text-[15px] leading-relaxed space-y-3">
              <p>All content on this website — including text, graphics, logos, images, and software — is the property of Forten Solutions and is protected by applicable intellectual property laws.</p>
              <p>You may not reproduce, distribute, modify, or create derivative works without our express written permission.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Ban className="w-4 h-4 text-[#0066FF]" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0A1128]">4. Prohibited Uses</h2>
            </div>
            <div className="pl-11 text-gray-600 text-[15px] leading-relaxed">
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Transmit any malicious code, spam, or harmful content</li>
                <li>Impersonate Forten Solutions or any of its employees</li>
                <li>Use our content for competitive intelligence or scraping</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-[#0A1128] mb-4">5. Disclaimer of Warranties</h2>
            <div className="pl-4 text-gray-600 text-[15px] leading-relaxed">
              <p>The website and its content are provided on an <strong className="text-[#0A1128]">"as is"</strong> and <strong className="text-[#0A1128]">"as available"</strong> basis without any warranties of any kind, either express or implied. Forten Solutions does not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-4 h-4 text-[#0066FF]" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0A1128]">6. Limitation of Liability</h2>
            </div>
            <div className="pl-11 text-gray-600 text-[15px] leading-relaxed">
              <p>To the maximum extent permitted by law, Forten Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, the website or services.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-[#0A1128] mb-4">7. Governing Law</h2>
            <div className="pl-4 text-gray-600 text-[15px] leading-relaxed">
              <p>These Terms of Service are governed by the laws of <strong className="text-[#0A1128]">India</strong>, specifically the state of Tamil Nadu, without regard to conflict of law principles. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Vellore, Tamil Nadu.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-[#0A1128] mb-4">8. Changes to Terms</h2>
            <div className="pl-4 text-gray-600 text-[15px] leading-relaxed">
              <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the revised terms.</p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mt-12">
            <h3 className="font-extrabold text-[#0A1128] text-lg mb-4">Questions About These Terms?</h3>
            <p className="text-gray-500 text-sm mb-6">If you have any questions about these Terms of Service, please contact us:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#0066FF]" />
                <a href="mailto:forten.solutions@gmail.com" className="text-[#0066FF] hover:underline">forten.solutions@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 py-8 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Forten Solutions. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="hover:text-[#0A1128] transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-[#0066FF] font-semibold">Terms of Service</Link>
        </div>
      </div>
    </div>
    </>
  );
}
