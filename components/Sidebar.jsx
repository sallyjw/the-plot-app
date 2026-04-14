import { C, font } from '../lib/tokens';

function PlusCircle({ active }) {
  return (
    <div style={{
      width: '22px', height: '22px', borderRadius: '50%',
      border: `2px solid ${C.blue}`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '15px', fontWeight: 700,
      background: active ? C.blue : 'transparent',
      color: active ? 'white' : C.blue,
      transition: 'all 0.15s',
      flexShrink: 0,
    }}>+</div>
  );
}

function SectionHeader({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'flex-end', gap: '8px',
        cursor: 'pointer', padding: '5px 0',
        userSelect: 'none',
      }}
    >
      <span style={{
        fontFamily: font, fontSize: '12px', fontWeight: 700,
        color: C.blue, letterSpacing: '1.5px',
      }}>{label}</span>
      <PlusCircle active={active} />
    </div>
  );
}

function DestList({ destinations, data, emptyLabel, onAdd }) {
  return (
    <div style={{ marginTop: '8px' }}>
      {destinations.map((dest, i) => (
        <div key={dest.id} style={{ marginBottom: '12px' }}>
          <div style={{
            borderBottom: `1px solid ${C.border}`,
            paddingBottom: '3px', marginBottom: '5px',
          }}>
            <span style={{ fontFamily: font, fontSize: '11px', color: C.muted, fontStyle: 'italic' }}>
              0{i + 1} / {dest.name.toLowerCase()}
            </span>
          </div>
          {(data[dest.id] || []).map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '1px 0' }}>
              <span style={{ fontSize: '8px', color: C.blue }}>●</span>
              <span style={{ fontFamily: font, fontSize: '11px', color: C.text }}>{item.name}</span>
            </div>
          ))}
          <button
            onClick={() => onAdd && onAdd(dest.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              background: 'none', border: 'none', padding: '2px 0',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: '13px', color: C.blue, lineHeight: 1 }}>⊕</span>
            <span style={{ fontFamily: font, fontSize: '10px', color: C.muted, fontStyle: 'italic' }}>{emptyLabel}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default function Sidebar({ trip, activeSection, onToggle, onSimulateClipper }) {
  const sections = [
    { key: 'logistics',   label: 'LOGISTICS'    },
    { key: 'hotels',      label: 'HOTELS'       },
    { key: 'restaurants', label: 'RESTAURANTS'  },
    { key: 'thingstodo',  label: 'THINGS TO DO' },
    { key: 'other',       label: 'OTHER'        },
  ];

  return (
    <div style={{ width: '210px', flexShrink: 0 }}>
      {sections.map(({ key, label }) => (
        <div key={key} style={{ marginBottom: '4px' }}>
          <SectionHeader
            label={label}
            active={activeSection === key}
            onClick={() => onToggle(key)}
          />

          {/* ── Restaurants ── */}
          {activeSection === key && key === 'restaurants' && (
            <DestList
              destinations={trip.destinations}
              data={trip.restaurants}
              emptyLabel="add restaurant"
            />
          )}

          {/* ── Hotels ── */}
          {activeSection === key && key === 'hotels' && (
            <DestList
              destinations={trip.destinations}
              data={trip.hotels}
              emptyLabel="add hotel"
            />
          )}

          {/* ── Things To Do ── */}
          {activeSection === key && key === 'thingstodo' && (
            <DestList
              destinations={trip.destinations}
              data={trip.thingstodo}
              emptyLabel="add activity"
            />
          )}

          {/* ── Logistics ── */}
          {activeSection === key && key === 'logistics' && (
            <div style={{ marginTop: '8px' }}>
              {trip.logistics.map(item => (
                <div key={item.id} style={{ padding: '2px 0' }}>
                  <span style={{ fontFamily: font, fontSize: '11px', color: C.text }}>
                    {item.label}
                  </span>
                  <div style={{ fontFamily: font, fontSize: '10px', color: C.muted, fontStyle: 'italic' }}>
                    {item.detail}
                  </div>
                </div>
              ))}
              <button style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                background: 'none', border: 'none', padding: '4px 0',
                cursor: 'pointer',
              }}>
                <span style={{ fontSize: '13px', color: C.blue }}>⊕</span>
                <span style={{ fontFamily: font, fontSize: '10px', color: C.muted, fontStyle: 'italic' }}>add transport</span>
              </button>
            </div>
          )}

          {/* ── Other ── */}
          {activeSection === key && key === 'other' && (
            <div style={{ marginTop: '8px' }}>
              <button style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                background: 'none', border: 'none', padding: '2px 0',
                cursor: 'pointer',
              }}>
                <span style={{ fontSize: '13px', color: C.blue }}>⊕</span>
                <span style={{ fontFamily: font, fontSize: '10px', color: C.muted, fontStyle: 'italic' }}>add item</span>
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Simulate clipper */}
      <div style={{ marginTop: '24px', borderTop: `1px solid ${C.border}`, paddingTop: '16px' }}>
        <button
          onClick={onSimulateClipper}
          style={{
            width: '100%',
            background: 'transparent',
            border: `1px solid ${C.border}`,
            borderRadius: '20px',
            padding: '7px 10px',
            fontFamily: font,
            fontSize: '10px',
            color: C.muted,
            cursor: 'pointer',
            fontStyle: 'italic',
          }}
        >✦ Try the browser clipper</button>
      </div>
    </div>
  );
}
