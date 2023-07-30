import React, { useEffect } from "react";
import UseFetch from "../../src/hook/UseFetch";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateForgetApiConfigForHomeSlice } from "../utils/homeSlice";
import DetailsBanner from "./detailComps/DetailsBanner";
import OfficialVideo from "./detailComps/OfficialVideo";
function Details() {
  const { id, mediaType } = useParams();
  const { data } = UseFetch(`/${mediaType}/${id}`);
  const selector = useSelector(stateForgetApiConfigForHomeSlice);
  const { data: credits } = UseFetch(`/${mediaType}/${id}/credits`);
  const posterPath = selector.poster;

  // const imagURl = selector.backdrop + data.backdrop_path;
  // console.log(imagURl);
  useEffect(() => {
    const result = credits?.results;
    console.log(credits);
    // console.log(data?.backdrop_path);
  }, [data]);

  return (
    <div>
      <DetailsBanner credits={credits} />
      <OfficialVideo />
      <Similar />
      <Recommendation />
    </div>
  );
}

export default Details;
