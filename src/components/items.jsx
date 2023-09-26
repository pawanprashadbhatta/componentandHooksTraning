import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cardContainer">
      <img className="cardImage" src={data.image} />
      <p className="cardPrice">{data.price}</p>
      <p className="cardTitle">{data.title}</p>
      {/* <p className="cardDesc">{data.description}</p> */}
    </div>
  );
};

export default Card;