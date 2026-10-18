import React, { useState } from 'react';
import { Sparkles, Activity, Flame, Clock, Calendar, Check, ArrowRight, X, ShieldCheck, Info } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/clinicData';

export default function TreatmentGrid({ onSelectTreatment }) {
  const [activeTab, setActiveTab] = useState("aesthetic");
  const [modalService, setModalService] = useState(null);

  const currentCategory = SERVICE_CATEGORIES.find((cat) => cat.id === activeTab) || SERVICE_CATEGORIES[0];

  const getTabIcon = (id) => {
    switch (id) {
      case 'aesthetic': return Sparkles;
      case 'clinical': return Activity;
      case 'trichology': return Flame;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="clinic-section treatment-section" style={{
      backgroundColor: '#FAFAF9'
    }}>
      <div className="container">
        
        {/* Header */}
        <div className="treatment-header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="section-tag treatment-section-tag">
            <Sparkles size={14} />
            <span>Specialized Clinical Taxonomy</span>
          </div>
          <h2 className="section-title">
            Doctor-Administered Treatments & Procedures
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Purely physician-led medical protocols. No unauthorized assistants, no salon shortcuts, and no cookie-cutter packages.
          </p>

          {/* Interactive 3 Tabs */}
          <div 
            className="treatment-tabs-container"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              padding: '0.45rem',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 15px rgba(15, 23, 42, 0.04)',
              gap: '0.45rem',
              maxWidth: '100%',
              overflowX: 'auto'
            }}
          >
            {SERVICE_CATEGORIES.map((cat) => {
              const TabIcon = getTabIcon(cat.id);
              const isActive = activeTab === cat.id;
              const shortLabels = {
                aesthetic: "Aesthetics & Peels",
                clinical: "Clinical Dermatology",
                trichology: "Hair Fall & PRP"
              };

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="treatment-tab-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.45rem',
                    borderRadius: '12px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isActive ? '#0D9488' : 'transparent',
                    color: isActive ? '#FFFFFF' : '#475569',
                    boxShadow: isActive ? '0 4px 14px rgba(13, 148, 136, 0.3)' : 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <TabIcon size={16} color={isActive ? '#FFFFFF' : '#0D9488'} />
                  <span className="tab-label-full">{cat.title}</span>
                  <span className="tab-label-mobile">{shortLabels[cat.id] || cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner */}
        <div 
          className="category-banner"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
            padding: '1rem 1.5rem',
            background: '#FFFFFF',
            borderRadius: '14px',
            border: '1px solid #E2E8F0'
          }}
        >
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0D9488', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Category Highlight
            </span>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A' }}>
              {currentCategory.title}
            </div>
          </div>
          <div style={{
            fontSize: '0.86rem',
            color: '#64748B',
            fontWeight: 500
          }}>
            {currentCategory.tagline}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div 
          className="lalle-stagger treatment-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {currentCategory.services.map((service) => (
            <div
              key={service.id}
              className="glass-card treatment-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '1.75rem',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                transition: 'all 0.25s ease'
              }}
            >
              <div>
                {/* Header tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    background: '#F0FDFA',
                    color: '#0D9488',
                    border: '1px solid #CCFBF1'
                  }}>
                    {service.tag}
                  </span>

                  <span style={{ fontSize: '0.74rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={12} style={{ color: '#0D9488' }} />
                    {service.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.65rem' }}>
                  {service.name}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {service.description}
                </p>

                {/* Clinical Indication */}
                <div style={{
                  padding: '0.85rem 1rem',
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  marginBottom: '1rem',
                  fontSize: '0.82rem',
                  border: '1px solid #F1F5F9'
                }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.2rem' }}>
                    Indicated For:
                  </div>
                  <div style={{ color: '#64748B' }}>
                    {service.indication}
                  </div>
                </div>

                {/* Doctor-Led Advantage */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.45rem',
                  fontSize: '0.82rem',
                  color: '#0F766E',
                  fontWeight: 600,
                  marginBottom: '1.5rem'
                }}>
                  <ShieldCheck size={16} style={{ color: '#0D9488', flexShrink: 0, marginTop: '2px' }} />
                  <span>{service.doctorLedAdvantage}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) auto',
                gap: '0.65rem',
                paddingTop: '1rem',
                borderTop: '1px solid #F1F5F9'
              }}>
                <button
                  onClick={() => onSelectTreatment(service.name)}
                  className="btn-primary"
                  style={{
                    padding: '0.75rem 1rem',
                    fontSize: '0.88rem'
                  }}
                >
                  <Calendar size={15} />
                  <span>Book Consultation</span>
                </button>

                <button
                  onClick={() => setModalService(service)}
                  aria-label={`View clinical details for ${service.name}`}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid #E2E8F0',
                    color: '#475569',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    background: '#FFFFFF'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0D9488';
                    e.currentTarget.style.color = '#0D9488';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#475569';
                  }}
                  title="View clinical details"
                >
                  <Info size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Clinical Detail Modal */}
      {modalService && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(6px)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }} onClick={() => setModalService(null)}>
          
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '560px',
              width: '100%',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setModalService(null)}
              aria-label="Close procedure modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                padding: '0.4rem',
                borderRadius: '50%',
                color: '#64748B',
                border: '1px solid #E2E8F0',
                display: 'flex'
              }}
            >
              <X size={18} />
            </button>

            <span style={{
              fontSize: '0.76rem',
              fontWeight: 700,
              padding: '0.2rem 0.65rem',
              borderRadius: '9999px',
              background: '#F0FDFA',
              color: '#0D9488'
            }}>
              {modalService.tag}
            </span>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              {modalService.name}
            </h3>

            <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              {modalService.details}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              padding: '1rem',
              background: '#F8FAFC',
              borderRadius: '14px',
              marginBottom: '1.5rem',
              fontSize: '0.86rem'
            }}>
              <div><strong>Indication:</strong> {modalService.indication}</div>
              <div><strong>Procedure Duration:</strong> {modalService.duration}</div>
              <div><strong>Expected Sessions:</strong> {modalService.sessions}</div>
              <div><strong>Suitable For:</strong> {modalService.suitableFor}</div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={() => {
                  const s = modalService;
                  setModalService(null);
                  onSelectTreatment(s.name);
                }}
                className="btn-primary"
                style={{ flex: 1, padding: '0.85rem' }}
              >
                <Calendar size={16} />
                <span>Reserve Consultation for This</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
