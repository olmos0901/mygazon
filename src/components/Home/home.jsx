import React from "react";
import "./home.css";
import Logo from "../.././assets/logo.png";

function home() {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__blok">
            <img src={Logo} className="blok__logo" />
            
          </div>
        </header>
      </div>
    </>
  );
}

export default home;
