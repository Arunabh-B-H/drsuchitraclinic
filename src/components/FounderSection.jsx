import React from 'react';
import { Award, ShieldCheck, HeartPulse, GraduationCap, CheckCircle, Quote, Star, Building2, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function FounderSection({ onBookClick }) {
  const renderDoctorPortrait = () => (
    <>
      <div 
        className="founder-portrait-frame"
        style={{
          position: 'relative',
          borderRadius: '28px',
          padding: '12px',
          background: 'linear-gradient(145deg, #F0FDFA, #FFFFFF)',
          border: '1px solid rgba(13, 148, 136, 0.25)',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.12)'
        }}
      >
        <div style={{
          borderRadius: '20px',
          overflow: 'hidden',
          aspectRatio: '3 / 4',
          backgroundColor: '#E2E8F0'
        }}>
          <img
            src="/assets/dr-suchithra.jpg"
            alt="Meet Dr. Suchithra C, Consultant Dermatologist Trivandrum"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Verified Physician Floating Badge */}
        <div 
          className="founder-badge-pill"
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '24px',
            right: '24px',
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '1rem 1.25rem',
            boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)',
            border: '1px solid #E2E8F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem'
          }}
        >
          <div>
            <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#64748B', fontWeight: 700 }}>
              Dual Post-Graduate Board
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
              MD + DNB (Dermatology)
            </div>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            background: '#ECFDF5',
            color: '#065F46',
            padding: '0.35rem 0.65rem',
            borderRadius: '9999px',
            fontSize: '0.76rem',
            fontWeight: 700
          }}>
            <ShieldCheck size={14} />
            <span>Verified Specialist</span>
          </div>
        </div>
      </div>

      {/* Former Institutions Pill Tags */}
      <div 
        className="founder-pedigree-tags"
        style={{
          marginTop: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem'
        }}
      >
        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Institutional Clinical Pedigree:
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {CLINIC_INFO.hospitals.map((hosp) => (
            <span
              key={hosp}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: '#F1F5F9',
                color: '#1E293B',
                fontSize: '0.82rem',
                fontWeight: 600,
                padding: '0.4rem 0.75rem',
                borderRadius: '8px',
                border: '1px solid #E2E8F0'
              }}
            >
              <Building2 size={13} style={{ color: '#0D9488' }} />
              <span>{hosp}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <section id="founder" className="clinic-section founder-section" style={{
      backgroundColor: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background circle */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-100px',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.06) 0%, rgba(13, 148, 136, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
          gap: '4rem',
          alignItems: 'center'
        }} className="founder-grid">
          
          {/* Left Column: Doctor Portrait & Credential Badges (Visible on Desktop >= 1025px) */}
          <div style={{ position: 'relative' }} className="founder-portrait-col founder-portrait-desktop">
            {renderDoctorPortrait()}
          </div>

          {/* Right Column: Profile & Copy */}
          <div>
            <div className="section-tag">
              <GraduationCap size={14} />
              <span>Physician Profile</span>
            </div>

            {/* Doctor Name and Degrees */}
            <h2 
              className="founder-name-heading"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.75rem)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.2,
                marginBottom: '0.35rem'
              }}
            >
              Meet Dr. Suchithra C
            </h2>
            
            <div 
              className="founder-degrees"
              style={{
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#0D9488',
                marginBottom: '0.35rem'
              }}
            >
              MBBS, MD, DNB (Dermatology, Venereology & Leprosy)
            </div>

            <div 
              className="founder-role"
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: '#64748B',
                marginBottom: '1.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              Founder & Chief Consultant Dermatologist
            </div>

            {/* Mobile Integrated Doctor Portrait & Pedigree (Placed directly after Meet Dr Suchithra title in small screen view only) */}
            <div className="founder-portrait-col founder-portrait-mobile">
              {renderDoctorPortrait()}
            </div>

            {/* Philosophy Quote Block */}
            <div 
              className="founder-quote-box"
              style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #F0FDFA 0%, #F8FAFC 100%)',
                borderLeft: '4px solid #0D9488',
                borderRadius: '0 16px 16px 0',
                padding: '1.4rem 1.75rem',
                marginBottom: '2rem',
                boxShadow: '0 4px 15px rgba(13, 148, 136, 0.05)'
              }}
            >
              <Quote size={28} style={{ color: '#0D9488', opacity: 0.35, marginBottom: '0.45rem' }} />
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.08rem',
                fontStyle: 'italic',
                fontWeight: 600,
                color: '#0F172A',
                lineHeight: 1.55
              }}>
                "Healthy skin is not achieved through cosmetic shortcuts—it is built on rigorous medical science and genuine clinical trust."
              </p>
            </div>

            {/* High Impact Founder Bio Copy Paragraph 1 */}
            <p className="founder-bio-p">
              With over a decade of dedicated clinical practice in Thiruvananthapuram, Dr. Suchithra C represents the gold standard of physician-led dermatology. Having served as a Consultant Dermatologist at premier healthcare institutions including <strong>KIMSHEALTH</strong>, <strong>Attukal Devi Hospital</strong>, and <strong>NIMS</strong>, she brings hospital-grade clinical precision to her private practice in Karamana.
            </p>

            {/* High Impact Founder Bio Copy Paragraph 2 */}
            <p className="founder-bio-p founder-bio-p2">
              Holding dual postgraduate credentials (MD and national board DNB in Dermatology), Dr. Suchithra specializes in treating complex clinical disorders—such as chronic vitiligo, severe cystic acne, and scalp conditions—alongside advanced aesthetic enhancements. Backed by <strong>688+ unanimous 5-star patient reviews</strong>, her consultation room is built around a single promise: <em>honest, ethical medical counsel with zero unnecessary procedures</em>.
            </p>

            {/* Action Row */}
            <div className="founder-action-row">
              <button
                onClick={onBookClick}
                className="btn-primary founder-cta-btn"
              >
                <Calendar size={16} />
                <span>Book Direct Doctor Consultation</span>
              </button>

              <div className="founder-rating-badge">
                <div style={{ display: 'flex', gap: '2px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <span>Ranked among Top 3 Dermatologists</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
