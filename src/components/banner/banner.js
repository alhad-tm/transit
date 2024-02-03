import React from "react";
import BannerBg from "../../assets/banner-bg.svg";

const Banner = () => {
  return (
    <div       className=" flex items-center justify-center w-full bg-center bg-cover" 
    style={{ backgroundImage: `url(${BannerBg})` }}
    >
    
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
