import { useState, useCallback } from 'react'
import { toast } from 'react-toastify';

// Services
import { getUser } from '@/services/api'

// Types
import { UserDetails } from '@/types'

// Constants
import { ERROR_FETCHING_USER_DATA } from '@/utils/constants'

export const useGetUser = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<UserDetails | null>(null)

    const fetchUserData = useCallback(async (login: string) => {
        setLoading(true)

        try {
            const user = await getUser(login)
            
            setUser(user)
        } catch (err) {
            toast.error(ERROR_FETCHING_USER_DATA);
        } finally {
            setLoading(false)
        }
    }, [])

    return { loading, user, fetchUserData }
}
