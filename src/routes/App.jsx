import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/containers/Layout.jsx'

import Home from '@/views/Home'
import Search from '@/views/Search'
import DetailUser from '@/views/DetailUser'
import NotFound from '@/views/Errors/NotFound.jsx'

import AppContext from '@/context/AppContext'
import ErrorContext from '@/context/ErrorContext'
import useInitialStateUsers from '@/hooks/useInitialStateUsers'
import useInitialStateError from '@/hooks/useInitialStateError'

const App = () => {
  const initialState = useInitialStateUsers()
  const initialStateError = useInitialStateError()

  return (
    <AppContext.Provider value={initialState}>
      <ErrorContext.Provider value={initialStateError}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/users" element={<Search />} />
              <Route exact path="/user/:userName/detail" element={<DetailUser />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ErrorContext.Provider>
    </AppContext.Provider>
  )
}

export default App
