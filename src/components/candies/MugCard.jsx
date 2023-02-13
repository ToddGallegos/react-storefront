import React from "react";
import "./candies.css";

function MugCard(props) {
  
    const handleAddToCart = () => {
        const newCart = props.cart.concat([props.mug]);
        props.setCart(newCart);
    };

    return (
        <div className="card">
            <img className="main" src={props.mug.img_url} alt={props.mug.title} />
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
