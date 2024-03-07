import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserList from '../../components/UserList/UserList';
import { getUsers } from '../../services/githubService';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await getUsers(searchTerm);
      setUsers(response.data.items.slice(0, 10));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  return (
    <div>
      <h1>Buscador de Usuario Github</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <UserList users={users} />
    </div>
  );
}

export default HomePage;