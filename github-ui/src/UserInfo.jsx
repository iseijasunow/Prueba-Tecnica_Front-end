import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RepositoryList } from './RepositoryList'
import { GitHub } from './services/GitHubService/GitHub'

export function UserInfo() {
    const login = useParams()
    const navigate = useNavigate()
    const [followers, setFollowers] = useState('')
    const [following, setFollowing] = useState('')
    const [userInfo, setUserInfo] = useState({
        name: '',
        login: '',
        avatar_url: ''
    })

    const fetchFollowers = async (user) => {
        setFollowers('')
        try {
            const github = new GitHub()
            const followerCount = await github.numberOfFollowers(user.login)
            setFollowers(followerCount)
        } catch (error) {
          console.error('Error fetching followers:', error)
        }
    }
    const fetchFollowing = async (user) => {
        setFollowers('')
        try {
            const github = new GitHub()
            const followingCount = await github.numberOfFollowing(user.login)
            setFollowing(followingCount)
        } catch (error) {
          console.error('Error fetching followers:', error)
        }
    }

    useEffect(() => {
        const github = new GitHub();
        github.findAUser(login.login)
        .then(result => {
            setUserInfo(result)
            fetchFollowers(result)
            fetchFollowing(result)
        })
        .catch(error => {
            setUserInfo(null)
        })

      }, []);

    function handleShowUserInfo() {
        navigate(`/`)
    }
    

    return (
        <div className='user-info-background'>
            <button className='border-none bg-none close-button' onClick={handleShowUserInfo}>
                <i className="bi bi-x-lg" style={{fontSize: '2rem' }}></i>
            </button>
            <div className="user-info-card">
                <div className="user-info-header">
                    <div className="user-info-sub-header">
                        <img className='user-info-avatar' src={userInfo.avatar_url} alt="" />
                        
                        <div className="user-info-title">
                            <strong>{userInfo.name}</strong>
                            <span>{userInfo.login}</span>
                        </div>
                    </div>
                    <div className="user-info-follow">
                        <div>
                            <i className="bi bi-people-fill" style={{marginRight: '10px', fontSize: '1.2rem'}}></i>
                            <span> <b>{followers}</b> Followers</span>
                            <i className="bi bi-dot"></i><span> <b>{following}</b> Following</span>
                        </div>
                    </div>
                </div>                
                <div className='user-repositories'> 
                    {
                        <RepositoryList user={userInfo.login} />
                    }
                </div>

            </div>
        </div>
    )
}