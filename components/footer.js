import { FiInstagram, FiFacebook } from "react-icons/fi"
import styles from "./footer.module.css"

const Footer = () => (
	<footer className={styles.footer}>
		<p className={styles.copyright}>&copy; 2020</p>
		<section className={styles.socials}>
			<a className={styles.link} href="https://www.facebook.com/projectycro/" target="_blank">
				<FiFacebook />
			</a>
			<a className={styles.link} href="https://www.instagram.com/projectycro/?hl=en" target="_blank">
				<FiInstagram />
			</a>
		</section>
	</footer>
)

export default Footer
