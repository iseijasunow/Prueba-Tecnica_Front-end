import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

import SearchBar from '../../components/SearchBar/SearchBar';
import UserList from '../../components/UserList/UserList';
import { getUsers } from '../../services/githubService';
import axios from 'axios';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [followersData, setFollowersData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {

    if (users.length > 0) {
      generateFollowersData();
    }
  }, [users]);

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
        const userData = response.data.items.slice(0, 10);
        const usersWithFollowers = await Promise.all(userData.map(async (user) => {
          const userDetails = await axios.get(user.url); // Obtener detalles del usuario
          return { ...user, followers: userDetails.data.followers }; // Agregar el total de seguidores al objeto del usuario
        }));
        setUsers(usersWithFollowers);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error al buscar usuarios. Por favor, inténtalo de nuevo más tarde.');
      }
  };

  const generateFollowersData = () => {

    setFollowersData(users.map(user => user.followers));
    const labels = users.map(user => user.login);

    const ctx = document.getElementById('followersChart');

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Followers',
          data: followersData,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
  };


  return (
    <div>
      <h1>Buscador de Usuario Github</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <UserList users={users} />
      <div>
        {<canvas id="followersChart" width="400" height="200"></canvas>}
      </div>
    </div>
  );
}

export default HomePage;