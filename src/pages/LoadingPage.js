import React from 'react';
import '../styles/LoadingPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoadingPage = () => {
  return (
    <div className="page-container">
      <Header />
      
      <main className="loading-main">
        <div className="loading-content">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/eae7282ca4957f8317f61570e2b31cdee2dd47da?width=396" 
            alt="Loading paper icon" 
            className="loading-icon"
          />
          <p className="loading-text">CARREGANDO. AGUARDE.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoadingPage;
