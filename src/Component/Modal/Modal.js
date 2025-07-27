import React, { useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen = false, onClose, title = '', children, width = 'auto', height = 'auto', footer = null }) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';  
    } else {
      document.body.style.overflow = 'auto';   
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div
        className="input-field modal-box"
        style={{ width, height }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <div className="modal-header">
            <h3 className="modal-title">{title}</h3>
            <button className="input-field modal-close" onClick={onClose}>×</button>
          </div>
        )}

        <div className="modal-body">{children}</div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
