import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

export const Card = (props) => {
    const {login, id} = props.user

    return (
        <div className={styles.card} onClick={props.handleClick}>
            <div><span className='font-bolder'>Id:</span> {id}, <span className='font-bolder'>Name:</span> {login}</div>
        </div>
    )
}
