import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserList from '../../components/UserList/UserList';
import { getUsers } from '../../services/githubService';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
      if (searchTerm.length < 4) {
        setError('El término de búsqueda debe tener al menos 4 caracteres.');
        return;
      }

      if (searchTerm.toLowerCase() === 'iseijasunow') {
        setError('La búsqueda de "iseijasunow" no está permitida.');
        return;
      }

      try {
        setError('');
        const response = await getUsers(searchTerm);
        setUsers(response.data.items.slice(0, 10));
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error al buscar usuarios. Por favor, inténtalo de nuevo más tarde.');
      }
  };


  return (
    <div>
      <h1>Buscador de Usuario Github</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <UserList users={users} />
    </div>
  );
}

export default HomePage;