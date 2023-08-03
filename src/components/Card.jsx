import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.imageUrl} alt="" />
      </div>
      <p className="name">{props.name}</p>
      <button className="card-btn">detail</button>
    </div>
  );
}

export default Card;
