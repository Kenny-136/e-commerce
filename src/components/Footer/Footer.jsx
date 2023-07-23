import React from "react";
import styles from "./Footer.module.scss";
import { AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a href="https://github.com/Kenny-136/e-commerce">
				Check it out at Github
				<AiOutlineGithub />
			</a>
		</footer>
	);
};

export default Footer;
