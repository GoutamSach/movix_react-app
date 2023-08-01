import React, { useEffect, useState } from "react";
import ContentWrapper from "./ContentWrapper";
import movix from "../image/movix.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

function Header() {
  const [mobileState, setMobileState] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [headerHide, setHeaderHide] = useState(false);

  const navigate = useNavigate();

  function headerHideOnScroll() {
    setHeaderHide(false);
    if (window.scrollY > 200) {
      if (window.scrollY > lastScroll) {
        setHeaderHide(true);
      } else {
        setHeaderHide(false);
      }
    }
    setLastScroll(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", headerHideOnScroll);
    return () => {
      window.removeEventListener("scroll", headerHideOnScroll);
    };
  }, [lastScroll]);
  return (
    <header className=" ">
      <div
        className={`w-full h-[60px] fixed  transform duration-300 z-50    bg-black  bg-opacity-30 backdrop-blur-sm  ${
          headerHide && "    -translate-y-24 ease-in-out  duration-300"
        }`}
      >
        <div className=" ">
          <div
            className={`absolute w-full z-50 h-[120px] bg-[#04152d] -top-[120px]
              
              ${mobileState && "top-[0px] transform duration-300"}`}
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
                      // onClick={() => {
                      // navigate("explore/movie");
                      // }}
                      className=" cursor-pointer hover:text-[#dc385f]  "
                    >
                      Movies
                    </p>
                    <p
                      // onClick={() => {
                      // navigate("explore/movie");
                      // }}
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
                    <div className="hidden md:inline-block md:flex md:space-x-6 md:text-xl">
                      <p
                        // onClick={() => {
                        // navigate("explore/movie");
                        // }}
                        className=" cursor-pointer hover:text-[#dc385f]  "
                      >
                        Movies
                      </p>
                      <p
                        // onClick={() => {
                        // navigate("/explore/movie");
                        // }}
                        className=" cursor-pointer hover:text-[#dc385f] "
                      >
                        TV Shows
                      </p>
                    </div>
                    <p
                      onClick={() => {
                        setMobileState(true);
                      }}
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
