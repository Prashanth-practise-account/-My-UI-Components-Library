import React from 'react';
import './Select.css';

function Select({ label, options = [], value = '', onChange }) {


    // const selectedLabel = options.find((opt) => opt.value === value)?.label;

    return (
        <div className=" select-wrapper">
            {label && <label className=" select-label">{label}</label>}
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="input-field select-box"
                
            >
                <option value="">-- Select --</option>
                {
                    options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))
                }
            </select>

            {/* Display the selected value */}

            {/* {value && (
                <div style={{ marginTop: '8px', color: '#555', fontSize: '14px' }}>
                    Selected: <strong>{selectedLabel}</strong>
                </div>
            )} */}
        </div>
    );
}

export default Select;
