import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <button
          type="button"
          className="footer-link"
          onClick={() => { window.location.href = '/'; }}
        >
          Dúvidas? Clique aqui.
        </button>
        
        <div className="footer-brand">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/d205626e05dee0cdae531ead047f775c2029a265?width=66" 
            alt="Small logo" 
            className="footer-icon"
          />
          <span className="footer-text">ORDEM E PROGRESSO</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
