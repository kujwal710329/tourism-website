import React from "react";
import ukImg from "../../assets/uttrakhand.jpg";
import classes from "./HeritageHero.module.css";

const HeritageHero = (props) => {
  return (
    <div className={classes["img-container"]}>
      <img
        src={ukImg}
        alt="some uttrakhand pic"
        className={classes["city-img"]}
      ></img>
      <div className={classes["city-name"]}>Uttrakhand &rarr;</div>
    </div>
  );
};

export default HeritageHero;
