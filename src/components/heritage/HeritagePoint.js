import React from "react";
import classes from "./HeritagePoint.module.css";
import Mycard from "../Tours/Mycard";

const DUMMY_POINT = [
  {
    id: "m1",
    name: "Rishikesh",
    description: "this is surat",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Haridwar",
    description: "This is Banglore",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Nainital",
    description: "This is delhi",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Dehradun",
    description: "This is patna",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Mussoorie",
    description: "This is Banglore",
    price: 16.5,
  },
  {
    id: "m6",
    name: "Jim Corbett",
    description: "This is delhi",
    price: 12.99,
  },
  {
    id: "m7",
    name: "Kedarnath",
    description: "This is patna",
    price: 18.99,
  },
];

const HeritagePoint = () => {
  const HeritagePoint = DUMMY_POINT.map((point) => (
    <Mycard id={point.id} key={point.id} name={point.name} desctiption={point.description} price={point.price} />
  ));
  return (
    <section className={classes.point}>
      <h2 className={classes["heading-secondary"]}>Most Popular Places To visit in Uttrakhand</h2>
      <a href={`/Uttrakhand/${DUMMY_POINT[4].name}`}>
        <div className={classes.container}>{HeritagePoint}</div>
      </a>
    </section>
  );
};

export default HeritagePoint;
