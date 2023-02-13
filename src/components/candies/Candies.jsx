import React from 'react';
import "./candies.css";
import MugCard from "./MugCard";

function MugsList(props) {
  return (
    <div className="mugs-list">
      {props.mugs.map(mug => (
        <MugCard key={mug.id} mug={mug} cart={props.cart} setCart={props.setCart} singleMug={props.singleMug} setMug={props.setMug}/>
      ))}
    </div>
  );
}

export default MugsList;
