import React, { useState } from "react";
import { Link } from "gatsby";

import "hamburgers/dist/hamburgers.min.css";
import styles from "./header.module.css";

const Header = () => {
  const [isActive, setActive] = useState(false);

  return (
    <header>
      <Link to="/" className={styles.name}>
        <h1>Project YCRO</h1>
      </Link>
      <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
        <button
          onClick={() => setActive(!isActive)}
          className={`hamburger ${styles.hamburger}`}
          type="button"
        >
          <div>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </div>
        </button>
        <Link to="/" className={styles.navLink}>
          <span>Home</span>
        </Link>
        <Link to="/contact" className={styles.navLink}>
          <span>Contact</span>
        </Link>
        <Link to="/about" className={styles.navLink}>
          <span>About</span>
        </Link>
        <a
          href="https://www.paypal.com"
          className={styles.navLink}
          target="_blank"
        >
          <span>Donate</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
