import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorContext from '@/context/ErrorContext'

import SearchForm from '@/components/Forms/SearchForm.jsx'
import AppContext from '@/context/AppContext'

const App = () => {
  const navigate = useNavigate()
  const { getUsers, state } = useContext(AppContext)
  const { openAlert } = useContext(ErrorContext)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await getUsers()
    openAlert(response, { message: 'An error occurred while bringing in the users, try again later', variant: 'danger' })
  }

  const submitForm = data => {
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
