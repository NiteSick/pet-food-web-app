import React from "react";
import { testProducts } from "../../../../data/testProducts";
import EachProduct from "../../../ProductListing/EachProduct";

const PopularItems = () => {
  return (
    <div className="container flex flex-col gap-ds-24 justify-center items-center">
      <h2>Most paw-pular!</h2>
      <div className="flex flex-wrap gap-x-ds-16 gap-y-ds-24 justify-center items-center">
        {testProducts.map((item, key) => (
          <EachProduct
            productImage={item.productImage}
            rating={item.rating}
            totalComments={item.totalComments}
            price={item.price}
            types={item.types}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
