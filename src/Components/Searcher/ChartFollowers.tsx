import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from 'chart.js';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useGetUsersFollowers } from '../../Hooks/useGetUsersFollowers';

function ChartFollowers({users} : {users: string[]}) {

    
    const { followers, getFollowers } = useGetUsersFollowers()

    useEffect(()=>{
        getFollowers(users)
    }, [])
    
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

    const data = {
        labels: followers?.map((follower)=>{return follower.login}),
        datasets: [
          {
            label: 'Followers',
            data: followers?.map((follower)=>{return follower.followers}),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

    return (
        <Bar data={data} />
    );
}

export default ChartFollowers