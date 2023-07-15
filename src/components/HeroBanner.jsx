import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hook/UseFetch";
import { useSelector } from "react-redux";
import { stateForgetApiConfigForHomeSlice } from "../utils/homeSlice";
import LazyLoad from "react-lazy-load";

function HeroBanner() {
  const [bannerImage, setBannerImage] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const selector = useSelector(stateForgetApiConfigForHomeSlice);

  const { data } = UseFetch("/movie/upcoming");
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
    <div className="">
      <div className="">
        <div className="">
          <span>Welcome</span>
          <span>
            Millions of movies, TV shows and people to discover. Explore Now.
          </span>
        </div>
        <div className="">
          <input
            type="text"
            onKeyDown={searchQueryEnter}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search for a Movie or Tv show..."
          />
          <button type="submit" onClick={searchQuerySubmitButton}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
