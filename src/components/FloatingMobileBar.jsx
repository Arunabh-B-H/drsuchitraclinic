import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';
import { CLINIC_INFO } from '../data/clinicData';

export default function FloatingMobileBar({ onBookClick, onOpenAI }) {
  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneClean}?text=Hello%20Dr.%20Suchithra%2C%20I%20would%20like%20to%20schedule%20a%20consultation%20at%20your%20Karamana%20clinic.`;

  return (
    <aside aria-label="Quick mobile contact actions" className="floating-mobile-bar" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.96)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid #CBD5E1',
      padding: '0.55rem 0.75rem',
      display: 'none',
      zIndex: 50,
      boxShadow: '0 -4px 20px rgba(15, 23, 42, 0.12)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1.2fr',
        gap: '0.45rem',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        {/* 1. Ask AI Doctor */}
        <button
          onClick={onOpenAI}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.35rem',
            background: 'linear-gradient(135deg, #0D9488 0%, #0F766E 100%)',
            color: '#FFFFFF',
            padding: '0.65rem 0.4rem',
            borderRadius: '12px',
            fontSize: '0.78rem',
            fontWeight: 700,
            boxShadow: '0 2px 8px rgba(13, 148, 136, 0.3)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <Sparkles size={14} style={{ color: '#5EEAD4' }} />
          <span>Ask AI</span>
        </button>

        {/* 2. Direct Call */}
        <a
          href={`tel:${CLINIC_INFO.phoneClean}`}
          className="btn-secondary"
          style={{
            padding: '0.65rem 0.4rem',
            fontSize: '0.78rem',
            gap: '0.35rem',
            borderRadius: '12px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Phone size={14} style={{ color: '#0D9488' }} />
          <span>Call</span>
        </a>

        {/* 3. WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
          style={{
            padding: '0.65rem 0.5rem',
            fontSize: '0.78rem',
            gap: '0.35rem',
            borderRadius: '12px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <WhatsAppIcon size={16} color="#FFFFFF" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
