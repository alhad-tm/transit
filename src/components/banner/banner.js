import React from "react";
import BannerBg from "../../assets/banner-bg.svg";
import Header from "../header/header";

const Banner = () => {
  return (
    <div       className=" flex items-center justify-center w-full bg-center bg-cover relative mt-20" 
    style={{ backgroundImage: `url(${BannerBg})` }}
    >
    
    {/* <div className="w-full h-[88px] flex items-center justify-between
         bg-transparent  bg-opacity-20 backdrop-blur-sm absolute top-0">

            <div className="flex items-end gap-4 ">

                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>
                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>
                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>
                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>
                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>

            </div>

        </div> */}
        <div className="absolute top-[-5rem] w-full ">
          <Header/>

        </div>
      <div  className="flex max-w-max w-full min-h-screen " >
       

 

 <div className="flex flex-col items-center justify-center"> 

<div className="w-[600px] h-[40px] bg-green-500 flex items-between">
    <div  className="w-[10%] bg-yellow-200"> </div>
    <div className="w-[90%] bg-blue-300">
        <span className="font-primary  text-base text-white">Logistics & Supply Chain Solutions</span>
    </div> 
</div>


<span className="text-6xl text-white font-primary font-bold">Your Gateway 
to any Destination in the World</span>

<span className="fon-secondary font-medium text-base text-white">In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </span>

<button className="button-layout">hello</button>
 </div>






      </div>



    </div>
  );
};

export default Banner;
