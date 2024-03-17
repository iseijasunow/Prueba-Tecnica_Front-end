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

	if (loading) return <p>Cargando...</p>
	if (!user) return <p>No se encontró el usuario</p>

	return (
		<Layout>
			<section className="container userDetails">
				<UserDetails user={user} />
			</section>
		</Layout>
	)
}

export default User
