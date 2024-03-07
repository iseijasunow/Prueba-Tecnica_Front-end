import React from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7'];
const datalabels = [234, 533, 54, 677, 200, 425, 54]
 

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: datalabels,
      backgroundColor: 'rgba(225, 225, 225, 0)',
      borderColor: 'rgba(225, 225, 225, 1)',
      borderWidth: 1
    },
  ],
};

export function UserBarChart() {
  return (
      <div className='section-basic section-chart'>
          <Bar options={options} data={data} />
      </div>
    )
}