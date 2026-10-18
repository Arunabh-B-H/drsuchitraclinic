import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { GoogleIcon } from './BrandIcons';
import { PATIENT_REVIEWS } from '../data/clinicData';

export default function PatientProof() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive card count detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1080) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tags = [
    { id: "all", label: "All Reviews (688+)" },
    { id: "acne", label: "Acne & Scars" },
    { id: "hair", label: "Hair & PRP" },
    { id: "warts", label: "Wart Removal" },
    { id: "pigment", label: "Peels & Melasma" },
    { id: "eczema", label: "Eczema & Allergies" }
  ];

  const filteredReviews = selectedTag === "all"
    ? PATIENT_REVIEWS
    : PATIENT_REVIEWS.filter((r) => r.category === selectedTag);

  // Keep index within bounds
  const maxStartIndex = Math.max(0, filteredReviews.length - visibleCount);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1 > maxStartIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? maxStartIndex : prev - 1));
  };

  const currentCards = filteredReviews.slice(startIndex, startIndex + visibleCount);
  // Wrap around if needed
  if (currentCards.length < visibleCount && filteredReviews.length >= visibleCount) {
    const remainder = visibleCount - currentCards.length;
    currentCards.push(...filteredReviews.slice(0, remainder));
  }

  return (
    <section
      id="reviews"
      style={{
        paddingTop: '6rem',
        paddingBottom: '6rem',
        backgroundColor: '#FAFAF9',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle decorative background gradient circles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-8%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '-8%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(66, 133, 244, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.85rem)',
            fontWeight: 800,
            color: '#0F172A',
            letterSpacing: '-0.025em',
            marginBottom: '0.85rem',
            lineHeight: 1.2
          }}>
            Real Stories, Real Skin Transformations
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: '#64748B',
            maxWidth: '680px',
            margin: '0 auto 2rem auto',
            lineHeight: 1.6
          }}>
            Read authentic Google reviews from patients across Karamana, Kowdiar, Kazhakoottam, and greater Thiruvananthapuram treated personally by Dr.Suchithra C.
          </p>

          {/* Treatment Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.55rem',
            flexWrap: 'wrap',
            maxWidth: '850px',
            margin: '0 auto'
          }}>
            {tags.map((tag) => {
              const active = selectedTag === tag.id;
              return (
                <button
                  key={tag.id}
                  onClick={() => {
                    setSelectedTag(tag.id);
                    setStartIndex(0);
                  }}
                  style={{
                    padding: '0.5rem 1.15rem',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: active ? 700 : 600,
                    cursor: 'pointer',
                    border: '1px solid',
                    borderColor: active ? '#0D9488' : '#E2E8F0',
                    background: active ? '#0D9488' : '#FFFFFF',
                    color: active ? '#FFFFFF' : '#475569',
                    boxShadow: active ? '0 4px 14px rgba(13, 148, 136, 0.25)' : 'var(--shadow-sm)',
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = '#0D9488';
                      e.currentTarget.style.color = '#0D9488';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.borderColor = '#E2E8F0';
                      e.currentTarget.style.color = '#475569';
                    }
                  }}
                >
                  {tag.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. Official Google Verified Aggregate Pill (Directly above the review cards) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(226, 232, 240, 0.95)',
              borderRadius: '9999px',
              padding: '0.55rem 1.35rem',
              boxShadow: '0 4px 18px -2px rgba(15, 23, 42, 0.07)'
            }}
          >
            <GoogleIcon size={22} />

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#FBBC04" color="#FBBC04" />
                ))}
              </div>
              <span style={{
                fontSize: '0.96rem',
                fontWeight: 800,
                color: '#0F172A',
                marginLeft: '0.2rem'
              }}>
                5.0
              </span>
              <span style={{ color: '#94A3B8', fontSize: '0.9rem' }}>•</span>
              <span style={{ fontSize: '0.88rem', color: '#475569', fontWeight: 600 }}>
                688+ Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* 2. Review Cards Carousel Showcase */}
        <div style={{ position: 'relative' }}>

          {/* The Cards Grid */}
          <div 
            className="lalle-stagger"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
              gap: '1.75rem',
              alignItems: 'stretch'
            }}
          >
            {currentCards.map((review) => (
              <article
                key={review.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2rem 1.85rem 1.6rem 1.85rem',
                  border: '1px solid #EAEFEF',
                  boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  height: '100%'
                }}
                className="google-review-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(13, 148, 136, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px -4px rgba(15, 23, 42, 0.06)';
                }}
              >
                <div>
                  {/* Card Header: Avatar, Name, Time, and Google "G" Logo */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                      {/* Avatar Circle with Initial */}
                      <div style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        backgroundColor: review.avatarBg || '#1A73E8',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '1.2rem',
                        fontFamily: 'var(--font-display)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        boxShadow: '0 3px 8px rgba(0,0,0,0.12)'
                      }}>
                        {review.avatarLetter || review.name.charAt(0)}
                      </div>

                      {/* Name & Time Ago */}
                      <div>
                        <h3 style={{
                          fontSize: '1.04rem',
                          fontWeight: 700,
                          color: '#0F172A',
                          lineHeight: 1.25,
                          marginBottom: '0.15rem'
                        }}>
                          {review.name}
                        </h3>
                        <div style={{
                          fontSize: '0.8rem',
                          color: '#64748B',
                          fontWeight: 500
                        }}>
                          {review.timeAgo}
                        </div>
                      </div>
                    </div>

                    {/* Official Multi-Color Google "G" on Top Right */}
                    <div style={{ paddingTop: '2px' }}>
                      <GoogleIcon size={22} />
                    </div>
                  </div>

                  {/* 5 Golden Amber Stars */}
                  <div style={{
                    display: 'flex',
                    gap: '3px',
                    marginBottom: '1.15rem'
                  }}>
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} size={17} fill="#FBBC04" color="#FBBC04" />
                    ))}
                  </div>

                  {/* Quoted Review Text (Italicized styling from screenshot) */}
                  <p style={{
                    fontSize: '0.96rem',
                    lineHeight: 1.72,
                    color: '#334155',
                    fontStyle: 'italic',
                    fontFamily: 'inherit',
                    marginBottom: '1.75rem'
                  }}>
                    "{review.text}"
                  </p>
                </div>

                {/* Card Bottom: Subtle Divider + Uppercase Golden/Ochre Tag */}
                <div>
                  <div style={{
                    height: '1px',
                    backgroundColor: '#F1F5F9',
                    marginBottom: '1.1rem'
                  }} />

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      letterSpacing: '0.07em',
                      color: '#B45309', // Ochre / Golden color matching reference image
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-display)'
                    }}>
                      {review.treatmentTag || "GENERAL DERMATOLOGY"}
                    </span>

                    <span style={{
                      fontSize: '0.72rem',
                      color: '#0D9488',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.2rem',
                      backgroundColor: '#F0FDFA',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                      border: '1px solid #CCFBF1'
                    }}>
                      <CheckCircle2 size={11} /> Verified
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation Controls: Left & Right Arrows + Slide Counter */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.25rem',
            marginTop: '2.5rem'
          }}>
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous patient reviews"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(15, 23, 42, 0.06)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0D9488';
                e.currentTarget.style.color = '#0D9488';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.color = '#0F172A';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronLeft size={22} />
            </button>

            {/* Pagination Indicators / Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              {Array.from({ length: Math.ceil(filteredReviews.length / visibleCount) }).map((_, idx) => {
                const isActive = Math.floor(startIndex / visibleCount) === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setStartIndex(idx * visibleCount)}
                    aria-label={`Go to slide ${idx + 1}`}
                    style={{
                      width: isActive ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '9999px',
                      backgroundColor: isActive ? '#0D9488' : '#CBD5E1',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  />
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next patient reviews"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#0F172A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(15, 23, 42, 0.06)',
                transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0D9488';
                e.currentTarget.style.color = '#0D9488';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E2E8F0';
                e.currentTarget.style.color = '#0F172A';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}
