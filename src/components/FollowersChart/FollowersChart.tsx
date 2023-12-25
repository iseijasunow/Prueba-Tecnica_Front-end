import { useContext, useEffect } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import UsersContext from "../../store/users/context/UsersContext";

const FollowersChart = () => {
  const { loadUsersFollowers, usersFollowersList } = useContext(UsersContext);

  useEffect(() => {
    (async () => await loadUsersFollowers())();
  }, [loadUsersFollowers]);

  return (
    <>
      {usersFollowersList.length === 0 ? (
        <div></div>
      ) : (
        <BarChart width={730} height={250} data={usersFollowersList}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="login" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="followers" fill="#8884d8" />
        </BarChart>
      )}
    </>
  );
};

export default FollowersChart;
