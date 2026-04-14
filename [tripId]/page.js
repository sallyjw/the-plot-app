'use client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TopNav from '../../components/TopNav';
import { C, font } from '../../lib/tokens';
import { getTripById } from '../../lib/data';

const SECTIONS = [
  { num: '01', label: 'ITINERARY',        key: 'itinerary' },
  { num: '02', label: 'LOGISTICS',        key: 'logistics' },
  { num: '03', label: 'HOTEL LIST',       key: 'hotels'    },
  { num: '04', label: 'RESTAURANT LIST',  key: 'restaurants' },
  { num: '05', label: 'THINGS TO DO LIST',key: 'thingstodo'  },
];

export default function TripDashboard({ params }) {
  const trip = getTripById(params.tripId);
  if (!trip) notFound();

  return (
    <div className="page-bg" style={{ padding: 'clamp(28px, 4vw, 48px) clamp(32px, 8vw, 80px)' }}>
      <TopNav tripName={trip.name} />

      <div style={{ maxWidth: '640px' }}>
        {SECTIONS.map(({ num, label, key }, i, arr) => (
          <div key={key}>
            {key === 'itinerary' ? (
              <Link href={`/${trip.id}/itinerary`} style={{ textDecoration: 'none' }}>
                <div
                  className="trip-item"
                  style={{
                    display: 'flex', alignItems: 'center',
                    padding: 'clamp(14px, 2vw, 22px) 0',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{
                    fontFamily: font, fontSize: 'clamp(13px, 1.5vw, 17px)',
                    color: C.muted, minWidth: '44px', fontStyle: 'italic',
                  }}>{num}</span>
                  <span style={{
                    fontFamily: font,
                    fontSize: 'clamp(18px, 2.8vw, 30px)',
                    fontWeight: 700, color: C.blue,
                    letterSpacing: 'clamp(1.5px, 0.4vw, 3px)',
                  }}>{label}</span>
                </div>
              </Link>
            ) : (
              <div style={{
                display: 'flex', alignItems: 'center',
                padding: 'clamp(14px, 2vw, 22px) 0',
                cursor: 'default',
              }}>
                <span style={{
                  fontFamily: font, fontSize: 'clamp(13px, 1.5vw, 17px)',
                  color: C.muted, minWidth: '44px', fontStyle: 'italic',
                }}>{num}</span>
                <span style={{
                  fontFamily: font,
                  fontSize: 'clamp(18px, 2.8vw, 30px)',
                  fontWeight: 700, color: C.blue,
                  letterSpacing: 'clamp(1.5px, 0.4vw, 3px)',
                }}>{label}</span>
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
