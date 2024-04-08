import React from "react";
import service1 from "../../assets/images/services1.svg";
import service2 from "../../assets/images/services2.svg";
import service3 from "../../assets/images/services3.svg";

const Services = () => {
  let servicesData = [
    {
      id: 1,
      image: service1,
      title: "Поиск производителей по товару",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },
    {
      id: 2,
      image: service2,
      title: "Поиск конкретного производителя",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },
    {
      id: 3,
      image: service3,
      title: "Доставка образцов товаров",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.",
    },
  ];
  let service = servicesData.map((el) => (
    <div className="service1" key={el.id}>
      <div className="circle">
        <img src={el.image} alt="" />
      </div>
      <h4>{el.title}</h4>
      <p>{el.description}</p>
    </div>
  ));
  return (
    <section id="services">
      <div className="container">
        <div className="services">
          {service}
          <div className="hr hr-1"></div>
          <div className="hr hr-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
