import React, { useEffect } from "react";
import UseFetch from "../../hook/UseFetch";
import { useParams } from "react-router-dom";
import Img from "../../components/LazyImg";
import { useSelector } from "react-redux";
import posterFallBackImage from "../../image/no-poster.png";
import { stateForgetApiConfigForHomeSlice } from "../../utils/homeSlice";
import ContentWrapper from "../../components/ContentWrapper";
import ProgressBar from "../HomeComponents/ProgressBar";
import "./style.css";
import dayjs from "dayjs";

function DetailsBanner() {
  const { id, mediaType } = useParams();
  const selector = useSelector(stateForgetApiConfigForHomeSlice);
  const { data, loading } = UseFetch(`/${mediaType}/${id}`);

  useEffect(() => {
    const result = data?.results;
    // console.log(data);
  }, [data]);

  // $("#play-video").on("click", function (e) {
  //   e.preventDefault();
  //   $("#video-overlay").addClass("open");
  //   $("#video-overlay").append(
  //     '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>'
  //   );
  // });

  // $(".video-overlay, .video-overlay-close").on("click", function (e) {
  //   e.preventDefault();
  //   close_video();
  // });

  // $(document).keyup(function (e) {
  //   if (e.keyCode === 27) {
  //     close_video();
  //   }
  // });

  return (
    <div>
      {!loading ? (
        <>
          {!!data && (
            <>
              <div className="relative heroBanner lg:h-[700px] h-[400px] sm:h-[500px] md:h-[600px]  w-full -z-50 bg-[#04152d]  left-0">
                <div className="opacity-20 ">
                  <Img src={selector.backdrop + data?.backdrop_path} />
                </div>
                <div className=" absolute  bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent from-10% to-[#04152d] to-75% "></div>
              </div>
              <div className="bg-[#04152d]">
                <ContentWrapper>
                  <div className=" flex flex-row  justify-center  ">
                    <div className=" w-full h-screen -mt-[320px] sm:-top-[100px] relative ">
                      <div className="detailPosterImage       w-full h-3/4    rounded-2xl overflow-hidden   ">
                        {data.poster_path ? (
                          <Img src={selector.poster + data.poster_path} />
                        ) : (
                          <div className="">
                            <Img src={posterFallBackImage} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className="-mt-36  sm:-top-[305px] ml-2">
                      <h1 className=" text-white text-3xl ">
                        {data.original_title}
                      </h1>
                      <p className=" text-gray-500 text-sm font-semibold italic">
                        {data.tagline}
                      </p>
                      {data?.genres.map((item) => {
                        console.log(data);

                        return (
                          <div
                            key={item.id}
                            className=" text-white my-5  inline-block mr-1 space-x-3   bg-pink-600 rounded-md text-xs px-2 pb-0.5   "
                          >
                            {item.name}
                          </div>
                        );
                      })}
                      <div className=" flex    justify-start space-x-16 items-center">
                        <div className=" w-[50px]  flex-shrink pb-2 font-semibold progressBarForDetailPage  ">
                          <ProgressBar
                            value={Math.round(data?.vote_average * 10) / 10}
                            textColor={"white"}
                            trailColor={"transparent "}
                          />
                        </div>
                        <div className=" scale-[0.6]  ">
                          <a
                            id="play-video"
                            className="video-play-button"
                            href="#"
                          >
                            <span> </span>
                          </a>

                          <div id="video-overlay" className="video-overlay">
                            <a className="video-overlay-close">&times;</a>
                          </div>

                          <p className="text text-white pl-12 text-3xl -mt-4 ">
                            Watch Later
                          </p>
                        </div>
                      </div>
                      <div className=" text-white">
                        <h2 className=" text-xl">Overview</h2>
                        <p className=" text-sm py-2">{data?.overview}</p>
                      </div>
                      <div className=" text-white flex text-sm   ">
                        <div className=" basis-1/3">
                          <div className=" font-semibold">Status:</div>
                          <div className=" text-gray-500">{data?.status}</div>
                        </div>
                        <div className="basis-1/3">
                          <div className="font-semibold">Release Date:</div>
                          <div className="text-gray-500">
                            {data?.release_date}
                          </div>
                        </div>
                        <div className="basis-1/3">
                          <div className="font-semibold">Runtime:</div>
                          <div className="text-gray-500">{data?.runtime}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ContentWrapper>
              </div>
            </>
          )}
        </>
      ) : (
        <div className=""></div>
      )}
    </div>
  );
}

export default DetailsBanner;

// $("#play-video").on("click", function (e) {
//   e.preventDefault();
//   $("#video-overlay").addClass("open");
//   $("#video-overlay").append(
//     '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>'
//   );
// });

// $(".video-overlay, .video-overlay-close").on("click", function (e) {
//   e.preventDefault();
//   close_video();
// });

// $(document).keyup(function (e) {
//   if (e.keyCode === 27) {
//     close_video();
//   }
// });
