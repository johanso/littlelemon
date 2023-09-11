import React from "react";
import { Link } from "react-router-dom";

export default function HightledCard(props) {
  return (
    <div className="cardish">
      <div className="cardish__container-image">
        <img src={props.dishImage} className="cardish__image" alt="dish" />
      </div>
      <div className="cardish__row">
        <h3 className="cardish__name">{props.dishName}</h3>
        <h3 className="cardish__price">${props.dishPrice}</h3>
      </div>

      <p className="cardish__description">{props.dishDescription}</p>
      
      <Link to="/" className="cardish__button">Order for dilvery</Link>
    </div>
  );
}
