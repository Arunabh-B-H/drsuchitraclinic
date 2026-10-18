import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck, Activity } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Evidence-Based Clinical Suite...");
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Remove static HTML fallback loader if present
    const staticLoader = document.getElementById('initial-preloader');
    if (staticLoader) {
      staticLoader.remove();
    }

    // Lock body scroll while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let currentProgress = 0;
    const interval = setInterval(() => {
      // Natural non-linear progress acceleration
      const increment = currentProgress < 30 ? 6 : currentProgress < 75 ? 4 : 8;
      currentProgress = Math.min(100, currentProgress + increment);
      setProgress(currentProgress);

      if (currentProgress < 35) {
        setStatusText("Initializing Evidence-Based Clinical Suite...");
      } else if (currentProgress < 75) {
        setStatusText("Verifying Dr. Suchithra's Consultation Schedule...");
      } else if (currentProgress < 100) {
        setStatusText("Connecting Karamana Clinic Desk...");
      } else {
        setStatusText("Welcome to Dr. Suchithra's Clinic");
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setIsDone(true);
            document.body.style.overflow = originalOverflow;
            if (onComplete) onComplete();
          }, 700);
        }, 220);
      }
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = originalOverflow;
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      role="status"
      aria-label="Loading Dr. Suchithra Clinic"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at 50% 45%, #0B3B39 0%, #041B1E 55%, #020F12 100%)',
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0%)',
        borderBottomLeftRadius: isExiting ? '50% 120px' : '0',
        borderBottomRightRadius: isExiting ? '50% 120px' : '0',
        transition: 'transform 0.75s cubic-bezier(0.76, 0, 0.24, 1), border-radius 0.75s cubic-bezier(0.76, 0, 0.24, 1)',
        pointerEvents: isExiting ? 'none' : 'auto',
        userSelect: 'none',
        boxShadow: isExiting ? '0 25px 60px rgba(13, 148, 136, 0.5)' : 'none'
      }}
    >
      {/* Ambient background glowing orbs */}
      <div style={{
        position: 'absolute',
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.28) 0%, rgba(13, 148, 136, 0) 70%)',
        filter: 'blur(35px)',
        pointerEvents: 'none',
        animation: 'pulseGlow 3s ease-in-out infinite alternate'
      }} />

      {/* Main Centered Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '1.5rem',
        maxWidth: '460px'
      }}>
        {/* Doctor Monogram & Glowing Ring */}
        <div style={{
          position: 'relative',
          marginBottom: '1.75rem'
        }}>
          {/* Pulsing Aura Ring */}
          <div style={{
            position: 'absolute',
            inset: '-8px',
            borderRadius: '50%',
            border: '2px solid rgba(45, 212, 191, 0.3)',
            animation: 'pulseRing 2s cubic-bezier(0.25, 1, 0.5, 1) infinite',
            pointerEvents: 'none'
          }} />

          {/* Monogram Box */}
          <div style={{
            width: '76px',
            height: '76px',
            borderRadius: '22px',
            background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 50%, #0F766E 100%)',
            border: '2px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 0 45px rgba(20, 184, 166, 0.45), inset 0 0 15px rgba(255, 255, 255, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            animation: 'floatBadge 3.5s ease-in-out infinite'
          }}>
            <span style={{
              fontFamily: 'var(--font-display, sans-serif)',
              fontSize: '2.5rem',
              fontWeight: 800,
              color: '#FFFFFF',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
              lineHeight: 1
            }}>
              S
            </span>

            {/* Micro Sparkle Accent Badge */}
            <div style={{
              position: 'absolute',
              top: '-6px',
              right: '-6px',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: '#041B1E',
              border: '1.5px solid #2DD4BF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(45, 212, 191, 0.6)'
            }}>
              <Sparkles size={12} style={{ color: '#2DD4BF' }} />
            </div>
          </div>
        </div>

        {/* Doctor Name & Credentials */}
        <h1 style={{
          fontSize: '1.45rem',
          fontWeight: 800,
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          marginBottom: '0.45rem',
          fontFamily: 'var(--font-display, sans-serif)'
        }}>
          Dr. Suchithra C
        </h1>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.28rem 0.85rem',
          borderRadius: '9999px',
          background: 'rgba(45, 212, 191, 0.1)',
          border: '1px solid rgba(45, 212, 191, 0.35)',
          color: '#5EEAD4',
          fontSize: '0.78rem',
          fontWeight: 700,
          marginBottom: '0.65rem'
        }}>
          <ShieldCheck size={13} style={{ color: '#2DD4BF' }} />
          <span>MBBS, MD, DNB (Dermatology)</span>
        </div>

        <p style={{
          fontSize: '0.8rem',
          color: '#94A3B8',
          marginBottom: '2rem',
          fontWeight: 500
        }}>
          Skin & Hair Clinic • Karamana, Trivandrum
        </p>

        {/* High-Tech Progress Bar Track */}
        <div style={{
          width: '240px',
          position: 'relative',
          marginBottom: '1rem'
        }}>
          <div style={{
            width: '100%',
            height: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '999px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Glowing Active Fill */}
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #0D9488 0%, #2DD4BF 50%, #5EEAD4 100%)',
              borderRadius: '999px',
              transition: 'width 0.08s ease-out',
              boxShadow: '0 0 14px rgba(45, 212, 191, 0.8)'
            }} />
          </div>

          {/* Micro Progress Percentage */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.5rem',
            fontSize: '0.72rem',
            color: '#64748B',
            fontWeight: 600
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
              <Activity size={11} style={{ color: '#0D9488' }} />
              <span>Evidence-Based</span>
            </span>
            <span style={{ color: '#2DD4BF', fontVariantNumeric: 'tabular-nums' }}>
              {progress}%
            </span>
          </div>
        </div>

        {/* Dynamic Micro Status Message */}
        <div style={{
          height: '20px',
          fontSize: '0.78rem',
          color: '#94A3B8',
          fontWeight: 500,
          transition: 'all 0.25s ease'
        }}>
          {statusText}
        </div>
      </div>
    </div>
  );
}
