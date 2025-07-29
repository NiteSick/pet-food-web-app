import React from "react";

const Input = ({
  label = "",
  value = "",
  onChange,
  placeholder = "",
  type = "text",
  id,
  className = "",
  required = false,
  disabled = false,
  ...rest
}) => {
  return (
    <fieldset
      className={`border border-solid border-brand-primary rounded-ds-100 h-[56px] flex items-center justify-items-start  ${
        disabled ? "opacity-50" : ""
      } ${className}`}
    >
      <legend className="text-xs text-brand-primary px-ds-4 font-normal ml-ds-8">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </legend>
      <input
        className="w-full bg-transparent outline-none mt-ds-6 px-ds-12 text-base font-normal placeholder:text-ds-gray-100 disabled:cursor-not-allowed "
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        id={id}
        required={required}
        disabled={disabled}
        {...rest}
      />
    </fieldset>
  );
};

export default Input;
