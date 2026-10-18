import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MessageCircle, Phone, User, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, SERVICE_CATEGORIES } from '../data/clinicData';

const SLOTS = [
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM"
];

const POPULAR_CONCERNS = [
  "Acne Breakouts & Scars",
  "Hair Fall & PRP Therapy",
  "Skin Tag / Wart Removal (RF)",
  "Melasma & Pigmentation Peel",
  "Psoriasis / Eczema Care",
  "Laser Hair Reduction",
  "General Dermatologist Consultation"
];

export default function InteractiveBooking({ prefilledConcern = "" }) {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [concern, setConcern] = useState(prefilledConcern || POPULAR_CONCERNS[0]);
  const [preferredDate, setPreferredDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(SLOTS[0]);
  const [isSundayError, setIsSundayError] = useState(false);

  // Set default date to today or tomorrow (if today is Sunday or after 8pm)
  useEffect(() => {
    const today = new Date();
    const formatted = today.toISOString().split('T')[0];
    setPreferredDate(formatted);
  }, []);

  useEffect(() => {
    if (prefilledConcern) {
      setConcern(prefilledConcern);
    }
  }, [prefilledConcern]);

  const handleDateChange = (e) => {
    const selected = e.target.value;
    setPreferredDate(selected);
    const dateObj = new Date(selected);
    if (dateObj.getDay() === 0) {
      setIsSundayError(true);
    } else {
      setIsSundayError(false);
    }
  };

  // Generate URL-encoded pre-filled WhatsApp link
  const buildWhatsAppMessage = () => {
    const safeName = patientName.trim() ? `Patient Name: ${patientName.trim()}%0A` : '';
    const safePhone = patientPhone.trim() ? `Contact: ${patientPhone.trim()}%0A` : '';
    const safeDate = preferredDate || 'Earliest available date';
    const safeSlot = selectedSlot;
    const safeConcern = concern;

    // Follow the exact specified format:
    // https://wa.me/919074714272?text=Hello%20Dr.%20Suchithra%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20at%20your%20Karamana%20clinic.%20My%20concern%20is%3A%20[Skin/Hair]%20on%20[Preferred%20Date].
    const text = `Hello Dr. Suchithra, I would like to schedule a consultation at your Karamana clinic. My concern is: ${safeConcern} on ${safeDate} at ${safeSlot}.%0A${safeName}${safePhone}`;
    return `https://wa.me/${CLINIC_INFO.phoneClean}?text=${text}`;
  };

  return (
    <section id="booking" style={{
      paddingTop: '3.75rem',
      paddingBottom: '3.75rem',
      backgroundColor: '#FAFAF9',
      position: 'relative',
      scrollMarginTop: '90px'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-tag" style={{ marginBottom: '0.45rem' }}>
            <CalendarIcon size={13} />
            <span>Clinic Appointment Desk</span>
          </div>

          <h2 className="section-title" style={{ fontSize: '1.95rem', marginBottom: '0.35rem' }}>
            Reserve Your Consultation Slot
          </h2>

          <p className="section-subtitle" style={{ fontSize: '0.94rem', maxWidth: '640px', margin: '0 auto', color: '#64748B' }}>
            Consultations are held Monday to Saturday, 5:00 PM – 8:00 PM at Karamana. Select your details below to directly lock in your slot on WhatsApp.
          </p>
        </div>

        {/* Main Booking Card - Focused, Clean & Centered */}
        <div style={{
          maxWidth: '680px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid rgba(13, 148, 136, 0.2)',
          boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)',
          padding: '2.25rem',
          position: 'relative'
        }} className="booking-card">
          
          {/* Header Row inside Card */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            paddingBottom: '1.25rem',
            borderBottom: '1px solid #F1F5F9'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
                Select Consultation Details
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#64748B', margin: 0 }}>
                Doctor-led evaluation • Nominal fee payable at clinic
              </p>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.75rem',
              borderRadius: '9999px',
              backgroundColor: '#F0FDFA',
              border: '1px solid #CCFBF1',
              color: '#0F766E',
              fontSize: '0.78rem',
              fontWeight: 700
            }}>
              <CheckCircle2 size={13} style={{ color: '#0D9488' }} />
              <span>Nominal Fee: ₹350–₹500</span>
            </div>
          </div>

          {/* Concern Selector */}
          <div style={{ marginBottom: '1.35rem' }}>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#334155', marginBottom: '0.45rem' }}>
              Primary Concern or Treatment:
            </label>
            <select
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '12px',
                border: '1px solid #CBD5E1',
                backgroundColor: '#F8FAFC',
                fontSize: '0.92rem',
                color: '#0F172A',
                outline: 'none',
                fontFamily: 'inherit'
              }}
            >
              {POPULAR_CONCERNS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div style={{ marginBottom: '1.35rem' }}>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 700, color: '#334155', marginBottom: '0.45rem' }}>
              Preferred Appointment Date (Mon – Sat):
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="date"
                value={preferredDate}
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]}
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#F8FAFC',
                  fontSize: '0.92rem',
                  color: '#0F172A',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            {isSundayError && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: '#DC2626',
                fontSize: '0.8rem',
                fontWeight: 600,
                marginTop: '0.4rem'
              }}>
                <AlertCircle size={14} />
                <span>The clinic is closed on Sundays. Please choose Monday through Saturday.</span>
              </div>
            )}
          </div>

          {/* Slot Picker */}
          <div style={{ marginBottom: '1.45rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.55rem' }}>
              <label style={{ fontSize: '0.86rem', fontWeight: 700, color: '#334155' }}>
                Preferred Evening Time Slot:
              </label>
              <span style={{ fontSize: '0.78rem', color: '#0D9488', fontWeight: 600 }}>
                5:00 PM – 8:00 PM (15-20m / patient)
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '0.5rem'
            }}>
              {SLOTS.map((slot) => {
                const isSelected = selectedSlot === slot;
                return (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    style={{
                      padding: '0.65rem 0.5rem',
                      borderRadius: '10px',
                      fontSize: '0.86rem',
                      fontWeight: 700,
                      border: '1px solid',
                      borderColor: isSelected ? '#0D9488' : '#E2E8F0',
                      backgroundColor: isSelected ? '#0D9488' : '#FAFAF9',
                      color: isSelected ? '#FFFFFF' : '#334155',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      textAlign: 'center'
                    }}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Patient Name & Optional Phone */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '1rem',
            marginBottom: '1.65rem'
          }} className="patient-inputs-grid">
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#475569', marginBottom: '0.35rem' }}>
                Patient Name (Optional):
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Nair"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#F8FAFC',
                  fontSize: '0.88rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#475569', marginBottom: '0.35rem' }}>
                Phone / WhatsApp (Optional):
              </label>
              <input
                type="tel"
                placeholder="e.g. 98765 43210"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '10px',
                  border: '1px solid #CBD5E1',
                  backgroundColor: '#F8FAFC',
                  fontSize: '0.88rem',
                  outline: 'none',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          {/* Direct WhatsApp CTA Button */}
          <a
            href={buildWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{
              width: '100%',
              padding: '0.95rem',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.55rem',
              borderRadius: '14px',
              fontWeight: 700
            }}
          >
            <MessageCircle size={20} fill="#FFFFFF" />
            <span>Confirm & Lock In Slot via WhatsApp</span>
          </a>

          {/* Phone Fallback */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.45rem',
            marginTop: '1rem',
            fontSize: '0.82rem',
            color: '#64748B'
          }}>
            <span>Prefer speaking directly?</span>
            <a
              href={`tel:${CLINIC_INFO.phoneClean}`}
              style={{ color: '#0D9488', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
            >
              <Phone size={13} />
              <span>Call +91 90747 14272</span>
            </a>
          </div>

          {/* Clean Trust Assurance Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '0.75rem',
            marginTop: '1.5rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid #F1F5F9',
            fontSize: '0.76rem',
            color: '#64748B'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={14} style={{ color: '#0D9488', flexShrink: 0 }} />
              <span>100% Doctor-Led Care</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} style={{ color: '#0D9488', flexShrink: 0 }} />
              <span>Mon–Sat: 5:00 PM – 8:00 PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <ShieldCheck size={14} style={{ color: '#0D9488', flexShrink: 0 }} />
              <span>No Commercial Salon Markup</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
