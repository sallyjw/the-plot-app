'use client';
import Link from 'next/link';
import Logo from '../components/Logo';
import { C, font } from '../lib/tokens';
import { trips } from '../lib/data';

export default function HomePage() {
  return (
    <div className="page-bg" style={{ padding: 'clamp(32px, 5vw, 60px) clamp(32px, 8vw, 80px)' }}>
      <Logo />

      <div style={{ maxWidth: '640px' }}>
        {trips.map(({ id, number, name, active }, i, arr) => (
          <div key={id}>
            {active ? (
              <Link href={`/${id}`} style={{ textDecoration: 'none' }}>
                <div
                  className="trip-item"
                  style={{
                    display: 'flex', alignItems: 'center',
                    padding: 'clamp(16px, 2.5vw, 26px) 0',
                    cursor: 'pointer', opacity: 1,
                  }}
                >
                  <span style={{
                    fontFamily: font, fontSize: 'clamp(13px, 1.5vw, 17px)',
                    color: C.muted, minWidth: '44px', fontStyle: 'italic',
                  }}>{number}</span>
                  <span style={{
                    fontFamily: font,
                    fontSize: 'clamp(22px, 3.5vw, 38px)',
                    fontWeight: 700,
                    color: C.blue,
                    letterSpacing: 'clamp(2px, 0.5vw, 4px)',
                  }}>{name}</span>
                  <span style={{ marginLeft: '12px', color: C.muted, fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1 }}>
                    ☞
                  </span>
                </div>
              </Link>
            ) : (
              <div style={{
                display: 'flex', alignItems: 'center',
                padding: 'clamp(16px, 2.5vw, 26px) 0',
                opacity: 0.38,
              }}>
                <span style={{
                  fontFamily: font, fontSize: 'clamp(13px, 1.5vw, 17px)',
                  color: C.muted, minWidth: '44px', fontStyle: 'italic',
                }}>{number}</span>
                <span style={{
                  fontFamily: font,
                  fontSize: 'clamp(22px, 3.5vw, 38px)',
                  fontWeight: 700, color: C.blue,
                  letterSpacing: 'clamp(2px, 0.5vw, 4px)',
                }}>{name}</span>
              </div>
            )}
            {i < arr.length - 1 && (
              <div style={{ height: '1px', background: C.border, opacity: 0.7 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
