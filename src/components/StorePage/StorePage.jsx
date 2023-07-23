import React from "react";
import NavBar from "../NavBar/NavBar";
import ProductList from "../ProductList/ProductList";
import styles from "./StorePage.module.scss";
const StorePage = ({ data }) => {
	return (
		<main>
			<NavBar />
			<section className={styles.wrapper}>
				<h2>Free Alterations!</h2>
				<h3>
					Get your perfect length jeans or pants! Ask about our alterations
					service in-store.
				</h3>
				<ProductList data={data} />
			</section>
		</main>
	);
};

export default StorePage;
