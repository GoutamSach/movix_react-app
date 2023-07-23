import React from "react";
import UseFetch from "../../src/hook/UseFetch";
import { useParams } from "react-router-dom";

function Details() {
  const { id, mediaType } = useParams();
  const { data } = UseFetch(`/${mediaType}/${id}`);

  console.log(data);
  return <div></div>;
}

export default Details;
