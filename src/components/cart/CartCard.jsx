import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartCard(props) {
    const handleRemoveFromCart = () => {
        const index = props.cart.indexOf(props.mug);
        const newCart = [...props.cart];
        newCart.splice(index, 1);
        props.setCart(newCart);
    };

    return (
        <>
            <div className="cartCard">
                <DeleteIcon
                    className="deleteIcon"
                    onClick={handleRemoveFromCart}
                />
                <img
                    className="cartImage"
                    src={props.mug.img_url}
                    alt={props.mug.title}
                />
                <p className="cartP">
                    {props.mug.title} - ${props.mug.price}{" "}
                </p>
            </div>
        </>
    );
}
