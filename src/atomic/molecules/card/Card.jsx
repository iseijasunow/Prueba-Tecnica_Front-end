import "./Card.scss";
import React from "react";

const Card = ({ image, login, id }) => {
  return (
    <div className="content">
      <div className="card">
        <div className="card__content">
          <div className="card__content__image">
            <img className="card__content__image__img" src={image} alt="Card" />
          </div>
          <div className="card__content__info">
            <span className="card__content__info__login">
              <span className="material-symbols-outlined">account_circle</span>
              {login}
            </span>
            <span className="card__content__info__id">
              <span className="material-symbols-outlined">verified</span> {id}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
