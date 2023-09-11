import React from "react";
import Logo2 from "./imgs/WhiteLogo.jpg";

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer__content">
        <h3 className="footer__title">Little Lemon Chicago</h3>
        <img className="footer__logo" src={Logo2} width={"100px"} alt="logo" />
        <p className="footer__copy">copyright &copy; 2023 </p>
      </div>
    </footer>
  );
}
