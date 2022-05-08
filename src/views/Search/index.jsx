import React, { useEffect, useContext } from 'react'

import {
  useLocation,
  useNavigate
} from 'react-router-dom'

import ErrorContext from '@/context/ErrorContext'

import SearchForm from '@/components/Forms/SearchForm.jsx'
import AppContext from '@/context/AppContext'

const useQuery = () => {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const SearchPage = () => {
  const query = useQuery()
  const navigate = useNavigate()
  const { getUsers, state } = useContext(AppContext)
  const { openAlert } = useContext(ErrorContext)

  useEffect(() => {
    const name = query.get('name')
    console.log(name)
    getData(name)
  }, [])

  const getData = async (name) => {
    const response = await getUsers(name)
    openAlert(response, { message: 'An error occurred while bringing in the users, try again later', variant: 'danger' })
  }

  const submitForm = data => {
    console.log(data)
    getData(data)
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

export default SearchPage
