import React from 'react'
import { BsSearch } from 'react-icons/bs'
import UsersList from '@/components/Lists/UsersList.jsx'
import '@/styles/SearchForm.scss'

const SearchForm = ({ search, onChangeInput }) => {
  const changeInput = event => {
    onChangeInput(event.target.value)
  }

  return (
    <div className='search-form-container'>
      <div className='form-section' >
        <input
          value={search.search_value}
          onChange={changeInput}
          placeholder='Search user Github here...'
          type="text"
        />
        <button className='btn-primary'>
          <BsSearch size="1rem" />
        </button>
      </div>
      <div className="section-users">
        <UsersList users={search.items} loading={search.loading} total={search.total_count} />
      </div>
    </div>
  )
}

export default SearchForm
