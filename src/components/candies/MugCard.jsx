import React from "react";
import "./candies.css";
import { Link } from 'react-router-dom';

function MugCard(props) {
  
    const handleAddToCart = () => {
        const newCart = props.cart.concat([props.mug]);
        props.setCart(newCart);
    };

    const handleViewMug = () => {
        const newMug = props.mug;
        props.setMug(newMug)
    }

    return (
        <div className="card">
            <Link onClick={handleViewMug} className="mugCardLink" to="/mug"><img className="main" src={props.mug.img_url} alt={props.mug.title} /></Link>
            <h3 className="main">{props.mug.title}</h3>
            <hr  className="main"/>
            <p className="main">Price: ${props.mug.price}</p>
            <div className="cardButtonDiv">
                <button className="main" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default MugCard;
