import React from 'react';
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle, Award, HeartHandshake } from 'lucide-react';
import { COMPARISON_DATA } from '../data/clinicData';

export default function WhyDoctorLed({ onBookClick }) {
  return (
    <section id="why-doctor-led" className="clinic-section" style={{
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem',
      backgroundColor: '#FFFFFF',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ background: '#FEF3C7', color: '#B45309', borderColor: '#FDE68A' }}>
            <ShieldCheck size={14} />
            <span>Patient Safety First</span>
          </div>

          <h2 className="section-title">
            The Danger of Salon Shortcuts vs. Doctor-Led Dermatology
          </h2>

          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Why patients across Thiruvananthapuram choose Dr. Suchithra's MD-certified medical care over commercial beauty parlors and franchise cosmetic chains.
          </p>
        </div>

        {/* Warning Callout Box for Trivandrum Patients */}
        <div style={{
          background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF2F2 100%)',
          borderRadius: '20px',
          border: '1px solid #FECACA',
          padding: '1.75rem 2rem',
          marginBottom: '3rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          boxShadow: '0 8px 24px rgba(239, 68, 68, 0.06)'
        }} className="warning-banner">
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: '#FEE2E2',
            color: '#DC2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <AlertTriangle size={26} />
          </div>

          <div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#991B1B', marginBottom: '0.25rem' }}>
              Did You Know? South Indian Skin (Fitzpatrick Types III–V) Is Highly Vulnerable to Post-Inflammatory Hyperpigmentation (PIH)
            </div>
            <p style={{ fontSize: '0.92rem', color: '#7F1D1D', lineHeight: 1.6 }}>
              Unregulated chemical peels, unauthorized laser operators, and steroid-laden 'glow creams' sold at beauty salons frequently cause permanent dark blotches, skin thinning, and broken capillaries. Every clinical procedure at Dr. Suchithra's clinic is personally evaluated and administered with hospital-grade precision.
            </p>
          </div>
        </div>

        {/* Comparison Table / Grid */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid #E2E8F0',
          boxShadow: '0 15px 35px -10px rgba(15, 23, 42, 0.06)',
          overflow: 'hidden'
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(180px, 1.2fr) minmax(240px, 1.4fr) minmax(260px, 1.8fr)',
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '1.25rem 1.75rem',
            fontWeight: 700,
            fontSize: '0.92rem'
          }} className="comparison-header">
            <div>CLINICAL CRITERIA</div>
            <div style={{ color: '#FCA5A5', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <XCircle size={16} /> Commercial Salon / Parlor
            </div>
            <div style={{ color: '#5EEAD4', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} /> Dr. Suchithra's Medical Clinic
            </div>
          </div>

          {/* Table Rows */}
          {COMPARISON_DATA.map((row, idx) => (
            <div
              key={row.feature}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(180px, 1.2fr) minmax(240px, 1.4fr) minmax(260px, 1.8fr)',
                padding: '1.25rem 1.75rem',
                borderBottom: idx === COMPARISON_DATA.length - 1 ? 'none' : '1px solid #F1F5F9',
                backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#FAFAF9',
                alignItems: 'center',
                fontSize: '0.92rem'
              }}
              className="comparison-row"
            >
              <div style={{ fontWeight: 700, color: '#0F172A' }}>
                {row.feature}
              </div>

              <div style={{ color: '#991B1B', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.5 }}>
                <XCircle size={15} style={{ color: '#EF4444', flexShrink: 0, marginTop: '3px' }} />
                <span>{row.salon}</span>
              </div>

              <div style={{ color: '#0F766E', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.5 }}>
                <CheckCircle2 size={15} style={{ color: '#0D9488', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#0F172A' }}>{row.clinic}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Trust Pill Badges */}
        <div 
          className="why-trust-grid"
          style={{
            marginTop: '3.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}
        >
          <div className="why-trust-card" style={{
            padding: '1.35rem',
            borderRadius: '16px',
            background: '#F0FDFA',
            border: '1px solid #CCFBF1',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <ShieldCheck size={28} className="why-trust-icon" style={{ color: '#0D9488', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
                MD & DNB Certified
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Dual national board qualification
              </div>
            </div>
          </div>

          <div className="why-trust-card" style={{
            padding: '1.35rem',
            borderRadius: '16px',
            background: '#F0FDFA',
            border: '1px solid #CCFBF1',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <Award size={28} className="why-trust-icon" style={{ color: '#0D9488', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
                Ex-KIMSHEALTH
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Consultant hospital expertise
              </div>
            </div>
          </div>

          <div className="why-trust-card" style={{
            padding: '1.35rem',
            borderRadius: '16px',
            background: '#F0FDFA',
            border: '1px solid #CCFBF1',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <HeartHandshake size={28} className="why-trust-icon" style={{ color: '#0D9488', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
                Zero Gimmicks
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Purely honest, ethical medicine
              </div>
            </div>
          </div>

          <div className="why-trust-card" style={{
            padding: '1.35rem',
            borderRadius: '16px',
            background: '#F0FDFA',
            border: '1px solid #CCFBF1',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <CheckCircle2 size={28} className="why-trust-icon" style={{ color: '#0D9488', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
                Affordable Fee
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Nominal ₹350–₹500 consultation
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
