import React from 'react'
import { useNavigate } from 'react-router-dom'

import '@/styles/UserCard.scss'

const UserCard = ({ user }) => {
  const navigate = useNavigate()

  const handleClickCard = () => {
    navigate(`/user/${user.login}/detail`)
  }

  return (
    <div className='card user-card' onClick={() => handleClickCard()}>
      <img src={user?.avatar_url} alt="user-avatar" />
      <div className='body-card'>
        <h3>{user?.login}</h3>
        <h5>identifier: #{user?.id}</h5>
      </div>
    </div>
  )
}

export default UserCard
