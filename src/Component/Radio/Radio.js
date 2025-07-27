import React from 'react';
import './Radio.css';

function Radio({ name, value, selectedValue, setSelectedValue, label }) {
  const isChecked =  selectedValue === value;

  const handleClick = () => {
    if (isChecked) {
      setSelectedValue(null);
    } else {
      setSelectedValue(value);
    }
  };

  return (
    <label className="radio-wrapper">
      <input
        type="radio"
        name={name}
        checked={isChecked}
        onClick={handleClick} 
      />
      <span className="radio-label">{label}</span>
    </label>
  );
}

export default Radio;
