import React from "react";

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseClass = "flex justify-center items-center px-6 py-2 font-semibold rounded-xl shadow-md text-sm";
  const variants = {
    primary: "border-2",
    secondary: "gap-2 bg-white text-primaryColor",
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
