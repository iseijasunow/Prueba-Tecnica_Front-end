import { useState } from 'react'
import API from '@/utils/axios'

const INITIAL_STATE = {
  incomplete_results: false,
  items: [],
  total_count: 0,
  loading: true
}

const useInitialStateUsers = () => {
  const [state, setState] = useState(INITIAL_STATE)

  const initializeState = () => {
    setState(INITIAL_STATE)
  }

  const getUsers = async (user = 'YOUR_NAME') => {
    try {
      const arrItems = []
      const response = await API.get(`/search/users?q=${user}`)
      if (response.data.total_count > 10) {
        for (let index = 0; index < 10; index++) {
          arrItems.push(response.data.items[index])
        }
      } else {
        response.data.items.forEach(element => {
          arrItems.push(element)
        })
      }
      setState({
        incomplete_results: response.data.incomplete_results,
        items: arrItems,
        total_count: response.data.total_count,
        loading: false
      })
    } catch (error) {
      return 'error'
    }
  }

  return {
    state,
    getUsers,
    initializeState
  }
}

export default useInitialStateUsers
