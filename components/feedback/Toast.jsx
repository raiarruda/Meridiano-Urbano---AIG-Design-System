import React from 'react';

const CONFIGS = {
  success: {
    bg: 'var(--navy-800)', border: 'var(--navy-700)', accent: 'var(--success-500)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--success-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
  error: {
    bg: 'var(--navy-800)', border: 'var(--navy-700)', accent: 'var(--error-500)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--error-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
      </svg>
    ),
  },
  info: {
    bg: 'var(--navy-800)', border: 'var(--navy-700)', accent: 'var(--safira-400)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--safira-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  alert: {
    bg: 'var(--navy-800)', border: 'var(--navy-700)', accent: 'var(--alert-500)',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--alert-500)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
};

export function Toast({ message, subtitle, variant = 'success', onDismiss }) {
  const c = CONFIGS[variant] || CONFIGS.success;
  const [visible, setVisible] = React.useState(true);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    onDismiss && onDismiss();
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '12px',
      background: c.bg, border: `1px solid ${c.border}`,
      borderLeft: `3px solid ${c.accent}`,
      borderRadius: 'var(--radius-lg)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-xl)',
      minWidth: '280px', maxWidth: '360px',
      fontFamily: 'var(--font-body)',
      position: 'relative',
    }}>
      <span style={{ display:'flex', alignItems:'center', marginTop:'1px', flexShrink:0 }}>{c.icon}</span>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontSize:'var(--text-sm)', fontWeight:600, color:'var(--white)', lineHeight:1.3 }}>{message}</div>
        {subtitle && <div style={{ fontSize:'var(--text-xs)', color:'var(--neutral-300)', marginTop:'3px', lineHeight:1.4 }}>{subtitle}</div>}
      </div>
      <button onClick={dismiss} style={{
        display:'flex', alignItems:'center', justifyContent:'center',
        background:'none', border:'none', cursor:'pointer',
        color:'var(--neutral-400)', padding:'2px', borderRadius:'var(--radius-sm)',
        flexShrink:0,
      }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}
