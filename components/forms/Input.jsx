import React from 'react';

export function Input({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  helperText,
  errorText,
  successText,
  disabled = false,
  required = false,
  prefix,
  suffix,
  size = 'md',
}) {
  const [focused, setFocused] = React.useState(false);
  const hasError = !!errorText;
  const hasSuccess = !!successText;

  const heights = { sm: '32px', md: '40px', lg: '48px' };
  const fontSizes = { sm: 'var(--text-sm)', md: 'var(--text-base)', lg: 'var(--text-lg)' };

  const borderColor = hasError
    ? 'var(--error-500)'
    : hasSuccess
    ? 'var(--success-500)'
    : focused
    ? 'var(--navy-500)'
    : 'var(--neutral-300)';

  const boxShadow = focused
    ? hasError
      ? 'var(--shadow-focus-error)'
      : 'var(--shadow-focus-navy)'
    : 'none';

  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '100%',
    fontFamily: 'var(--font-body)',
  };

  const labelStyle = {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-medium)',
    color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)',
    fontFamily: 'var(--font-body)',
  };

  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    height: heights[size] || heights.md,
    border: `1.5px solid ${borderColor}`,
    borderRadius: 'var(--radius-md)',
    background: disabled ? 'var(--neutral-100)' : 'var(--white)',
    boxShadow,
    transition: 'border-color 150ms ease-out, box-shadow 150ms ease-out',
    overflow: 'hidden',
  };

  const affixStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    color: 'var(--text-muted)',
    fontSize: fontSizes[size],
    fontFamily: 'var(--font-mono)',
    background: 'var(--neutral-50)',
    borderRight: prefix ? `1px solid var(--neutral-300)` : undefined,
    borderLeft: suffix ? `1px solid var(--neutral-300)` : undefined,
    height: '100%',
    flexShrink: 0,
    userSelect: 'none',
  };

  const inputStyle = {
    flex: 1,
    height: '100%',
    border: 'none',
    outline: 'none',
    padding: '0 12px',
    fontSize: fontSizes[size],
    fontFamily: 'var(--font-body)',
    color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
    background: 'transparent',
    cursor: disabled ? 'not-allowed' : 'text',
  };

  const helperStyle = {
    fontSize: 'var(--text-xs)',
    color: hasError
      ? 'var(--error-500)'
      : hasSuccess
      ? 'var(--success-500)'
      : 'var(--text-muted)',
    fontFamily: 'var(--font-body)',
  };

  return (
    <div style={wrapStyle}>
      {label && (
        <label htmlFor={id} style={labelStyle}>
          {label}{required && <span style={{ color: 'var(--error-500)', marginLeft: '3px' }}>*</span>}
        </label>
      )}
      <div style={rowStyle}>
        {prefix && <span style={affixStyle}>{prefix}</span>}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          style={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {suffix && <span style={{ ...affixStyle, borderRight: undefined }}>{suffix}</span>}
      </div>
      {(helperText || errorText || successText) && (
        <span style={helperStyle}>{errorText || successText || helperText}</span>
      )}
    </div>
  );
}
