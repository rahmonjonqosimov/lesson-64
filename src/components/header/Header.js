import React, { useState } from "react";
import btnMenu from "../../assets/images/menu.svg";
import bxX from "../../assets/images/bx-x.svg";

const Header = () => {
  let linksData = ["Home", "About", "Blog", "Contact", "Help"];
  let links = linksData.map((el, i) => (
    <li key={i}>
      <a href="#" className="nav__links">
        {el}
      </a>
    </li>
  ));
  const toogle = (e) => {
    if (
      e.target.className === "menu" ||
      e.target.className === "menu btn-menu"
    ) {
      let el = e.target.previousElementSibling;
      if (el.className === "links") {
        el.classList.add("show");
        e.target.classList.add("btn-menu");
      } else {
        el.classList.remove("show");
        e.target.classList.remove("btn-menu");
      }
    }
  };
  return (
    <section id="header">
      <div className="container">
        <div className="header">
          <a href="#" className="logo">
            грузовик
          </a>
          <ul className="links">{links}</ul>
          <div onClick={toogle} className="menu">
            <img src={btnMenu} alt="menu" className="btn-1" />
            <img src={bxX} alt="X" className="btn-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
