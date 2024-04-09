import React from "react";
import user1 from "../../assets/images/user-1.svg";
import user2 from "../../assets/images/user-2.svg";
import user3 from "../../assets/images/user-3.svg";
import user4 from "../../assets/images/user-4.svg";
import user5 from "../../assets/images/user-5.svg";
import user6 from "../../assets/images/user-6.svg";
import instagram from "../../assets/images/instagram.svg";
import vector from "../../assets/images/Vector.svg";
import linkedin from "../../assets/images/linkedin.svg";
import carImg from "../../assets/images/Group 8.png";

const Team = () => {
  let data = [
    {
      id: 1,
      image: user1,
      name: "Антон Макаров",
      companies: "Руководитель компании",
    },
    {
      id: 2,
      image: user2,
      name: "Елена Валерьева",
      companies: "Главный бухгалтер",
    },
    {
      id: 3,
      image: user3,
      name: "Иван Аркадьев ",
      companies: "Менеджер по закупкам",
    },
    {
      id: 4,
      image: user4,
      name: "Борис Вавилов",
      companies: "Бухгалтер",
    },
    {
      id: 5,
      image: user5,
      name: "Алина Кравец",
      companies: "Сотрудник отдела кадров",
    },
    {
      id: 6,
      image: user6,
      name: "Виктор Козуб",
      companies: "Менеджер по закупкам",
    },
  ];
  let card = data?.map((el) => (
    <div key={el.id} className="team__card">
      <div className="left"></div>
      <img className="user" src={el.image} alt={el.name} />
      <div className="team__card__text">
        <h5>{el.name}</h5>
        <p>{el.companies}</p>
        <div className="social__network">
          <a
            href="https://www.instagram.com/khasimovv_official/"
            target="_blank"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a href="#">
            <img src={vector} alt="Vector" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <section id="team">
      <div className="container">
        <div className="team">
          <h1>Сотрудники компании</h1>
          <div className="team__box">{card}</div>
          <img className="car" src={carImg} alt="Car image" />
        </div>
      </div>
    </section>
  );
};

export default Team;
