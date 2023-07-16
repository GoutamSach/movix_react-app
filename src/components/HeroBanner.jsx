import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hook/UseFetch";
import { useSelector } from "react-redux";
import { stateForgetApiConfigForHomeSlice } from "../utils/homeSlice";
import Img from "../components/LazyImg";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import Typewriter from "react-ts-typewriter";

function HeroBanner() {
  const [bannerText, setBannerText] = useState("");

  const [bannerImage, setBannerImage] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const selector = useSelector(stateForgetApiConfigForHomeSlice);

  const { data, loading } = UseFetch("/movie/upcoming");
  useEffect(() => {
    const bg =
      selector.backdrop +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBannerImage(bg);
    // console.log(bg);
  }, [data]);

  const searchQuerySubmitButton = () => {
    if (query === "") {
    } else navigate(`/search/${query}`);
  };
  const searchQueryEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${query}`);
    } else;
  };

  return (
    <>
      <div className="  ">
        <div className="relative heroBanner lg:h-[700px] h-[400px] sm:h-[500px] md:h-[600px]  w-full -z-50 bg-[#04152d] -top-[120px] left-0">
          <div className="opacity-50 ">
            {!loading && <Img src={bannerImage} />}
          </div>
          <div className=" absolute  bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent from-10% to-[#04152d] to-75% "></div>
        </div>
        <ContentWrapper>
          <div className="relative  sm:-top-[430px] md:-top-[500px]  -top-[320px]">
            <div className=" text-white  justify-center  flex  items-center flex-col">
              <span className="sm:text-6xl text-5xl md:text-8xl pb-3  font-semibold  ">
                Welcome.
              </span>
              <p className=" sm:text-2xl  font-semibold pb-10 text-center sm:px-5 heroBannerLabel overflow-hidden md:text-3xl   ">
                <Typewriter
                  text="Millions of movies, TV shows and people to discover. Explore
                now."
                />
              </p>
            </div>

            <div className=" sm:text-lg md:text-xl cursor-pointer text-black flex flex-row items-center justify-center mx-5 ">
              <input
                className=" outline-none py-2.5 sm:py-4 md:py-5 rounded-l-full w-full px-5  max-w-3xl "
                type="text"
                onKeyDown={searchQueryEnter}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                placeholder="Search for a Movie or Tv show..."
              />
              <button
                className="text-white bg-gradient-to-r from-[#f79a04]  to-[#dc395e] hover:bg-gradient-to-br pr-8 md:py-5  cursor-pointer rounded-r-full md:pr-10 md:pl-12 pl-10 py-2.5 sm:py-4 text-center active:scale-95"
                type="submit"
                onClick={searchQuerySubmitButton}
              >
                Search
              </button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}

export default HeroBanner;
