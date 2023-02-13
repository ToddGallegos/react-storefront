import React from 'react';
import "./candies.css";
import MugCard from "./MugCard";

function MugsList(props) {
  return (
    <div className="mugs-list">
      {props.mugs.map(mug => (
        <MugCard key={mug.id} mug={mug} />
      ))}
    </div>
  );
}

export default MugsList;
