import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import LandingPage from "./Screens/LandingPage";
import CartScreen from './Screens/CartScreen'

function App() {
	const openMenu = () => {
		document.querySelector(".sidebar").classList.add("open");
	};
	const closeMenu = () => {
		document.querySelector(".sidebar").classList.remove("open");
	};
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="header">
					<div className="brand">
						<button onClick={openMenu}>&#9776;</button>
						<Link to="/"> YARNER </Link>
					</div><div className="header-links">
						<a href="cart.html">Cart</a>
						<a href="signin.html">Sign In</a>
					</div>
				</header>
				<aside className="sidebar">
					<h3>Belting Catagories</h3>
					<button className="sidebar-close-button" onClick={closeMenu}>
						x
					</button>
					<ul>
						<li>
							<a href="index.html">Wrap Construction Belts</a>
						</li>

						<li>
							<a href="index.html">Banded Belts</a>
						</li>

						<li>
							<a href="index.html">Special Construction Belts</a>
						</li>
					</ul>
				</aside>
				<main className="main">
					<div className="content">
						<Route path="/product/:id" component={ProductScreen} />
						<Route path="/home" component={HomeScreen} />
						<Route path="/" exact={true} component={LandingPage} />

					</div>
					<footer className="footer">All rights reserved</footer>
				</main>
			</div>
		</BrowserRouter>
	);
}
export default App;
