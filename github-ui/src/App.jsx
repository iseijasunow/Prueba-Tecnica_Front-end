import React, { useEffect, useState } from 'react'
import {Routes, Route, useNavigate } from 'react-router-dom'
import { UserBarChart } from './UserBarChart'
import { UserList } from './UserList.jsx'
import { UserInfo } from './UserInfo.jsx'
import { AlertCard } from './AlertCard.jsx'
import { GitHub } from './services/GitHubService/GitHub'

export function App() {
  const [users, setUsers] = useState([])
  const [actualSearch, setActualSearch] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const github = new GitHub()
    if (actualSearch === '') {
      github.getUsers()
        .then(result => {
          setUsers(result);
        })
        .catch(error => {
          setUsers([]);
        });
    } else {
      github.findUsers(actualSearch)
        .then(result => {
          setUsers(result.items);
        })
        .catch(error => {
          setUsers([]);
        });
    }
  }, [actualSearch])

  const handleChangeList = (searchValue) => {
    setActualSearch(searchValue)
  }

  const handleShowUserInfo = (userId) => {
    const user = users.filter(user => user.id === userId)[0]
    navigate(`/user/${user.login}`)
  }

  return (
    <Routes>
      <Route exact path="/" element={
        <>
          <div style={{
            width: '100%', textAlign: 'center', fontSize: '2rem'
          }}><h1><i class="bi bi-github"></i> GitHub Users</h1></div>
          <UserList users={users} onChangeList={handleChangeList} selectedUser={handleShowUserInfo}  />
          <UserBarChart users={users} />
        </>
      } >
      </Route>
      <Route path="/user/:login" element={
        <>
          <UserList users={users} onChangeList={handleChangeList} selectedUser={handleShowUserInfo}  />
          <UserBarChart users={users} />
          <UserInfo/>
        </>
      } />
    </Routes>
  )
}