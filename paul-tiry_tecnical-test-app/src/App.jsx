import { useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/themeColors'
import useFetch from './hooks/useFetch'
import GlobalStyle from './theme/globalStyles'
import Search from './components/Search'
import User from './components/user/User'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/user/:login" element={<User />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
