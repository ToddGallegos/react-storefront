import React from "react";
import "./mug.css";
import { Link } from "react-router-dom";

export default function Mug(props) {
    const handleAddToCartFromSingle = () => {
        const newCart = props.cart.concat([props.singleMug]);
        props.setCart(newCart);
    };

    return (
        <div className="productView">
            <img
                className="productImage"
                src={props.singleMug.img_url}
                alt={props.singleMug.title}
            />
            <div className="productInfo">
                <h2 className="productTitle">{props.singleMug.title}</h2>
                <p className="productPescription">{props.singleMug.caption}</p>
                <p className="productPrice">Price: ${props.singleMug.price}</p>
                <button
                    className="addToCart"
                    onClick={handleAddToCartFromSingle}>
                    Add to Cart
                </button>
                <Link to="/">
                    <button className="addToCart">Keep Shopping</button>
                </Link>
            </div>
        </div>
    );
}
