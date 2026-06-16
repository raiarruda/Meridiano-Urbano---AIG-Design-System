import React from 'react';

const VARIANTS = {
  primary: {
    bg: 'var(--navy-800)', bgHover: 'var(--navy-700)', bgPress: 'var(--navy-900)',
    color: 'var(--white)', border: 'transparent',
  },
  accent: {
    bg: 'var(--amber-500)', bgHover: 'var(--amber-600)', bgPress: 'var(--amber-700)',
    color: 'var(--white)', border: 'transparent',
  },
  secondary: {
    bg: 'transparent', bgHover: 'var(--navy-50)', bgPress: 'var(--navy-100)',
    color: 'var(--navy-800)', border: 'var(--navy-800)',
  },
  ghost: {
    bg: 'transparent', bgHover: 'var(--neutral-100)', bgPress: 'var(--neutral-200)',
    color: 'var(--neutral-700)', border: 'transparent',
  },
  danger: {
    bg: 'var(--error-500)', bgHover: '#b82f3b', bgPress: '#9a2732',
    color: 'var(--white)', border: 'transparent',
  },
};

const SIZES = {
  sm: { height: '32px', padding: '0 12px', fontSize: 'var(--text-sm)', gap: '6px', iconSize: '14px' },
  md: { height: '40px', padding: '0 16px', fontSize: 'var(--text-base)', gap: '8px', iconSize: '16px' },
  lg: { height: '48px', padding: '0 24px', fontSize: 'var(--text-lg)', gap: '10px', iconSize: '18px' },
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  fullWidth = false,
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;

  const bg = disabled
    ? 'var(--neutral-200)'
    : pressed ? v.bgPress : hovered ? v.bgHover : v.bg;
  const color = disabled ? 'var(--neutral-400)' : v.color;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-heading)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    background: bg,
    color,
    border: `1.5px solid ${disabled ? 'var(--neutral-200)' : v.border}`,
    borderRadius: 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 150ms ease-out, box-shadow 150ms ease-out',
    width: fullWidth ? '100%' : undefined,
    outline: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    boxShadow: hovered && !disabled && variant === 'accent' ? 'var(--shadow-amber)' : 'none',
  };

  return (
    <button
      type={type}
      style={style}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
    >
      {leftIcon && <span style={{ display:'flex', alignItems:'center', fontSize: s.iconSize }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span style={{ display:'flex', alignItems:'center', fontSize: s.iconSize }}>{rightIcon}</span>}
    </button>
  );
}
