import React from "react";

const CardActivity = ({ title, text, image }) => {
  return (
    <div className="w-80 h-96 flex flex-col items-between gap-4 bg-white rounded-xl py-6 px-7 text-left">
      <h3 className="font-extrabold text-[26px] leading-7">{title}</h3>
      <p className="text-xs">{text}</p>
      {image && <img src={image} alt="fitur" className="w-full object-cover" />}
    </div>
  );
};

export default CardActivity;
