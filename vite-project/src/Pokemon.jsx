import React from 'react';

function Pokemon({ data }) {
  const { name, sprites, types, weight, height } = data;

  return (
    <div>
      <h2>{name.toUpperCase()}</h2>
      <img src={sprites.front_default} alt={name} />
      <p>
        <strong>Type:</strong> {types.map((type) => type.type.name).join(', ')}
      </p>
      <p>
        <strong>weight:</strong> {weight} lbs
      </p>
      <p>
        <strong>Height:</strong> {height} feet
      </p>
    </div>
  );
}

export default Pokemon;
