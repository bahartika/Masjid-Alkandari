import React from "react";

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseClass = "px-6 py-3 font-semibold rounded-lg shadow";
  const variants = {
    primary: "border-2",
    secondary: "flex gap-2 bg-white text-primaryColor",
    link: "text-customGreen underline hover:text-green-700",
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
