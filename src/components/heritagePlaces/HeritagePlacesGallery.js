import React from "react";
import classes from "./HeritagePlacesGallery.module.css";
import demoImg1 from "../../assets/gallery/rishikesh_ganga.jpg";
import demoImg2 from "../../assets/gallery/rishikesh_mountain.jpg";
import demoImg3 from "../../assets/gallery/rishikesh_sand.jpg";
import demoImg4 from "../../assets/gallery/rishikesh_shiva.jpg";

const HeritagePlacesGallery = () => {
  return (
    <section className={classes["places-gallery-section"]}>
      <h2 className={classes.subheading}>Gallery</h2>
      <div className={classes.row}>
        <div className={classes.columns}>
          <img
            src={demoImg1}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
          <img
            src={demoImg2}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
          <img
            src={demoImg3}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.columns}>
          <img
            src={demoImg4}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
          <img
            src={demoImg1}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.columns}>
          <img
            src={demoImg2}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
          <img
            src={demoImg3}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
          <img
            src={demoImg4}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
        </div>
        <div className={classes.columns}>
          <img
            src={demoImg1}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
          <img
            src={demoImg2}
            alt="some text for pic"
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeritagePlacesGallery;
