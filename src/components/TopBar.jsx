import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TopBar() {
  return (
    <aside 
      aria-label="Clinic announcement and contact" 
      className="top-announcement-bar"
      style={{
        background: 'linear-gradient(90deg, #0F172A 0%, #1E293B 100%)',
        color: '#E2E8F0',
        fontSize: '0.8rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative',
        zIndex: 50
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.45rem',
        paddingBottom: '0.45rem',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        {/* Left Side: Hours & Clinic Location */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8' }}>
            <Clock size={13} style={{ color: '#14B8A6' }} />
            <span>OP Hours: <strong style={{ color: '#F8FAFC' }}>Mon – Sat: 5:00 PM – 8:00 PM</strong> (By Appointment)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94A3B8' }} className="hide-mobile">
            <MapPin size={13} style={{ color: '#14B8A6' }} />
            <span>Opp. Chaithanya Opticals, Karamana</span>
          </div>
        </div>

        {/* Right Side: Fee, Direct Quick Call & Social Connect */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
          <span style={{
            color: '#5EEAD4',
            fontSize: '0.76rem',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem'
          }} className="hide-mobile">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5EEAD4' }} />
            Nominal Fee: ₹350–₹500
          </span>

          <a 
            href={`tel:${CLINIC_INFO.phoneClean}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#F8FAFC',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'color 0.2s',
              fontSize: '0.78rem'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#2DD4BF'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#F8FAFC'}
          >
            <Phone size={12} style={{ color: '#2DD4BF' }} />
            <span>+91 90747 14272</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
