import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import ErrorContext from '@/context/ErrorContext'
import API from '@/utils/axios'
import Loader from '@/components/Loader'
import UserDetailCard from '@/components/Cards/UserDetailCard'

const INITIAL_STATE_REQUEST = {
  loading: true,
  error: false
}

const DetailUserPage = () => {
  const { userName } = useParams()
  const [currentUser, setCurrentUser] = useState({})
  const [stateRequest, setStateRequest] = useState(INITIAL_STATE_REQUEST)
  const { openAlert } = useContext(ErrorContext)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await API.get(`/users/${userName}`)
      setCurrentUser({
        ...response.data
      })
      setStateRequest({
        ...stateRequest,
        loading: false
      })
    } catch (error) {
      openAlert('error', { message: 'An error occurred while bringing in the users, try again later', variant: 'danger' })
      setStateRequest({
        loading: false,
        error: true
      })
    }
  }

  return (
    <>
      { stateRequest.loading && <Loader message="Loading data..." /> }
      { (!stateRequest.loading && !stateRequest.error) && <UserDetailCard user={currentUser} /> }
    </>
  )
}

export default DetailUserPage
