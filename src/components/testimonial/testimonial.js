import React from "react";
import LeftArrow from "../../assets/left-arow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import Star from "../../assets/star.png";
import User1 from "../../assets/user1.png";
import User2 from "../../assets/user-2.png";
import Quotes from "../../assets/quotes.png";

const testimonialData = [
  {
    id: 1,
    userImage: User1,
    userName: "Kathleen Smith",
    userPosition: "Fuel Company",
    quote:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    stars: 5,
    color: "bg-gray-200",
    text: "text-[#091242]",
  },
  {
    id: 2,
    userImage: User2,
    userName: "John Martin",
    userPosition: "Restoration Compnay",
    quote:
      "Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    stars: 5,
    color: "bg-blue-900",

    text: "text-white",
  },
];

const Testimonial = () => {
  return (
    <div className="flex items-center justify-center bg-white min-h-screen w-full py-8">
      <div className="flex flex-col gap-8 items-center justify-center w-4/5 max-w-max text-left">
        <div className="flex flex-col gap-4 md:flex-row items-center justify-between w-full">
          <div className="flex flex-col gap-4">
            <button className="custom-button text-blacked text-sm font-primary font-normal w-[145px]">
              Testimonial
            </button>
            <span className="sub-heading">What Our Customer Say</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={LeftArrow} alt="left arrow" />
            <img src={RightArrow} alt="right arrow" />
          </div>
        </div>

        <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between w-full ">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`w-full md:w-1/2 lg:h-[350px] py-8 flex flex-col gap-4  justify-around p-8 ${testimonial.color}`}
            >
              <div className="flex justify-between">
                <div className="flex gap-4 items-center ">
                  <img
                    className="w-[60px] h-[60px] lg:w-auto lg:h-auto"
                    src={testimonial.userImage}
                    alt={`user-${testimonial.id}`}
                  />
                  <div className={`flex flex-col ${testimonial.text}`}>
                    <span className=" text-xl font-primary font-medium">
                      {testimonial.userName}
                    </span>
                    <span className=" text-base font-secondary font-medium">
                      {testimonial.userPosition}
                    </span>
                  </div>
                </div>
                <div>
                  <img
                    src={Quotes}
                    alt="quotes"
                    className="h-[30px] w-[40px] lg:h-auto lg:w-auto"
                  />
                </div>
              </div>

              <span className="text-[14px] md:text-base font-medium font-secondary text-[#666C89] italic">
                {testimonial.quote}
              </span>

              <div className="flex gap-2">
                {Array.from({ length: testimonial.stars }).map((_, index) => (
                  <img key={index} src={Star} alt={`star-${index + 1}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
