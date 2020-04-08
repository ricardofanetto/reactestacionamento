import React from 'react';
import './style.css';

function Card({ children, className }) {
  const classNames = `card-container ${className || ''}`;
  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default Card;