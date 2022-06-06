import React, { useEffect, useContext, useState } from 'react'

import {
  useLocation,
  useNavigate
} from 'react-router-dom'

import ErrorContext from '@/context/ErrorContext'

import SearchForm from '@/components/Forms/SearchForm.jsx'
import BarChart from '@/components/Charts/BarChart.jsx'
import AppContext from '@/context/AppContext'

const useQuery = () => {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const SearchPage = () => {
  const query = useQuery()
  const navigate = useNavigate()
  const { getUsers, state, initializeState } = useContext(AppContext)
  const { openAlert } = useContext(ErrorContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const name = query.get('name')
    getData(name)
  }, [])

  const getData = async (name) => {
    setLoading(true)
    initializeState()
    const response = await getUsers(name)
    openAlert(response, { message: 'An error occurred while bringing in the users, try again later', variant: 'danger' })
    setLoading(false)
  }

  const submitForm = data => {
    getData(data)
    navigate(`/users?name=${data}`)
  }

  return (
    <>
      <SearchForm
        search={state}
        onSubmit={submitForm}
      />
      { !loading && <BarChart users={state.items} loading={loading} />}
    </>
  )
}

export default SearchPage
