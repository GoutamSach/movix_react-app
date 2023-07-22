import React, { useEffect, useState } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import Toggle from "./Toggle";
import UseFetch from "../../hook/UseFetch";
import Carasoul from "./Carasoul";
import { stateForgetApiConfigForHomeSlice } from "../../utils/homeSlice";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

function Trending() {
  const [stateFromToggle, setStateFromToggle] = useState("day");
  const selector = useSelector(stateForgetApiConfigForHomeSlice);
  const { data, loading } = UseFetch(`/trending/movie/${stateFromToggle}`);
  const [urlforPoster, setUrlForPoster] = useState();
  const posterPath = selector.poster;

  useEffect(() => {
    const result = data?.results;
    console.log(result);
  }, [data]);

  // const movieGeners = [
  //   { id: 28, name: "Action" },
  //   { id: 12, name: "Adventure" },
  //   { id: 16, name: "Animation" },
  //   { id: 35, name: "Comedy" },
  //   { id: 80, name: "Crime" },
  //   { id: 99, name: "Documentary" },
  //   { id: 18, name: "Drama" },
  //   { id: 10751, name: "Family" },
  //   { id: 14, name: "Fantasy" },
  //   { id: 36, name: "History" },
  //   { id: 27, name: "Horror" },
  //   { id: 10402, name: "Music" },
  //   { id: 9648, name: "Mystery" },
  //   { id: 10749, name: "Romance" },
  //   { id: 878, name: "Science Fiction" },
  //   { id: 10770, name: "TV Movie" },
  //   { id: 53, name: "Thriller" },
  //   { id: 10752, name: "War" },
  //   { id: 37, name: "Western" },
  // ];
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
      setStateFromToggle("day");
    } else setStateFromToggle("week");
  }

  return (
    <div
      className="  
    relative bg-[#04152d]"
    >
      <ContentWrapper>
        <div className="">
          <div className="-mt-[195px] sm:-mt-[240px] md:-mt-[290px] flex justify-between pb-5 ">
            <h1 className=" md:text-3xl text-2xl text-white">Trending</h1>

            <Toggle xyz={xyz} />
          </div>
        </div>
        <div className="flex flex-row space-x-3 md:space-x-7  overflow-y-hidden overflow-x-scroll   scroll-smooth  ">
          {data?.results.map((item) => {
            const posterURL = posterPath + item.poster_path;
            const rating = Math.round(item.vote_average * 10) / 10;
            const date = dayjs(item.release_date || item.first_air_date).format(
              "MMM D, YYYY"
            );
            const geners = movieGeners[12];
            console.log("here is the data of " + geners);
            return (
              <Carasoul
                src={posterURL}
                key={posterURL}
                value={rating}
                title={item.original_title}
                date={date}
                // geners={geners}
              />
            );
          })}
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Trending;
