import React from "react";
import ContentWrapper from "./ContentWrapper";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div className="bg-[#020c1b] ">
      <ContentWrapper>
        <div className=" ">
          <div className=" text-white flex text-sm space-x-5  items-center  justify-center pt-10 pb-6">
            <p className=" hover:text-[#dc385f]  cursor-pointer">
              Terms Of Use
            </p>
            <p className=" hover:text-[#dc385f] cursor-pointer">
              Privacy-Policy
            </p>
            <p className=" hover:text-[#dc385f] cursor-pointer">About</p>
            <p className=" hover:text-[#dc385f] cursor-pointer">Bog</p>
            <p className=" hover:text-[#dc385f] cursor-pointer">FAQ</p>
          </div>
          <p className=" text-xs text-gray-400 text-center pb-6 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel nemo
            neque corporis sit error obcaecati enim incidunt unde, iure
            voluptates id! Distinctio, officia. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Fugiat, porro. Consectetur dignissimos
            eum possimus omnis, temporibus id ab tempora laudantium et soluta
            maiores!
          </p>
          <div className="  text-white  flex  items-center justify-center pb-16 space-x-5  ">
            <div className=" rounded-full  bg-[#04152d] p-3  hover:text-[#dc385f] hover:shadow-[0_0_15px] transition duration-300 ease-in-out hover:shadow-[#dc385f]">
              <FacebookIcon />
            </div>
            <div className=" rounded-full  bg-[#04152d] p-3  hover:text-[#dc385f] hover:shadow-[0_0_15px] transition duration-300 ease-in-out hover:shadow-[#dc385f]">
              <InstagramIcon />
            </div>
            <div className=" rounded-full bg-[#04152d] p-3  hover:text-[#dc385f] hover:shadow-[0_0_15px] transition duration-300 ease-in-out hover:shadow-[#dc385f]">
              <TwitterIcon />
            </div>
            <div className=" rounded-full bg-[#04152d] p-3  hover:text-[#dc385f] hover:shadow-[0_0_15px] transition duration-300 ease-in-out hover:shadow-[#dc385f]">
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default Footer;
