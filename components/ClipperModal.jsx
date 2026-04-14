'use client';
import { useState } from 'react';
import { C, font } from '../lib/tokens';

export default function ClipperModal({ onClose, onSave }) {
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => {
      onSave && onSave();
      onClose();
    }, 800);
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.18)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end',
        padding: '70px 40px',
        zIndex: 200,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'rgba(248,245,240,0.97)',
          borderRadius: '16px',
          padding: '28px 26px',
          width: '310px',
          boxShadow: '0 20px 60px rgba(116,147,176,0.25)',
          border: `1px solid ${C.border}`,
          position: 'relative',
          overflow: 'hidden',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Faint food background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.09,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: font, fontSize: '20px', fontWeight: 700,
            color: C.blue, letterSpacing: '2.5px',
            textAlign: 'center', marginBottom: '22px',
          }}>
            ADD TO MY PLOT
          </div>

          {[
            ['plot /',        'EURO SUMMER'],
            ['destination /', 'MILAN'      ],
            ['type /',        'RESTAURANT' ],
            ['name /',        'TRIPPA'     ],
          ].map(([label, value]) => (
            <div key={label} style={{
              display: 'flex', justifyContent: 'space-between',
              alignItems: 'center', marginBottom: '11px',
            }}>
              <span style={{ fontFamily: font, fontSize: '13px', color: C.muted, fontStyle: 'italic' }}>
                {label}
              </span>
              <div style={{
                background: 'rgba(237,234,226,0.9)',
                borderRadius: '8px', padding: '5px 13px',
                minWidth: '155px',
              }}>
                <span style={{ fontFamily: font, fontSize: '12px', fontWeight: 700, color: C.blue }}>
                  {value}
                </span>
              </div>
            </div>
          ))}

          <button
            onClick={handleSave}
            style={{
              width: '100%', marginTop: '12px',
              background: saved ? '#88C29A' : C.blue,
              color: 'white',
              border: 'none', borderRadius: '25px',
              padding: '10px',
              fontFamily: font, fontSize: '12px',
              fontWeight: 700, letterSpacing: '1.5px',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {saved ? 'SAVED ✓' : 'SAVE TO PLOT ✓'}
          </button>
        </div>
      </div>
    </div>
  );
}
