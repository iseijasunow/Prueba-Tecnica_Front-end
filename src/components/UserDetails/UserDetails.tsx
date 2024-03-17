// Types
import { UserDetails as TypeUserDetails } from '@/types'

function UserDetails({ user }: { user: TypeUserDetails }) {

	return (
		<div className="userDetails__content">
			<h2>{user.name}</h2>
			<img src={user.avatar_url} alt={user.name} />
			{user.bio && <p>Bio: {user.bio}</p>}
			{user.location && <p>Location: {user.location}</p>}
			{user.email && <p>Email: {user.email}</p>}
			{user.blog && <p>Blog: {user.blog}</p>}
		</div>
	)
}

export default UserDetails
