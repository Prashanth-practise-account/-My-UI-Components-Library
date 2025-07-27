import React from 'react';
import './Input.css';

function Input({
  label = '',
  type = 'text',
  value = '',
  name = '',
  onChange,
  disabled = false,
  rows = 4,
  className = '',
  width = '',
  height = '',
  placeholder = '',
  ...rest
}) {
  const customStyle = {
    width: width || '100%',
    height: height || 'auto',
  };

  return (
    <div  className=" input-wrapper">
      {label && (
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={`input-box ${className}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          rows={rows}
          placeholder={placeholder}
          style={customStyle}
          {...rest}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          className={`input-box ${className}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          style={customStyle}
          {...rest}
        />
      )}
    </div>
  );
}

export default Input;
