import React,{ useState } from 'react';
import { getUserDetails } from '../../services/githubService';
import UserDetails from '../../components/UserDetails/UserDetails';

function UserList({ users }) {
    
    const [selectedUser, setSelectedUser] = useState(null);

    const handleUserClick = async (username) => {
      try {
        const response = await getUserDetails(username);
        setSelectedUser(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
  
  return (
    <>
        <div>
            {users.map((user) => (
                <div key={user.id} onClick={() => handleUserClick(user.login)}>
                {user.id} {user.login}
                </div>
            ))}
        </div>
        <div>
             {selectedUser && <UserDetails selectedUser={selectedUser} />}
        </div>
    </>
    
    
  );
}

export default UserList;