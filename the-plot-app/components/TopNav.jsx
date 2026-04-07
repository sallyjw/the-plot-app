'use client';
import Link from 'next/link';
import { C, font } from '../lib/tokens';

export default function TopNav({ tripName, showItinerary = false }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '28px',
    }}>
      {/* Breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2px' }}>
        <Link href="/">
          <span style={{ fontFamily: font, fontSize: '13px', color: C.muted, fontStyle: 'italic', cursor: 'pointer' }}>
            the plot
          </span>
        </Link>
        <span style={{ fontFamily: font, fontSize: '13px', color: C.muted }}>&nbsp;/&nbsp;01&nbsp;</span>
        <Link href="/euro-summer">
          <span style={{
            fontFamily: font, fontSize: '13px', fontWeight: 700,
            color: C.blue, letterSpacing: '1px', cursor: 'pointer',
          }}>
            {tripName}
          </span>
        </Link>
        {showItinerary && (
          <>
            <span style={{ fontFamily: font, fontSize: '13px', color: C.muted }}>&nbsp;/&nbsp;01&nbsp;</span>
            <span style={{ fontFamily: font, fontSize: '13px', fontWeight: 700, color: C.blue, letterSpacing: '1px' }}>
              ITINERARY
            </span>
          </>
        )}
      </div>

      {/* Other plans link */}
      <Link href="/">
        <span style={{
          fontFamily: font, fontSize: '13px', color: C.blue,
          textDecoration: 'underline', cursor: 'pointer', fontStyle: 'italic',
        }}>
          other plans
        </span>
      </Link>
    </div>
  );
}
