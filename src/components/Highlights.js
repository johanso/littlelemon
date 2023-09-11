import React from "react";
import HightledCard from "./HightledCard";
import { HightledDishes } from "./HighltedDishes";

export default function Highlights() {
  return (
    <section className="highlights" id="highlights">
      <div className="highlights__container container">
        <h2 className="highlights__title">Specials</h2>
        <div className="highlights__specials">
          {HightledDishes.map((dish, index) => {
            return (
              <HightledCard
                key={index}
                dishName={dish.Name}
                dishImage={dish.Image}
                dishPrice={dish.Price}
                dishDescription={dish.Description}
              ></HightledCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
