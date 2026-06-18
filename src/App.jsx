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
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import BackToTop from './components/BackToTop';
import Testimonials from './components/Testimonials';
// FAQ moved to Navbar dropdown

// Page fade-in on load
const pageVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

/* Subtle section divider */
function Divider() {
  return (
    <div
      className="relative z-10 h-px mx-auto max-w-4xl"
      style={{ background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.25), transparent)' }}
    />
  );
}

export default function App() {
  // Always scroll to top on load
  useEffect(() => {
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
        {/* 1. Hero */}
        <HeroTerminal />

        <Divider />

        {/* 2. Services scroll storytelling */}
        <Services />

        <Divider />

        {/* 3. Animated stats counters */}
        <StatsCounter />

        <Divider />

        {/* 4. Mobile & Web Showcase */}
        <MobileShowcase />

        {/* 5. Case studies */}
        <CaseStudies />

        {/* 6. Tech stack marquee */}
        <TechMarquee />

        <Divider />

        {/* 7. AI Project Configurator */}
        <ProjectConfigurator />

        <Divider />

        {/* 8. Testimonials */}
        <Testimonials />

        {/* 9. Contact CTA */}
        <ContactCTA />
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
