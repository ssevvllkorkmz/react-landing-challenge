import React from 'react';
import './Button.scss';


const Button = ({ children, variant = 'primary', size = 'medium', ...rest }) => {
  

  const className = `btn btn--${variant} btn--${size}`;

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;