import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';

/**
 * CurvedPageTransition
 * Inspired by Grégory Lallé's award-winning Awwwards site transition (SOTD '24).
 * Features a dual-layered organic curved liquid SVG curtain wipe,
 * clinical monogram apex reveal, and smooth exit sweep across all screen sizes.
 */
export default function CurvedPageTransition() {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('idle'); // 'entering' | 'holding' | 'exiting' | 'idle'
  const [targetTitle, setTargetTitle] = useState('');
  const [targetSubtitle, setTargetSubtitle] = useState('');

  const animRef = useRef(null);
  const pathTealRef = useRef(null);
  const pathDarkRef = useRef(null);
  const startTimeRef = useRef(0);

  // Easing function: Cubic bezier equivalent for smooth liquid momentum
  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const easeOutQuart = (t) => {
    return 1 - Math.pow(1 - t, 4);
  };

  const easeInQuart = (t) => {
    return t * t * t * t;
  };

  const runAnimation = (direction, onComplete) => {
    const duration = 480; // ms
    const startTime = performance.now();

    const frame = (now) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(1, elapsed / duration);

      if (direction === 'enter') {
        // Curve sweeping UP from bottom to cover screen
        const pDark = easeInOutCubic(rawProgress);
        // Teal layer leads slightly ahead
        const pTeal = easeInOutCubic(Math.min(1, rawProgress * 1.15));

        // Dark Layer: Base moves from 100 to 0, peak curves up in center
        const yDark = 100 * (1 - pDark);
        const curveDark = yDark - 35 * Math.sin(pDark * Math.PI);
        const dDark = `M 0 100 V ${yDark.toFixed(1)} Q 50 ${Math.max(0, curveDark).toFixed(1)} 100 ${yDark.toFixed(1)} V 100 Z`;

        // Teal Accent Layer: Leads by creating a vibrant glowing rim
        const yTeal = 100 * (1 - pTeal);
        const curveTeal = yTeal - 42 * Math.sin(pTeal * Math.PI);
        const dTeal = `M 0 100 V ${yTeal.toFixed(1)} Q 50 ${Math.max(0, curveTeal).toFixed(1)} 100 ${yTeal.toFixed(1)} V 100 Z`;

        if (pathDarkRef.current) pathDarkRef.current.setAttribute('d', dDark);
        if (pathTealRef.current) pathTealRef.current.setAttribute('d', dTeal);
      } else {
        // Curve sweeping UP off the screen to reveal target section
        const pDark = easeInOutCubic(rawProgress);
        const pTeal = easeInOutCubic(Math.max(0, (rawProgress - 0.08) * 1.1));

        // Pull bottom edge upwards with an organic arch
        const yDark = 100 * (1 - pDark);
        const curveDark = yDark - 38 * Math.sin(pDark * Math.PI);
        const dDark = `M 0 0 V ${yDark.toFixed(1)} Q 50 ${Math.max(0, curveDark).toFixed(1)} 100 ${yDark.toFixed(1)} V 0 Z`;

        const yTeal = 100 * (1 - pTeal);
        const curveTeal = yTeal - 45 * Math.sin(pTeal * Math.PI);
        const dTeal = `M 0 0 V ${yTeal.toFixed(1)} Q 50 ${Math.max(0, curveTeal).toFixed(1)} 100 ${yTeal.toFixed(1)} V 0 Z`;

        if (pathDarkRef.current) pathDarkRef.current.setAttribute('d', dDark);
        if (pathTealRef.current) pathTealRef.current.setAttribute('d', dTeal);
      }

      if (rawProgress < 1) {
        animRef.current = requestAnimationFrame(frame);
      } else {
        if (onComplete) onComplete();
      }
    };

    animRef.current = requestAnimationFrame(frame);
  };

  useEffect(() => {
    // Listen for custom page transition events triggered from anywhere in the app
    const handleTransitionRequest = (e) => {
      if (isActive) return;

      const { targetId, title = "Consultation Suite", subtitle = "Dr. Suchithra's Medical Care", callback } = e.detail || {};

      setTargetTitle(title);
      setTargetSubtitle(subtitle);
      setIsActive(true);
      setPhase('entering');

      // 1. Run Enter Liquid Wave Wipe
      runAnimation('enter', () => {
        setPhase('holding');

        // 2. Perform page navigation or callback at apex
        if (targetId) {
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'auto' });
            // Re-trigger reveal animation on the target element
            targetEl.classList.remove('is-revealed');
            void targetEl.offsetWidth; // force reflow
            targetEl.classList.add('is-revealed');
          }
        }
        if (callback) callback();

        // 3. Run Exit Liquid Wave Wipe after brief apex hold
        setTimeout(() => {
          setPhase('exiting');
          runAnimation('exit', () => {
            setPhase('idle');
            setIsActive(false);
          });
        }, 120);
      });
    };

    window.addEventListener('trigger-page-transition', handleTransitionRequest);

    return () => {
      window.removeEventListener('trigger-page-transition', handleTransitionRequest);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999998,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Liquid Curved SVG Canvas */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 15px 35px rgba(13, 148, 136, 0.4))'
        }}
      >
        <defs>
          <linearGradient id="lalleTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14B8A6" />
            <stop offset="50%" stopColor="#0D9488" />
            <stop offset="100%" stopColor="#042F2E" />
          </linearGradient>

          <linearGradient id="lalleDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" />
            <stop offset="60%" stopColor="#091E24" />
            <stop offset="100%" stopColor="#020B0D" />
          </linearGradient>
        </defs>

        {/* Leading Clinical Teal Accent Wave */}
        <path
          ref={pathTealRef}
          fill="url(#lalleTealGrad)"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 Z"
        />

        {/* Primary Luxury Obsidian Curtain */}
        <path
          ref={pathDarkRef}
          fill="url(#lalleDarkGrad)"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 Z"
        />
      </svg>

      {/* Editorial Apex Content (Visible during the wave apex) */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: '#FFFFFF',
          opacity: phase === 'holding' ? 1 : 0,
          transform: phase === 'holding' ? 'scale(1) translateY(0)' : 'scale(0.92) translateY(20px)',
          transition: 'opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: 'none',
          padding: '1.5rem'
        }}
      >
        {/* Monogram Seal */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #0D9488 0%, #14B8A6 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontWeight: 900,
          fontSize: '1.6rem',
          margin: '0 auto 1rem auto',
          boxShadow: '0 0 30px rgba(45, 212, 191, 0.5), inset 0 0 12px rgba(255, 255, 255, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}>
          S
        </div>

        {/* Target Destination Label */}
        <div style={{
          fontSize: 'clamp(1.2rem, 3.2vw, 1.85rem)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: '#FFFFFF',
          marginBottom: '0.35rem',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.6)'
        }}>
          {targetTitle}
        </div>

        {/* Subtitle / Doctor Credential */}
        <div style={{
          fontSize: '0.85rem',
          color: '#99F6E4',
          fontWeight: 600,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
          <ShieldCheck size={14} color="#2DD4BF" />
          <span>{targetSubtitle}</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Global helper function to trigger the Grégory Lallé curved page transition from anywhere
 */
export function navigateWithTransition({ targetId, title, subtitle, callback }) {
  window.dispatchEvent(
    new CustomEvent('trigger-page-transition', {
      detail: { targetId, title, subtitle, callback }
    })
  );
}
