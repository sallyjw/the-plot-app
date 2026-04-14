import { C, font } from '../lib/tokens';

// The logo matches image3.png extracted from the Canva PPTX:
// "the" in thin italic, "PLOT" in heavier weight, all PT Serif Caption
export default function Logo({ compact = false }) {
  if (compact) {
    return (
      <span style={{ fontFamily: font, color: C.muted, fontSize: '13px', fontStyle: 'italic' }}>
        the plot
      </span>
    );
  }

  return (
    <div style={{ marginBottom: '64px', lineHeight: 1.1 }}>
      <span style={{ fontFamily: font, fontSize: 'clamp(28px, 4vw, 48px)', color: C.blue, fontWeight: 400 }}>
        the{' '}
      </span>
      <span style={{ fontFamily: font, fontSize: 'clamp(38px, 6vw, 72px)', color: C.blue, fontWeight: 700, letterSpacing: '3px' }}>
        PLOT
      </span>
      <span style={{ fontFamily: font, fontSize: 'clamp(28px, 4vw, 48px)', color: C.blue, fontWeight: 400 }}>
        {' '}/
      </span>
    </div>
  );
}
