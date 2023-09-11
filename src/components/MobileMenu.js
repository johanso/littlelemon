import React from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {

  return (
    <nav className="nav-mobile">
      <Link className="nav-mobile__item" to={"/"}>Home</Link>
      <Link className="nav-mobile__item" to={"/"}>About</Link>
      <Link className="nav-mobile__item" to={"/"}>Menu</Link>
      <Link className="nav-mobile__item" to={"/booking"}>Reservation</Link>
      <Link className="nav-mobile__item" to={"/"}>Order</Link>
      <Link className="nav-mobile__item" to={"/"}>Login</Link>
    </nav>
  );
}
