import React from "react";
import WhyBg from "../../assets/why-bg.png";
import Delivery from "../../assets/delivery.svg";
import Cost from "../../assets/cost.svg";
import Aeroplane from "../../assets/aeroplane.png";
import Transportation from "../../assets/liquid-transportation.png";
import Solutions from "../../assets/packaging-solution.png";
import Logistics from "../../assets/contract-logistics.png";
import Warehouse from "../../assets/warehouse.png";
import SpecializedTransport from "../../assets/specialized-transport.png";

const WhyUs = () => {
  const cardsArray = [
    {
      backgroundImage: Transportation,
      title: "Liquid Transportation",
      content: "Premium Tankers",
    },
    {
      backgroundImage: Solutions,
      title: "Packaging Solution",
      content: "Warehouse management",
    },
    {
      backgroundImage: Logistics,
      title: "Contract Logistics",
      content: "Road transportation",
    },
    {
      backgroundImage: Warehouse,
      title: "Warehouse & Distribution",
      content: "Large Warehouse",
    },
    {
      backgroundImage: SpecializedTransport,
      title: "Specialized Transport",
      content: "Ocean Transports",
    },
  ];

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <div
          style={{ backgroundImage: `url(${WhyBg})` }}
          className="w-full h-[400px] bg-center bg-cover"
        ></div>

        <div className="w-4/5 min-h-screen mt-[-5rem] bg-white flex flex-col gap-8 lg:flex-row items-center justify-between p-4 lg:p-12">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div className="flex w-[150px] h-[30px]">
              <div className="w-[4%] bg-yellow-gradient"></div>
              <div className="bg-[#E8E8E880] flex justify-center items-center p-2">
                <span className="text-blacked text-sm font-primary font-normal">
                  Why us
                </span>
              </div>
            </div>

            <span className="sub-heading text-left">
              We provide full range global logistics solution
            </span>

            <span className="font-secondary font-base font-medium text-left text-[#666C89]">
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.
            </span>

            <span className="font-secondary font-base font-medium text-left text-[#666C89]">
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment
            </span>

            <div className="flex items-center gap-4">
              <img src={Delivery} />
              <span className="text-xl md:text-2xl text-left font-normal font-primary">
                Delivery on Time
              </span>
            </div>

            <div className="flex items-center gap-4">
              <img src={Cost} />
              <span className="text-xl md:text-2xl text-left font-normal font-primary">
                Optimized Travel Cost
              </span>
            </div>
          </div>

          <div>
            <img src={Aeroplane} alt="aeroplane" />
          </div>
        </div>

        <div className="flex flex-col gap-6 md:gap-0 md:flex-row border:none md:border-y-2 md:border-[#D4D4D4] w-4/5 h-[150px] mt-8 mb-20 md:mb-12 items-center justify-between ">
          <div className="flex flex-col gap-4 md:flex-row items-center justify-center  md:border-r-2 border-[#D4D4D4] w-full md:w-1/2 h-full">
            <span className="font-primary font-semibold text-5xl text-blacked">
              1294
            </span>
            <div className="flex items-center justify-center gap-4">
            <div className="bg-yellow-gradient w-5 h-5"></div>
            <span className="text-xl font-normal text-blacked font-tertiary text-left">
              Delivered Packages
            </span>
            </div> 
           
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-1/2 h-full">
            <span className="font-primary font-semibold text-5xl text-blacked">
              3594
            </span>
            <div className="flex items-center justify-center gap-4">
            <div className="bg-yellow-gradient w-5 h-5"></div>
            <span className="text-xl font-normal text-blacked font-tertiary text-left">
           Satisfied Clients
            </span>
            </div>
           
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 w-4/5 md:w-[90%] lg:w-4/5 relative z-20">
          <span className="text-4xl font-semibold text-blacked font-primary">
            Transporting Across The World
          </span>

          <div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full">
            {cardsArray.map((items, index) => (
              <div
                style={{
                  backgroundImage: `url(${items.backgroundImage})`,
                }}
                key={index}
                className="flex flex-col justify-end p-4 w-full  md:w-[18%] h-[300px] bg-center bg-cover text-left"
              >
                <span className="font-primary text-white text-xl md:text-[14px] lg:text-base md:leading-4 font-medium">
                  {items.title}
                </span>
                <span className="text-yellowed text-base md:text-[12px] lg:text-base md:leading-4  font-medium font-secondary md:mt-2">
                  {items.content}
                </span>
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center w-[194px] h-[60px] bg-[#1F2A69] overflow-hidden">
            <span className="absolute right-[-34px] bottom-[-50px]">
              <div className="w-20 h-20 bg-blue-900  rounded-full"></div>
            </span>
            <span className="font-secondary text-base text-white font-semibold">
              {" "}
              More Work{" "}
            </span>
          </div>
        </div>

        <div className="w-full h-[300px] bg-gradient-to-r from-yellow-500 via-yellow-300 to-orange-300 relative mt-[-10rem] z-10"></div>
      </div>
    </div>
  );
};

export default WhyUs;
