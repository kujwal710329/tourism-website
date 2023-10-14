import React from "react";
import classes from "./CityList.module.css";
import Mycard from "./Mycard";

import img1 from "./../../assets/city/surat.jpg";
import img2 from "./../../assets/city/banglore.jpg";
import img3 from "./../../assets/city/delhi.jpg";
import img4 from "./../../assets/city/kashmir.jpg";
import img5 from "./../../assets/city/jaipur.jpg";
import img6 from "./../../assets/city/uttrakhand.jpg";
import img7 from "./../../assets/city/himachal.jpg";

const DUMMY_CITY = [
  {
    id: "m1",
    name: "Surat",
    description: "this is surat",
    price: 22.99,
    img: img1,
  },
  {
    id: "m2",
    name: "Banglore",
    description: "This is Banglore",
    price: 16.5,
    img: img2,
  },
  {
    id: "m3",
    name: "Delhi",
    description: "This is delhi",
    price: 12.99,
    img: img3,
  },
  {
    id: "m4",
    name: "Kashmir",
    description: "This is patna",
    price: 18.99,
    img: img4,
  },
  {
    id: "m5",
    name: "Rajasthan",
    description: "This is Banglore",
    price: 16.5,
    img: img5,
  },
  {
    id: "m6",
    name: "Uttarakhand",
    description: "This is delhi",
    price: 12.99,
    img: img6,
  },
  {
    id: "m7",
    name: "Himachal",
    description: "This is patna",
    price: 18.99,
    img: img7,
  },
];

const CityList = () => {
  const cityName = DUMMY_CITY.map((city) => (
    <Mycard id={city.id} key={city.id} name={city.name} desctiption={city.description} price={city.price} image={city.img} />
  ));

  return (
    <section className={classes.city}>
      <h2 className={classes["heading-secondary"]}>Most Popular Cities</h2>
      <a href={`/${DUMMY_CITY[5].name}`}>
        <div className={classes.container}>{cityName}</div>
      </a>
    </section>
  );
};

export default CityList;
