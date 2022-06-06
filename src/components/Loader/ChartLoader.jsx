import React from 'react'
import Spinner from '@/components/Spinners'
import '@/styles/ChartLoader.scss'

const ChartLoader = () => {
  return (
    <div className='chart-loader'>
      <div className='loader-section'>
        <Spinner />
        <h2>Loading data...please wait a moment</h2>
      </div>
    </div>
  )
}

export default ChartLoader
