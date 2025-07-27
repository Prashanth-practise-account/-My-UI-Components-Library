import React, { useState, useRef, useEffect } from 'react';
import '../Select/Select.css';

function MultiSelect({ label, options = [], selected = [], onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    if (selected.includes(value)) {
      onChange(selected.filter((val) => val !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const getSelectedLabels = () => {
    if (selected.length === 0) return "-- Select --";
    return options
      .filter((opt) => selected.includes(opt.value))
      .map((opt) => opt.label)
      .join(', ');
  };

  return (
    <div className="multi-select-wrapper" ref={wrapperRef}>
      {label && <label className="select-label">{label}</label>}
      <div className="select-box" onClick={toggleDropdown}>
        <div className="selected-values">{getSelectedLabels()}</div>
        <div className="dropdown-arrow">&#9662;</div>
      </div>

      {isOpen && (
        <div className="dropdown-options">
          {options.map((opt) => (
            <label key={opt.value} className="dropdown-option">
              <input
                type="checkbox"
                checked={selected.includes(opt.value)}
                onChange={() => handleSelect(opt.value)}
              />
              {opt.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
