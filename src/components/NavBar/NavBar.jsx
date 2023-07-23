import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";
import { AiOutlineHome, AiOutlineShoppingCart } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
const NavBar = () => {
	return (
		<nav className={styles.nav}>
			<Link to={"/"}>
				<AiOutlineHome />
				Home
			</Link>
			<Link to={"/store"}>
				<BiStoreAlt />
				Store
			</Link>
			<Link to={"/cart"}>
				<AiOutlineShoppingCart />
				Cart
			</Link>
		</nav>
	);
};

export default NavBar;
