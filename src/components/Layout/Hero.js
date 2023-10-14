import React from "react";
import classes from "./Hero.module.css";
import placesImg from "../../assets/header-img.jpg";

const Hero = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={placesImg} alt="some pic"></img>
    </div>
  );
};

export default Hero;
