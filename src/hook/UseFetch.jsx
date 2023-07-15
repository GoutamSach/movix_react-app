import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setloading("Loading");

    fetchDataFromApi(url)
      .then((res) => {
        setData(res);
        // console.log(res);
        setloading(null);
      })
      .catch((err) => {
        setError("Something Went Wrong");
        setloading(null);
      });
  }, [url]);

  return { data, loading, error };
}

export default UseFetch;
