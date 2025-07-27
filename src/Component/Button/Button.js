import React, { useContext } from 'react';
import './Button.css';
import { ThemeContext } from '../../ThemeContext';

function Button({
  label,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  className = '',
  size = 'md',
  ...rest
}) {
  const { theme } = useContext(ThemeContext);

  const themeClass = theme === 'dark'
    ? 'custom-button dark'
    : ``;

  return (
    <button
      type={type}
      className={`btns btn-${size}  ${themeClass} btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
