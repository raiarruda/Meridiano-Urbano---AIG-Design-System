import React from 'react';

const SIZES = {
  sm: { size: '32px', iconSize: '14px' },
  md: { size: '40px', iconSize: '16px' },
  lg: { size: '48px', iconSize: '20px' },
};

const VARIANTS = {
  primary: { bg: 'var(--navy-800)', bgH: 'var(--navy-700)', color: 'var(--white)', border: 'transparent' },
  accent:  { bg: 'var(--amber-500)', bgH: 'var(--amber-600)', color: 'var(--white)', border: 'transparent' },
  ghost:   { bg: 'transparent', bgH: 'var(--neutral-100)', color: 'var(--neutral-700)', border: 'transparent' },
  outline: { bg: 'transparent', bgH: 'var(--navy-50)', color: 'var(--navy-800)', border: 'var(--navy-800)' },
};

export function IconButton({ icon, variant = 'ghost', size = 'md', disabled = false, onClick, label = '' }) {
  const [hovered, setHovered] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const s = SIZES[size] || SIZES.md;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: s.size,
    height: s.size,
    fontSize: s.iconSize,
    background: disabled ? 'var(--neutral-200)' : hovered ? v.bgH : v.bg,
    color: disabled ? 'var(--neutral-400)' : v.color,
    border: `1.5px solid ${disabled ? 'var(--neutral-200)' : v.border}`,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 150ms ease-out',
    outline: 'none',
    flexShrink: 0,
  };

  return (
    <button
      type="button"
      style={style}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ display:'flex', alignItems:'center' }}>{icon}</span>
    </button>
  );
}
