import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
function HomeScreen(props) {
	const{products, setProducts}=useState([]);

	useEffect(() => {
		const fetchData=async () =>{
			axios.interceptors.request.use(function (config) {
				// Do something before request is sent
				console.log(config)
				return config;
			  }, function (error) {
				// Do something with request error
				return Promise.reject(error);
			  });
			const {data}=await axios.get("/api/products");
			console.log(data)
			setProducts(data);
		}
		fetchData();
		return () => {	
		}
	}, [])

	return (
		<ul className="products">
			{
			products.map((product) => (
				<li>
					<div className="product">
						<Link to={"/product/" + product._id}>
							<img
								className="product-image"
								src={product.image}
								alt="product"
							/>
						</Link>
						
						<div className="product-content">
							<div className="product-name">
								<Link to={"/product/" + product._id}>{product.name}</Link>
							</div>
							<div className="product-brand">{product.brand}</div>
							<div className="product-price">{product.price}</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}

export default HomeScreen;
