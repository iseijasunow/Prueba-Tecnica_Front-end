import React from 'react'
import Spinner from '@/components/Spinners'

const LoaderApp = ({ message }) => {
  return (
    <div className='loader-section'>
      <Spinner />
      <h2>{ message }</h2>
    </div>
  )
}

export default LoaderApp
