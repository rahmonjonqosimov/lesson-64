import React from "react";
import box1 from "../../assets/images/box-1.png";
import box2 from "../../assets/images/box-2.png";
import box3 from "../../assets/images/box-3.png";

const Work = () => {
  let boxData = [
    {
      id: 1,
      image: box1,
      title: "Станки и оборудование",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      price: "20 000 руб.",
    },
    {
      id: 2,
      image: box2,
      title: "Компоненты и запчасти",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      price: "18 000 руб.",
    },
    {
      id: 3,
      image: box3,
      title: "Станки и оборудование",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.",
      price: "20 000 руб.",
    },
  ];
  let works = boxData.map((el) => (
    <div key={el.id} className="card">
      <img src={el.image} alt={el.title} />
      <div className="card__text">
        <h6>{el.title}</h6>
        <p>{el.description}</p>
        <h5>{el.price}</h5>
      </div>
    </div>
  ));
  return (
    <section id="work">
      <div className="container">
        <div className="work">
          <h1>Выполненные работы</h1>
          <p>
            Мы собрали информацию по грузам, которые мы уже доставили. У нас
            специальный подход к каждому виду товаров.
          </p>
          <div className="box">{works}</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
