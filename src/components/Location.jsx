import React from 'react';

const Location = ({ onClick, location }) => {
  return (
    <div className="item" onClick={onClick}>
      <div className="itemData itemDataLocation">
        <h2>{location.name}</h2>
        <p><strong>Type: </strong>{location.type}</p>
        <p><strong>Dimension: </strong>{location.dimension}</p>
      </div>
    </div>
  )
};

export default Location;
