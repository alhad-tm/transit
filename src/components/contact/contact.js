import React from "react";
import Mail from "../../assets/mail.png";
import Phone from "../../assets/phone.png";
import Time from "../../assets/time.png";
import Place1 from "../../assets/place1.png";
import Place2 from "../../assets/place2.png";
import Place3 from "../../assets/place3.png";
import Place4 from "../../assets/place4.png";

const Contact = () => {
  return (
    <div className="flex bg-[#091242] items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-4/5 max-w-max min-h-screen py-16">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col w-full md:w-1/3 ">
            <div className="flex flex-col text-left gap-2">
              <button
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                className="custom-button text-white text-sm font-primary w-[105px]"
              >
                Contact
              </button>

              <span className="sub-heading-white">Get in touch with us</span>

              <span className="text-base text-white font-medium font-secondary">
                Leverage agile frameworks to provide a robust synopsis for
                strategy foster collaborative thinking to further the overall
                value.
              </span>
            </div>

            <div className="flex flex-col gap-8 py-8 text-white text-left font-secondary font-medium text-base">
              <div className="flex items-center gap-2 ">
                <img src={Mail} className="w-[50px] h-[50px]" />
                <span>
                  Email <br /> contact@logistics.com
                </span>
              </div>
              <div className="flex items-center gap-2 ">
                <img src={Phone} className="w-[50px] h-[50px]" />
                <span>
                  Call Us <br /> (00) 112 365 489
                </span>
              </div>
              <div className="flex items-center gap-2 ">
                <img src={Time} className="w-[50px] h-[50px]" />
                <span>
                  Mon - Sat 9.00 - 18.00 <br />
                  Sunday Closed
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-4 pb-8">
            <div className="mb-4 flex flex-col gap-8 md:gap-0 md:flex-row w-full">
              <div className=" mr-2 w-full md:w-1/2">
                <input
                  className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
                  type="text"
                  id="name"
                  placeholder="Your Name*"
                />
              </div>
              <div className="ml-0 md:ml-2 w-full md:w-1/2">
                <input
                  className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
                  type="email"
                  id="email"
                  placeholder="Email*"
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-8 md:gap-0 md:flex-row w-full">
              <div className=" mr-2 w-full md:w-1/2">
                <input
                  className="w-full p-2 border border-[#4E5683] bg-transparent  focus:outline-none text-white"
                  type="tel"
                  id="number"
                  placeholder="Phone Number"
                />
              </div>
              <div className="ml-0 md:ml-2 w-full md:w-1/2">
                <input
                  className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
                  type="text"
                  id="city"
                  placeholder="City*"
                />
              </div>
            </div>

            <div className="mb-4">
              <textarea
                className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>

            <div>
              <button
                className="flex items-center justify-center  w-[164px] h-[50px] bg-yellow-gradient hover:bg-blue-700 text-blacked  text-base  font-semibold  py-2 px-4 rounded-md "
                type="submit"
              >
                Submit Message
              </button>
            </div>
          </div>
        </div>

        {/* bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between w-full ">
          <img src={Place1} alt="place1" className="w-full md:w-1/4" />
          <img src={Place2} alt="place2" className="w-full md:w-1/4" />
          <img src={Place3} alt="place3" className="w-full md:w-1/4" />
          <img src={Place4} alt="place4" className="w-full md:w-1/4" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
