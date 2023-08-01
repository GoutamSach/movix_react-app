import React, { useState } from "react";
import ContentWrapper from "../../components/ContentWrapper";
import Img from "../../components/LazyImg";
import VideoPopup from "./videopopup/VideoPopup";

function OfficialVideo({ videos }) {
  const [videoShow, setvideoShow] = useState(false);
  const [videoId, setvideoId] = useState(null);
  return (
    <div className="">
      <div className="bg-[#04152d]  ">
        <ContentWrapper>
          <h1 className="text-xl md:text-3xl text-white py-6  md:-mt-52  ">
            Official Videos
          </h1>
          <div className=" flex flex-row overflow-x-scroll -space-x-6 ">
            {videos?.results?.map((video) => (
              // console.log(video.key),
              <>
                <div
                  key={video.key}
                  className=""
                  onClick={() => {
                    setvideoId(video.key);
                    setvideoShow(true);
                  }}
                >
                  <div
                    key={video.id}
                    className=" w-72 h-40  rounded-lg overflow-hidden  "
                  >
                    <Img
                      src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    />
                  </div>
                  <div key={video.name} className=" text-white py-4 w-72">
                    {video.name}
                  </div>
                </div>
                <div
                  onClick={() => {
                    setvideoShow(true);
                    setvideoId(videos?.results?.[0].key);
                  }}
                  className=" scale-[0.5]   relative   right-[140px] top-5 z-10    "
                >
                  <a className="video-play-button cursor-pointer">
                    <span> </span>
                  </a>

                  <div className="video-overlay"></div>

                  <p className="text text-white pl-16 md:text-3xl text-xl -mt-4  cursor-pointer "></p>
                </div>
              </>
            ))}
          </div>
          <div className=" z-50 relative">
            <VideoPopup
              videoShow={videoShow}
              setvideoShow={setvideoShow}
              videoId={videoId}
              setVideoId={setvideoId}
            />
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
}

export default OfficialVideo;
