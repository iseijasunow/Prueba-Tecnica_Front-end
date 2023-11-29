/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useFetchAll } from "../hooks/useFetchAll";
import ErrorMessage from "./ErrorMessage";

const FollowersChart = ({ urls }) => {
  const { data, error } = useFetchAll(urls);

  if (error) {
    return <ErrorMessage message={error} />;
  }

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
        position: "top",
      },
      title: {
        display: true,
        text: "Número de seguidores por usuario",
      },
    },
  };

  let chart = "";

  if (data.length) {
    const labels = data.map((data) => data.login);
    const followers = data.map((data) => data.followers);
    chart = {
      labels: labels,
      datasets: [
        {
          label: "Seguidores (Github)",
          data: followers,
          backgroundColor: [
            "#FFDDC1",
            "#FFC3A0",
            "#A0CED9",
            "#B5EAD7",
            "#FFABAB",
            "#A9A9A9",
            "#FFDFD3",
            "#C7CEEA",
            "#E2F0CB",
            "#F5E4B7",
          ],
          borderColor: "#1f2937",
          borderWidth: 1,
        },
      ],
    };
  }

  return (
    <>
      {data.length ? (
        <div>
          <Bar data={chart} options={options} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default FollowersChart;
