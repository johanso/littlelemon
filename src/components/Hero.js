import React from "react";
import LLR from "./imgs/LLR.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero" id="hero">

      <div className="hero__container container">
        <div className="hero__block hero__block--text">
          <h1 className="hero__title">Little Lemon</h1>
          <h2 className="hero__site">Chicago</h2>
          <div className="">
            <p className="hero__text">
              Located in London, little lemon provides you with the most you
              with the best dishes around the world, with the option to order
              online or reserve a table Little lemon is the best place for your
              most delicious needs!
            </p>
            <button className="hero__btn" onClick={() => {navigate("/booking");}}>
              Reserve a table
            </button>
          </div>
        </div>

        <div className="hero__block hero__block--image">
          <img src={LLR} className="hero__img" alt="imageslider"/>
        </div>
      </div>

    </section>
  );
}
