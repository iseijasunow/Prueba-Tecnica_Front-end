import {useState} from 'react'
import {UserCard} from './UserCard.jsx'
import {Searcher} from './Searcher.jsx'


export function UserList({users, onChangeList, selectedUser}) {
    const [childFocus, setClickedChild] = useState(null)
    const [searchValue, setActualSearch] = useState('xx')

    const handleChildClick = (childId) => {
        setClickedChild(childId)
        selectedUser(childId)
    }
    const handleSearcherClick = (searchValue) => {
        setActualSearch(searchValue)
        onChangeList(searchValue)
    }
    
    return (
        <div className='section-basic section-us-list'>
            <h1>User List</h1>
            <Searcher onClick={handleSearcherClick} />
            <div className='section-us-results'>
                {
                    users.map(({login, id, key, avatar_url}) =>
                        <UserCard 
                            key={key} 
                            avatar={avatar_url}
                            login={login} id={id} 
                            isFocus={childFocus === id}
                            onClick={handleChildClick}
                        />
                    )
                }
            </div>
        </div>
    )
  }