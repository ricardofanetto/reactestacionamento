import React from 'react';
import './style.css';

export const Header = (props) => {
  return (
    <div className="header-container">
      <h2>{props.title}</h2>
    </div>
  );
}
