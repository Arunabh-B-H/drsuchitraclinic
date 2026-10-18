import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { navigateWithTransition } from './CurvedPageTransition';

export default function Footer({ onBookClick }) {
  const currentYear = new Date().getFullYear();

  const handleFooterNav = (e, targetId, title, subtitle) => {
    e.preventDefault();
    navigateWithTransition({
      targetId,
      title,
      subtitle: subtitle || "Dr. Suchithra's Medical Care"
    });
  };

  return (
    <footer style={{
      backgroundColor: '#0B1120',
      color: '#CBD5E1',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) repeat(3, minmax(0, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }} className="footer-grid">
          
          {/* Col 1: Clinic Branding & Credentials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '1.2rem',
                fontFamily: 'var(--font-display)'
              }}>
                S
              </div>
              <div>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Dr. Suchithra C
                </div>
                <div style={{ fontSize: '0.76rem', color: '#5EEAD4', fontWeight: 600 }}>
                  MBBS, MD, DNB (DVL – Dermatology)
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#94A3B8', marginBottom: '1.5rem' }}>
              Specialized clinical, aesthetic, and pediatric dermatology in Karamana, Trivandrum. Formerly Consultant Dermatologist at KIMSHEALTH, Attukal Devi Hospital, and NIMS.
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(13, 148, 136, 0.15)',
              color: '#5EEAD4',
              padding: '0.4rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.76rem',
              fontWeight: 700,
              border: '1px solid rgba(94, 234, 212, 0.25)'
            }}>
              <ShieldCheck size={14} />
              <span>Ranked Among Top 3 Dermatologists in TVM</span>
            </div>
          </div>

          {/* Col 2: Clinical Services */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Procedures
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#94A3B8' }}>
              <li><a href="#services" onClick={(e) => handleFooterNav(e, 'services', 'Medical Chemical Peels', 'Evidence-Based Skin Peels')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Medical Chemical Peels</a></li>
              <li><a href="#services" onClick={(e) => handleFooterNav(e, 'services', 'RF Wart Removal', 'Scarless Radiofrequency Ablation')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Radiofrequency (RF) Wart Removal</a></li>
              <li><a href="#services" onClick={(e) => handleFooterNav(e, 'services', 'Acne & Scar Revision', 'Subcision & TCA Cross')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Severe Acne & Scar Revision</a></li>
              <li><a href="#services" onClick={(e) => handleFooterNav(e, 'services', 'Autologous Scalp PRP', 'Doctor-Administered Growth Factors')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Autologous Scalp PRP Therapy</a></li>
              <li><a href="#services" onClick={(e) => handleFooterNav(e, 'services', 'Vitiligo Care', 'Targeted Medical Repigmentation')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Vitiligo & Pigmentary Disorders</a></li>
              <li><a href="#services" onClick={(e) => handleFooterNav(e, 'services', 'Psoriasis & Eczema', 'Evidence-Based Dermatological Protocols')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Psoriasis & Chronic Eczema</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Patient Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#94A3B8' }}>
              <li><a href="#founder" onClick={(e) => handleFooterNav(e, 'founder', "Dr. Suchithra's Profile", '11+ Years Hospital Pedigree')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Dr. Suchithra's Profile</a></li>
              <li><a href="#why-doctor-led" onClick={(e) => handleFooterNav(e, 'why-doctor-led', 'Why Doctor-Led?', 'MD/DNB Medical Expertise vs Salon')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Why Doctor-Led?</a></li>
              <li><a href="#triage-quiz" onClick={(e) => handleFooterNav(e, 'triage-quiz', '15s Skin Triage Quiz', 'Instant Protocol Assessment')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>15s Skin Triage Quiz</a></li>
              <li><a href="#reviews" onClick={(e) => handleFooterNav(e, 'reviews', '688+ Patient Reviews', 'Unanimous 5.0 Google Rating')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>688+ Patient Reviews (5.0 ★)</a></li>
              <li><a href="#location" onClick={(e) => handleFooterNav(e, 'location', 'Location & Parking Guide', 'Karamana, Thiruvananthapuram')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Location & Parking Guide</a></li>
              <li><a href="#faq" onClick={(e) => handleFooterNav(e, 'faq', 'Patient Guidance FAQs', 'Clear Answers by Dr. Suchithra')} style={{ transition: 'color 0.2s', cursor: 'pointer' }}>Patient FAQs</a></li>
            </ul>
          </div>

          {/* Col 4: Clinic Timings & Contact */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Clinic Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.86rem', color: '#94A3B8' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={16} style={{ color: '#2DD4BF', flexShrink: 0, marginTop: '3px' }} />
                <span>Opposite Chaithanya Opticals, Kunjalamoodu, Karamana, Trivandrum 695002</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={16} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                <span>Mon – Sat: 5:00 PM – 8:00 PM</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} style={{ color: '#2DD4BF', flexShrink: 0 }} />
                <a href={`tel:${CLINIC_INFO.phoneClean}`} style={{ color: '#F8FAFC', fontWeight: 700 }}>
                  +91 90747 14272
                </a>
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={onBookClick}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.65rem 1rem',
                    fontSize: '0.84rem'
                  }}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          fontSize: '0.78rem',
          color: '#64748B'
        }}>
          <p>
            <strong>Medical Disclaimer:</strong> The clinical information and treatment descriptions provided on this website are for educational purposes and patient appointment coordination only. Diagnosis and individual treatment suitability require an in-person physical consultation with Dr. Suchithra C at the Karamana clinic.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div>
              © {currentYear} {CLINIC_INFO.name}. All rights reserved.
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>Connect: </span>
              <a href={CLINIC_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366' }}>WhatsApp</a>
              <span>•</span>
              <a href={CLINIC_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#F472B6' }}>Instagram</a>
              <span>•</span>
              <a href={CLINIC_INFO.facebookUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#60A5FA' }}>Facebook</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
