import React from 'react';

export function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  placeholder = 'Selecione...',
  helperText,
  errorText,
  disabled = false,
  required = false,
  size = 'md',
}) {
  const [focused, setFocused] = React.useState(false);
  const hasError = !!errorText;
  const heights = { sm: '32px', md: '40px', lg: '48px' };
  const fontSizes = { sm: 'var(--text-sm)', md: 'var(--text-base)', lg: 'var(--text-lg)' };

  const borderColor = hasError ? 'var(--error-500)' : focused ? 'var(--navy-500)' : 'var(--neutral-300)';
  const boxShadow = focused ? (hasError ? 'var(--shadow-focus-error)' : 'var(--shadow-focus-navy)') : 'none';

  const wrapStyle = { display: 'flex', flexDirection: 'column', gap: '4px', width: '100%', fontFamily: 'var(--font-body)' };
  const labelStyle = { fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)', color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)' };

  const containerStyle = {
    position: 'relative',
    height: heights[size] || heights.md,
    border: `1.5px solid ${borderColor}`,
    borderRadius: 'var(--radius-md)',
    background: disabled ? 'var(--neutral-100)' : 'var(--white)',
    boxShadow,
    transition: 'border-color 150ms ease-out, box-shadow 150ms ease-out',
  };

  const selectStyle = {
    width: '100%',
    height: '100%',
    border: 'none',
    outline: 'none',
    padding: `0 36px 0 12px`,
    fontSize: fontSizes[size],
    fontFamily: 'var(--font-body)',
    color: disabled ? 'var(--text-disabled)' : value ? 'var(--text-primary)' : 'var(--text-muted)',
    background: 'transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    appearance: 'none',
    WebkitAppearance: 'none',
  };

  const chevronStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: 'var(--text-muted)',
    display: 'flex',
    alignItems: 'center',
  };

  return (
    <div style={wrapStyle}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}{required && <span style={{ color: 'var(--error-500)', marginLeft: '3px' }}>*</span>}
        </label>
      )}
      <div style={containerStyle}>
        <select
          id={id}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={selectStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt) =>
            typeof opt === 'string'
              ? <option key={opt} value={opt}>{opt}</option>
              : <option key={opt.value} value={opt.value}>{opt.label}</option>
          )}
        </select>
        <span style={chevronStyle}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </span>
      </div>
      {(helperText || errorText) && (
        <span style={{ fontSize: 'var(--text-xs)', color: hasError ? 'var(--error-500)' : 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>
          {errorText || helperText}
        </span>
      )}
    </div>
  );
}
