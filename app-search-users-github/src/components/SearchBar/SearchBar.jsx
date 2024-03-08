import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="search-container">
       <h3>Buscador de Usuario Github</h3>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}> <FontAwesomeIcon icon={faSearch} /></button>
    </div>
  );
}

export default SearchBar;