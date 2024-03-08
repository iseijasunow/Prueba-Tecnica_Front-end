import React,{ useState } from 'react';
import { getUserDetails } from '../../services/githubService';
import UserDetails from '../../components/UserDetails/UserDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './UserList.css';

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
        <div className="user-list-container">
            {users.map((user) => (
                <div className="user-list"  key={user.id} onClick={() => handleUserClick(user.login)}>
                <FontAwesomeIcon icon={faEye} />
                  {user.id} {user.login}
                </div>
            ))}
        </div>
        <div className="user-details-container">
             {selectedUser && <UserDetails selectedUser={selectedUser} />}
        </div>
    </>
    
    
  );
}

export default UserList;