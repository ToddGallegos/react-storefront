import React from 'react';
import "./candies.css";

function MugCard({ mug }) {
  return (
    <div className="card">
      <img src={mug.img_url} alt={mug.title} />
      <h2>{mug.title}</h2>
      <p>{mug.caption}</p>
      <p>Price: ${mug.price}</p>
    </div>
  );
}

export default MugCard;