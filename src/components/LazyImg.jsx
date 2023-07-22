import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, visibleByDefault }) => (
  <div className=" ">
    <div className=" lg:h-[700px] h-[400px] sm:h-[500px] md:h-[600px]  w-full ">
      <LazyLoadImage
        alt="ImageWidth"
        src={src}
        width="100%"
        height="100%"
        effect="blur"
        visibleByDefault={visibleByDefault}
      />
    </div>
  </div>
);

export default Img;
