import React from "react";
import instagram from "../../assets/images/footer instagram.svg";
import facebook from "../../assets/images/footer facebook.svg";
const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer">
          <a href="#" className="footer__logo">
            Logo
          </a>
          <ul>
            <li>Каталог</li>
            <li>
              <a href="#">о компании</a>
            </li>
            <li>
              <a href="#">Индивидуальная </a>
            </li>
            <li>
              <a href="#">Партнерам</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">2D, 3D модели</a>
            </li>
            <li>
              <a href="#">Шоу-румы </a>
            </li>
            <li>
              <a href="#">Дилерам</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Конфигуратор</a>
            </li>
          </ul>
          <div className="connection">
            <div className="connection__link">
              <a
                href="https://www.instagram.com/khasimovv_official/"
                target="_blank"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
            <a href="#">+38 (099)-638-45-37</a>
            <button>Персональная консультация > </button>
          </div>
        </div>
        <p>© 1993–2021 Интернет-магазин «LOGO» — truck</p>
      </div>
    </section>
  );
};

export default Footer;
