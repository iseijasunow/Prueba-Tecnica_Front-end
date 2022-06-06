import React from "react";
import "./UserComponets.scss";
import { useParams, useNavigate } from "react-router-dom";
import getParams from "../../../hooks/getParams";

const UserComponets = () => {
  const params = useParams();
  let history = useNavigate();
  const data = getParams({ name: params.login });
  function handleSubmit(e) {
    e.preventDefault();
    history("/");
  }
  return (
    <div className="contentUser">
      <div className="contentUser__image">
        <img
          className="contentUser__image__img"
          src={data.avatar_url}
          alt="avatar image"
        />
      </div>
      <div className="contentUser__info">
        <span className="contentUser__info__id">
          <span className="material-symbols-outlined">verified</span> {data.id}
        </span>
        <span className="contentUser__info__login">
          <span className="material-symbols-outlined">face</span>
          {data.login}
        </span>
        <span className="contentUser__info__name">
          <span className="material-symbols-outlined">account_circle</span>
          {data.name}
        </span>
        <span className="contentUser__info__html_url">
          <span className="material-symbols-outlined">language</span>
          {data.html_url}
        </span>
        <span className="contentUser__info__bio">
          <span className="material-symbols-outlined">description</span>
          {data.bio}
        </span>
      </div>
      <button className="contentUser__btn" onClick={handleSubmit}>
        <span className="material-symbols-outlined">arrow_back</span>Go back!
      </button>
    </div>
  );
};

export default UserComponets;
