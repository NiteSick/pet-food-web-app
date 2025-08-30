import React from "react";
import Filter from "./Filter";

const ProductListing = () => {
  return (
    <div className="container bg-amber-100">
      <div className="w-full flex justify-end"> sort by</div>
      <div className="w-full flex">
        <div className="w-[246px] bg-pink-50 flex flex-col gap-ds-24">
          <Filter title={"Brand"} />
          <Filter title={"Price"} />
          <Filter title={"Weight"} />
          <Filter title={"In Stock"} />
          <Filter title={"Brand"} />
          <Filter title={"Brand"} />
          <Filter />
          <Filter />
          <Filter />
        </div>
        <div className="flex-1 bg-orange-50"></div>
      </div>
    </div>
  );
};

export default ProductListing;
