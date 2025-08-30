import React from "react";

const Filter = ({ title, children }) => {
  return (
    <div className="w-full flex flex-col gap-ds-12 justify-center items-center rounded-ds-16 border-2 border-ds-pink-100 p-ds-32">
      <h1 className="w-fit">{title}</h1>
      {children}
    </div>
  );
};

export default Filter;
