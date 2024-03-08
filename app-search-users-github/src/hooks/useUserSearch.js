import { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { getUsers } from '../services/githubService';

const useUserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
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
        const userDetails = await axios.get(user.url); 
        return { ...user, followers: userDetails.data.followers };
      }));
      setUsers(usersWithFollowers);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Error al buscar usuarios. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  const generateFollowersData = () => {
    const labels = users.map(user => user.login);
    const followersData = users.map(user => user.followers);
  
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

  return { searchTerm, setSearchTerm, users, error, handleSearch };
};

export default useUserSearch;
