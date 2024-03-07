import React from 'react';

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;