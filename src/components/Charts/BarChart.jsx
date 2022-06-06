import React, { useEffect, useState, useContext } from 'react'
import ChartLoader from '@/components/Loader/ChartLoader.jsx'
import AppContext from '@/context/AppContext'
import ChartApp from './Chart.jsx'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

// import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const options = {
  fill: true,
  animations: false,
  scales: {
    y: {
      min: 0
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: true
    }
  }
}

const BarChartApp = ({ loading }) => {
  const [localLoading, setLocalLoading] = useState(true)
  const [scores] = useState([])
  const [labels] = useState([])
  const { state } = useContext(AppContext)

  useEffect(() => {
    if (!loading) {
      prepareData()
      setTimeout(() => {
        setLocalLoading(false)
      }, 500)
    }
  }, [])

  const prepareData = () => {
    state.items.forEach(user => {
      axios.get(user.followers_url)
        .then(res => {
          const total = res.data.length
          scores.push(total)
          labels.push(user.login)
        })
    })
  }

  return (
    <div className='page-chart'>
      { localLoading && <ChartLoader /> }
      { !localLoading && <ChartApp scores={scores} labels={labels} options={options} /> }
    </div>
  )
}

export default BarChartApp
