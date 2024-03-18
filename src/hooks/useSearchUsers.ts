import { useState, useCallback } from 'react'
import { toast } from 'react-toastify';

// Services
import { searchUsers, getUser } from '@/services/api'

// Types
import { User } from '@/types'

// Constants
import { ERROR_FETCHING_USERS_DATA } from '@/utils/constants'

export const useSearchUsers = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const [users, setUsers] = useState<User[] | null>(null)

	const fetchSearchUsers = useCallback(async (query: string) => {
		setLoading(true)
		
		try {
			const response = await searchUsers(query)

			const usersWithFollowers = await Promise.all(
				response.items.map(async (user: User) => {
					const userDetails = await getUser(user.login)
					return { ...user, followers: userDetails.followers }
				})
			)

			setUsers(usersWithFollowers)
		} catch (err) {
			toast.error(ERROR_FETCHING_USERS_DATA);
		} finally {
			setLoading(false)
		}
	}, [])

	return { loading, users, fetchSearchUsers }
}
