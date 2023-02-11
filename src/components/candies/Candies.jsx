import React from 'react';
import "./candies.css";
import MugCard from "./MugCard";

function MugsList({ mugs }) {
  return (
    <div className="mugs-list">
      {mugs.map(mug => (
        <MugCard key={mug.id} mug={mug} />
      ))}
    </div>
  );
}

export default MugsList;
