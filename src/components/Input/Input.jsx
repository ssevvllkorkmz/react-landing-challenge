import React from 'react';
import './Input.scss';

const Input = ({ label, id, error, ...rest }) => {
  return (
    <div className="input-group">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}
      
      <input
        id={id}
        className={`input-field ${error ? 'input-field--error' : ''}`}
        {...rest}
      />
      
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default Input;