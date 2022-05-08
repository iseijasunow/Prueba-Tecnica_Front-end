import React, { useContext } from 'react'
import { MdOutlineDangerous } from 'react-icons/md'
import { BsCheckCircleFill } from 'react-icons/bs'
import { GrStatusWarning } from 'react-icons/gr'
import { FaTimes } from 'react-icons/fa'
import ErrorContext from '@/context/ErrorContext'

const AlertApp = ({ variant, message }) => {
  const { hideAlert } = useContext(ErrorContext)

  const setIcon = () => {
    switch (variant) {
      case 'danger':
        return <MdOutlineDangerous color='#bb2d3b' size='1.2rem' />

      case 'success':
        return <BsCheckCircleFill color='#198754' size='1.2rem' />

      case 'warning':
        return <GrStatusWarning color='#ffca2c' size='1.2rem' />

      default:
        return null
    }
  }

  const handleHideAlert = () => {
    hideAlert()
  }

  return (
    <div className={`alert-app ${variant}`}>
      <div className='body-alert'>
        { setIcon() }
        <span className='message'>
          {message}
        </span>
      </div>
      <div className='hide-content'>
        <FaTimes onClick={() => handleHideAlert()} />
      </div>
    </div>
  )
}

export default AlertApp
