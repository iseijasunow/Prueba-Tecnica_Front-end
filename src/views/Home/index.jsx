import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchForm from '@/components/Forms/SearchForm.jsx'
import useInitialStateUsers from '@/hooks/useInitialStateUsers'

const App = () => {
  const navigate = useNavigate()
  const { getUsers, state } = useInitialStateUsers()

  useEffect(() => {
    getUsers()
  }, [])

  const submitForm = data => {
    console.log(data)
    navigate(`/users?name=${data}`)
  }

  return (
    <>
      <SearchForm
        search={state}
        onSubmit={submitForm}
      />
    </>
  )
}

export default App
