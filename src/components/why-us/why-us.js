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

        <div className="w-4/5 min-h-screen mt-[-5rem] bg-white flex flex-col md:flex-row items-center justify-between p-12">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
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
              <span className="text-2xl font-normal font-primary">
                Delivery on Time
              </span>
            </div>

            <div className="flex items-center gap-4">
              <img src={Cost} />
              <span className="text-2xl font-normal font-primary">
                Optimized Travel Cost
              </span>
            </div>
          </div>

          <div>
            <img src={Aeroplane} alt="aeroplane" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row border-y-2 border-[#D4D4D4] w-4/5 h-[150px] mt-8 mb-12 items-center justify-between">
          <div className="flex items-center justify-center gap-2 border-r-2 border-[#D4D4D4] w-1/2 h-full">
            <span className="font-primary font-semibold text-5xl text-blacked">
              1294
            </span>
            <div className="bg-yellow-gradient w-5 h-5"></div>
            <span className="text-xl font-normal text-blacked font-tertiary">
              Delivered Packages
            </span>
          </div>

          <div className="flex items-center justify-center gap-2  w-1/2 h-full">
            <span className="font-primary font-semibold text-5xl text-blacked">
              3594
            </span>
            <div className="bg-yellow-gradient w-5 h-5"></div>
            <span className="text-xl font-normal text-blacked font-tertiary">
              Satisfied clients
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 w-4/5 relative z-20">
          <span className="text-4xl font-semibold text-blacked font-primary">
            Transporting Across The World
          </span>

          <div className="flex items-center justify-between gap-2 w-full">
            {cardsArray.map((items, index) => (
              <div
                style={{
                  backgroundImage: `url(${items.backgroundImage})`,
                }}
                key={index}
                className="flex flex-col justify-end p-4 w-[18%] h-[300px] bg-center bg-cover text-left"
              >
                <span className="font-primary text-white text-xl font-medium">
                  {items.title}
                </span>
                <span className="text-yellowed text-base font-medium font-secondary">
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
