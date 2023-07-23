import React from "react";
import HeroBanner from "../components/HeroBanner";
import Trending from "./HomeComponents/Trending";

import Popular from "./HomeComponents/Popular";
import TopRated from "./HomeComponents/TopRated";

function Home() {
  return (
    <div className="">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}

export default Home;
