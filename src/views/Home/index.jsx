import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()

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

  const submitForm = data => {
    console.log(data)
    navigate(`/users?name=${data}`)
  }

  return (
    <>
      <SearchForm
        search={state}
        onChangeInput={onChangeInput}
        onSubmit={submitForm}
      />
    </>
  )
}

export default App
