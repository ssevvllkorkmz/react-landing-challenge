import React from 'react';
import './Card.scss';

const Card = ({ title, children, footer }) => {
  return (
    <div className="card">
      {title && (
        <div className="card__header">
          <h3>{title}</h3>
        </div>
      )}
      
      <div className="card__body">
        {children}
      </div>
      
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;