import React from "react";
import SeaTransport from "../../assets/sea-transport.svg";
import Warehousing from "../../assets/warehousing.svg";
import AirFreight from "../../assets/air-fright.svg";
import LocalShipping from "../../assets/local-shipping.svg";

const About = () => {
  const contentArray = [
    {
      title: "Sea Transport Service",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
      image: SeaTransport,
    },
    {
      title: "Warehousing Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
      image: Warehousing,
    },
    {
      title: "Air Freight Service",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
      image: AirFreight,
    },
    {
      title: "Local Shipping Services",
      description:
        "Following the quality of our service thus having gained trust of our many clients.",
      image: LocalShipping,
    },
  ];

  return (
    <div className="bg-white flex items-center justify-center w-full ">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-max  py-12 text-blue-400 w-4/5">
        <div className="w-full md:w-[26%] flex flex-col gap-4 text-left h-full  md:items-start">
          <button className="custom-button text-blacked text-sm font-primary font-normal w-[145px]">
            What We Do
          </button>

          <span className="sub-heading">Safe & Reliable Cargo Solutions</span>
        </div>

        <div className="w-full md:w-[70%] flex flex-wrap gap-8 text-left">
          {contentArray.map((item, index) => (
            <div
              key={index}
              className="bg-white py-8 w-full lg:w-2/5 text-black flex items-center justify-between gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[50px] h-[50px]"
              />
              <div className="bg-[#D8D8D8] w-px h-full"></div>
              <div className="flex flex-col gap-4 items-start justify-center">
                <span className="font-primary text-2xl font-normal ">
                  {item.title}
                </span>
                <span className="font-secondary font-base font-medium text-left">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
