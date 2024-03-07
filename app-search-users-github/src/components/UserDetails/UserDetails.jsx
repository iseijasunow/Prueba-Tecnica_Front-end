import React from 'react';
import './UserDetails.css';

function UserDetails({ selectedUser }) {
  return (
    <div>
      <h2>{selectedUser.name}</h2>
      <img src={selectedUser.avatar_url} alt={selectedUser.login} />
      <p className="bio">{selectedUser.bio}</p>
      <div className="user-stats">
        <p>Followers: {selectedUser.followers}</p>
        <p>Following: {selectedUser.following}</p>
        <p>Public Repos: {selectedUser.public_repos}</p>
      </div>
    </div>
  );
}

export default UserDetails;