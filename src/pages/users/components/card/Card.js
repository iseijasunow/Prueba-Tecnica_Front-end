import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Card.module.css'

export const Card = (props) => {
    const {login, id} = props.user
    const navigate = useNavigate()

    const handleClick = () => navigate(`/users/${login}`)

    return (
        <div className={styles.card} onClick={handleClick}>
            <div><span className='font-bolder'>Id:</span> {id}, <span className='font-bolder'>Name:</span> {login}</div>
        </div>
    )
}
