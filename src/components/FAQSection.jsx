import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" style={{
      paddingTop: '5.5rem',
      paddingBottom: '5.5rem',
      backgroundColor: '#FAFAF9',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag">
            <HelpCircle size={14} />
            <span>Patient Guidance</span>
          </div>

          <h2 className="section-title">
            Frequently Asked Questions
          </h2>

          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Clear answers to help you prepare for your consultation at Dr. Suchithra's Karamana clinic.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{
          maxWidth: '820px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid',
                  borderColor: isOpen ? '#0D9488' : '#E2E8F0',
                  boxShadow: isOpen ? '0 10px 25px -5px rgba(13, 148, 136, 0.1)' : 'var(--shadow-sm)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    background: 'none',
                    cursor: 'pointer',
                    gap: '1rem'
                  }}
                >
                  <span style={{
                    fontSize: '1.02rem',
                    fontWeight: 700,
                    color: isOpen ? '#0D9488' : '#0F172A'
                  }}>
                    {faq.q}
                  </span>

                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: isOpen ? '#F0FDFA' : '#F1F5F9',
                    color: isOpen ? '#0D9488' : '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem 1.5rem',
                    fontSize: '0.94rem',
                    lineHeight: 1.68,
                    color: '#475569',
                    borderTop: '1px solid #F1F5F9'
                  }}>
                    <p style={{ marginTop: '0.85rem' }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
