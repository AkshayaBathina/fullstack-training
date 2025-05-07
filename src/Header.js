import React from 'react';

const Header = ({ title, subtitle, onAddFood }) => (
  <header className="hero">
    <div className="hero-content">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
      <button className="hero-button" onClick={onAddFood}>Add Menu Item</button>
    </div>
  </header>
);

export default Header;