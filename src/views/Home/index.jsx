import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorContext from '@/context/ErrorContext'

import SearchForm from '@/components/Forms/SearchForm.jsx'
import BarChart from '@/components/Charts/BarChart.jsx'
import AppContext from '@/context/AppContext'

const App = () => {
  const navigate = useNavigate()
  const { getUsers, state, initializeState } = useContext(AppContext)
  const { openAlert } = useContext(ErrorContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setLoading(true)
    initializeState()
    const response = await getUsers()
    openAlert(response, { message: 'An error occurred while bringing in the users, try again later', variant: 'danger' })
    setLoading(false)
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
      { !loading && <BarChart users={state.items} />}
    </>
  )
}

export default App
