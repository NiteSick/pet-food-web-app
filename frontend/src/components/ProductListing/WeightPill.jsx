import React from "react";

const WeightPill = ({ value, active }) => {
  return (
    <div
      className={`w-fit border-1 border-solid border-ds-brand-primary rounded-[100px] px-ds-8 py-ds-4 font-normal text-sm  cursor-pointer ${
        active ? "bg-ds-blue" : ""
      }`}
    >
      {value}
    </div>
  );
};

export default WeightPill;
