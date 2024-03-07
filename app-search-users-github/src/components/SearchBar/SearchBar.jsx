import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="search-container">
       <h3>Buscador de Usuario Github</h3>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;