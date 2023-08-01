import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
// import SearchResults from "./pages/HomeComponents/search/SearchResults";
import Explore from "./pages/Explore";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getApiConfigForHomeSlice,
  stateForgetApiConfigForHomeSlice,
} from "./utils/homeSlice";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTest();
  }, []);
  const dispatch = useDispatch();
  const selector = useSelector(stateForgetApiConfigForHomeSlice);

  const apiTest = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res.images.base_url + "original",
        poster: res.images.base_url + "original",
        profile: res.images.base_url + "original",
      };
      dispatch(getApiConfigForHomeSlice(url));
      // console.log(res);
    });
  };

  return (
    <>
      <div className="no-scrollbar">
        {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/:mediaType/:id" element={<Details />} />

          {/* <Route exact path="/search/:query" element={<SearchResults />} /> */}

          <Route exact path="/explore/:mediaType" element={<Explore />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        {/* </BrowserRouter> */}
      </div>
    </>
  );
}

export default App;
