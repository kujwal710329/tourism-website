import React, { Fragment } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import HeritagePlacesHero from "../components/heritagePlaces/HeritagePlacesHero";
import HeritagePlacesAbout from "../components/heritagePlaces/HeritagePlacesAbout";
import HeritagePlacesGallery from "../components/heritagePlaces/HeritagePlacesGallery";

const HeritagePlaces = () => {
  return (
    <Fragment>
      <Header />
      <main style={{ backgroundColor: "#fff5f5" }}>
        <HeritagePlacesHero />
        <HeritagePlacesAbout />
        <HeritagePlacesGallery />
      </main>
      <Footer />
    </Fragment>
  );
};

export default HeritagePlaces;
