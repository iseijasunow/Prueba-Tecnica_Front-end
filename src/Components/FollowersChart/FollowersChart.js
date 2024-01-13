import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./FollowersChart.scss";

const FollowersChart = ({ followersCount }) => {
  const calculatePercentage = (count) => {
    return (count / 30) * 100;
  };

  const fillPercentage = calculatePercentage(followersCount);

  return (
    <div className="followers-chart">
      <CircularProgressbar
        value={fillPercentage}
        text={`${followersCount}`}
        styles={buildStyles({
          textSize: "32px",
          pathTransitionDuration: 0.5,
          textColor: "#FFFFFF",
          pathColor: "#FFFFFF",
          trailColor: "#161616",
        })}
      />
    </div>
  );
};

export default FollowersChart;
