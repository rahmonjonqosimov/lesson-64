import React from "react";
import logo1 from "../../assets/images/logo-1.svg";
import logo2 from "../../assets/images/logo-2.svg";
import logo3 from "../../assets/images/logo-3.svg";
import logo4 from "../../assets/images/logo-4.svg";
import logo5 from "../../assets/images/logo-5.svg";
import logo6 from "../../assets/images/logo-6.svg";
import logo7 from "../../assets/images/logo-7.svg";
import logo8 from "../../assets/images/logo-8.svg";

const Clients = () => {
  let data = [
    {
      id: 1,
      image: logo1,
      title: "Росатом",
      describe: "Корпорация атомной энергии",
    },
    {
      id: 2,
      image: logo2,
      title: "Газпром",
      describe: "Энергетическая компания",
    },
    {
      id: 3,
      image: logo3,
      title: "Роснефть",
      describe: "Нефтегазовая компания",
    },
    {
      id: 4,
      image: logo4,
      title: "Роскосмос",
      describe: "Корпорация в космической отрасли",
    },
    {
      id: 5,
      image: logo5,
      title: "Лукойл",
      describe: "Нефтяная компания",
    },
    {
      id: 6,
      image: logo6,
      title: "Интер РАО",
      describe: "Энергетическая компания",
    },
    {
      id: 7,
      image: logo7,
      title: "Ростех",
      describe: "Ростех",
    },
    {
      id: 8,
      image: logo8,
      title: "Банк ВТБ",
      describe: "Коммерческий банк",
    },
  ];
  let card = data?.map((el) => (
    <div className="logo__box" key={el.id}>
      <div className="logo__img">
        <img src={el.image} alt={el.title} />
      </div>
      <h5>{el.title}</h5>
      <h6>{el.describe}</h6>
    </div>
  ));
  return (
    <section id="logos">
      <div className="container">
        <div className="logos">
          <h1>Нам доверяют</h1>
          <div className="logos__card">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
