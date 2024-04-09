import React, { useState } from "react";
import btnMenu from "../../assets/images/menu.svg";
import bxX from "../../assets/images/bx-x.svg";

const Header = () => {
  let linksData = ["Home", "About", "Blog", "Contact", "Help"];
  const [menuOpen, setMenuopen] = useState(false);
  let links = linksData.map((el, i) => (
    <li key={i}>
      <a href="#" className="nav__links">
        {el}
      </a>
    </li>
  ));
  return (
    <section id="header">
      <div className="container">
        <div className="header">
          <a href="#" className="logo">
            грузовик
          </a>
          <ul className={menuOpen ? "links show" : "links"}>{links}</ul>
          <div
            onClick={() => {
              setMenuopen(!menuOpen);
            }}
            className="menu"
          >
            <img
              src={btnMenu}
              alt="menu"
              className={menuOpen ? "btn-1" : "btn"}
            />
            <img src={bxX} alt="X" className={!menuOpen ? "btn-1" : "btn"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
