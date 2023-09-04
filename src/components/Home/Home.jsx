import React from "react";
import NavBar from "../NavBar/NavBar";
import Carousel from "../Carousel/Carousel";
import styles from "./Home.module.scss";
import Footer from "../Footer/Footer";
const Home = ({ data }) => {
	const favourite = data.filter((jean) => jean.favorite === true);

	return (
		<>
			<NavBar />
			<main className={styles.home}>
				<header className={styles.header}>
					<h1>billie jean</h1>
					<h2>Michael J favourite denims</h2>
				</header>
				<Carousel data={favourite} />
			</main>
			<Footer />
		</>
	);
};

export default Home;
