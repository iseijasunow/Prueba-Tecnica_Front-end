import React from 'react';

function UserDetails({ selectedUser }) {
  return (
    <div>
      <h2>{selectedUser.name}</h2>
      <img src={selectedUser.avatar_url} alt={selectedUser.login} />
      <p>{selectedUser.bio}</p>
      <p>Followers: {selectedUser.followers}</p>
      <p>Following: {selectedUser.following}</p>
      <p>Public Repos: {selectedUser.public_repos}</p>
    </div>
  );
}

export default UserDetails;