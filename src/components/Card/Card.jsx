import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
const Card = ({ item }) => {
	const { name, desc, img, price, favorite, id } = item;
	return (
		<div className={styles.card}>
			<Link to={id}>
				<img src={img} alt={`a person wearing ${name}`} />
				<h2>{name}</h2>
				<div className={styles.priceWrap}>
					{favorite === true ? <h4>Best Seller</h4> : <h5></h5>}
					<h3>${price}</h3>
				</div>
			</Link>
		</div>
	);
};

export default Card;
