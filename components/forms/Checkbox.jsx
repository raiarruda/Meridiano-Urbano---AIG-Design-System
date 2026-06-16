import React from 'react';

export function Checkbox({ label, checked, onChange, disabled = false, indeterminate = false, helperText }) {
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const boxStyle = {
    width: '18px', height: '18px', flexShrink: 0,
    border: `2px solid ${checked || indeterminate ? 'var(--navy-800)' : hovered ? 'var(--navy-500)' : 'var(--neutral-400)'}`,
    borderRadius: 'var(--radius-sm)',
    background: checked || indeterminate ? 'var(--navy-800)' : 'var(--white)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all 150ms ease-out',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
  };

  const rowStyle = {
    display: 'flex', alignItems: 'flex-start', gap: '10px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-body)',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <label style={rowStyle} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <div style={boxStyle}>
          {indeterminate && !checked && (
            <svg width="10" height="2" viewBox="0 0 10 2" fill="white"><rect width="10" height="2" rx="1"/></svg>
          )}
          {checked && (
            <svg width="11" height="9" viewBox="0 0 11 9" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1,4.5 4,7.5 10,1"/>
            </svg>
          )}
        </div>
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
        />
        <div>
          <span style={{ fontSize: 'var(--text-base)', color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)' }}>{label}</span>
          {helperText && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: '2px' }}>{helperText}</div>}
        </div>
      </label>
    </div>
  );
}
