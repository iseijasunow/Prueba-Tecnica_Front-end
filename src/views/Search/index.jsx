import React from 'react'
import {
  useLocation
} from 'react-router-dom'

const useQuery = () => {
  const { search } = useLocation()
  return React.useMemo(() => new URLSearchParams(search), [search])
}

const SearchPage = () => {
  const query = useQuery()
  console.log(query)
  return (
    <h1>search : {query.get('name')}</h1>
  )
}

export default SearchPage
