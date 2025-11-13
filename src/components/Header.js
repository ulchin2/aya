import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/2eb589acf7390118e5d2471bafdf8f36d7eca7b2?width=144" 
            alt="Logo" 
            className="logo-icon"
          />
          <h1 className="logo-text">AYA</h1>
        </div>
        
        <div className="header-actions">
          <button className="header-button">CRIAR CONTA</button>
          <button className="header-button">ACESSAR</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
