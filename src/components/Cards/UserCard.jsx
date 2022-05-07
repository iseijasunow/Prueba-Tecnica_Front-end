import React from 'react'

import '@/styles/UserCard.scss'

const UserCard = ({ user }) => {
  return (
    <div className='user-card'>
      <img src={user.avatar_url} alt="user-avatar" />
      <div className='body-card'>
        <h3>{user.login}</h3>
        <h5>identifier: #{user.id}</h5>
      </div>
    </div>
  )
}

export default UserCard
