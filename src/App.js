import { useEffect, useState } from 'react';
import './scss/App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UserCard from './components/UserCard';
import Graphic from './components/Graphic';
import NotificationModal from './components/NotificationModal';

function App() {
  const [searchInput, setSearchInput] = useState('')
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [showGraphic, setShowGraphic] = useState(false)
  const [showUsers, setShowUsers] = useState(false)
  const [users, setUsers] = useState([])

  const handleSearch = async (name) => {

    if (name.length >= 4 && name !== 'iseijasunow') {
      try {
        const results = await fetch(`https://api.github.com/search/users?q=${name}`)
          .then(res => res.json())
          .then(res => { return res.items })

        setUsers(results.slice(0, 10))
        setShowUsers(true)
        setShowGraphic(true)

      } catch (error) {
        setShowErrorModal(true)
        console.log(error)
      }
    }else{
      setShowErrorModal(true)
    }
  }

  return (
    <>
      <header className='title-container'>
        <h1 className='app-title'>GitHub Users Finder</h1>
      </header>
      <main>
        <div className="search">
          <div className="search-bar">
            <input
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={(e => e.key === 'Enter' && handleSearch(searchInput))}
            />
            <button onClick={() => handleSearch(searchInput)}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
        </div>
        <div className="search-description">
          <p>Find Github Users Easily with Us.</p>
        </div>
        <div className="users-list">

          {showUsers ?
            users.map(user => {
              return (
                <div className="user-info" key={user.id}>
                  <UserCard
                    avatar_url={user.avatar_url}
                    login={user.login}
                    id={user.id}
                  />
                </div>
              )
            })
            : null}

        </div>
      </main>
      <footer>

        {showGraphic ?
          <>
            <button className="followers" onClick={() => { handleSearch(searchInput) }}>Show Followers</button>
            <Graphic users={users} />

          </>
          : null}

        {showErrorModal ?
          <NotificationModal message="Something went Wrong. You should use less than 4 characters or use a prohibited word, try again." action={() => setShowErrorModal(false)}/>
          : null}

      </footer>
    </>
  );
}

export default App;
