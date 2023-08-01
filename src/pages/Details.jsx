import React, { useEffect, useState } from "react";
import UseFetch from "../../src/hook/UseFetch";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateForgetApiConfigForHomeSlice } from "../utils/homeSlice";
import DetailsBanner from "./detailComps/DetailsBanner";
import OfficialVideo from "./detailComps/OfficialVideo";
import SimilarMovies from "./detailComps/SimilarMovies";

function Details() {
  const [renderStart, setRenderStart] = useState(false);
  const { id, mediaType } = useParams();
  const { data, error } = UseFetch(`/${mediaType}/${id}`);
  const selector = useSelector(stateForgetApiConfigForHomeSlice);
  const { data: credits } = UseFetch(`/${mediaType}/${id}/credits`);
  const { data: videos } = UseFetch(`/${mediaType}/${id}/videos`);
  const posterPath = selector.poster;

  // const imagURl = selector.backdrop + data.backdrop_path;
  // console.log(imagURl);
  useEffect(() => {
    if (mediaType === "movie" || "tv") {
      setRenderStart(true);
    }
    // const result = credits?.results;
    // console.log(renderStart);
    // console.log(data?.backdrop_path);
  }, [data]);

  return (
    <div className="">
      <div>
        <DetailsBanner credits={credits} videos={videos} />
        <OfficialVideo videos={videos} />
        <SimilarMovies />
      </div>
    </div>
  );
}

export default Details;
