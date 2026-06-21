import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Mail, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Forten Solutions"
        description="Read the Forten Solutions Privacy Policy regarding the collection and protection of user data."
        canonical="/privacy-policy"
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
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-[#0066FF] font-bold text-xs tracking-widest uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-base">Last updated: June 2025 &nbsp;·&nbsp; Effective: June 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-0 py-16">

        <div className="prose max-w-none">
          <p className="text-gray-600 text-base leading-relaxed mb-10">
            At <strong>Forten Solutions</strong>, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
          </p>

          {/* Section 1 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-4 h-4 text-[#0066FF]" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0A1128]">1. Information We Collect</h2>
            </div>
            <div className="pl-11 space-y-3 text-gray-600 text-[15px] leading-relaxed">
              <p><strong className="text-[#0A1128]">Personal Information:</strong> When you fill out a consultation form, we collect your name, email address, phone number, and project details you voluntarily provide.</p>
              <p><strong className="text-[#0A1128]">Usage Data:</strong> We may collect information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on each page.</p>
              <p><strong className="text-[#0A1128]">Cookies:</strong> We use minimal cookies necessary for the website to function. We do not use tracking or advertising cookies.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-4 h-4 text-[#0066FF]" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0A1128]">2. How We Use Your Information</h2>
            </div>
            <div className="pl-11 space-y-3 text-gray-600 text-[15px] leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>To respond to your consultation requests and inquiries</li>
                <li>To provide, operate, and maintain our services</li>
                <li>To improve and personalize your experience on our website</li>
                <li>To send you updates, newsletters, or marketing communications (only if you opted in)</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-4 h-4 text-[#0066FF]" />
              </div>
              <h2 className="text-xl font-extrabold text-[#0A1128]">3. Data Security</h2>
            </div>
            <div className="pl-11 text-gray-600 text-[15px] leading-relaxed">
              <p>We implement industry-standard security measures to protect your personal information. Your consultation form data is transmitted securely and we do not store it on our servers beyond what is necessary to respond to your inquiry. However, no method of transmission over the internet is 100% secure.</p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-[#0A1128] mb-4">4. Sharing of Information</h2>
            <div className="pl-4 text-gray-600 text-[15px] leading-relaxed space-y-3">
              <p>We do <strong className="text-[#0A1128]">not sell, trade, or rent</strong> your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, under strict confidentiality agreements.</p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-[#0A1128] mb-4">5. Third-Party Services</h2>
            <div className="pl-4 text-gray-600 text-[15px] leading-relaxed">
              <p>Our website uses <strong className="text-[#0A1128]">FormSubmit</strong> to process consultation form submissions. When you submit a form, your data is processed through FormSubmit's servers. We encourage you to review <a href="https://formsubmit.co" className="text-[#0066FF] hover:underline" target="_blank" rel="noopener noreferrer">FormSubmit's Privacy Policy</a>.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-[#0A1128] mb-4">6. Your Rights</h2>
            <div className="pl-4 text-gray-600 text-[15px] leading-relaxed space-y-2">
              <ul className="list-disc list-inside space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact us at <a href="mailto:forten.solutions@gmail.com" className="text-[#0066FF] hover:underline">forten.solutions@gmail.com</a>.</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-10">
            <h2 className="text-xl font-extrabold text-[#0A1128] mb-4">7. Changes to This Policy</h2>
            <div className="pl-4 text-gray-600 text-[15px] leading-relaxed">
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this page. Your continued use of the website after any changes constitutes your acceptance of the new policy.</p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mt-12">
            <h3 className="font-extrabold text-[#0A1128] text-lg mb-4">Contact Us About Privacy</h3>
            <p className="text-gray-500 text-sm mb-6">If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#0066FF]" />
                <a href="mailto:forten.solutions@gmail.com" className="text-[#0066FF] hover:underline">forten.solutions@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#0066FF]" />
                <span className="text-gray-600">+91 88259 53617</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 py-8 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Forten Solutions. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link to="/privacy-policy" className="text-[#0066FF] font-semibold">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[#0A1128] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </div>
    </>
  );
}
