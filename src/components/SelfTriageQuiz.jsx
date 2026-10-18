import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, MessageCircle, Calendar, ShieldCheck, Flame, Zap, Sun, Shield } from 'lucide-react';
import { QUIZ_QUESTIONS, CLINIC_INFO } from '../data/clinicData';

const iconMap = {
  Sparkles: Sparkles,
  Flame: Flame,
  Zap: Zap,
  Sun: Sun,
  Shield: Shield
};

export default function SelfTriageQuiz({ onBookWithQuiz }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleSelectOption = (option) => {
    const newAnswers = { ...answers, [currentStep]: option };
    setAnswers(newAnswers);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate clinical recommendation
      calculateRecommendation(newAnswers);
    }
  };

  const calculateRecommendation = (finalAnswers) => {
    const q1 = finalAnswers[0];
    const q2 = finalAnswers[1];
    const q3 = finalAnswers[2];

    let recTitle = "Physician Consultation & Dermoscopy";
    let recTreatment = "Comprehensive Diagnostic Mapping & Tailored Prescription Protocol";
    let rationale = "Based on your symptom history, a direct in-person evaluation with Dr. Suchithra is advised to diagnose the root physiological trigger.";
    let urgent = false;

    if (q1?.id === 'face-acne') {
      recTitle = "Severe Acne & Depressed Scar Revision Protocol";
      recTreatment = "Medical Retinoid Protocol + Targeted Chemical Peels / Subcision";
      rationale = "Your responses indicate persistent follicular inflammation. Dr. Suchithra will design an oral/topical prescription protocol to stop active pustules and evaluate depressed scars for subcision.";
    } else if (q1?.id === 'hair-scalp') {
      recTitle = "Autologous Scalp PRP & Follicular Re-activation";
      recTreatment = "High-Yield Platelet-Rich Plasma (PRP) + Scalp Dermoscopy";
      rationale = "Your hair thinning requires autologous growth factors delivered directly to the dermal papilla. Dr. Suchithra will examine follicular ostia under magnification and initiate physician-administered PRP.";
    } else if (q1?.id === 'tags-warts') {
      recTitle = "Micro-Surgical Radiofrequency (RF) Ablation";
      recTreatment = "Same-Day Painless RF Vaporization under Topical Numbing";
      rationale = "Your skin tags or warts can be safely eradicated in a single 15-minute doctor session without scalpel cuts, bleeding, or scarring.";
    } else if (q1?.id === 'pigment-melasma') {
      recTitle = "Physician-Formulated Medical Chemical Peel Protocol";
      recTreatment = "pH-Buffered Yellow / Glycolic Peels + Tyrosinase Inhibitor Regimen";
      rationale = "Your hyperpigmentation requires medical-grade depigmentation calibrated safely for South Indian skin phototypes to prevent post-inflammatory hyperpigmentation (PIH).";
    } else if (q1?.id === 'chronic-rash') {
      recTitle = "Steroid-Sparing Clinical Dermatology Care";
      recTreatment = "Immune-Modulating Protocol + Skin Barrier Restoration";
      rationale = "Chronic inflammatory rashes require cautious steroid-sparing therapy to avoid rebound flare-ups and permanent skin barrier thinning.";
      urgent = true;
    }

    const calculatedResult = {
      recTitle,
      recTreatment,
      rationale,
      urgent,
      answersSummary: {
        concern: q1?.label || "General Dermatological Issue",
        duration: q2?.label || "Unspecified",
        priorCare: q3?.label || "None"
      }
    };

    setResult(calculatedResult);

    // Trigger celebratory confetti effect
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Ignore if canvas is restricted
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  const getWhatsAppBookingUrl = () => {
    if (!result) return `https://wa.me/${CLINIC_INFO.phoneClean}`;
    const text = `Hello Dr. Suchithra, I completed your 15-Second Clinic Triage Quiz.%0A%0A*My Concern:* ${result.answersSummary.concern}%0A*Duration:* ${result.answersSummary.duration}%0A*Prior Care:* ${result.answersSummary.priorCare}%0A*Recommended Pathway:* ${result.recTitle}%0A%0AI would like to schedule a consultation at your Karamana clinic.`;
    return `https://wa.me/${CLINIC_INFO.phoneClean}?text=${text}`;
  };

  return (
    <section id="triage-quiz" className="clinic-section" style={{
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #FAFAF9 100%)'
    }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag">
            <Sparkles size={14} />
            <span>15-Second Clinical Mini-Module</span>
          </div>

          <h2 className="section-title">
            Skin & Hair Concern Self-Triage Quiz
          </h2>

          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            Answer 3 quick questions to receive Dr. Suchithra’s recommended clinical diagnosis pathway and lock in your consultation slot.
          </p>
        </div>

        {/* Quiz Container Box */}
        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '2.5rem',
          border: '1px solid rgba(13, 148, 136, 0.25)',
          boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)',
          position: 'relative'
        }} className="quiz-box">

          {!result ? (
            <div>
              {/* Progress Bar & Step Indicator */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0D9488', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Step {currentStep + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748B' }}>
                    {Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete
                  </span>
                </div>

                <div style={{ width: '100%', height: '6px', background: '#E2E8F0', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #0D9488, #2DD4BF)',
                    borderRadius: '9999px',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>

              {/* Question Heading */}
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.35rem' }}>
                {QUIZ_QUESTIONS[currentStep].question}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#64748B', marginBottom: '1.75rem' }}>
                {QUIZ_QUESTIONS[currentStep].description}
              </p>

              {/* Options Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {QUIZ_QUESTIONS[currentStep].options.map((option) => {
                  const Icon = option.icon ? iconMap[option.icon] || Sparkles : null;
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(option)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1.1rem 1.35rem',
                        background: '#FAFAF9',
                        border: '1px solid #E2E8F0',
                        borderRadius: '14px',
                        textAlign: 'left',
                        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#0D9488';
                        e.currentTarget.style.background = '#F0FDFA';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#E2E8F0';
                        e.currentTarget.style.background = '#FAFAF9';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        {Icon && (
                          <div style={{
                            width: '38px',
                            height: '38px',
                            borderRadius: '10px',
                            background: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0D9488'
                          }}>
                            <Icon size={18} />
                          </div>
                        )}
                        <div>
                          <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#0F172A' }}>
                            {option.label}
                          </div>
                          {option.subtitle && (
                            <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.15rem' }}>
                              {option.subtitle}
                            </div>
                          )}
                        </div>
                      </div>

                      <ArrowRight size={17} style={{ color: '#94A3B8' }} />
                    </button>
                  );
                })}
              </div>

              {currentStep > 0 && (
                <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-start' }}>
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    style={{
                      fontSize: '0.85rem',
                      color: '#64748B',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: '0.4rem 0.6rem'
                    }}
                  >
                    <span>← Back to previous question</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div style={{ animation: 'fadeIn 0.4s ease' }}>
              {/* Top Success Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                background: '#ECFDF5',
                color: '#065F46',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '1rem',
                border: '1px solid #A7F3D0'
              }}>
                <CheckCircle2 size={16} />
                <span>Triage Recommendation Generated</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.4rem' }}>
                {result.recTitle}
              </h3>

              <div style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#0D9488',
                marginBottom: '1.25rem'
              }}>
                {result.recTreatment}
              </div>

              {/* Rationale Callout Box */}
              <div style={{
                background: '#F0FDFA',
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid #CCFBF1',
                marginBottom: '1.5rem'
              }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0F766E', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Clinical Rationale:
                </div>
                <p style={{ fontSize: '0.94rem', color: '#134E4A', lineHeight: 1.6 }}>
                  {result.rationale}
                </p>
              </div>

              {/* Summary of user's inputs */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                gap: '0.75rem',
                padding: '1rem',
                background: '#F8FAFC',
                borderRadius: '12px',
                marginBottom: '2rem',
                border: '1px solid #E2E8F0',
                fontSize: '0.82rem'
              }} className="quiz-summary-grid">
                <div>
                  <span style={{ color: '#64748B' }}>Concern:</span>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>{result.answersSummary.concern}</div>
                </div>
                <div>
                  <span style={{ color: '#64748B' }}>Duration:</span>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>{result.answersSummary.duration}</div>
                </div>
                <div>
                  <span style={{ color: '#64748B' }}>Prior Care:</span>
                  <div style={{ fontWeight: 700, color: '#0F172A' }}>{result.answersSummary.priorCare}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{
                    width: '100%',
                    padding: '0.95rem',
                    fontSize: '1rem',
                    textDecoration: 'none'
                  }}
                >
                  <MessageCircle size={18} fill="#FFFFFF" />
                  <span>Lock in Consultation on WhatsApp with Quiz Summary</span>
                </a>

                <button
                  onClick={() => onBookWithQuiz(result.recTitle)}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem' }}
                >
                  <Calendar size={17} />
                  <span>Use Clinic Date & Slot Picker (Mon–Sat 5 PM - 8 PM)</span>
                </button>

                <button
                  onClick={handleReset}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.45rem',
                    color: '#64748B',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    marginTop: '0.5rem',
                    padding: '0.5rem'
                  }}
                >
                  <RotateCcw size={14} />
                  <span>Retake Quiz</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
