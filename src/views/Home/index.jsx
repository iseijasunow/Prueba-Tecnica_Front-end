import React, { useEffect, useState } from 'react'

import SearchForm from '@/components/Forms/SearchForm.jsx'
import API from '@/utils/axios'

const INITIAL_STATE = {
  incomplete_results: false,
  items: [],
  total_count: 0
}

const App = () => {
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    getDefaultUsers()
  }, [])

  const getDefaultUsers = async () => {
    try {
      const response = await API.get('/users?q=YOUR_NAME')
      setState(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <SearchForm search={state} />
    </>
  )
}

export default App
