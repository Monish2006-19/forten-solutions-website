import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import HeroTerminal from './components/HeroTerminal';
import Services from './components/Services';
import StatsCounter from './components/StatsCounter';
import MobileShowcase from './components/MobileShowcase';
import TechMarquee from './components/TechMarquee';
import ProjectConfigurator from './components/ProjectConfigurator';
import CaseStudies from './components/CaseStudies';
import ContactCTA from './components/ContactCTA';
import TerminalSection from './components/TerminalSection';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import BackToTop from './components/BackToTop';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

// Page fade-in on load
const pageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

export default function App() {
  // Always scroll to top on load
  useEffect(() => {
    // Double-ensure we're at the top after React hydrates
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, []);

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="show" className="relative">
      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        {/* 1. Hero with interactive terminal */}
        <HeroTerminal />

        {/* Divider glow */}
        <div className="relative z-10 h-px mx-auto max-w-4xl"
          style={{ background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.35), transparent)' }} />

        {/* 2. Services grid */}
        <Services />

        {/* 3. Animated stats counters */}
        <StatsCounter />

        {/* 3.5. Mobile Showcase - Features */}
        <MobileShowcase />

        {/* 4. Case studies */}
        <CaseStudies />

        {/* 5. Tech stack marquee */}
        <TechMarquee />

        {/* 7. AI Project Configurator */}
        <ProjectConfigurator />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 10. FAQ accordion */}
        <FAQ />

        {/* 11. Contact CTA - Start Your Project Today */}
        <ContactCTA />

        {/* 12. Terminal Section */}
        <TerminalSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Chat widget */}
      <AIChat />

      {/* Back to top button */}
      <BackToTop />
    </motion.div>
  );
}
