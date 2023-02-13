import React from 'react';
import "./candies.css";

function MugCard({ mug }) {
  return (
    <div className="card">
      <img src={mug.img_url} alt={mug.title} />
      <h3>{mug.title}</h3>
      <hr />
      <p>Price: ${mug.price}</p>
    </div>
  );
}

export default MugCard;