import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LoadingPage } from '../../components/loading/LoadingPage/LoadingPage'
import Modal from '../../components/modal/Modal'
import { Notification } from '../../components/notifications/modal/Notification'
import { FAILED, IDLE, LOADING } from '../../utils/constants/constants'
import { getUser } from '../../services/api/users/usersApi'
import styles from './User.module.css'

export const User = () => {
    const [state, setState] = useState({error: '', user: {}, status: IDLE})
    const params = useParams()
    const navigate = useNavigate()

    const handleClose = () => {
        setState({...state, error: '', status: IDLE})
    }

    useEffect(() => {
        if (state.error) return
        setState({...state, status: LOADING})
        getUser(params.name)
        .then((res) => {
            if (res.error) {
                setState({...state, status: FAILED, error: 'Ha ocurrido un error interno'})
            }else{
                setState({...state, error:'', user:res, status: IDLE})
            }
        })
    
    }, [state.error])
    
    
    return (
        <div>
            {state.error && 
                <Modal handleClose={handleClose} show={true}>
                    <Notification handleClose={handleClose} />
                </Modal>
            }
            {state.status === LOADING && <LoadingPage />}
            <div className={styles.container} >
                <div className='flex-center'>
                    <img src={state.user.avatar_url} alt="" className={styles.avatar} />
                </div>
                <div className='m-b-20'>
                    <span className='font-bolder'>Name:</span> {state.user.login }
                </div>
                <div className='m-b-20'>
                    <span className='font-bolder'>Followers:</span> {state.user.followers}
                </div>
                <div className='m-b-20 flex-between'>
                    <span>
                        <span className='font-bolder'>Following:</span> {state.user.following}
                    </span>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
            </div>
        </div>
    )
}
