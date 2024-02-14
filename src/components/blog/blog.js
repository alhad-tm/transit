import React from "react";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog3.png";
import Calender from "../../assets/calender.png";
import ReadMore from "../../assets/readmore.jpg";

const blogPosts = [
  {
    id: 1,
    image: Blog1,
    day: "08 ",
    month: "September",
    title: "Inland freight a worthy solution for your business",
    content:
      "We are dedicated to creating added value for our customers by implementing modern technology in our work.",
    color: "text-blacked",
    points: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],
  },
  {
    id: 2,
    image: Blog2,
    day: "12 ",
    month: "September",
    title: "How technology can help redraw the supply chain map",
    content:
      "We are dedicated to creating added value for our customers by implementing modern technology in our work.",
    color: "text-[#FFBE34]",
    points: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],
  },
  {
    id: 3,
    image: Blog3,
    day: "25 ",
    month: "September",
    title: "Five things you should have ready for your broker",
    content:
      "We are dedicated to creating added value for our customers by implementing modern technology in our work.",
    color: "text-blacked",
    points: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],
  },
];

const Blog = () => {
  return (
    <div className="flex items-center justify-center bg-white w-full min-h-screen py-12">
      <div className="flex flex-col items-center justify-center bg-white w-3/4 max-w-max min-h-screen gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex w-[150px] h-[30px]">
            <div className="w-[4%] bg-yellow-gradient"></div>
            <div className="bg-[#E8E8E880] flex justify-center items-center p-2">
              <span className="text-blacked text-sm font-primary font-normal">
                Our Blog
              </span>
            </div>
          </div>
          <span className="sub-heading">Our Latest News</span>
        </div>

        <div className="flex flex-col">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="flex flex-col gap-6 md:flex-row items-center justify-between h-auto  border-y border-[#D6D6D6] py-8"
            >
              <div className="relative w-full md:w-[41%]">
                <img
                  src={post.image}
                  alt={`Blog ${post.id}`}
                  className="w-full"
                />

                {index === 1 && (
                  <img
                    src={ReadMore}
                    alt="Extra Image"
                    className=" w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70 transform scale-100 transition-transform duration-300 hover:scale-105 cursor-pointer"
                  />
                )}
              </div>

              <div className="flex flex-col gap-2 items-center justify-center w-full md:w-[10%]">
                <img src={Calender} className="h-[40px] w-[40px]" />
                <span className="sub-heading">{post.day}</span>
                <span>{post.month}</span>
              </div>

              <div className="border-[#D6D6D6] border-l flex flex-col h-full w-full md:w-[41%] p-8 text-left">
                <span
                  className={`text-2xl font-normal font-primary ${post.color}`}
                >
                  {post.title}
                </span>
                <span className="contents">{post.content}</span>
                <ul className="list-disc text-[#1C1F35] font-secondary font-medium text-base ">
                  {post.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex items-center justify-center w-[194px] h-[60px] bg-[#1F2A69] overflow-hidden">
          <span className="absolute right-[-34px] bottom-[-50px]">
            <div className="w-20 h-20 bg-blue-900  rounded-full"></div>
          </span>
          <span className="font-secondary text-base text-white font-semibold">
            {" "}
            More Blog{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
