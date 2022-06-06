import React, { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'

const ChartApp = ({ options, scores, labels }) => {
  const dataLocal = useMemo(function () {
    return {
      datasets: [
        {
          label: 'Followers',
          tension: 0.3,
          data: scores,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.3)'
        }
      ],
      labels
    }
  }, [])

  return (
    <Bar data={dataLocal} options={options} />
  )
}

export default ChartApp
