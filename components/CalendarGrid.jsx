import { C, font } from '../lib/tokens';
import { calendarWeeks, ordinal } from '../lib/data';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const pillColors = {
  flight: C.pillFlight,
  hotel:  C.pillHotel,
  dining: C.pillDining,
  other:  C.pillOther,
};

function getDest(day, destinations) {
  return destinations.find(d => day >= d.start && day <= d.end);
}

export default function CalendarGrid({ destinations, events, onPlusClick, plotOutlineOpen }) {
  return (
    <div style={{
      flex: 1,
      minWidth: 0,
      background: 'rgba(244,241,235,0.92)',
      borderRadius: '20px',
      padding: '20px',
      border: `1px solid rgba(212,206,191,0.5)`,
      boxShadow: '0 2px 16px rgba(116,147,176,0.08)',
    }}>
      {/* Month header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <span style={{
          fontFamily: font, fontWeight: 700,
          fontSize: 'clamp(18px, 2.2vw, 26px)',
          color: C.blue, letterSpacing: '2px',
        }}>JUNE 2026</span>

        <button
          onClick={onPlusClick}
          style={{
            width: '32px', height: '32px', borderRadius: '50%',
            background: plotOutlineOpen ? C.blue : 'white',
            border: `2px solid ${C.blue}`,
            color: plotOutlineOpen ? 'white' : C.blue,
            fontSize: '20px', fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(116,147,176,0.2)',
            transition: 'all 0.15s',
          }}
          title="Set up your plot outline"
        >+</button>
      </div>

      {/* Day-of-week headers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '5px',
        marginBottom: '6px',
      }}>
        {DAYS.map(d => (
          <div key={d} style={{
            textAlign: 'center',
            fontFamily: font, fontWeight: 700,
            fontSize: '10px', color: C.text,
            letterSpacing: '1px', padding: '2px 0',
          }}>{d}</div>
        ))}
      </div>

      {/* Calendar weeks */}
      {calendarWeeks.map((week, wi) => (
        <div key={wi} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '5px',
          marginBottom: '5px',
        }}>
          {week.map(day => {
            const dest = getDest(day, destinations);
            const dayEvents = events[day] || [];

            return (
              <div key={day} style={{
                background: C.cardAlt,
                border: `1px solid ${C.border}`,
                borderRadius: '14px',
                minHeight: '98px',
                overflow: 'hidden',
              }}>
                {/* Destination image band */}
                {dest && (
                  <div style={{
                    height: '34px',
                    backgroundImage: `url(${dest.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                  }}>
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(0,0,0,0.3)',
                      display: 'flex', alignItems: 'center',
                      paddingLeft: '7px',
                    }}>
                      {dest.start === day && (
                        <span style={{
                          fontFamily: font, fontSize: '8px', fontWeight: 700,
                          color: 'white', letterSpacing: '1px',
                        }}>{dest.name}</span>
                      )}
                    </div>
                  </div>
                )}

                {/* Day content */}
                <div style={{ padding: dest ? '5px 6px 6px' : '8px 6px 6px' }}>
                  <div style={{
                    fontFamily: font, fontWeight: 700,
                    fontSize: '10px', color: C.blueLight,
                    letterSpacing: '0.3px', marginBottom: '4px',
                  }}>{ordinal(day)}</div>

                  {/* Event pills */}
                  {dayEvents.map(ev => (
                    <div key={ev.id} style={{
                      background: pillColors[ev.type] || pillColors.other,
                      borderRadius: '10px',
                      padding: '2px 5px',
                      marginBottom: '2px',
                      fontFamily: font,
                      fontSize: '6.5px',
                      color: 'white',
                      lineHeight: '1.4',
                    }}>{ev.label}</div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
