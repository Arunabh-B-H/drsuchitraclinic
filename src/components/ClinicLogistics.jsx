import React from 'react';
import { MapPin, Clock, Phone, Navigation, Car, Accessibility, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function ClinicLogistics() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Chaithanya Opticals Kunjalamoodu Karamana Thiruvananthapuram Kerala 695002")}`;
  // Exact coordinate pin opposite Chaithanya Opticals, Kunjalamoodu, Karamana with custom clinic marker label
  const mapEmbedUrl = "https://maps.google.com/maps?q=8.4836,76.9688+(Dr.+Suchithra's+Skin+%26+Hair+Care+Clinic)&t=&z=16&ie=UTF8&iwloc=B&output=embed";

  return (
    <section id="location" style={{
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem',
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      scrollMarginTop: '90px'
    }}>
      <div className="container">
        
        {/* Header - Sleek & Compact */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div className="section-tag" style={{ marginBottom: '0.5rem' }}>
            <MapPin size={13} />
            <span>Kunjalamoodu, Karamana</span>
          </div>

          <h2 className="section-title" style={{ fontSize: '1.85rem', marginBottom: '0.4rem' }}>
            Clinic Location & Consultation Hours
          </h2>

          <p className="section-subtitle" style={{ fontSize: '0.92rem', maxWidth: '620px', margin: '0 auto', color: '#64748B' }}>
            Centrally situated at Kunjalamoodu Junction in Karamana — 2.5 km from Thampanoor Railway Station and 3 km from East Fort.
          </p>
        </div>

        {/* Top 3 Quick Logistics Cards - Compact Modern Strip */}
        <div 
          className="logistics-quick-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}
        >
          {/* Address Card */}
          <div className="glass-card logistics-card" style={{ padding: '1rem 1.25rem', backgroundColor: '#FAFAF9', display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#F0FDFA',
              color: '#0D9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MapPin size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
                Clinic Address
              </div>
              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.45, margin: 0 }}>
                Opp. Chaithanya Opticals, Kunjalamoodu, Karamana, Trivandrum 695002
              </p>
            </div>
          </div>

          {/* Timings Card */}
          <div className="glass-card logistics-card" style={{ padding: '1rem 1.25rem', backgroundColor: '#FAFAF9', display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#F0FDFA',
              color: '#0D9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Clock size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
                OP Consultation Hours
              </div>
              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.45, margin: 0 }}>
                <strong>Mon – Sat:</strong> 5:00 PM – 8:00 PM (By Appointment)<br />
                <span style={{ color: '#DC2626', fontWeight: 600 }}>Sunday: Closed</span>
              </p>
            </div>
          </div>

          {/* Fee & Contact Card */}
          <div className="glass-card logistics-card" style={{ padding: '1rem 1.25rem', backgroundColor: '#FAFAF9', display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#F0FDFA',
              color: '#0D9488',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Phone size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
                Nominal Fee & Contact
              </div>
              <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.45, margin: 0 }}>
                Doctor Fee: <strong>₹350 – ₹500</strong> (No hospital markup)<br />
                Direct Desk: <strong>+91 90747 14272</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Two-Column Grid: Appropriate Map & Balanced Right Suite/Transit Column */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
          gap: '1.25rem',
          alignItems: 'stretch'
        }} className="logistics-grid">
          
          {/* Compact Interactive Map Card */}
          <div 
            className="logistics-map-card"
            style={{
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              height: '320px',
              backgroundColor: '#F8FAFC'
            }}
          >
            {/* Map Top Bar */}
            <div style={{
              background: '#0F172A',
              color: '#FFFFFF',
              padding: '0.65rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.5rem',
              flexShrink: 0
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', fontWeight: 700 }}>
                <Navigation size={14} style={{ color: '#2DD4BF' }} />
                <span>Dr. Suchithra's Clinic • Karamana Pin</span>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: '#2DD4BF',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                <span>Open in Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Map Iframe with Exact Coordinate Pin */}
            <div style={{ flex: 1, width: '100%', position: 'relative' }}>
              <iframe
                title="Dr Suchithra Clinic Karamana Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Matched in Height (320px) */}
          <div 
            className="logistics-suite-col"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              height: '320px'
            }}
          >
            {/* Treatment Suite Preview */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #E2E8F0',
              boxShadow: '0 6px 18px rgba(15, 23, 42, 0.05)',
              position: 'relative',
              backgroundColor: '#E2E8F0',
              height: '140px',
              flexShrink: 0
            }}>
              <img
                src="/assets/clinic-suite.jpg"
                alt="Dr. Suchithra's Skin and Hair Care Treatment Suite"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 'auto 0 0 0',
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.92) 0%, rgba(15, 23, 42, 0) 100%)',
                padding: '0.65rem 0.85rem',
                color: '#FFFFFF'
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800 }}>
                  Advanced Clinical Treatment Suite
                </div>
                <div style={{ fontSize: '0.7rem', color: '#99F6E4' }}>
                  Hygienic, doctor-administered aesthetic procedural facility
                </div>
              </div>
            </div>

            {/* Transit & Patient Accessibility Card */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '0.85rem 1rem',
              border: '1px solid #E2E8F0',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.55rem' }}>
                Transit & Patient Accessibility
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.78rem', color: '#475569', lineHeight: 1.35 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <Car size={15} style={{ color: '#0D9488', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Parking:</strong> Two-wheeler parking in front; street & nearby four-wheeler parking available.</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <Accessibility size={15} style={{ color: '#0D9488', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Accessibility:</strong> Ground floor clinic access with comfortable waiting lounge.</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <Navigation size={15} style={{ color: '#0D9488', flexShrink: 0, marginTop: '2px' }} />
                  <span><strong>Distances:</strong> 2.5 km from Thampanoor Railway Station | 3 km from East Fort.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
