import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./ShoppingCart.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import getCustomerData, {
	removeItemFromCartDB,
	addItemToCartDB,
} from "../../services/getCartData";

const ShoppingCart = ({ data }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		getCustomerData().then((data) => setCart(data.items));
	}, []);

	const removeBtn = (item) => {
		removeItemFromCartDB(item).then((data) => setCart(data.items));
	};

	const qtyChange = (e, item) => {
		const prevObj = cart.find(
			(cartItem) => cartItem.id === item.id && cartItem.size === item.size
		);
		const { id, name, img, price, size } = item;
		const qty = e.target.value;
		const newObj = { id, name, img, price, size, qty };
		console.log(prevObj.qty + " prev qty");
		console.log(e.target.value + " target value");
		console.log(newObj);
		removeItemFromCartDB(prevObj).then((data) => setCart(data.items));
		addItemToCartDB(newObj).then((data) => setCart(data.items));
	};

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
										<h2>Update Quantity:</h2>
										<select onChange={(e) => qtyChange(e, item)}>
											{[...Array(Number(item.qty))].map((_, i) => (
												<option key={i} value={i + 1}>
													{i + 1}
												</option>
											))}
										</select>
									</div>
									<h2>Total: ${item.qty * item.price}</h2>
								</div>
								<button
									className={styles.delete}
									title="Remove from Cart"
									onClick={() => removeBtn(item)}
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
