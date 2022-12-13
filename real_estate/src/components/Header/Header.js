import React, { useState } from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["header"]}>
      <div className={classes["menu-button"]}>
        <ion-icon name="grid-outline"></ion-icon>
      </div>
      <nav className={classes["header-nav"]}>
        <ul className={classes["header-nav_ul"]}>
          <li className={classes["header-nav_li"]}>
            <a href="#" className={classes["header-link"]}>
              Facebook
            </a>
          </li>
          <li className={classes["header-nav_li"]}>
            <a href="#" className={classes["header-link"]}>
              Twitter
            </a>
          </li>
          <li className={classes["header-nav_li"]}>
            <a href="#" className={classes["header-link"]}>
              Instagram
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
