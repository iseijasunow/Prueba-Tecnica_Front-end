import React, { useContext } from 'react'
import Navbar from '@/components/Navbar'
import Alert from '@/components/Alert'
import '@/styles/LayoutApp.scss'
import ErrorContext from '@/context/ErrorContext'

const LayoutApp = ({ children }) => {
  const { stateError } = useContext(ErrorContext)
  return (
    <>
      <Navbar />
      <div className='main-app'>
        { stateError.show && <Alert variant={stateError.variant} message={stateError.message} /> }
        { children }
      </div>
    </>
  )
}

export default LayoutApp
