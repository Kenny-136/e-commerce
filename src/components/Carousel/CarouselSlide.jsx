import React from "react";
import styles from "./CarouselSlide.module.scss";
import { Link } from "react-router-dom";
const CarouselSlide = ({ data }) => {
	const img = data.img;
	return (
		<div className={styles.slide}>
			<Link to={`/store/${data.id}`}>
				<h2 className={styles.carouselTitle}>{data.name}</h2>
				<img src={data.img} alt="" />
			</Link>
		</div>
	);
};

export default CarouselSlide;
