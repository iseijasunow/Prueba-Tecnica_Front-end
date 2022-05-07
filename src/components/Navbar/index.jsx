import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import '@/styles/NavbarApp.scss'

const NavbarApp = () => {
  return (
    <div className="navbar-app">
      <Link className='brand' to="/">
        <BsGithub color='#d3d3d3' size="2rem" />
        Test App
      </Link>
    </div>
  )
}

export default NavbarApp
