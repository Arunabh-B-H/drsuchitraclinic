import React, { useState, useEffect } from 'react';
import { Star, Award, Calendar, ArrowRight, CheckCircle2, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { GoogleIcon, WhatsAppIcon } from './BrandIcons';
import { CLINIC_INFO } from '../data/clinicData';

export default function HeroSection({ onBookClick, onConcernSelect: _onConcernSelect }) {
  // 1. Dynamic Creative Left-to-Right Text Rotator
  const specialtyKeywords = [
    { text: "Dermatology & Skin Science", sub: "Evidence-based, zero cosmetic shortcuts" },
    { text: "Acne & Deep Scar Revision", sub: "Hospital-pedigree prescription + subcision" },
    { text: "Autologous Scalp PRP", sub: "100% doctor prepared & injected" },
    { text: "Doctor-Led Clinical Aesthetics", sub: "Medical peels & painless RF ablation" },
    { text: "Clear Melanin Science", sub: "Safe for Fitzpatrick III–V Indian skin" }
  ];

  const [keywordIndex, setKeywordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setKeywordIndex((prev) => (prev + 1) % specialtyKeywords.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [specialtyKeywords.length]);

  // 2. Interactive 3-Pillar Left-to-Right Slide Switcher
  const pillars = [
    {
      id: "clinical",
      title: "Clinical Dermatology",
      badge: "Hospital-Grade Protocol",
      description: "Severe cystic acne, eczema, psoriasis, and pediatric skin flares managed with evidence-based diagnostics.",
      points: ["Ex-KIMSHEALTH Consultant Pedigree", "Dermoscopic Pathology Assessment", "Zero Harmful Steroid Cocktails"]
    },
    {
      id: "trichology",
      title: "Scalp Health & PRP",
      badge: "Autologous Growth Factors",
      description: "Specialized double-spin autologous PRP therapy for thinning hair, androgenetic alopecia, and chronic scalp dermatitis.",
      points: ["100% Doctor-Administered Injections", "Concentrated 5x–7x Platelet Yield", "Follicular Dermoscopy Guidance"]
    },
    {
      id: "aesthetic",
      title: "Doctor-Led Aesthetics",
      badge: "Physician Administered",
      description: "Medical chemical peels, painless RF wart removal, and gentle barrier rejuvenation without salon gimmicks.",
      points: ["Painless Radiofrequency (RF) Ablation", "pH-Calibrated Peels for Indian Skin", "Ethical Nominal Fees (₹350–₹500)"]
    }
  ];

  const [activePillarIndex, setActivePillarIndex] = useState(0);

  const handleNextPillar = () => {
    setActivePillarIndex((prev) => (prev + 1) % pillars.length);
  };

  const handlePrevPillar = () => {
    setActivePillarIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  // Marquee tokens that slide smoothly left-to-right
  const marqueeItems = [
    "✦ 100% Doctor-Administered Procedures",
    "★ 5.0 Google Rating (688+ Patient Reviews)",
    "🏥 Ex-KIMSHEALTH Consultant",
    "🔬 Dual MD & National DNB Certified",
    "🌿 Zero Salon Shortcuts",
    "🛡️ Calibrated for Fitzpatrick III–V Indian Skin",
    "✨ Painless RF Wart Removal",
    "📍 Karamana, Thiruvananthapuram",
    "🩺 Nominal Consultation Fee: ₹350–₹500"
  ];

  return (
    <section 
      id="hero"
      className="clinic-section hero-section"
      style={{
        position: 'relative',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(240, 253, 250, 0.7) 0%, rgba(250, 250, 249, 1) 100%)'
      }}
    >
      {/* Decorative subtle medical ambient glows */}
      <div style={{
        position: 'absolute',
        top: '-120px',
        right: '-100px',
        width: '520px',
        height: '520px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.14) 0%, rgba(13, 148, 136, 0) 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '-80px',
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(2, 132, 199, 0.1) 0%, rgba(2, 132, 199, 0) 70%)',
        filter: 'blur(55px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Main 2-Column Hero Grid */}
        <div 
          style={{
            display: 'grid',
            alignItems: 'center'
          }} 
          className="hero-grid"
        >
          
          {/* Left Column: Copy, Dynamic Left-to-Right Text & CTAs */}
          <div>
            
            {/* Top Rating & Google Pill (Slides in from Left) */}
            <div 
              className="slide-in-left-delay-1 hero-trust-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.45rem 1rem',
                background: '#FFFFFF',
                border: '1px solid rgba(13, 148, 136, 0.25)',
                borderRadius: '9999px',
                boxShadow: '0 2px 12px rgba(13, 148, 136, 0.08)',
                marginBottom: '1.35rem',
                flexWrap: 'nowrap',
                maxWidth: '100%',
                overflow: 'hidden'
              }}
            >
              <GoogleIcon size={17} />
              <div className="pill-stars" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#FBBC04" color="#FBBC04" />
                ))}
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', whiteSpace: 'nowrap' }}>
                <span className="pill-rating-full">5.0 ★ Rating (688+ Google Reviews)</span>
                <span className="pill-rating-short">5.0 ★ (688+ Reviews)</span>
              </span>
              <span 
                className="pill-badge-tag"
                style={{
                  color: '#0D9488',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  borderLeft: '1px solid #E2E8F0',
                  paddingLeft: '0.55rem',
                  whiteSpace: 'nowrap'
                }}
              >
                Top 3 in Trivandrum
              </span>
            </div>

            {/* Main Headline with Dynamic Left-to-Right Sliding Specialty Text */}
            <h1 
              className="slide-in-left-delay-2 hero-main-heading"
              style={{
                fontSize: 'clamp(2.35rem, 4.4vw, 3.45rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#0F172A',
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem'
              }}
            >
              Evidence-Based{' '}
              <span 
                key={keywordIndex}
                className="slide-in-left text-shimmer"
                style={{
                  display: 'inline-block',
                  fontWeight: 900
                }}
              >
                {specialtyKeywords[keywordIndex].text}
              </span>
              {' '}— Trusted by 680+ Patients
            </h1>

            {/* Sub-headline */}
            <p 
              className="slide-in-left-delay-3 hero-sub-text"
              style={{
                fontSize: '1.1rem',
                lineHeight: 1.68,
                color: '#475569',
                marginBottom: '1.75rem',
                maxWidth: '600px'
              }}
            >
              Consult with <strong>Dr. Suchithra C</strong>, dual board-certified <strong>MBBS, MD, DNB</strong> Dermatologist with 11+ years of hospital precision (Ex-KIMSHEALTH). Purely doctor-administered medical care with zero commercial shortcuts.
            </p>

            {/* Interactive 3-Pillar Left-to-Right Slider Box */}
            <div 
              className="slide-in-left-delay-4 hero-pillar-box"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '18px',
                border: '1px solid #E2E8F0',
                padding: '1.15rem 1.35rem',
                boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
                marginBottom: '1.85rem'
              }}
            >
              <div className="hero-pillar-header" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.75rem',
                gap: '0.5rem'
              }}>
                {/* Pillar Navigation Tabs */}
                <div className="hero-pillar-tabs" style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {pillars.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePillarIndex(idx)}
                      style={{
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.78rem',
                        fontWeight: activePillarIndex === idx ? 700 : 600,
                        backgroundColor: activePillarIndex === idx ? '#0D9488' : '#F1F5F9',
                        color: activePillarIndex === idx ? '#FFFFFF' : '#475569',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>

                {/* Left/Right Slide Arrows */}
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    onClick={handlePrevPillar}
                    aria-label="Previous clinical focus"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#475569'
                    }}
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={handleNextPillar}
                    aria-label="Next clinical focus"
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: '#475569'
                    }}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Active Pillar Content with Left-to-Right Slide */}
              <div key={activePillarIndex} className="slide-in-left">
                <p style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  {pillars[activePillarIndex].description}
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '0.5rem'
                }}>
                  {pillars[activePillarIndex].points.map((pt, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#0F766E', fontWeight: 600 }}>
                      <CheckCircle2 size={15} style={{ color: '#0D9488', flexShrink: 0 }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div 
              className="slide-in-left-delay-5 hero-cta-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '1.5rem'
              }}
            >
              <button
                onClick={onBookClick}
                className="btn-primary"
                style={{
                  padding: '0.95rem 1.85rem',
                  fontSize: '1.02rem',
                  boxShadow: '0 8px 24px rgba(13, 148, 136, 0.35)'
                }}
              >
                <Calendar size={18} />
                <span>Book Doctor Appointment</span>
                <ArrowRight size={17} />
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  padding: '0.95rem 1.75rem',
                  fontSize: '1.02rem'
                }}
              >
                <WhatsAppIcon size={19} color="#FFFFFF" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Timing & Location Callout bar */}
            <div 
              className="hero-timing-strip"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '0.85rem 1.15rem',
                background: '#FFFFFF',
                borderRadius: 'var(--radius-md)',
                border: '1px solid #E2E8F0',
                boxShadow: 'var(--shadow-sm)',
                fontSize: '0.85rem',
                color: '#475569',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Clock size={16} style={{ color: '#0D9488' }} />
                <span><strong>Mon – Sat: 5:00 PM – 8:00 PM</strong></span>
              </div>
              <div style={{ width: '1px', height: '16px', background: '#CBD5E1' }} className="hide-mobile" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <MapPin size={16} style={{ color: '#0D9488' }} />
                <span>Opp. Chaithanya Opticals, Karamana</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Frame on Desktop (Hidden on <= 1024px) */}
          <div 
            className="slide-in-right hero-visual-desktop"
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* Portrait Card Container */}
            <div 
              className="hero-portrait-card"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '430px',
                borderRadius: '28px',
                padding: '10px',
                background: 'linear-gradient(145deg, #FFFFFF, rgba(240, 253, 250, 0.85))',
                border: '1px solid rgba(13, 148, 136, 0.25)',
                boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.15), 0 0 35px -5px rgba(13, 148, 136, 0.25)'
              }}
            >
              {/* Doctor Photo */}
              <div style={{
                position: 'relative',
                borderRadius: '22px',
                overflow: 'hidden',
                aspectRatio: '3 / 3.9',
                backgroundColor: '#E2E8F0'
              }}>
                <img
                  src="/assets/dr-suchithra.jpg"
                  alt="Dr. Suchithra C - Consultant Dermatologist Trivandrum"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center'
                  }}
                />

                {/* Subtle gradient overlay at bottom of photo */}
                <div 
                  className="hero-photo-overlay"
                  style={{
                    position: 'absolute',
                    inset: 'auto 0 0 0',
                    height: '42%',
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '1.25rem',
                    color: '#FFFFFF'
                  }}
                >
                  <div className="hero-doc-name" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
                    Dr. Suchithra C
                  </div>
                  <div className="hero-doc-degrees" style={{ fontSize: '0.8rem', color: '#99F6E4', fontWeight: 600 }}>
                    MBBS, MD, DNB (Dermatology, Venereology & Leprosy)
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge 1: Pedigree */}
              <div 
                className="float-animation hero-float-badge-left"
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '-18px',
                  background: '#FFFFFF',
                  padding: '0.65rem 1rem',
                  borderRadius: '16px',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.12)',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  zIndex: 2
                }}
              >
                <div className="hero-badge-icon-box" style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#F0FDFA',
                  color: '#0D9488',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800
                }}>
                  <Award size={18} />
                </div>
                <div>
                  <div className="hero-badge-tag" style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700 }}>
                    Institutional Pedigree
                  </div>
                  <div className="hero-badge-val" style={{ fontSize: '0.84rem', fontWeight: 700, color: '#0F172A' }}>
                    Ex-KIMSHEALTH Consultant
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge 2: 688+ 5★ Reviews with Google Brand */}
              <div 
                className="float-animation hero-float-badge-right"
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  right: '-18px',
                  background: '#FFFFFF',
                  padding: '0.65rem 1.05rem',
                  borderRadius: '16px',
                  boxShadow: '0 12px 28px rgba(15, 23, 42, 0.12)',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  zIndex: 2
                }}
              >
                <div className="hero-badge-icon-box" style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: '#FEF3C7',
                  color: '#D97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <GoogleIcon size={18} />
                </div>
                <div>
                  <div className="hero-badge-val" style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0F172A' }}>
                    688+ Google Reviews
                  </div>
                  <div className="hero-badge-sub" style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>
                    5.0 ★ Unanimous Rating
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Smooth Left-to-Right Infinite Trust Marquee Ribbon */}
        <div style={{
          marginTop: '3.5rem',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #E2E8F0',
          overflow: 'hidden',
          padding: '0.85rem 0',
          boxShadow: '0 4px 15px rgba(15, 23, 42, 0.04)',
          position: 'relative'
        }}>
          {/* Subtle gradient masks for smooth edge fade */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '60px',
            background: 'linear-gradient(to right, #FFFFFF, transparent)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '60px',
            background: 'linear-gradient(to left, #FFFFFF, transparent)',
            zIndex: 2,
            pointerEvents: 'none'
          }} />

          {/* Infinite Left-to-Right Moving Track */}
          <div className="hero-marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <div 
                key={index} 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0 1.5rem',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  color: '#1E293B',
                  whiteSpace: 'nowrap'
                }}
              >
                <span>{item}</span>
                <span style={{ color: '#0D9488', marginLeft: '0.5rem' }}>•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Strip at Bottom of Hero */}
        <div style={{
          marginTop: '2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '1.25rem',
          padding: '1.75rem 2rem',
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.05)'
        }} className="hero-stats-strip">
          <div style={{ borderRight: '1px solid #F1F5F9', paddingRight: '1rem' }} className="stat-card">
            <div className="stat-number" style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0D9488', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
              11+ Yrs
            </div>
            <div className="stat-label" style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>
              Clinical Experience
            </div>
            <div className="stat-desc" style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.1rem' }}>
              Ex-KIMSHEALTH, Attukal & NIMS
            </div>
          </div>

          <div style={{ borderRight: '1px solid #F1F5F9', paddingRight: '1rem' }} className="stat-card">
            <div className="stat-number" style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0D9488', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
              688+
            </div>
            <div className="stat-label" style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>
              5-Star Google Reviews
            </div>
            <div className="stat-desc" style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.1rem' }}>
              Top 3 Dermatologists in TVM
            </div>
          </div>

          <div style={{ borderRight: '1px solid #F1F5F9', paddingRight: '1rem' }} className="stat-card">
            <div className="stat-number" style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0D9488', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
              100%
            </div>
            <div className="stat-label" style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>
              Doctor-Administered
            </div>
            <div className="stat-desc" style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.1rem' }}>
              Zero technician hand-offs
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number" style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0D9488', fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>
              Dual
            </div>
            <div className="stat-label" style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0F172A', marginTop: '0.2rem' }}>
              MD & National DNB
            </div>
            <div className="stat-desc" style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.1rem' }}>
              Gold standard credentials
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
