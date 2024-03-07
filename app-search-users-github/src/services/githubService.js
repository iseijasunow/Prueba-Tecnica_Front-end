import axios from 'axios';

export const getUsers = async (searchTerm) => {
  return await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
};

export const getUserDetails = async (username) => {
  return await axios.get(`https://api.github.com/users/${username}`);
};

