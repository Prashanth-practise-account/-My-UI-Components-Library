import React from "react";
import "./Checkbox.css";

function Checkbox({ label, checked, onChange, disabled = false, name }) {
  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
      />
      <span className="checkbox-custom" />
      {label}
    </label>
  );
}

export default Checkbox;
