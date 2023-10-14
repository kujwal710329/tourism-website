import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import HeritageHero from "../components/heritage/HeritageHero";
import HeritageAbout from "../components/heritage/HeritageAbout";

import HeritagePoint from "../components/heritage/HeritagePoint";

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

const Heritage = (props) => {
  return (
    <Fragment>
      <Header />
      <main>
        <HeritageHero heritageData={DUMMY_POINT} />
        <HeritageAbout />
        <HeritagePoint />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Heritage;
