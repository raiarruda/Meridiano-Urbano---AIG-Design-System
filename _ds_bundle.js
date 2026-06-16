/* @ds-bundle: {"format":3,"namespace":"MeridianoUrbanoAIGDesignSystem_405b20","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/core/Button.jsx":"afbf02da813c","components/core/IconButton.jsx":"6d5bd3ba8301","components/feedback/Badge.jsx":"d4d5e88ec49f","components/feedback/Toast.jsx":"f81b7e6f6de2","components/forms/Checkbox.jsx":"1b794ab314b8","components/forms/Input.jsx":"5f3cfbf3c3d3","components/forms/Select.jsx":"54037bbfc06a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MeridianoUrbanoAIGDesignSystem_405b20 = window.MeridianoUrbanoAIGDesignSystem_405b20 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    bg: 'var(--navy-800)',
    bgHover: 'var(--navy-700)',
    bgPress: 'var(--navy-900)',
    color: 'var(--white)',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--amber-500)',
    bgHover: 'var(--amber-600)',
    bgPress: 'var(--amber-700)',
    color: 'var(--white)',
    border: 'transparent'
  },
  secondary: {
    bg: 'transparent',
    bgHover: 'var(--navy-50)',
    bgPress: 'var(--navy-100)',
    color: 'var(--navy-800)',
    border: 'var(--navy-800)'
  },
  ghost: {
    bg: 'transparent',
    bgHover: 'var(--neutral-100)',
    bgPress: 'var(--neutral-200)',
    color: 'var(--neutral-700)',
    border: 'transparent'
  },
  danger: {
    bg: 'var(--error-500)',
    bgHover: '#b82f3b',
    bgPress: '#9a2732',
    color: 'var(--white)',
    border: 'transparent'
  }
};
const SIZES = {
  sm: {
    height: '32px',
    padding: '0 12px',
    fontSize: 'var(--text-sm)',
    gap: '6px',
    iconSize: '14px'
  },
  md: {
    height: '40px',
    padding: '0 16px',
    fontSize: 'var(--text-base)',
    gap: '8px',
    iconSize: '16px'
  },
  lg: {
    height: '48px',
    padding: '0 24px',
    fontSize: 'var(--text-lg)',
    gap: '10px',
    iconSize: '18px'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  fullWidth = false
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const bg = disabled ? 'var(--neutral-200)' : pressed ? v.bgPress : hovered ? v.bgHover : v.bg;
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
    boxShadow: hovered && !disabled && variant === 'accent' ? 'var(--shadow-amber)' : 'none'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false)
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: s.iconSize
    }
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      fontSize: s.iconSize
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const SIZES = {
  sm: {
    size: '32px',
    iconSize: '14px'
  },
  md: {
    size: '40px',
    iconSize: '16px'
  },
  lg: {
    size: '48px',
    iconSize: '20px'
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--navy-800)',
    bgH: 'var(--navy-700)',
    color: 'var(--white)',
    border: 'transparent'
  },
  accent: {
    bg: 'var(--amber-500)',
    bgH: 'var(--amber-600)',
    color: 'var(--white)',
    border: 'transparent'
  },
  ghost: {
    bg: 'transparent',
    bgH: 'var(--neutral-100)',
    color: 'var(--neutral-700)',
    border: 'transparent'
  },
  outline: {
    bg: 'transparent',
    bgH: 'var(--navy-50)',
    color: 'var(--navy-800)',
    border: 'var(--navy-800)'
  }
};
function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  label = ''
}) {
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
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: style,
    disabled: disabled,
    onClick: disabled ? undefined : onClick,
    "aria-label": label,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
const CONFIGS = {
  success: {
    bg: 'var(--success-100)',
    color: 'var(--success-500)',
    dotColor: 'var(--success-500)'
  },
  error: {
    bg: 'var(--error-100)',
    color: 'var(--error-500)',
    dotColor: 'var(--error-500)'
  },
  info: {
    bg: 'var(--info-100)',
    color: 'var(--info-500)',
    dotColor: 'var(--info-500)'
  },
  alert: {
    bg: 'var(--alert-100)',
    color: '#7a7400',
    dotColor: 'var(--alert-500)'
  },
  navy: {
    bg: 'var(--navy-100)',
    color: 'var(--navy-700)',
    dotColor: 'var(--navy-500)'
  },
  amber: {
    bg: 'var(--amber-100)',
    color: 'var(--amber-700)',
    dotColor: 'var(--amber-500)'
  },
  neutral: {
    bg: 'var(--neutral-200)',
    color: 'var(--neutral-700)',
    dotColor: 'var(--neutral-500)'
  }
};
function Badge({
  label,
  variant = 'neutral',
  size = 'md',
  dot = false
}) {
  const c = CONFIGS[variant] || CONFIGS.neutral;
  const sizes = {
    sm: {
      fontSize: '10px',
      padding: '2px 7px',
      dotSize: '5px'
    },
    md: {
      fontSize: '11px',
      padding: '3px 9px',
      dotSize: '6px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: c.bg,
      color: c.color,
      fontSize: s.fontSize,
      fontWeight: 700,
      fontFamily: 'var(--font-body)',
      letterSpacing: '.07em',
      textTransform: 'uppercase',
      padding: s.padding,
      borderRadius: 'var(--radius-full)',
      lineHeight: 1,
      userSelect: 'none'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dotSize,
      height: s.dotSize,
      borderRadius: '50%',
      background: c.dotColor,
      flexShrink: 0
    }
  }), label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const CONFIGS = {
  success: {
    bg: 'var(--navy-800)',
    border: 'var(--navy-700)',
    accent: 'var(--success-500)',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--success-500)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "22 4 12 14.01 9 11.01"
    }))
  },
  error: {
    bg: 'var(--navy-800)',
    border: 'var(--navy-700)',
    accent: 'var(--error-500)',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--error-500)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    }))
  },
  info: {
    bg: 'var(--navy-800)',
    border: 'var(--navy-700)',
    accent: 'var(--safira-400)',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--safira-400)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "8",
      x2: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "16",
      x2: "12.01",
      y2: "16"
    }))
  },
  alert: {
    bg: 'var(--navy-800)',
    border: 'var(--navy-700)',
    accent: 'var(--alert-500)',
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "var(--alert-500)",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "13"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "12",
      y1: "17",
      x2: "12.01",
      y2: "17"
    }))
  }
};
function Toast({
  message,
  subtitle,
  variant = 'success',
  onDismiss
}) {
  const c = CONFIGS[variant] || CONFIGS.success;
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;
  const dismiss = () => {
    setVisible(false);
    onDismiss && onDismiss();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      background: c.bg,
      border: `1px solid ${c.border}`,
      borderLeft: `3px solid ${c.accent}`,
      borderRadius: 'var(--radius-lg)',
      padding: '12px 16px',
      boxShadow: 'var(--shadow-xl)',
      minWidth: '280px',
      maxWidth: '360px',
      fontFamily: 'var(--font-body)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1px',
      flexShrink: 0
    }
  }, c.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--white)',
      lineHeight: 1.3
    }
  }, message), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--neutral-300)',
      marginTop: '3px',
      lineHeight: 1.4
    }
  }, subtitle)), /*#__PURE__*/React.createElement("button", {
    onClick: dismiss,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--neutral-400)',
      padding: '2px',
      borderRadius: 'var(--radius-sm)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  indeterminate = false,
  helperText
}) {
  const [hovered, setHovered] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const boxStyle = {
    width: '18px',
    height: '18px',
    flexShrink: 0,
    border: `2px solid ${checked || indeterminate ? 'var(--navy-800)' : hovered ? 'var(--navy-500)' : 'var(--neutral-400)'}`,
    borderRadius: 'var(--radius-sm)',
    background: checked || indeterminate ? 'var(--navy-800)' : 'var(--white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 150ms ease-out',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1
  };
  const rowStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-body)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: rowStyle,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: boxStyle
  }, indeterminate && !checked && /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "2",
    viewBox: "0 0 10 2",
    fill: "white"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "10",
    height: "2",
    rx: "1"
  })), checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "9",
    viewBox: "0 0 11 9",
    fill: "none",
    stroke: "white",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "1,4.5 4,7.5 10,1"
  }))), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-base)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)'
    }
  }, label), helperText && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginTop: '2px'
    }
  }, helperText))));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
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
  size = 'md'
}) {
  const [focused, setFocused] = React.useState(false);
  const hasError = !!errorText;
  const hasSuccess = !!successText;
  const heights = {
    sm: '32px',
    md: '40px',
    lg: '48px'
  };
  const fontSizes = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)'
  };
  const borderColor = hasError ? 'var(--error-500)' : hasSuccess ? 'var(--success-500)' : focused ? 'var(--navy-500)' : 'var(--neutral-300)';
  const boxShadow = focused ? hasError ? 'var(--shadow-focus-error)' : 'var(--shadow-focus-navy)' : 'none';
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '100%',
    fontFamily: 'var(--font-body)'
  };
  const labelStyle = {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-medium)',
    color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)',
    fontFamily: 'var(--font-body)'
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
    overflow: 'hidden'
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
    userSelect: 'none'
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
    cursor: disabled ? 'not-allowed' : 'text'
  };
  const helperStyle = {
    fontSize: 'var(--text-xs)',
    color: hasError ? 'var(--error-500)' : hasSuccess ? 'var(--success-500)' : 'var(--text-muted)',
    fontFamily: 'var(--font-body)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapStyle
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--error-500)',
      marginLeft: '3px'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: rowStyle
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: affixStyle
  }, prefix), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    style: inputStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      ...affixStyle,
      borderRight: undefined
    }
  }, suffix)), (helperText || errorText || successText) && /*#__PURE__*/React.createElement("span", {
    style: helperStyle
  }, errorText || successText || helperText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
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
  size = 'md'
}) {
  const [focused, setFocused] = React.useState(false);
  const hasError = !!errorText;
  const heights = {
    sm: '32px',
    md: '40px',
    lg: '48px'
  };
  const fontSizes = {
    sm: 'var(--text-sm)',
    md: 'var(--text-base)',
    lg: 'var(--text-lg)'
  };
  const borderColor = hasError ? 'var(--error-500)' : focused ? 'var(--navy-500)' : 'var(--neutral-300)';
  const boxShadow = focused ? hasError ? 'var(--shadow-focus-error)' : 'var(--shadow-focus-navy)' : 'none';
  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '100%',
    fontFamily: 'var(--font-body)'
  };
  const labelStyle = {
    fontSize: 'var(--text-sm)',
    fontWeight: 'var(--weight-medium)',
    color: disabled ? 'var(--text-disabled)' : 'var(--text-secondary)'
  };
  const containerStyle = {
    position: 'relative',
    height: heights[size] || heights.md,
    border: `1.5px solid ${borderColor}`,
    borderRadius: 'var(--radius-md)',
    background: disabled ? 'var(--neutral-100)' : 'var(--white)',
    boxShadow,
    transition: 'border-color 150ms ease-out, box-shadow 150ms ease-out'
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
    WebkitAppearance: 'none'
  };
  const chevronStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: 'var(--text-muted)',
    display: 'flex',
    alignItems: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapStyle
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: labelStyle
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--error-500)',
      marginLeft: '3px'
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: containerStyle
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    onChange: onChange,
    disabled: disabled,
    style: selectStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(opt => typeof opt === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: opt,
    value: opt
  }, opt) : /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))), /*#__PURE__*/React.createElement("span", {
    style: chevronStyle
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })))), (helperText || errorText) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: hasError ? 'var(--error-500)' : 'var(--text-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, errorText || helperText));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
