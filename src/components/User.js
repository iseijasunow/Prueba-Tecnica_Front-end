import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';



export default function User() {
  const { user } = useParams();
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`,
      {
        headers: {
          'User-Agent': 'request'
        }
      }
    )
      .then(res => res.json())
      .then(res => setUserInfo(res))
  }, [])

  return (
    <div className='user-card'>
      <div className="user-title">
        <h1>{userInfo.login}</h1>
      </div>
      <div className="user-image">
        <img src={userInfo.avatar_url} alt="" />
      </div>
      <div className="image-caption">
        <p>{userInfo.bio}</p>
      </div>
      <Link to="/" className="display-details"><p>Go Home &#187;</p></Link>
    </div>
  )
}