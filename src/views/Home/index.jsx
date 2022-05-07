import React, { useEffect, useState } from 'react'

import SearchForm from '@/components/Forms/SearchForm.jsx'
import API from '@/utils/axios'

const INITIAL_STATE = {
  incomplete_results: false,
  items: [],
  total_count: 0,
  search_value: '',
  loading: true
}

const App = () => {
  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async (user = 'YOUR_NAME') => {
    try {
      const response = await API.get(`/users?q=${user}`)
      setState({
        ...state,
        loading: false,
        ...response.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  const onChangeInput = data => {
    setState({
      ...state,
      search_value: data
    })
  }

  return (
    <>
      <SearchForm
        search={state}
        onChangeInput={onChangeInput}
      />
    </>
  )
}

export default App
