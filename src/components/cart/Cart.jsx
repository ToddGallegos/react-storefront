import React from "react";
import CartCard from "./CartCard";
import "./cart.css";

export default function Cart(props) {
    let total = 0;
    props.cart.map((mug) => {
        total += mug.price;
        return total;
    });

    const handleClearCart = () => {
      props.setCart([])
    }

    return (
        <div className="outerCart">
            <div className="cart-list">
                <h2 className="cartTitle">Your Cart:</h2>
                <hr className="cartHr" />
                {props.cart.map((mug, index) => (
                    <CartCard
                        key={index}
                        mug={mug}
                        cart={props.cart}
                        setCart={props.setCart}
                    />
                ))}
                <hr className="cartHr" />
                <h3 className="cartTotal">Total: ${total.toFixed(2)}</h3><button onClick={handleClearCart}className="clearCartButton">Clear Cart</button>
            </div>
        </div>
    );
}
