import React from "react";
import Button from "../../common/Button";
import WeightPill from "../WeightPill";
import StarIcon from "../../../assets/svg/ic_rating_star.svg";

const EachProduct = ({ productImage, rating, totalComments, price, types }) => {
  return (
    <div className="w-[264px] flex flex-col gap-ds-18 ">
      <div className="w-[264px] h-[264px] border-2 border-solid border-ds-brand-primary rounded-ds-24 relative">
        <img
          src={productImage}
          alt="product-image"
          className="w-full h-full object-cover"
        />
        <div className="absolute flex gap-ds-8">
          <span className="text-base font-normal">{rating}</span>
          <img src={StarIcon} alt="star-icon" />
          <span className="text-xs font-normal">{`(${totalComments})`}</span>
        </div>
        <div className="absolute"></div>
      </div>
      <div className="flex flex-col gap-ds-12">
        <p>Whiskas Adult Dry Cat Food -Ocean Fish Flavour (1+ Years)</p>
        <p>{price}</p>
        <div className="flex gap-ds-8 flex-wrap">
          {Array.isArray(types) &&
            types.map((item, index) => (
              <WeightPill value={item.value} key={index} />
            ))}
        </div>
      </div>
      <Button className="w-full">Add to Cart</Button>
    </div>
  );
};

export default EachProduct;
