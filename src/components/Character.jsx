import React from 'react';

const Character = ({ onClick, character }) => {
  return (
    <div className="item" onClick={onClick}>
      <div className="itemData">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p><strong>Species: </strong>{character.species}</p>
        <p><strong>Gender: </strong>{character.gender}</p>
        <p><strong>Status: </strong>{character.status}</p>
        <p><strong>Origin: </strong>{character.origin.name}</p>
        <p><strong>Location: </strong>{character.location.name}</p>
      </div>
    </div>
  )
};

export default Character;