import React from "react";

const Card = ({ image, text }) => {
  return (
    <div className="w-56 flex flex-col items-center gap-6">
      {image && <img src={image} alt="fitur" className="w-36 object-cover" />}
      <h3 className="font-bold">{text}</h3>
    </div>
  );
};

export default Card;
