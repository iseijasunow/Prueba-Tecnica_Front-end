import React from 'react'
import Navbar from '@/components/Navbar'
import '@/styles/LayoutApp.scss'

const LayoutApp = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className='main-app'>
        { children }
      </div>
    </>
  )
}

export default LayoutApp
