import React from 'react'
import { BsSearch } from 'react-icons/bs'

import '@/styles/SearchForm.scss'

const SearchForm = () => {
  return (
    <div className='search-form-container'>
      <div className='form-section' >
        <input
          placeholder='Search user Github here...'
          type="text"
        />
        <button className='btn-primary'>
          <BsSearch size="1rem" />
        </button>
      </div>
    </div>
  )
}

export default SearchForm
