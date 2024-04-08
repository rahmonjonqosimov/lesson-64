import React from "react";

const Header = () => {
  let linksData = ["Home", "About", "Blog", "Contact", "Help"];
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
          <ul className="links">{links}</ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
