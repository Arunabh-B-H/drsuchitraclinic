import React, { useState } from 'react';
import { Sparkles, Flame, Zap, Sun, Shield, Activity, ArrowRight, Check, AlertCircle } from 'lucide-react';
import { QUICK_CONCERNS } from '../data/clinicData';

const CONCERN_DETAILS = {
  acne: {
    title: "Severe Cystic Acne & Post-Acne Scars",
    tagline: "Targeted Prescriptions + Subcision & Dermarolling",
    protocol: "Diagnostic sebum analysis, oral isotretinoin/topical retinoid planning, combined with physician-performed subcision and TCA Cross for depressed boxcar & rolling scars.",
    whyDoctor: "Salons squeeze or use comedogenic massage oils that worsen inflammation. Dr. Suchithra addresses follicular hyperkeratinization medically to stop new breakouts permanently.",
    timeline: "Initial inflammation clears in 4-6 weeks; deep scar remodeling in 3-5 sessions.",
    suitableFor: "Teens, young adults, PCOS acne patients"
  },
  hair: {
    title: "Hair Fall, Thinning & Androgenetic Alopecia",
    tagline: "Autologous Platelet-Rich Plasma (PRP) + Scalp Therapy",
    protocol: "High-concentration double-spin PRP therapy prepared and injected directly by Dr. Suchithra into the scalp dermis, combined with prescription DHT blockers and peptide lotions.",
    whyDoctor: "Beauty parlors offer superficial oil massages that do not penetrate the dermal papilla. Medical PRP delivers concentrated autologous growth factors directly to dormant hair roots.",
    timeline: "Shedding ceases in 3-4 weeks; noticeable thickening and new baby hair growth after 3-4 sessions.",
    suitableFor: "Pattern hair loss, post-illness telogen effluvium, postpartum hair shedding"
  },
  warts: {
    title: "Warts, Skin Tags & Facial Moles",
    tagline: "Micro-Surgical Radiofrequency (RF) Ablation",
    protocol: "High-frequency radiofrequency ablation performed under topical anesthesia. Instantly vaporizes the lesion with cellular precision without bleeding, scarring, or stitches.",
    whyDoctor: "Over-the-counter acid burns cause deep pigmentation and scarring on Indian skin. RF ablation removes lesions safely in a single 15-minute clinical session.",
    timeline: "Single 15-minute session; micro-crust falls off cleanly within 4-7 days.",
    suitableFor: "Face, neck, underarms, and eyelids"
  },
  melasma: {
    title: "Melasma, Sun Tanning & Hyper-Pigmentation",
    tagline: "Physician-Formulated Medical Chemical Peels",
    protocol: "Personalized Glycolic, Salicylic, and Yellow peels calibrated specifically for Fitzpatrick Phototypes III–V, alongside prescription tyrosinase inhibitors and broad-spectrum photoprotection.",
    whyDoctor: "Generic salon bleach or unregulated acid peels trigger severe Post-Inflammatory Hyperpigmentation (PIH). Dr. Suchithra’s medical peels maintain safe epidermal pH buffers.",
    timeline: "Skin glow begins in 1 week; deep pigment fades progressively over 4-6 sessions.",
    suitableFor: "Melasma patches, neck acanthosis nigricans, stubborn sun tan"
  },
  psoriasis: {
    title: "Psoriasis, Chronic Eczema & Skin Allergies",
    tagline: "Immune-Modulating Protocol & Steroid-Sparing Care",
    protocol: "Evidence-based clinical disease control with barrier repair emollients, non-steroidal immunomodulators, phototherapy guidance, and systemic allergy workup.",
    whyDoctor: "Unregulated 'miracle creams' often contain hidden superpotent steroids that cause skin thinning and violent rebound flare-ups. Dr. Suchithra ensures safe, sustainable long-term remission.",
    timeline: "Immediate itch relief; skin clearing within 2-3 weeks under structured monitoring.",
    suitableFor: "Chronic plaque psoriasis, atopic eczema, contact dermatitis"
  },
  laser: {
    title: "Laser Hair Reduction (Diode Technology)",
    tagline: "US-FDA Approved Permanent Laser Reduction",
    protocol: "Triple-wavelength diode laser with active sapphire contact chill-tip, tailored for coarse South Indian hair follicles without damaging melanin-rich surface skin.",
    whyDoctor: "Beauty salons often use low-grade IPL (Intense Pulsed Light) which burns brown skin and produces only temporary results. Medical diode permanently destroys the follicular stem cells.",
    timeline: "Noticeable reduction after session 1; 85-95% permanent reduction after 6-8 sessions.",
    suitableFor: "Facial hair (chin/upper lip), PCOS hirsutism, arms, legs, full body"
  }
};

