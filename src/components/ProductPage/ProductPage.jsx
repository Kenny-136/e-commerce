import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJeansByID, getVariantsByID } from "../../services/getJeansData";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import styles from "./ProductPage.module.scss";
import { BsCartPlus } from "react-icons/bs";
import Footer from "../Footer/Footer";
const ProductPage = () => {
	const { id } = useParams();
	const [jean, setJean] = useState(null);
	const [variants, setVariants] = useState(null);
	const [error, setError] = useState(null);
	const [activeVariant, setActiveVariant] = useState(null);

	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem("cart")) || []
	);
	const handleChange = (e) => {
		const active = variants.filter((item) => item.id === e.target.value);
		setActiveVariant(active[0]);
	};
	const addToCart = () => {
		const { id, name, price, img } = jean;
		const size = activeVariant.id;
		const item = { id, name, price, size, img, qty: 1 };
		const same = cart.find(
			(cartItem) => cartItem.id === item.id && cartItem.size === item.size
		);

		if (same) {
			same.qty += 1;
			setCart([...cart]);
		} else {
			setCart([...cart, { ...item }]);
		}
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

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
						<h2>${jean.price}</h2>
						<h3>{jean.desc}</h3>
						{jean.favorite && <p>Our Best Selling Jeans!</p>}
						<section className={styles.sizeBar}>
							{variants && (
								<>
									<select onChange={(e) => handleChange(e)}>
										{variants.map((size) => (
											<option key={size.id} value={size.id}>
												Size: {size.id}
											</option>
										))}
									</select>
									<button type="button" onClick={addToCart}>
										<BsCartPlus />
										Add To Cart
									</button>
									{activeVariant && (
										<p>
											{activeVariant.qty} Stock of size {activeVariant.id} Left!
										</p>
									)}
								</>
							)}
						</section>
					</section>
				</section>
			)}
			{error && <h2>{error.message}</h2>}
		</main>
	);
};

export default ProductPage;
