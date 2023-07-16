import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src }) => (
  <div className=" ">
    <div className=" lg:h-[700px] h-[400px] sm:h-[500px] md:h-[600px]  w-full ">
      <LazyLoadImage
        alt="ImageWidth"
        src={src}
        // style={{
        //   objectFit: "cover",
        //   opacity: 0.5,
        //   overflow: "hidden",
        //   objectPosition: "center",
        // }}
        width="100%"
        height="100%"
        effect="blur"
      />
    </div>
  </div>
);

export default Img;
