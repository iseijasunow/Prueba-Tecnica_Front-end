import { Link } from 'react-router-dom'
import { memo } from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'

// types
import { User } from '@/types'

function UserList({ users }: { users: User[] }) {
	return (
		<ul className="users__list">
			{users.map((user) => (
				<li key={user.id}>
					<p>
                        <FontAwesomeIcon icon={faIdCard} />
                        {user.id}
                    </p>
                    
					<Link to={`/user/${user.login}`}>
						{user.login}
						<FontAwesomeIcon icon={faUser} />
					</Link>
				</li>
			))}
		</ul>
	)
}

const MemoizedUserList = memo(UserList)
export default MemoizedUserList
