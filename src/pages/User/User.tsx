import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

// Hooks
import { useGetUser } from '@/hooks/useGetUser'

// Components
import Layout from '@/components/Layout'
import UserDetails from '@/components/UserDetails'

function User() {
	const { user, loading, fetchUserData } = useGetUser()
	const { username } = useParams<{ username: string }>()

	useEffect(() => {
		if (username) {
			fetchUserData(username)
		}
	}, [username, fetchUserData])

	return (
		<Layout>
			{
				loading ? <p className='container'>Cargando...</p> : 
				!user ? <p className='container'>No se encontró el usuario</p> : 
				<section className="container userDetails">
					<UserDetails user={user} />
				</section>
			}
		</Layout>
	)
}

export default User
