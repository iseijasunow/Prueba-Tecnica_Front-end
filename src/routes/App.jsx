import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/containers/Layout.jsx'

import Home from '@/views/Home'
import Search from '@/views/Search'
import NotFound from '@/views/Errors/NotFound.jsx'

const App = () => {
  return (
  <>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/user" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </>
  )
}

export default App
