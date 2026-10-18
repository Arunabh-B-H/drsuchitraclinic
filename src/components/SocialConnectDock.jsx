import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function SocialConnectDock() {
  const [hoveredChannel, setHoveredChannel] = useState(null);

  const channels = [
    {
      id: 'call',
      name: 'Call Clinic (+91 94471 04255)',
      url: `tel:${CLINIC_INFO.phoneClean}`,
      hoverColor: '#14B8A6',
      hoverGlow: 'rgba(20, 184, 166, 0.55)',
      icon: <Phone size={18} />
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp Chat',
      url: CLINIC_INFO.whatsappUrl,
      hoverColor: '#25D366',
      hoverGlow: 'rgba(37, 211, 102, 0.55)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.101-.475-.15-.675.15-.2.301-.775.979-.95 1.18-.175.201-.35.226-.651.076-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.085-.175-.301-.019-.464.132-.614.136-.135.301-.35.451-.526.151-.175.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.675-1.628-.925-2.23-.244-.587-.492-.507-.676-.516l-.576-.01c-.2 0-.526.075-.802.376-.275.301-1.052 1.028-1.052 2.507 0 1.48 1.077 2.908 1.228 3.109.15.201 2.12 3.238 5.136 4.542.717.311 1.278.497 1.716.636.72.229 1.375.197 1.893.119.577-.087 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.275-.201-.576-.351zM12.04 21.786c-1.77 0-3.5-.47-5.02-1.36l-.36-.21-3.73.98 1-3.64-.23-.37a9.78 9.78 0 0 1-1.5-5.2c0-5.41 4.41-9.82 9.84-9.82 2.63 0 5.1 1.03 6.96 2.89 1.86 1.86 2.89 4.34 2.89 6.97 0 5.42-4.42 9.83-9.85 9.83zm8.38-18.23C18.18 1.32 15.23.22 12.04.22 5.58.22.31 5.49.31 11.95c0 2.06.54 4.07 1.56 5.85L0 24l6.35-1.67c1.72.94 3.65 1.44 5.69 1.44 6.46 0 11.73-5.27 11.73-11.73 0-3.13-1.22-6.08-3.44-8.3z"/>
        </svg>
      )
    },
    {
      id: 'instagram',
      name: 'Instagram Profile',
      url: CLINIC_INFO.instagramUrl,
      hoverColor: '#E1306C',
      hoverGlow: 'rgba(225, 48, 108, 0.55)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      id: 'facebook',
      name: 'Facebook Page',
      url: CLINIC_INFO.facebookUrl,
      hoverColor: '#1877F2',
      hoverGlow: 'rgba(24, 119, 242, 0.55)',
      icon: (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    }
  ];

  return (
    <aside
      aria-label="Direct Clinic Connect Dock"
      className="side-connect-bar"
    >
      {/* Sleek Vertical Capsule Pill Custom-tailored to Clinic Design Language */}
      <div
        className="connect-dock-capsule"
        style={{
          padding: '10px 5px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(15, 23, 42, 0.94)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(45, 212, 191, 0.28)',
          boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.55), 0 0 25px rgba(13, 148, 136, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '7px'
        }}
      >
        {/* Luminous Glowing Clinical Emerald/Teal LED Indicator (At top of capsule) */}
        <div
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: '#14B8A6',
            boxShadow: '0 0 12px 2px rgba(20, 184, 166, 0.9)',
            marginBottom: '3px'
          }}
          title="Direct Doctor Line Active"
        />

        {/* 4 Vertically Arranged Circular Icon Buttons: Call, WhatsApp, Instagram, Facebook */}
        {channels.map((ch) => {
          const isHovered = hoveredChannel === ch.id;
          return (
            <div key={ch.id} style={{ position: 'relative' }}>
              <a
                href={ch.url}
                target={ch.id === 'call' ? '_self' : '_blank'}
                rel={ch.id === 'call' ? undefined : 'noopener noreferrer'}
                aria-label={ch.name}
                onMouseEnter={() => setHoveredChannel(ch.id)}
                onMouseLeave={() => setHoveredChannel(null)}
                className="connect-dock-btn"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.16)' : 'rgba(255, 255, 255, 0.08)',
                  color: isHovered ? ch.hoverColor : '#E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isHovered ? `0 0 16px ${ch.hoverGlow}` : 'none',
                  transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                  cursor: 'pointer'
                }}
              >
                {ch.icon}
              </a>

              {/* Flyout Tooltip to the Right */}
              {isHovered && (
                <div
                  className="connect-dock-tooltip"
                  style={{
                    position: 'absolute',
                    left: '48px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#0F172A',
                    color: '#FFFFFF',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(45, 212, 191, 0.3)',
                    pointerEvents: 'none',
                    animation: 'fadeIn 0.15s ease',
                    zIndex: 100
                  }}
                >
                  {ch.name}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
