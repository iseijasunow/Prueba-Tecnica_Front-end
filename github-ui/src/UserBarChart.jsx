import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import {GitHub} from './services/GitHubService/GitHub.jsx'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export function UserBarChart({users}) {

  const [followers, setFollowers] = useState([])
    
  useEffect(() => {
    const fetchFollowers = async () => {
      setFollowers([])
      try {
        const followerCounts = await Promise.all(
          users.map(async (user) => {
            const github = new GitHub()
            const followers = await github.numberOfFollowers(user.login)
            return followers
          })
        );
        setFollowers(followerCounts)
      } catch (error) {
        console.error('Error fetching followers:', error)
      }
    };

    fetchFollowers()
  }, [users])

  const labels = users.map(user => user.login)
  const datalabels = followers

  const options = {
    responsive: true
  }
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Followers',
        data: datalabels,
        backgroundColor: 'rgba(233, 187, 36, 1)',
        /*borderColor: 'rgba(225, 225, 225, 1)',*/
        borderWidth: 1
      },
    ],
  }
  
  return (
      <div className='section-basic section-chart'>
        <h1>Followers Per User</h1>
        <div>
          <Bar options={options} data={data} />
        </div>
      </div>
    )
}