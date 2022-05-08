import { useState } from 'react'
import API from '@/utils/axios'

const INITIAL_STATE = {
  incomplete_results: false,
  items: [],
  total_count: 0,
  loading: true,
  error: ''
}

const useInitialStateUsers = () => {
  const [state, setState] = useState(INITIAL_STATE)

  const getUsers = async (user = 'YOUR_NAME') => {
    try {
      const response = await API.get(`/users?q=${user}`)
      setState({
        ...state,
        ...response.data,
        error: 'error',
        loading: false
      })
      return 'error'
    } catch (error) {
      return 'error'
    }
  }

  return {
    state,
    getUsers
  }
}

export default useInitialStateUsers
