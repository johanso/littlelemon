import React from "react";
import Logo from "./imgs/Logo.svg";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = React.useState(false);
  const HandleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <div className="header__container container">
        <Link to={"/"} ><img width={"150px"} src={Logo} alt="logo"/></Link>

        {/* menu desktop */}
        <Navbar />

        <button
          id="menu-btn"
          onClick={HandleClick}
          className={`${showMenu ? "open" : null} header__hamburger`}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>

        {/* Mobile menu*/}
        <AnimatePresence mode="wait">
          {showMenu ? <MobileMenu></MobileMenu> : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
