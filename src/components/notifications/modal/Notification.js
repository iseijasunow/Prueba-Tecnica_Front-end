import React from 'react'
import { MdClear } from 'react-icons/md';

export const Notification = (props) => {
  const { text = 'Ha ocurrido un error, intente mas tarde', handleClose } = props
  return (
    <>
      <div className='modal-header right-center-flex'>
        <MdClear onClick={handleClose}/>
      </div>
      <div className='modal-body flex-center'>
        {text}
      </div>
      <div className='modal-footer right-center-flex'>
        <button variant="contained" size="small" color='primary' onClick={handleClose}>Aceptar</button>
      </div>
    </>
  )
}
