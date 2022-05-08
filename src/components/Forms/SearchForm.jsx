import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useForm } from 'react-hook-form'

import UsersList from '@/components/Lists/UsersList.jsx'
import '@/styles/SearchForm.scss'

const SearchForm = ({ search, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = data => {
    onSubmit(data.userName)
  }

  return (
    <div className='search-form-container'>
      <div className='form-section' >
        <form onSubmit={handleSubmit(submit)}>
          <input
            className={errors.userName ? 'error' : ''}
            name="userName"
            placeholder='Search user Github here...'
            {...register('userName', {
              validate: value => value !== 'iseijasunow' || 'this name is prohibited',
              required: {
                value: true,
                message: 'The user name is required'
              }
            })}
            type="text"
          />
          <button className='btn-primary'>
            <BsSearch size="1rem" />
          </button>
        { errors.userName && <span className='error-message'>{ errors.userName?.message }</span> }
        </form>
      </div>
      <div className="section-users">
        <UsersList users={search.items} loading={search.loading} total={search.total_count} />
      </div>
    </div>
  )
}

export default SearchForm
