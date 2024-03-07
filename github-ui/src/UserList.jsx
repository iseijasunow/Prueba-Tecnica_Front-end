import {UserCard} from './UserCard.jsx'
import {Searcher} from './Searcher.jsx'
import { useState } from 'react'


export function UserList({users}) {

    const [childFocus, setClickedChild] = useState(null);

    const handleChildClick = (childId) => {
        setClickedChild(childId);
    };
    
    return (
        <div className='section-basic section-us-list'>
            <Searcher />
            <div className='section-us-results'>

                {
                    users.map(({login, id, key}) =>
                        <UserCard 
                            key={key} 
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