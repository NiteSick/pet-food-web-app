import React from "react";
import EachNewLaunch from "./EachNewLaunch";

const NewLaunches = () => {
  return (
    <div className="container flex flex-col justify-center items-center gap-[80px]">
      <h1 className="text-[130px] font-bold text-ds-blue"> New Launches</h1>
      <div className="flex  gap-ds-16 flex-wrap">
        <EachNewLaunch />
        <EachNewLaunch />
        <EachNewLaunch />
        <EachNewLaunch />
        <EachNewLaunch />
        <EachNewLaunch />
        <EachNewLaunch />
        <EachNewLaunch />
      </div>
    </div>
  );
};

export default NewLaunches;
