import React, { useEffect } from "react";
import UseFetch from "../../hook/UseFetch";
import { useParams } from "react-router-dom";
import Img from "../../components/LazyImg";
import { useSelector } from "react-redux";
import posterFallBackImage from "../../image/no-poster.png";
import { stateForgetApiConfigForHomeSlice } from "../../utils/homeSlice";
import ContentWrapper from "../../components/ContentWrapper";
import ProgressBar from "../HomeComponents/ProgressBar";
import "./videoplaybuttonstyle.css";
import dayjs from "dayjs";

import { useState } from "react";
import VideoPopup from "./videopopup/VideoPopup";

function DetailsBanner({ credits, videos }) {
  const [videoShow, setvideoShow] = useState(false);
  const [videoId, setvideoId] = useState(null);
  const { id, mediaType } = useParams();
  const selector = useSelector(stateForgetApiConfigForHomeSlice);
  const { data, loading, error } = UseFetch(`/${mediaType}/${id}`);

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div>
      {!loading && !error ? (
        <>
          {data && (
            <>
              <div className="relative heroBanner lg:h-[700px] h-[400px] sm:h-[500px] md:h-[600px]  w-full -z-50 bg-[#04152d]  left-0">
                <div className="opacity-20 ">
                  <Img src={selector.backdrop + data?.backdrop_path} />
                </div>
                <div className=" absolute  bottom-0 left-0 w-full h-56 bg-gradient-to-b from-transparent from-10% to-[#04152d] to-75% "></div>
              </div>
              <div className="bg-[#04152d] ">
                <ContentWrapper>
                  <div className=" md:flex   md:flex-row  ">
                    <div className=" flex flex-row  justify-center  ">
                      <div className=" w-full h-screen -mt-[320px] sm:-top-[100px] relative lg:-mt-[500px] md:-mt-[400px] ">
                        <div className="detailPosterImage       w-full h-3/4    rounded-2xl overflow-hidden md:flex md:h-[500px]  md:w-[350px]    ">
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
                    <div className="lg:-mt-[610px] md:-mt-[510px] sm:-mt-96 -mt-[155px] md:pl-8">
                      <div className="   ml-2">
                        <h1 className=" text-white text-2xl md:text-4xl font-semibold ">
                          {data.original_title}
                        </h1>
                        <p className=" text-gray-500 text-sm font-semibold italic  md:text-lg">
                          {data.tagline}
                        </p>
                        {data?.genres?.map((item) => {
                          // console.log(data);

                          return (
                            <div
                              key={item.id}
                              className=" text-white my-5 md:text-sm  inline-block mr-1 space-x-3   bg-pink-600 rounded-md text-xs px-2 pb-0.5  md:mb-8  "
                            >
                              {item.name}
                            </div>
                          );
                        })}
                        <div className=" flex  mt-2   justify-start space-x-16 items-center">
                          <div className=" w-[60px] md:w-[70px]  flex-shrink pb-2 font-semibold progressBarForDetailPage  ">
                            <ProgressBar
                              value={Math.round(data?.vote_average * 10) / 10}
                              textColor={"white"}
                              trailColor={"transparent "}
                            />
                          </div>
                          <div
                            onClick={() => {
                              setvideoShow(true);
                              setvideoId(videos?.results?.[0].key);
                            }}
                            className=" scale-[0.75] sm:mt-0  md:scale-90  "
                          >
                            <a className="video-play-button cursor-pointer">
                              <span> </span>
                            </a>

                            <div className="video-overlay"></div>

                            <p className="text text-white pl-16 md:text-3xl text-xl -mt-4  cursor-pointer ">
                              Watch Now
                            </p>
                          </div>
                        </div>
                        <div className=" text-white">
                          <h2 className=" text-xl md:text-3xl">Overview</h2>
                          <p className=" text-sm md:text-lg py-2">
                            {data?.overview}
                          </p>
                        </div>
                        <div className=" text-white flex text-sm  pt-6 pb-3 border-b-[0.5px] border-gray-700   ">
                          <div className=" basis-1/3">
                            <div className="md:text-lg font-semibold">
                              Status:
                            </div>
                            <div className=" text-gray-500 md:text-lg">
                              {data?.status}
                            </div>
                          </div>
                          <div className="basis-1/3">
                            <div className="md:text-lg font-semibold">
                              Release Date:
                            </div>
                            <div className="text-gray-500 md:text-lg">
                              {dayjs(data?.release_date).format("MMM D, YYYY")}
                            </div>
                          </div>
                          <div className="basis-1/3">
                            <div className="font-semibold md:text-lg">
                              Runtime:
                            </div>
                            <div className="text-gray-500 md:text-lg">
                              {toHoursAndMinutes(data?.runtime)}
                            </div>
                          </div>
                        </div>
                        <div className=" flex py-3 border-b-[0.5px] border-gray-700 flex-row items-center   ">
                          <p className="md:text-lg text-sm font-semibold text-white">
                            Director:
                          </p>{" "}
                          {credits?.crew
                            ?.filter((f) => f.job === "Director")
                            .map((i) => {
                              return (
                                <p
                                  key={i.id}
                                  className="text-gray-500 text-sm pl-5 md:text-lg"
                                >
                                  {i.original_name}
                                </p>
                              );
                            })}
                        </div>
                        <div className=" flex py-3 border-b-[0.5px] border-gray-700  flex-row items-center   ">
                          <p className="md:text-lg text-sm font-semibold text-white ">
                            Writer:
                          </p>{" "}
                          {credits?.crew
                            ?.filter(
                              (f) =>
                                f.job === "Screenplay" ||
                                f.job === "Story" ||
                                f.job === "Writer"
                            )
                            .map((res) => {
                              return (
                                <p
                                  key={res.id}
                                  className="text-gray-500 text-sm pl-5 md:text-lg"
                                >
                                  {res.name}
                                  {res.length <= 1 && ","}
                                </p>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <VideoPopup
                    videoShow={videoShow}
                    setvideoShow={setvideoShow}
                    videoId={videoId}
                    setVideoId={setvideoId}
                  />
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
