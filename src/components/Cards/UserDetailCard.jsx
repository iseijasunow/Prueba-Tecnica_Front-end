import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiUserReceivedLine, RiUserShared2Line, RiUserFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import '@/styles/UserDetailCard.scss'

const UserDetailCard = ({ user }) => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div className='page-detail'>
      <div className='card user-detail-card'>
        <img src={user.avatar_url} alt="user-avatar" />
        <div className='body-card'>
          <h3>{user.login}</h3>
          <h5>identifier: #{user.id}</h5>
        </div>
        <div className='body-links'>
          <p>
            <RiUserFill /> Name: {user.name}
          </p>
          <p>
            <AiFillGithub /> Public repositoris: {user.public_repos}
          </p>
          <p>
            <RiUserReceivedLine /> Followers: {user.followers}
          </p>
          <p>
            <RiUserShared2Line /> Following: {user.following}
          </p>
        </div>
        <div className='footer'>
          <button className='btn-outline-secondary' onClick={() => handleGoBack()}>
            Go back
          </button>
          <a className='btn btn-primary' href={user.html_url} target="_blank" rel="noopener noreferrer">See Profile</a>
        </div>
      </div>
    </div>
  )
}

export default UserDetailCard
