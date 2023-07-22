import React from "react";
import Img from "../../components/LazyImg";
import UseFetch from "../../hook/UseFetch";
import ProgressBar from "./ProgressBar";

function Carasoul({ src, value, title, date, geners }) {
  const { data, loading } = UseFetch();
  return (
    <div>
      <div className=" relative">
        <div className=" absolute z-10 bottom-4 right-4   md:inline-block  text-white ">
          {geners}
        </div>
        <div className=" cursor-pointer w-32 h-48  md:w-56  md:h-80 rounded-xl    overflow-hidden   mb-5 ">
          {!loading && <Img src={src} />}
        </div>

        <div className=" absolute cursor-pointer   md:-bottom-4 left-2  -bottom-3">
          <ProgressBar value={value} />
        </div>
      </div>
      <h3 className=" cursor-pointer text-white text-md md:text-xl w-32 md:w-56 line-clamp-1 overflow-hidden font-semibold ">
        {title}
      </h3>
      <p className=" cursor-pointer text-gray-400 font-semibold text-[13px] my-2 ">
        {date}
      </p>
    </div>
  );
}

export default Carasoul;
