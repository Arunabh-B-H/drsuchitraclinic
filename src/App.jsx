import React, { useState, useEffect } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ConcernSelector from './components/ConcernSelector';
import FounderSection from './components/FounderSection';
import TreatmentGrid from './components/TreatmentGrid';
import WhyDoctorLed from './components/WhyDoctorLed';
import SelfTriageQuiz from './components/SelfTriageQuiz';
import PatientProof from './components/PatientProof';
import InteractiveBooking from './components/InteractiveBooking';
import ClinicLogistics from './components/ClinicLogistics';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import AIBookingBot from './components/AIBookingBot';
import Preloader from './components/Preloader';
import SocialConnectDock from './components/SocialConnectDock';
import CurvedPageTransition, { navigateWithTransition } from './components/CurvedPageTransition';

export default function App() {
  const [selectedConcern, setSelectedConcern] = useState("");
  const [isAIBotOpen, setIsAIBotOpen] = useState(false);

  // Scroll reveal slide transition observer (Grégory Lallé style momentum reveals)
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .lalle-stagger, .lalle-mask-text'
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToBooking = (concernName = "") => {
    navigateWithTransition({
      targetId: 'booking',
      title: concernName ? `Protocol: ${concernName}` : "Doctor Consultation",
      subtitle: "Dr. Suchithra's Medical Care",
      callback: () => {
        if (concernName) {
          setSelectedConcern(concernName);
        }
      }
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-canvas)' }}>
      {/* 0. Clinical Preloader (Runs on initial load and every reload) */}
      <Preloader />

      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Sticky Navbar with Mobile Menu & AI Bot Launcher */}
      <Navbar 
        onBookClick={() => scrollToBooking()} 
        onOpenAI={() => setIsAIBotOpen(true)}
      />

      <main style={{ flex: 1 }}>
        {/* 3. Hero Section */}
        <HeroSection 
          onBookClick={() => scrollToBooking()} 
          onConcernSelect={(concern) => scrollToBooking(concern)} 
        />

        {/* 4. Interactive 1-Click Concern Selector */}
        <section className="scroll-reveal">
          <ConcernSelector 
            onSelectConcern={(concern) => scrollToBooking(concern)} 
          />
        </section>

        {/* 5. High-Impact Founder Section with Modified Official Portrait */}
        <section className="scroll-reveal">
          <FounderSection 
            onBookClick={() => scrollToBooking()} 
          />
        </section>

        {/* 6. Treatment Grid (3 Tabbed Categories) */}
        <section className="scroll-reveal">
          <TreatmentGrid 
            onSelectTreatment={(treatment) => scrollToBooking(treatment)} 
          />
        </section>

        {/* 7. Why Dermatologist-Led? Trust Matrix */}
        <section className="scroll-reveal">
          <WhyDoctorLed 
            onBookClick={() => scrollToBooking()} 
          />
        </section>

        {/* 8. 15-Second Skin & Hair Self-Triage Quiz */}
        <section className="scroll-reveal">
          <SelfTriageQuiz 
            onBookWithQuiz={(protocol) => scrollToBooking(protocol)} 
          />
        </section>

        {/* 9. Verified Patient Proof & 5.0 Star Reviews */}
        <section className="scroll-reveal">
          <PatientProof />
        </section>

        {/* 10. Interactive Booking & WhatsApp Lead Generator */}
        <section className="scroll-reveal">
          <InteractiveBooking 
            prefilledConcern={selectedConcern} 
          />
        </section>

        {/* 11. Clinic Logistics, Maps & Hours */}
        <section className="scroll-reveal">
          <ClinicLogistics />
        </section>

        {/* 12. Patient Guidance FAQs */}
        <section className="scroll-reveal">
          <FAQSection />
        </section>
      </main>

      {/* 13. Medical Clinic Footer */}
      <Footer onBookClick={() => scrollToBooking()} />

      {/* 14. Floating Social Connect Capsule Bar (Call, WhatsApp, Instagram, Facebook) - Fixed on LEFT */}
      <SocialConnectDock />

      {/* 15. Intelligent Clinical AI Bot & WhatsApp Sync - Fixed on RIGHT */}
      <AIBookingBot 
        initialOpen={isAIBotOpen} 
        onClose={() => setIsAIBotOpen(false)} 
      />

      {/* 16. Grégory Lallé ('24 Awwwards SOTD) Curved Liquid Page Transition */}
      <CurvedPageTransition />
    </div>
  );
}
