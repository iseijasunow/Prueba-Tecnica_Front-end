import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserList from '../../components/UserList/UserList';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import useUserSearch from '../../hooks/useUserSearch';

const HomePage = () => {
  const { searchTerm, setSearchTerm, users, error, handleSearch } = useUserSearch();

  return (
    <div className="container">
      <div className="">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      {error && <ErrorComponent message={error} />}
      <UserList users={users} />
      </div>
    
      <div>
        {<canvas id="followersChart" width="400" height="200"></canvas>}
      </div>
    </div>
  );
};

export default HomePage;
