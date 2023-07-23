import { useEffect, useState } from "react";
import getJeansData from "./services/getJeansData";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductPage from "./components/ProductPage/ProductPage";
import StorePage from "./components/StorePage/StorePage";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
function App() {
	const [jeansData, setJeansData] = useState([]);

	useEffect(() => {
		getJeansData().then((data) => setJeansData(data));
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home data={jeansData} />}></Route>
					<Route path="/store" element={<StorePage data={jeansData} />}></Route>
					<Route path="/store/:id" element={<ProductPage />}></Route>
					<Route path="/cart" element={<ShoppingCart />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
