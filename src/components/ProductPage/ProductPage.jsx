import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJeansByID, getVariantsByID } from "../../services/getJeansData";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
	const { id } = useParams();
	const [jean, setJean] = useState(null);
	const [variants, setVariants] = useState(null);
	const [error, setError] = useState(null);
	const [activeVariant, setActiveVariant] = useState();

	const [items, setItems] = useState(
		JSON.parse(localStorage.getItem("items")) || []
	);
	const handleChange = (e) => {
		console.log(e.target.value);
		const active = variants.filter((item) => item.id === e.target.value);
		setActiveVariant(active);
	};
	const addToCart = () => {
		setItems([...items, { jean, activeVariant }]);
	};

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
		console.log(`Saved ${items.length} items to localstorage`);
	}, [items]);

	// Get Jeans Data from Services
	useEffect(() => {
		getJeansByID(id)
			.then((data) => {
				setJean(data);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(
				getVariantsByID(id).then((data) => {
					setVariants(data);
					setActiveVariant(data[0]);
				})
			);
	}, []);

	return (
		<main>
			<NavBar />
			{jean && (
				<section className={styles.wrapper}>
					<aside>
						<img src={jean.img} alt="" />
					</aside>
					<section className={styles.rightContainer}>
						<h1>{jean.name}</h1>
						<p>{jean.desc}</p>
						<section className={styles.sizeBar}>
							{variants && (
								<select onChange={(e) => handleChange(e)}>
									{variants.map((size) => (
										<option key={size.id} value={size.id}>
											Size: {size.id}
										</option>
									))}
								</select>
							)}
							<button type="button" onClick={addToCart}>
								Add To Cart
							</button>
							{/* {activeVariant && <p></p>} */}
						</section>
					</section>
				</section>
			)}
			{error && <h2>{error.message}</h2>}
		</main>
	);
};

export default ProductPage;
