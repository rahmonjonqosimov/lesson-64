import React from "react";
import card1 from "../../assets/images/card-1.png";
import card2 from "../../assets/images/card-2.png";
import card3 from "../../assets/images/card-3.png";

const Steps = () => {
  let cardData = [
    {
      id: 1,
      image: card1,
      title: "Предложение от продавца",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
    {
      id: 2,
      image: card2,
      title: "Доставка",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
    {
      id: 3,
      image: card3,
      title: "Установка у клиента",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. ",
    },
  ];
  let card = cardData?.map((el) => (
    <div key={el.id} className="steps__card">
      <img src={el.image} alt={el.title} />
      <div className="text__box">
        <h6>{el.title}</h6>
        <div className="div"></div>
        <p>{el.description}</p>
      </div>
    </div>
  ));
  return (
    <section id="steps">
      <div className="container">
        <div className="steps">
          <h1>Этапы поставки </h1>

          <div className="cards">{card}</div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
