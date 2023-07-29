import React from "react";
import Img from "../../components/LazyImg";
import UseFetch from "../../hook/UseFetch";
import ProgressBar from "./ProgressBar";

function Carasoul({ src, value, title, date, geners }) {
  const { data, loading } = UseFetch();
  return (
    <div>
      <div className=" relative">
        <div className=" absolute z-10 bottom-4 right-4 hidden    md:inline-block  text-white  bg-pink-600 rounded-md  text-sm px-2 pb-0.5">
          {geners}
        </div>
        <div className=" cursor-pointer w-32 h-48   md:w-56 mx-3.5  md:h-80 rounded-xl    overflow-hidden bg-white  mb-5 ">
          {!loading && <Img src={src} />}
        </div>

        <div className=" absolute cursor-pointer   md:-bottom-4 left-6   -bottom-3">
          {!loading && (
            <div className=" font-semibold  txtBlack p-0.5 md:w-12 md:h-12 w-8 h-8 bg-white rounded-full ">
              <ProgressBar
                value={value}
                textColor={"black"}
                trailColor={"white"}
              />
            </div>
          )}
        </div>
      </div>
      <h3 className=" cursor-pointer text-white text-md md:text-xl w-32 md:w-56 line-clamp-1  overflow-hidden font-semibold ml-5 ">
        {title}
      </h3>
      <p className=" cursor-pointer text-gray-400 font-semibold text-[13px] ml-5 my-2 ">
        {date}
      </p>
    </div>
  );
}

export default Carasoul;
