import React from "react";
import { Link } from "react-router-dom";

const CartModal = () => {
	return (
		<dialog>
			<div>1 ITEM ADDED TO YOUR CART</div>
			<Link to="/Cart"></Link>
			<button>CONTINUE SHOPPING</button>
		</dialog>
	);
};

export default CartModal;
