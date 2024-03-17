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
import { memo } from 'react'

// types
import { User } from '@/types'

function UserFollowersBarChart({ users }: { users: User[] }) {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
	)

	const data = {
		labels: users.map((user) => user.login),
		datasets: [
			{
				label: 'Followers',
				data: users.map((user) => user.followers),
				backgroundColor: 'rgba(100, 108, 255, 0.2)',
				borderColor: '#646cff',
				borderWidth: 1,
			},
		],
	}

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    }

	return <Bar data={data} options={options} />
}

const MemoizedUserFollowersBarChart = memo(UserFollowersBarChart)
export default MemoizedUserFollowersBarChart
