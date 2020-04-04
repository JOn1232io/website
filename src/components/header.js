import React, { useState } from "react";
import { Link } from "gatsby";

import "hamburgers/dist/hamburgers.min.css";
import styles from "./header.module.css";

const Header = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header>
      <Link to="/" className={`name ${styles.name}`}>
        <h1>Project YCRO</h1>
      </Link>
      <nav className={`nav ${styles.nav} ${isActive ? styles.active : ""}`}>
        <button
          onClick={() => setActive(!isActive)}
          className={`hamburger ${styles.hamburger}`}
          type="button"
        >
          <div className={`hamburger__lines ${styles.hamburger__lines}`}>
            <span className={` ${styles.hamburger__line}`}></span>
            <span className={` ${styles.hamburger__line}`}></span>
            <span className={` ${styles.hamburger__line}`}></span>
          </div>
        </button>
        <Link to="/" className={`nav__link ${styles.nav__link}`}>
          <span>Home</span>
        </Link>
        <Link to="/contact" className={`nav__link ${styles.nav__link}`}>
          <span>Contact</span>
        </Link>
        <Link to="/about" className={`nav__link ${styles.nav__link}`}>
          <span>About</span>
        </Link>
        <a
          href="https://www.paypal.com"
          className={`nav__link ${styles.nav__link}`}
          target="_blank"
        >
          <span>Donate</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
