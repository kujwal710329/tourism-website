import React from "react";
import classes from "./HeritagePlacesAbout.module.css";
import Card from "../UI/Card";

const HeritagePlacesAbout = () => {
  return (
    <section className={classes["section-about"]}>
      <Card>
        <h2 className={classes.subheading}>About</h2>
        <div className={classes["section-text"]}>
          <p>
            A quaint hill town, perched against the backdrop of Doddabetta
            (2,637 m), the highest peak in the Nilgiris, Ootacamund, in Tamil
            Nadu, is lined with traditional and colonial-style buildings, which
            make it the perfect fusion of the new and the old. Clear blue skies,
            lush green hills, deep verdant valleys and pleasant weather
            culminate to make this gem of the Nilgiris (Blue Mountains) one of
            the most attractive tourist destinations in South India. Peppered
            with coffee and tea plantations, forests of eucalyptus, conifers and
            pines, and a thick cover of shola trees, Ootacamund is the perfect
            getaway for nature lovers.
          </p>
          <p>
            It is popularly referred to as the 'Queen of Hill Stations' and the
            'Switzerland of India'
          </p>
        </div>
      </Card>
    </section>
  );
};

export default HeritagePlacesAbout;
