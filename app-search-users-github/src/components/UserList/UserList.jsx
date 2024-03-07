import React from 'react';

function UserList({ users, handleUserClick }) {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id} onClick={() => handleUserClick(user.login)}>
          {user.id} {user.login}
        </div>
      ))}
    </div>
  );
}

export default UserList;