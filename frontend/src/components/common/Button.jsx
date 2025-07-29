import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "large",
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  // Base styles for all buttons
  const baseStyles =
    "font-medium  transition-colors duration-200 rounded-ds-100 cursor-pointer disabled:opacity-50 cursor-not-allowed";

  // Variant styles
  const variantStyles = {
    primary: "bg-brand-primary  text-ds-white-100 ",
    secondary: "bg-brand-secondary text-white ",
  };

  // Size styles
  const sizeStyles = {
    small: "px-ds-12 py-ds-8 text-ds-14",
    large: "px-ds-16 py-ds-12 text-ds-16",
  };

  // Combine all styles
  const buttonClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
    ${className}
  `.trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
