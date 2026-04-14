import { C, font } from '../lib/tokens';

function FieldRow({ label, value, dropdown = false }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
      <span style={{ fontFamily: font, fontSize: '11px', color: C.muted, fontStyle: 'italic', flexShrink: 0 }}>
        {label}
      </span>
      <div style={{
        background: dropdown ? 'rgba(255,255,255,0.85)' : 'transparent',
        border: dropdown ? `1px solid ${C.border}` : 'none',
        borderRadius: '6px',
        padding: dropdown ? '3px 8px' : '0',
        display: 'flex', alignItems: 'center', gap: '4px',
        minWidth: '130px', justifyContent: 'space-between',
        marginLeft: '10px',
      }}>
        <span style={{ fontFamily: font, fontSize: '11px', color: C.blue }}>{value}</span>
        {dropdown && <span style={{ color: C.muted, fontSize: '9px' }}>▾</span>}
      </div>
    </div>
  );
}

export default function PlotOutlinePanel({ destinations }) {
  return (
    <div style={{
      width: '270px',
      flexShrink: 0,
      background: 'rgba(248,245,240,0.96)',
      borderRadius: '16px',
      padding: '22px',
      border: `1px solid ${C.border}`,
      boxShadow: '0 4px 24px rgba(116,147,176,0.12)',
    }}>
      <div style={{
        fontFamily: font, fontSize: '18px', fontWeight: 700,
        color: C.blue, letterSpacing: '2px', marginBottom: '18px',
      }}>
        PLOT OUTLINE
      </div>

      <FieldRow label="plot type /" value="HOLIDAY" />
      <div style={{ height: '10px' }} />

      {destinations.map((dest, i) => (
        <div key={dest.id} style={{ marginBottom: '14px' }}>
          <FieldRow label={`destination ${i + 1} /`} value={dest.name} dropdown />
          <FieldRow label="start date /" value={`${dest.start}/06/2026`} dropdown />
          <FieldRow label="end date /"   value={`${dest.end}/06/2026`}   dropdown />
        </div>
      ))}

      <button style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        background: 'none', border: 'none', padding: 0,
        color: C.blue, cursor: 'pointer', marginTop: '6px',
      }}>
        <span style={{ fontSize: '16px', lineHeight: 1 }}>⊕</span>
        <span style={{ fontFamily: font, fontSize: '11px', fontStyle: 'italic' }}>add more destinations</span>
      </button>
    </div>
  );
}
