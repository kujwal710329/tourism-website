import React, { Fragment } from "react";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Incredible India</h1>
        <a href="">
          Login
        </a>
      </header>
    </Fragment>
  );
};

export default Header;
