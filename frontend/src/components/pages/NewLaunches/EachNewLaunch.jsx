import React from "react";
import latest1 from "../../../assets/png/Latest1.png";

const EachNewLaunch = () => {
  return (
    <div
      className="w-[256px] h-[256px] bg-ds-blue rounded-ds-24
     border-2 border-solid border-ds-brand-primary 
     shadow-[-8px_8px_var(--color-ds-yellow)] flex flex-col justify-center items-center gap-ds-12 p-ds-24 cursor-pointer"
    >
      <h3 className="text-[22px] text-ds-brand-primary">
        Purr-fectly tasty, naturally healthy!
      </h3>
      <img src={latest1} alt="food-image" className="object-cover" />
    </div>
  );
};

export default EachNewLaunch;
