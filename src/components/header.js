import React, { useState } from "react";
import { Link } from "gatsby";

import "hamburgers/dist/hamburgers.min.css";
import styles from "./header.module.css";

const Header = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header id="header" className={styles.header}>
      <button
        onClick={() => setActive(!isActive)}
        className={`hamburger hamburger--squeeze ${
          isActive ? "is-active" : ""
        } ${styles.hamburgerContainer}`}
        type="button"
      >
        <span className="hamburger-box">
          <span className={`hamburger-inner ${styles.hamburgerInner}`}></span>
        </span>
      </button>
      <nav className={`${styles.nav} ${isActive ? "block" : "hidden"}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li className="font-bold">
            <Link to="/">Project YCRO</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
