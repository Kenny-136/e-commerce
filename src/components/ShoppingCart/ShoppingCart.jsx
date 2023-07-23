import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./ShoppingCart.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons";
const ShoppingCart = () => {
	const [cart, setCart] = useState(
		JSON.parse(localStorage.getItem("cart")) || []
	);

	const incrementCart = (id, size) => {
		const same = cart.find(
			(cartItem) => cartItem.id === id && cartItem.size === size
		);
		same.qty += 1;
		setCart([...cart]);
	};

	const decrementCart = (id, size) => {
		const same = cart.find(
			(cartItem) => cartItem.id === id && cartItem.size === size
		);
		if (same.qty > 0) {
			same.qty -= 1;
		} else {
			same.qty = 0;
		}
		setCart([...cart]);
	};
	const removeFromCart = (i) => {
		cart.splice(i, 1);
		setCart([...cart]);
	};

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);
	return (
		<main>
			<NavBar />
			{cart.length === 0 ? (
				<>
					<h1>You Havent added anything on your cart</h1>
					<Link to="/store">Check out the Store</Link>
				</>
			) : (
				<section>
					{cart.map((item, i) => {
						return (
							<div className={styles.item} key={i}>
								<h1>{item.name}</h1>
								<h2>{item.price}</h2>
								<h2>Size: {item.size}</h2>
								<div className={styles.qtyBar}>
									<button onClick={() => decrementCart(item.id, item.size)}>
										-
									</button>
									<h2>Quantity: {item.qty}</h2>
									<button onClick={() => incrementCart(item.id, item.size)}>
										+
									</button>
								</div>
								<button onClick={() => removeFromCart(i)}>Remove Item</button>
							</div>
						);
					})}
				</section>
			)}
		</main>
	);
};

export default ShoppingCart;
