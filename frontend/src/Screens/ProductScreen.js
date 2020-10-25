import React,{useEffect} from "react";
import data from '../data';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {detailsProduct} from "../actions/productActions";

function ProductScreen(props) {
    const productDetails=useSelector(state => state.productDetails);
    const {product , loading, error } = productDetails;
    const dispatch=useDispatch;

    useEffect(() => {
         dispatch(detailsProduct());
        return () => {
        }
    }, [])
    return <div>
        
        <div className="BTH">
            <Link to="/"><button>Back to Homepage</button></Link>
        </div>
        
        {loading? <div> Loading </div>:
        error? <div> {error} </div> :
        (
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        <b>Price:</b> {product.price}
                    </li>
                    <li>
                        <b> Brand: </b>{product.brand}
                    </li>
                    <li>
                        <b>Description:</b> 
                        <div>
                            {product.description}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Quantity: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                    </li>
                    <li>
                        <button className = "button"> Add to Cart </button>
                    </li>
                </ul>

            </div>
        </div>
        )}
    </div>
}

export default ProductScreen;
