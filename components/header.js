import React, { useState } from "react"
import Link from "next/link"

import Logo from "../assets/images/brand/mask.svg"
import styles from "./header.module.css"

const Header = () => {
	const [isActive, setActive] = useState(false)

	return (
		<header className={styles.header}>
			<Link href="/">
				<a href="/" className={styles.name}>
					<img
						className={styles.logo}
						src={Logo}
						alt="Logo"
						style={{ transform: "translateY(-2.5px)", marginRight: "1rem", width: "3rem" }}
					/>
					<h1>Project YCRO</h1>
				</a>
			</Link>
			<nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
				<button
					className={styles.hamburger}
					type="button"
					onClick={() => {
						setActive(!isActive)
					}}>
					<div className={styles.hamburger__lines}>
						<span className={styles.hamburger__line}></span>
						<span className={styles.hamburger__line}></span>
						<span className={styles.hamburger__line}></span>
					</div>
				</button>

				<Link href="/">
					<a href="/" className={styles.nav__link}>
						<span>Home</span>
					</a>
				</Link>
				<Link href="/ppe-request">
					<a href="/ppe-request" className={styles.nav__link}>
						<span>Request PPE</span>
					</a>
				</Link>
				<Link href="/ppe-donate">
					<a href="/ppe-donate" className={styles.nav__link}>
						<span>Donate PPE</span>
					</a>
				</Link>
				<Link href="/contact">
					<a href="/contact" className={styles.nav__link}>
						<span>Contact</span>
					</a>
				</Link>
				<Link href="/about">
					<a href="/about" className={styles.nav__link}>
						<span>About</span>
					</a>
				</Link>
			</nav>
		</header>
	)
}

export default Header
