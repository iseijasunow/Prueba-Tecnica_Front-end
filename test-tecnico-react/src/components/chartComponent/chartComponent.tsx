import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from "./chartComponent.module.scss"
import { IChartComponent } from '../../interfaces/ChartComponentInterface';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themecontext';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const ChartComponent = ({ userFollowersData }: IChartComponent) => {
    const { actualTheme } = useContext(ThemeContext)
    const labels = userFollowersData?.map((user) => user.username);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Followers',
            },
        },
        scales: {
            yAxes: {
                grid: {
                    drawBorder: true,
                    color: actualTheme.colorText,
                },
                ticks: {
                    beginAtZero: true,
                    color: actualTheme.colorText,
                    fontSize: 12,
                }
            },
            xAxes: {
                grid: {
                    drawBorder: true,
                    color: actualTheme.colorText,
                },
                ticks: {
                    beginAtZero: true,
                    color: actualTheme.colorText,
                    fontSize: 12,
                }
            }
        }
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'Followers',
                data: userFollowersData?.map((user) => user.followers),
                backgroundColor: '#f66b0e',
            },
        ],
    };
    return (
        <div className={`${styles.mainContainer}`}>
            <h1 style={{ color: actualTheme.colorText }}>Users's Followers</h1>
            <Bar options={options} data={data} />
        </div>
    )
}

export default ChartComponent