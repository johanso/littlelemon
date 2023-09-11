import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // navbar menu
    <nav className="navbar">
      <Link className="navbar__link" to={"/"}>Home</Link>
      <Link className="navbar__link" to={"/"}>About</Link>
      <Link className="navbar__link" to={"/"}>Menu</Link>
      <Link className="navbar__link" to={"/booking"}>Reservation</Link>
      <Link className="navbar__link" to={"/"}>Order</Link>
      <Link className="navbar__link" to={"/"}>Login</Link>
    </nav>
  );
}
