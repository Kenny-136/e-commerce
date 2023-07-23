import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./ShoppingCart.module.scss";
import { Link } from "react-router-dom";
import {
	AiOutlinePlusCircle,
	AiOutlineMinusCircle,
	AiOutlineDelete,
} from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import Footer from "../Footer/Footer";
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
					<h2>Shopping Cart: </h2>
					{cart.map((item, i) => {
						return (
							<div className={styles.item} key={i}>
								<img src={item.img} alt="" />
								<div className={styles.rightContainer}>
									<h1>{item.name}</h1>
									<h2>${item.price}</h2>
									<h2>Size: {item.size}</h2>
									<div className={styles.qtyBar}>
										<button onClick={() => decrementCart(item.id, item.size)}>
											<AiOutlineMinusCircle />
										</button>
										<h2>Quantity: {item.qty}</h2>
										<button onClick={() => incrementCart(item.id, item.size)}>
											<AiOutlinePlusCircle />
										</button>
									</div>
									<h2>Total: ${item.qty * item.price}</h2>
								</div>
								<button
									className={styles.delete}
									onClick={() => removeFromCart(i)}
									title="Remove from Cart"
								>
									<AiOutlineDelete />
								</button>
							</div>
						);
					})}
					<div>
						<h2 className={styles.checkout}>
							Total:{" $"}
							{cart.length > 0
								? cart
										.reduce(
											(result, item) => (result += item.price * item.qty),
											0
										)
										.toFixed(2)
								: 0}
						</h2>
						<button className={styles.checkoutBtn}>
							<p>Checkout</p>
							<MdOutlineShoppingCartCheckout />
						</button>
					</div>
				</section>
			)}
		</main>
	);
};

export default ShoppingCart;
