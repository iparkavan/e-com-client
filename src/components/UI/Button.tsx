import React from "react";

interface buttonProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<buttonProps> = ({
  children,
  className,
  color,
  onClick,
  type,
  ...props
}) => {
  return (
    <button
      className={`${
        color ? `bg-${color}` : "theme-gradient"
      } px-4  text-white py-3 rounded-xl drop-shadow-md active:drop-shadow-xl transition-all duration-150 active:ring-2 ${
        color ? `ring-${color}` : "ring-blue-500"
      } ring-offset-1 transition-all ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
