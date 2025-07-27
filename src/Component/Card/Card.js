import React from "react";
import "./Card.css";

function Card({
  title = '',
  subtitle = '',
  content,
  footer = null,
  image = '',
  className = "",
  style = {},
  shadow = true,
  padding = true,
}) {
  return (
    <div
      className={`input-field custom-card ${shadow ? 'card-shadow' : ''} ${className}`}
      style={style}
    >
      {
        image && <img src={image} alt="Please Turn On The Internet and Refresh The Browser" className=" card-image" />
      }
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <h5 className="card-subtitle">{subtitle}</h5>}
        <div className={`card-body ${padding ? 'card-padding' : ''}`}>
          {content && <p className="card-content">{content}</p>}
        </div>
        {footer && <div className="input-fieldcard-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Card;
