import React from "react";
import classes from "./HeritagePlacesHero.module.css";
import video from "../../assets/sea_mountain.mp4";

const HeritagePlacesHero = () => {
  return (
    <section className={classes["heritage-places-hero"]}>
      <div className={classes["places-hero-inner"]}>
        <video className={classes["places-video"]} autoPlay muted loop auto>
          <source src={video} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeritagePlacesHero;
