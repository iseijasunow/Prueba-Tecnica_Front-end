import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/containers/Layout.jsx'

import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/Errors/NotFound.jsx'

import AppContext from '@/context/AppContext'
import useInitialStateUsers from '@/hooks/useInitialStateUsers'

const App = () => {
  const initalState = useInitialStateUsers()
  return (
    <AppContext.Provider value={initalState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App
