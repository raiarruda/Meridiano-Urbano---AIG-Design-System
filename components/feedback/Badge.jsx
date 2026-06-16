import React from 'react';

const CONFIGS = {
  success: { bg: 'var(--success-100)', color: 'var(--success-500)', dotColor: 'var(--success-500)' },
  error:   { bg: 'var(--error-100)',   color: 'var(--error-500)',   dotColor: 'var(--error-500)' },
  info:    { bg: 'var(--info-100)',    color: 'var(--info-500)',    dotColor: 'var(--info-500)' },
  alert:   { bg: 'var(--alert-100)',   color: '#7a7400',            dotColor: 'var(--alert-500)' },
  navy:    { bg: 'var(--navy-100)',    color: 'var(--navy-700)',    dotColor: 'var(--navy-500)' },
  amber:   { bg: 'var(--amber-100)',   color: 'var(--amber-700)',   dotColor: 'var(--amber-500)' },
  neutral: { bg: 'var(--neutral-200)', color: 'var(--neutral-700)', dotColor: 'var(--neutral-500)' },
};

export function Badge({ label, variant = 'neutral', size = 'md', dot = false }) {
  const c = CONFIGS[variant] || CONFIGS.neutral;
  const sizes = { sm: { fontSize: '10px', padding: '2px 7px', dotSize: '5px' }, md: { fontSize: '11px', padding: '3px 9px', dotSize: '6px' } };
  const s = sizes[size] || sizes.md;

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      background: c.bg, color: c.color,
      fontSize: s.fontSize, fontWeight: 700,
      fontFamily: 'var(--font-body)',
      letterSpacing: '.07em', textTransform: 'uppercase',
      padding: s.padding,
      borderRadius: 'var(--radius-full)',
      lineHeight: 1,
      userSelect: 'none',
    }}>
      {dot && <span style={{ width: s.dotSize, height: s.dotSize, borderRadius: '50%', background: c.dotColor, flexShrink: 0 }}></span>}
      {label}
    </span>
  );
}
