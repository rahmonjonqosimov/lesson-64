import React from "react";
import heroBg from "../../assets/images/adir-Cargo-Insurance 1.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero__text">
            <h1>Поставщик Дальнего Востока</h1>
            <p>
              Наши клиенты получают полный спектр услуг по работе c Китаем.
              Начиная c подбора производителя заканчивая доставкой товара до
              двери. Настолько прозрачных сделок Китаем вы еще не осуществляли.
            </p>
            <a href="#" className="m">
              Узнать больше
            </a>
          </div>
          <img src={heroBg} alt="adir-Cargo-Insurance" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
