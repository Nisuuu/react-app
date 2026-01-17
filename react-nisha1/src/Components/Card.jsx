import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button>Click Me</button>
    </div>
  );
};

export default Card;
