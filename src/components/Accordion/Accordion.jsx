import React, { useState } from 'react';
import './Accordion.scss';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className="accordion__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`accordion__icon ${isOpen ? 'accordion__icon--open' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="accordion__content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;