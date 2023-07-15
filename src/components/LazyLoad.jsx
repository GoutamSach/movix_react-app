import React from "react";
import LazyLoad from "react-lazy-load";

function LazyLoad(src) {
  return (
    <div>
      <LazyLoad>
        <img src={src} />
      </LazyLoad>
    </div>
  );
}

export default LazyLoad;
