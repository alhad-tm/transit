import React from "react";
import BannerBg from "../../assets/banner-bg.svg";
import Header from "../header/header";

const Banner = () => {
  return (
    <div
      className=" flex items-center justify-center w-full bg-center bg-cover relative mt-[15rem] md:mt-20"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className="absolute top-[-15rem] md:top-[-5rem] w-full ">
        <Header />
      </div>
      <div className="flex items-center max-w-max w-full min-h-screen mt-12">
        <div className="flex flex-col gap-2 items-start justify-center w-full md:w-2/5 pl-8 md:pl-24 text-left">
          <div className=" h-[40px]  flex items-between">
            <div className="w-2 bg-yellow-gradient"> </div>
            <div className="px-4 bg-white bg-opacity-10 flex items-center justify-center">
              <span className="font-primary  text-base text-white">
                Logistics & Supply Chain Solutions
              </span>
            </div>
          </div>

          <span className=" text-2xl md:text-6xl text-white font-primary font-bold leading-[20px] md:leading-[71px]">
            Your Gateway to any Destination in the World
          </span>

          <span className="fon-secondary font-medium text-base text-white">
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
          </span>

          <div className="relative flex items-center justify-center w-[194px] h-[60px] bg-yellow-gradient overflow-hidden">
            <span className="absolute right-[-34px] bottom-[-50px]">
              <div className="w-20 h-20 bg-white rounded-full"></div>
            </span>
            <span className="font-secondary text-base text-button-text font-semibold">
              {" "}
              Explore more{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