const iconMap = {
  Sparkles: Sparkles,
  Flame: Flame,
  Zap: Zap,
  Sun: Sun,
  Shield: Shield,
  Activity: Activity
};

export default function ConcernSelector({ onSelectConcern }) {
  const [activeConcernId, setActiveConcernId] = useState("acne");
  const activeDetail = CONCERN_DETAILS[activeConcernId] || CONCERN_DETAILS.acne;

  return (
    <section id="concerns" style={{
      paddingTop: '4.5rem',
      paddingBottom: '4.5rem',
      backgroundColor: '#FAFAF9',
      borderTop: '1px solid #E2E8F0',
      borderBottom: '1px solid #E2E8F0'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive Self-Triage</span>
          </div>
          <h2 className="section-title">
            What Skin or Hair Concern Can We Solve for You?
          </h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Select your symptom below for an instant clinical triage overview and physician-recommended treatment pathway.
          </p>

          {/* Concern Buttons / Chips */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginTop: '1.5rem'
          }}>
            {QUICK_CONCERNS.map((item) => {
              const Icon = iconMap[item.icon] || Sparkles;
              const isActive = activeConcernId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveConcernId(item.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '9999px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    backgroundColor: isActive ? '#0D9488' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#334155',
                    border: '1px solid',
                    borderColor: isActive ? '#0D9488' : '#E2E8F0',
                    boxShadow: isActive ? '0 8px 20px rgba(13, 148, 136, 0.3)' : '0 2px 5px rgba(15, 23, 42, 0.04)',
                    cursor: 'pointer',
                    transform: isActive ? 'scale(1.03)' : 'scale(1)'
                  }}
                >
                  <Icon size={16} color={isActive ? '#FFFFFF' : '#0D9488'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <div className="glass-card" style={{
          maxWidth: '920px',
          margin: '0 auto',
          padding: '2.25rem',
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          border: '1px solid rgba(13, 148, 136, 0.25)',
          boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.08)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid #F1F5F9'
          }}>
            <div>
              <span style={{
                fontSize: '0.76rem',
                fontWeight: 700,
                color: '#0D9488',
                textTransform: 'uppercase',
                letterSpacing: '0.06em'
              }}>
                Physician Diagnosis Protocol
              </span>
              <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#0F172A', marginTop: '0.2rem' }}>
                {activeDetail.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#0284C7', fontWeight: 600, marginTop: '0.2rem' }}>
                {activeDetail.tagline}
              </p>
            </div>

            <button
              onClick={() => onSelectConcern(activeDetail.title)}
              className="btn-primary"
              style={{
                padding: '0.75rem 1.4rem',
                fontSize: '0.92rem'
              }}
            >
              <span>Book For This Concern</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Grid of Medical Protocol vs Salon Pitfalls */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: '2rem',
            marginTop: '1.75rem'
          }} className="concern-detail-grid">
            
            {/* Left: Medical Protocol */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <Check size={16} style={{ color: '#0D9488' }} />
                Dr. Suchithra's Evidence-Based Approach:
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {activeDetail.protocol}
              </p>

              <div style={{
                background: '#F0FDFA',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid #CCFBF1'
              }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0F766E' }}>
                  Expected Timeline & Sessions:
                </div>
                <div style={{ fontSize: '0.88rem', color: '#134E4A', marginTop: '0.2rem' }}>
                  {activeDetail.timeline}
                </div>
              </div>
            </div>

            {/* Right: Why Parlor/Salon Shortcuts Fail */}
            <div style={{
              background: '#FFFBEB',
              padding: '1.25rem',
              borderRadius: '16px',
              border: '1px solid #FDE68A'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#B45309', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.5rem' }}>
                <AlertCircle size={17} />
                <span>Why Salon Shortcuts Are Risky:</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#78350F', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                {activeDetail.whyDoctor}
              </p>

              <div style={{
                borderTop: '1px dashed #FCD34D',
                paddingTop: '0.75rem',
                fontSize: '0.8rem',
                color: '#92400E'
              }}>
                <strong>Ideal Candidates:</strong> {activeDetail.suitableFor}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
