import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
	getJeansByID,
	getVariantsByID,
	updateFavoriteByID,
} from "../../services/getJeansData";
import NavBar from "../NavBar/NavBar";
import styles from "./ProductPage.module.scss";
import { BsCartPlus } from "react-icons/bs";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import getCustomerData from "../../services/getCartData";
import {
	addItemToCartDB,
	removeItemFromCartDB,
} from "../../services/getCartData";

const ProductPage = () => {
	const { id } = useParams();
	const [jean, setJean] = useState(null);
	const [variants, setVariants] = useState(null);
	const [fav, setFav] = useState(null);
	const [activeVariant, setActiveVariant] = useState(null);
	const [activeQty, setActiveQty] = useState(1);
	const [cart, setCart] = useState([]);
	const [error, setError] = useState(null);
	// Get Jeans Data from Services
	useEffect(() => {
		getJeansByID(id)
			.then((data) => {
				setJean(data);
				setFav(data.favorite);
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

	useEffect(() => {
		getCustomerData().then((data) => setCart(data.items));
	}, []);

	const favoriteFn = () => {
		// Give an opposite value of existing boolean
		const bool = !fav;
		updateFavoriteByID(id, bool).then((data) => setFav(data.favorite));
	};

	const handleVarChange = (e) => {
		const active = variants.filter((item) => item.id === e.target.value);
		setActiveVariant(active[0]);
	};
	const handleCartQtyChange = (e) => {
		setActiveQty(e.target.value);
	};

	const addToCart = () => {
		const { id, name, price, img } = jean;
		const size = activeVariant.id;
		const qty = Number(activeQty);
		const item = { id, name, price, size, img, qty };
		console.log(cart);
		console.log(item);
		const same = cart.find(
			(cartItem) => cartItem.id === item.id && cartItem.size === item.size
		);
		if (same) {
			removeItemFromCartDB(same).then((data) => setCart(data.items));
			addItemToCartDB(item).then((data) => setCart(data.items));
		} else {
			addItemToCartDB(item).then((data) => setCart(data.items));
		}
	};

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
						{fav ? (
							<>
								<p>Our Best Selling Jeans!</p>
							</>
						) : (
							<>
								<p>Make this jeans your favorite!</p>
							</>
						)}
						{fav ? (
							<button
								type="button"
								onClick={favoriteFn}
								className={styles.favBtn}
							>
								<MdFavorite />
							</button>
						) : (
							<button
								type="button"
								onClick={favoriteFn}
								className={styles.favBtn}
							>
								<MdFavoriteBorder />
							</button>
						)}
						<section className={styles.sizeBar}>
							{variants && (
								<>
									<select onChange={(e) => handleVarChange(e)}>
										{variants.map((size) => (
											<option key={size.id} value={size.id}>
												Size: {size.id}
											</option>
										))}
									</select>
									<div className={styles.qtyLine}>
										<p>Quantity</p>

										<select
											className={styles.qtySelect}
											onChange={(e) => handleCartQtyChange(e)}
										>
											{[...Array(activeVariant.qty)]
												.map((_, i) => i + 1)
												.map((i) => (
													<option key={i} value={i}>
														{i}
													</option>
												))}
										</select>
									</div>
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
