import React from "react";
import Plane from "../../assets/aeroplane-2.png";
import Fly from "../../assets/fly-icon.png";
import Package from "../../assets/safe-package.png";
import Tracking from "../../assets/global-tracking.png";
import Delivery from "../../assets/time-delivery.png";
import Ship from "../../assets/ship-everywhere.png";
import Support from "../../assets/support24.png";
import Pricing from "../../assets/pricing.png";

const WhyChoose = () => {
  const serviceArray = [
    {
      title: "Safe Package",
      image: Package,
    },
    {
      title: "Ship Everywhere",
      image: Ship,
    },
    {
      title: "Global Tracking",
      image: Tracking,
    },
    {
      title: "24/7 support",
      image: Support,
    },
    {
      title: "In Time Delivery",
      image: Delivery,
    },
    {
      title: "Transparent Pricing",
      image: Pricing,
    },
  ];

  return (
    <div className="flex items-center justify-center w-full min-h-sreen">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-max min-h-screen">
        <div className="w-full md:w-1/2 bg-blue-900 min-h-screen flex items-center justify-end pl-12">
          <div className="relative mr-0 md:mr-[-2rem] w-full ">
            <img src={Plane} className="  " alt="plane" />

            <div className="flex items-center justify-center gap-2 p-2 bg-yellow-gradient absolute left-1/2 transform -translate-x-1/2 bottom-0 w-2/3 ">
              <img src={Fly} alt="fly" />
              <span className="text=blacked font-primary text-2xl text-left">
                Moving your products across borders
              </span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-[#F4F4F4] min-h-screen flex flex-col gap-8 items-center justify-center px-16 text-left ">
          <div className="flex flex-col gap-4">
            <div className="flex w-[250px] h-[30px]">
              <div className="w-[4%] bg-yellow-gradient"></div>
              <div className="bg-[#E8E8E880] flex justify-center items-center p-2">
                <span className="text-[#1C1F35] text-sm font-primary font-normal">
                  Why choose
                </span>
              </div>
            </div>

            <span className="sub-heading">
              We create opportunity to reach potential
            </span>

            <span>
              Leverage agile frameworks to provide a robust synopsis for
              strategy foster collaborative thinking to further the overall
              value proposition.{" "}
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            {serviceArray.map((service, index) => (
              <div key={index} className="w-full md:w-[40%] flex flex-col">
                <div className="flex items-center justify-start gap-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-[50px] h-[50px]"
                  />
                  <span>{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
