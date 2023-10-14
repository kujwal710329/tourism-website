import React, { Fragment } from "react";
import ToursSummary from "./ToursSummary";
import CityList from "./CityList";

const Tours = () => {
  return (
    <Fragment>
      <ToursSummary />
      <CityList />
    </Fragment>
  );
};

export default Tours;
