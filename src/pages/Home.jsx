import React from "react";
import HeroBanner from "../components/HeroBanner";
import Trending from "./HomeComponents/Trending";
import Toggle from "./HomeComponents/Toggle";

function Home() {
  return (
    <div className="">
      <HeroBanner />
      <Trending />
    </div>
  );
}

export default Home;
