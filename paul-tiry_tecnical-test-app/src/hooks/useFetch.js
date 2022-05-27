import { useState } from 'react'
import { getUsers, getInfo } from '../apis/get'

const useFetch = () => {
  const [searchData, setSearchData] = useState({})
  const [userData, setUserData] = useState({})

  const search = async (value) => {
    const item = await getUsers(value)
    setSearchData(item)
  }

  const fetchUser = async (value) => {
    const item = await getInfo(value)
    setUserData(item)
  }

  return {
    searchData,
    userData,
    search,
    fetchUser,
  }
}
export default useFetch
