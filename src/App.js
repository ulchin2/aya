import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import CaseDetailPage from './pages/CaseDetailPage';
import LoadingPage from './pages/LoadingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'results':
        return <ResultsPage />;
      case 'detail':
        return <CaseDetailPage />;
      case 'loading':
        return <LoadingPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      
      <div className="dev-navigation">
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('loading')}>Loading</button>
        <button onClick={() => setCurrentPage('results')}>Results</button>
        <button onClick={() => setCurrentPage('detail')}>Detail</button>
      </div>
    </div>
  );
}

export default App;
