import React, { useState } from "react";
import "./Tabs.css";

function Tabs({ tabs = [], defaultIndex = 0 }) {
    const [activeIndex, setActiveIndex] = useState(defaultIndex);

    return (
        <div className=" tabs-container">
            <div className=" tabs-header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`input-field btn tab-button ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="input-field tabs-content">
                {tabs[activeIndex]?.content}
            </div>
        </div>
    );
}

export default Tabs;
