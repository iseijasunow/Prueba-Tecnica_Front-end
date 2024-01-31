import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackBtn.scss";

export default function BackBtn() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <button onClick={goBack} className="back-btn">BACK</button>;
}
