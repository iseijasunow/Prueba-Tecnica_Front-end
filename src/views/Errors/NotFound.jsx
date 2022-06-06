import React from 'react'

import '@/styles/NotFound.scss'

const NotFound = () => {
  return (
    <div className='not-found-page'>
      <img
        alt="Under development"
        src={require('@/assets/images/undraw_page_not_found_su7k.svg')}
      />
      <h2>404: The page you are looking for isn’t here</h2>
      <h4>
        You either tried some shady route or you
        came here by mistake. Whichever it is, try using the navigation.
      </h4>
    </div>
  )
}

export default NotFound
