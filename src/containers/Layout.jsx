import React from 'react'

import '@/styles/LayoutApp.scss'

const LayoutApp = ({ children }) => {
  return (
    <div className='main-app'>
      { children }
    </div>
  )
}

export default LayoutApp
