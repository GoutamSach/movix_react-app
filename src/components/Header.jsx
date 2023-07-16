import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";
import movix from "../image/movix.svg";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

function Header() {
  const [mobileState, setMobileState] = useState(false);
  const navigate = useNavigate();

  const searchStringMovie = () => {
    navigate("explore/movie");
  };
  const searchStringTv = () => {
    navigate("explore/tv");
  };

  return (
    <header className="">
      <div className="w-full h-[60px] static   bg-black  bg-opacity-30">
        <div className=" ">
          <div
            className={`absolute w-full h-[120px] bg-[#04152d] -top-[120px]
              
              ${mobileState && "top-[0] transform duration-300"}`}
          >
            <div className=" text-white">
              <ContentWrapper>
                <div className=" flex  flex-row items-center justify-between py-2">
                  <img
                    onClick={() => navigate("/")}
                    src={movix}
                    alt="header"
                    className="cursor-pointer"
                  />
                  <p
                    onClick={() => setMobileState(false)}
                    className="md:hidden scale-110 cursor-pointer hover:text-[#dc385f]   "
                  >
                    <CloseIcon />
                  </p>
                </div>
              </ContentWrapper>
              <hr className="  border-gray-600 " />
              <ContentWrapper>
                <div className=" ">
                  <div className="   flex flex-col  text-lg font-semibold md:text-xl">
                    <p
                      onClick={() => {
                        navigate("explore/movie");
                        setMobileState(false);
                      }}
                      className=" cursor-pointer hover:text-[#dc385f]  "
                    >
                      Movies
                    </p>
                    <p
                      onClick={() => {
                        navigate("explore/movie");
                        setMobileState(false);
                      }}
                      className=" cursor-pointer hover:text-[#dc385f] "
                    >
                      TV Shows
                    </p>
                  </div>
                </div>
              </ContentWrapper>
            </div>
          </div>
        </div>

        {/*  */}
        {/* header component without dropdown */}
        {/*  */}

        {!mobileState && (
          <>
            <ContentWrapper>
              <div className="  static pt-2 sm:px-2 ">
                <div className=" flex  items-center justify-between text-white">
                  <img
                    onClick={() => navigate("/")}
                    src={movix}
                    alt="header"
                    className=" cursor-pointer"
                  />
                  <div className=" ">
                    <div className="hidden md:inline-block md:flex md:space-x-5 md:text-xl">
                      <p
                        onClick={() => {
                          navigate("explore/movie");
                          setMobileState(false);
                        }}
                        className=" cursor-pointer hover:text-[#dc385f]  "
                      >
                        Movies
                      </p>
                      <p
                        onClick={() => {
                          navigate("/explore/movie");
                          setMobileState(false);
                        }}
                        className=" cursor-pointer hover:text-[#dc385f] "
                      >
                        TV Shows
                      </p>
                    </div>
                    <p
                      onClick={() => setMobileState(true)}
                      className="md:hidden scale-110 cursor-pointer hover:text-[#dc385f]  "
                    >
                      <MenuIcon />
                    </p>
                  </div>
                </div>
              </div>
            </ContentWrapper>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
