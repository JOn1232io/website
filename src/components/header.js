import React, { useState } from "react";
import { Link } from "gatsby";

import "hamburgers/dist/hamburgers.min.css";
import styles from "./header.module.css";

const Header = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header>
      <a href="index.html" className={`name ${styles.name}`}>
        <h1>Project YCRO</h1>
      </a>
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
    // <header id="header" className={styles.header}>
    //   <button
    //     onClick={() => setActive(!isActive)}
    //     className={`hamburger hamburger--squeeze ${
    //       isActive ? "is-active" : ""
    //     } ${styles.hamburgerContainer}`}
    //     type="button"
    //   >
    //     <span className="hamburger-box">
    //       <span className={`hamburger-inner ${styles.hamburgerInner}`}></span>
    //     </span>
    //   </button>
    //   <nav className={`${styles.nav} ${isActive ? "block" : "hidden"}`}>
    //     <ul>
    //       <li>
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //         <Link to="/donate">Donate</Link>
    //       </li>
    //       <li className="font-bold">
    //         <Link to="/">Project YCRO</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Header;
