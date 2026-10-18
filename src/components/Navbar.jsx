import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { navigateWithTransition } from './CurvedPageTransition';

export default function Navbar({ onBookClick, onOpenAI }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Treatments", href: "#services", title: "Medical Treatments", subtitle: "Clinical Procedures & Protocols" },
    { label: "Why Doctor-Led", href: "#why-doctor-led", title: "Dermatologist-Led Care", subtitle: "MD/DNB Medical Expertise" },
    { label: "About Doctor", href: "#founder", title: "Dr. Suchithra C", subtitle: "11+ Years Hospital Pedigree" },
    { label: "Skin Quiz", href: "#triage-quiz", title: "Skin & Hair Self-Triage", subtitle: "15-Second Evidence Analysis" },
    { label: "Reviews", href: "#reviews", title: "Verified Patient Proof", subtitle: "688+ Google 5.0 Star Reviews" },
    { label: "Location", href: "#location", title: "Clinic Logistics & Hours", subtitle: "Karamana, Thiruvananthapuram" }
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = typeof link === 'string' ? link.replace('#', '') : link.href.replace('#', '');
    const title = typeof link === 'object' && link.title ? link.title : undefined;
    const subtitle = typeof link === 'object' && link.subtitle ? link.subtitle : undefined;
    
    navigateWithTransition({
      targetId,
      title: title || "Consultation Suite",
      subtitle: subtitle || "Dr. Suchithra's Medical Care"
    });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: mobileMenuOpen ? 120 : 40,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'rgba(250, 250, 249, 0.95)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid',
      borderColor: isScrolled ? 'rgba(226, 232, 240, 0.9)' : 'rgba(226, 232, 240, 0.6)',
      transition: 'all 0.25s ease',
      boxShadow: isScrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.06)' : 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px',
        gap: '1.25rem'
      }}>
        {/* Brand Logo & Doctor Credentials - ALWAYS UNWRAPPED */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.85rem', 
            textDecoration: 'none',
            flexShrink: 0
          }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '1.3rem',
            fontFamily: 'var(--font-display)',
            boxShadow: '0 4px 12px rgba(13, 148, 136, 0.3)',
            flexShrink: 0
          }}>
            S
          </div>

          <div style={{ whiteSpace: 'nowrap' }} className="navbar-brand-text">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <span 
                className="navbar-brand-name"
                style={{
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: '#0F172A',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}
              >
                Dr. Suchithra C
              </span>
              <span 
                className="navbar-brand-badge"
                style={{
                  background: '#ECFDF5',
                  color: '#0D9488',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  padding: '0.12rem 0.45rem',
                  borderRadius: '9999px',
                  border: '1px solid #A7F3D0',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.2rem'
                }}
              >
                <ShieldCheck size={11} /> MD, DNB
              </span>
            </div>
            <p 
              className="navbar-brand-sub"
              style={{
                fontSize: '0.74rem',
                color: '#64748B',
                fontWeight: 500,
                marginTop: '0.1rem',
                letterSpacing: '0.01em'
              }}
            >
              Skin & Hair Clinic • Karamana, Trivandrum
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links - Clean, Uncluttered & Spacious */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          whiteSpace: 'nowrap'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#334155',
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'color 0.2s',
                padding: '0.35rem 0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#0D9488'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#334155'}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs - Focused & High Converting */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.65rem',
          flexShrink: 0
        }} className="desktop-actions">
          {/* Primary Book Appointment Button */}
          <button
            onClick={onBookClick}
            className="btn-primary"
            style={{
              padding: '0.62rem 1.25rem',
              fontSize: '0.88rem',
              gap: '0.45rem'
            }}
          >
            <Calendar size={15} />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile / Tablet Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            padding: '0.55rem',
            borderRadius: '10px',
            color: '#0F172A',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          padding: '1.25rem 1.5rem',
          boxShadow: '0 15px 35px rgba(15, 23, 42, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.45rem'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #F1F5F9',
                  color: '#0F172A',
                  fontWeight: 600,
                  fontSize: '0.96rem'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} style={{ color: '#94A3B8' }} />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
