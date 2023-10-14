import React from "react";
import cardImg from "../../assets/maria.jpg";
import "./Mycard.css";

const Mycard = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="city-name">{props.name} &rarr;</div>
    </div>
  );
};

export default Mycard;
