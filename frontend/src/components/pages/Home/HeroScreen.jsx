import React from "react";
import dogFood from "../../../assets/png/HeroScreenQuickLink.png";
import bannerImage from "../../../assets/png/hero-section-banner.jpg";

const HeroScreen = () => {
  const QuickLink = [
    { name: "Dog Food", image: dogFood },
    { name: "Cat Food", image: dogFood },
    { name: "Treats", image: dogFood },
    { name: "Toys", image: dogFood },
    { name: "Pharmacy", image: dogFood },
  ];
  return (
    <div className="container flex flex-col justify-center items-center gap-[80px]">
      <div className="flex gap-ds-32">
        {QuickLink.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-ds-8">
            <div className=" flex w-[100px] h-[100px] border-2 border-solid border-ds-blue rounded-full cursor-pointer">
              <img
                src={item.image}
                alt={"product-images"}
                className="w-full h-full object-cover rounded-full "
              />
            </div>

            <p className="text-ds-brand-primary font-semibold text-lg">
              {item.name}
            </p>
          </div>
        ))}
        <div></div>
      </div>
      <div className="border-2 border-solid border-ds-green rounded-ds-24 h-[428px] ">
        <img
          src={bannerImage}
          alt="hero-screen-banner"
          className="w-full h-full rounded-ds-24 object-cover"
        />
      </div>
    </div>
  );
};

export default HeroScreen;
