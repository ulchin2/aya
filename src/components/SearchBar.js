import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ defaultValue = '' }) => {
  return (
    <div className="search-bar-container">
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/2522edcf8370279a2e11bd67dc401829cc38c049?width=40" 
        alt="Search icon" 
        className="search-icon"
      />
      <input 
        type="text" 
        className="search-input" 
        placeholder="pesquise sobre processos"
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default SearchBar;
