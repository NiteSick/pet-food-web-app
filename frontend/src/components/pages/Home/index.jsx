import React from "react";
import HeroScreen from "./HeroScreen";
import NewLaunches from "../NewLaunches";
import PopularItems from "./PopularItems";

const Home = () => {
  return (
    <div>
      <HeroScreen />
      <NewLaunches />
      <PopularItems />
    </div>
  );
};

export default Home;
