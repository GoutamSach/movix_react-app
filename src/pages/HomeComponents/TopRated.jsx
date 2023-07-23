import React, { useEffect, useRef, useState } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import Toggle from "./Toggle";
import UseFetch from "../../hook/UseFetch";
import Carasoul from "./Carasoul";
import { stateForgetApiConfigForHomeSlice } from "../../utils/homeSlice";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

function TopRated() {
  const [stateFromToggle, setStateFromToggle] = useState("movie");
  const selector = useSelector(stateForgetApiConfigForHomeSlice);
  const { data } = UseFetch(`/${stateFromToggle}/top_rated`);
  const scrollForPC = useRef();
  const naviagte = useNavigate();
  const posterPath = selector.poster;

  useEffect(() => {
    const result = data?.results;
    // console.log(result);
    // console.log(data);
  }, [data]);

  const movieGeners = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  function xyz(shiftRight) {
    if (shiftRight === false) {
      setStateFromToggle("movie");
    } else setStateFromToggle("tv");
  }
  const navigation = (direction) => {
    const position = scrollForPC.current;

    const scrollposition =
      direction === "left"
        ? position.scrollLeft - position.offsetWidth + 6
        : position.scrollLeft + position.offsetWidth + 6;

    position.scrollTo({
      left: scrollposition,

      behavior: "smooth",
    });
  };

  return (
    <div
      className="  
    relative bg-[#04152d]"
    >
      <ContentWrapper>
        <div className="">
          <div className="flex justify-between items-center  py-5 ">
            <h1 className=" md:text-3xl text-2xl  text-white">Top Rated</h1>
            <div className="">
              <Toggle
                xyz={xyz}
                left={`Movie\u00A0\u00A0\u00A0`}
                right={"TV  Shows "}
              />
            </div>
          </div>
        </div>

        <div
          ref={scrollForPC}
          className="flex flex-row    overflow-y-hidden overflow-x-scroll   scroll-smooth  "
        >
          {data?.results.map((item) => {
            const posterURL = posterPath + item.poster_path;
            const rating = Math.round(item.vote_average * 10) / 10;
            const date = dayjs(item.release_date || item.first_air_date).format(
              "MMM D, YYYY"
            );
            const geners = movieGeners[item.genre_ids[0]];

            // console.log("here is the data of " + geners);
            return (
              <div
                onClick={() => naviagte(stateFromToggle + "/" + item.id)}
                key={item.id}
                className=""
              >
                <Carasoul
                  src={posterURL}
                  key={item.id}
                  value={rating}
                  title={item.original_title}
                  date={date}
                  geners={geners}
                />
              </div>
            );
          })}
        </div>
        <div className=" relative flex justify-between items-center">
          <div className="  relative  hover:scale-110 bottom-[275px]  bg-black hidden md:inline-block rounded-full bg-opacity-30  left-8      ">
            <IconButton onClick={() => navigation("left")}>
              <WestIcon className=" text-white" />
            </IconButton>
          </div>
          <div className="  relative hover:scale-110 bottom-[275px]  bg-black hidden md:inline-block rounded-full bg-opacity-30 right-8     ">
            <IconButton onClick={() => navigation("right")}>
              <EastIcon className=" text-white" />
            </IconButton>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default TopRated;
