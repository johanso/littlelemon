import React from "react";
import AboutImage from "./imgs/AboutImage.png";
import Food from "./imgs/Food.jpg";

export default function About() {
  return (

    <section className="about" id="about">
      <div className="about__container container">
        <div className="about__block about__block--text">
          <h1 className="about__title">Little Lemon</h1>
          <h2 className="about__site">Chicago</h2>
          <div className="">
            <p className="about__text">
              Located in London, little lemon provides you with with the best
              dishes around the world.Have relative birthday that you want to
              celebrate? do you want to experience food like you never did
              before? reserve a table now, or order online. 
            </p>
            <p className="about__text">
              Little lemon is the best place for your most delicious needs!
            </p>
          </div>
        </div>

        <div className="about__block about__block--image">
          <img src={AboutImage} className={"about__img"} alt="img" />
        </div>
      </div>
    </section>
  );
}
