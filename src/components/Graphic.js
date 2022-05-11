import { Line } from "react-chartjs-2";
import { useEffect, useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  Responsive: true,
  scales: {
    y: {
      min: 0,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function Graphic(props) {

  let results = props.users
  const [usersIndex, setUsersIndex] = useState([])
  const [followers, setFollowers] = useState([])
  const [showChart, setShowChart] = useState(false)
  const [data, setData] = useState({})
  const followersList = []
  const userList = []
  let follows = []
  let userArr = []
  useEffect(() => {
    results.forEach(user => {
      fetch(user.url)
        .then(res => res.json())
        .then(res => {
          follows = res.followers
          userArr = res.login
          followersList.push(follows)
          userList.push(userArr)
        })
    });

    const config = {
      datasets: [
        {
          label: "FOLLOWERS",
          data: followers,
          tension: 0.3,
          borderColor: "#d60071",
          pointRadius: 6,
          pointBackgroundColor: "#d60071",
          backgroundColor: "#d600724d",
        },
      ],
      labels: usersIndex,
    }
    setData(config)

    setUsersIndex(userList)
    setFollowers(followersList)
    setShowChart(true)

  }, [results])


  return (

    <>
      {showChart &&

        <Line className="graphic" data={data} options={options} />

      }

    </>
  );
}