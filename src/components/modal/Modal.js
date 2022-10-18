import React, { useEffect } from 'react'
import styles from './Modal.module.css'
import ReactDOM from 'react-dom'

export default function Modal(props) {
    const {show, handleClose} = props

    const closeOnEscapeKeyDown = (e) => {
        if(e.key === 'Escape' && show) {        
            handleClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }    
    }, [show])

    return ReactDOM.createPortal(
        <div className={`${styles.modal} ${show ? styles.show : ''}` } onClick={handleClose} >
            <div className={styles.modalContent}  onClick={(e) => e.stopPropagation()}>
               {show && props.children} 
            </div>
        </div>,
        document.getElementById('root-modal')
    )
}