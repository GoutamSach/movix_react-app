// const TMDB_TOKEN = `${import.meta.env.VITE_APP_TMDB_TOKEN}`;
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization: "Bearer" + TMDB_TOKEN,
//   },
// };

// export default async function fetchDataFromApi(url) {
//   try {
//     const dataFromApi = await fetch(
//       `https://api.themoviedb.org/3/${url}?language=en-US&page=1`,
//       options
//     );
//     const dataFromApiJson = await dataFromApi.json();
//     console.log(dataFromApiJson);
//     return dataFromApiJson;
//   } catch {
//     (err) => console.error(err);
//   }
// }

// import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// const headers = {
//   Authorization: "bearer" + TMDB_TOKEN,
// };

// export const fetchDataFromApi = async (url, params) => {
//   try {
//     const { data } = await axios.get(BASE_URL + url, { headers, params });
//     return data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// };

import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
