import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BarChartComponent } from '../../components/chart/BarChart/BarChartComponent'
import Modal from '../../components/modal/Modal'
import { Notification } from '../../components/notifications/modal/Notification'
import { FAILED, IDLE, LOADING } from '../../utils/constants/constants'
import { getUsersDetailed } from '../../services/api/users/usersApi'
import { Card } from './components/card/Card'
import styles from './Users.module.css'
import { LoadingPage } from '../../components/loading/LoadingPage/LoadingPage'

export const Users = () => {
  const [state, setState] = useState({error: '', users: [], errorInput: '', lastSearch: '', status: IDLE})
  const [searchParams, setSearchParams] = useSearchParams({text:''});
  const navigate = useNavigate()

  const handleClose = () => {
    setState({...state, error: '', status: IDLE})
  }

  const handleClickCard = (name) =>  {
    navigate(`/users/${name}`)
  }

  const hidrateUsers = async (data) => {
    if (data.length < 4) {
      setState({...state, errorInput: 'Debe escribir al menos 4 carácteres'})
      return
    }else if (data.toLowerCase() === 'iseijasunow'){
      setState({...state, errorInput: 'No puede buscar iseijasunow'})
      return
    }
    
    setState({...state, status: LOADING})
    const res = await getUsersDetailed(data)
    if (res.error) {
      setState({...state, error: 'Ha ocurrrido un error, intente más tarde', status: FAILED})
    }else{
      setState({...state, error: '', users: res, lastSearch: data, status: IDLE})
    }
  }

  const handleChange = (e) => {
    setState({...state, errorInput: ''})
    setSearchParams({text: e.target.value})
  }

  const handleSubmit = (e) => {
    const text = searchParams.get('text')
    if (state.lastSearch === text) return
    hidrateUsers(text)
  }
    
  useEffect(() => {
    if (state.error) return
    hidrateUsers(searchParams.get('text'))
  }, [state.error])
  
  return (
      <>
        {state.status === LOADING && <LoadingPage />}
        {state.error && 
          <Modal handleClose={handleClose} show={true}>
            <Notification handleClose={handleClose} />
          </Modal>
        }
        <div className={styles.containerForm}>
          <div className='flex-center'>
            <input className={styles.input} onChange={handleChange} type="text" value={searchParams.get('text')} /> 
            <button className={styles.button} onClick={handleSubmit}>Search</button>
          </div>
          {state.errorInput && <div>{state.errorInput}</div>}
        </div> 
        { !state.users.length && <div className='flex-center'>Empty</div>}
        { !!state.users.length && 
          <div className='padding-15'>
            <div className='grid-12'>
              <div className='col-s-12 col-md-6'>
                {state.users.map((user) => <Card key={user.id} user={user} handleClick={() => handleClickCard(user.login)} />)}
              </div>
              <div className='col-s-12 col-md-6 overflow-x-auto'>
                <BarChartComponent data={state.users}/>
              </div>
            </div>
          </div>
        }
      </>
  )
}
