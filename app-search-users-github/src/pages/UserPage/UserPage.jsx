import React, { useState } from 'react';
import UserDetails from '../../components/UserDetails/UserDetails';
import { getUserDetails } from '../../services/githubService';

function UserPage() {
 

  return (
    <div>
      {selectedUser && <UserDetails selectedUser={selectedUser} />}
    </div>
  );
}

export default UserPage;