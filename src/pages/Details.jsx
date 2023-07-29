import React, { useEffect } from "react";
import UseFetch from "../../src/hook/UseFetch";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { stateForgetApiConfigForHomeSlice } from "../utils/homeSlice";
import DetailsBanner from "./detailComps/DetailsBanner";

function Details() {
  const { id, mediaType } = useParams();
  const { data } = UseFetch(`/${mediaType}/${id}`);
  const selector = useSelector(stateForgetApiConfigForHomeSlice);

  // const imagURl = selector.backdrop + data.backdrop_path;
  // console.log(imagURl);
  // useEffect(() => {
  // const result = data?.results;
  // console.log(selector.backdrop);
  // console.log(data?.backdrop_path);
  // }, [data]);

  return (
    <div>
      <div className="">
        <DetailsBanner />
      </div>
    </div>
  );
}

export default Details;
