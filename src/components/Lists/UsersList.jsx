import React, { useEffect, useState } from 'react'
import UserCard from '@/components/Cards/UserCard.jsx'
import Spinner from '@/components/Spinners'
import { ImFilesEmpty } from 'react-icons/im'
import '@/styles/UsersList.scss'

const UsersList = ({ users, loading, total }) => {
  const [items, setItems] = useState(0)

  useEffect(() => {
    if (users.length > 0) {
      const value = total >= 10 ? 9 : total
      setItems(value)
    }
  }, [users.length])

  const loadinData = () => {
    if (loading) {
      return (
        <div className='feedback-section'>
          <Spinner />
          <h2>Loadind data...</h2>
        </div>
      )
    }
  }

  const emptyData = () => {
    if (!loading && users.length <= 0) {
      return (
        <div className='feedback-section'>
          <ImFilesEmpty size="3rem" color="#6c63ff" />
          <h2>Sorry, no results found for this search</h2>
        </div>
      )
    }
  }

  return (
    <div className='grid-user'>
      { loadinData() }
      { emptyData() }
      { (() => {
        const res = []
        for (let index = 0; index < items; index++) {
          res.push(<UserCard key={index} user={users[index]} />)
        }
        return res
      })()}
    </div>
  )
}

export default UsersList
