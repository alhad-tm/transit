import React from "react";
import FooterImage from "../../assets/footer-image.jpg";
import Logo from "../../assets/logo-transit-flow.png";
import Mail from "../../assets/mail.png";
import Phone from "../../assets/phone.png";
import Linkedin from "../../assets/linkedin-white.png";
import Twitter from "../../assets/twitter-white.png";
import Fb from "../../assets/fb-white.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen ">
      <div
        style={{ backgroundImage: `url(${FooterImage})` }}
        className="h-[350px] w-full bg-center bg-cover"
      ></div>

      <div className="flex flex-col items-start justify-center w-full bg-[#091242] ">
        <div className="w-full  bg-[#091242] flex flex-col md:flex-row items-start justify-between pb-8">
          <div className="flex flex-col w-full  md:w-[7%]">
            <div className="bg-white bg-opacity-10 h-[100px]"></div>
            <div className=""></div>
          </div>

          <div className="w-full md:w-[23%] flex flex-col gap-4 items-start justify-center pl-4 ">
            <div className="flex items-center  h-[100px] w-full">
              <img src={Logo} />
            </div>

            <span className="text-[14px] lg:text-base text-white font-medium font-secondary text-left">
              Leverage agile frameworks to provide a robust synopsis for
              strategy collaborative thinking to further the overall value
              proposition.
            </span>

            <div className="flex items-center gap-2 text-left">
              <img src={Mail} className="header-icons" alt="phone"/>
              <span className="font-secondary text-white text-sm font-medium">
                Email <br /> contact@logistics.com
              </span>
            </div>
            <div className="flex items-center gap-2 text-left pb-4">
              <img src={Phone} className="header-icons" alt="phone"/>
              <span className="font-secondary text-white text-sm font-medium">
                Call Us <br /> (00) 112 365 489
              </span>
            </div>
          </div>

          <div className="w-full md:w-[20%] flex flex-col items-start justify-start ">
            <div className="h-[100px] w-full bg-white bg-opacity-10 flex items-center ">
              <span className="font-primary font-medium text-white text-2xl ml-8">
                Pages
              </span>
            </div>

            <span className="font-secondary text-white text-[14px] lg:text-[16px] font-medium leading-10 ml-8 text-left">
              About Us <br />
              Our Team <br />
              Our Project <br />
              Pricing <br />
              Contact <br />
            </span>
          </div>

          <div className="w-full md:w-[20%] flex flex-col items-start justify-start ">
            <div className="h-[100px] w-full bg-white bg-opacity-10 flex items-center ">
              <span className="font-primary font-medium text-white text-2xl ml-8">
                Utility
              </span>
            </div>

            <span className="font-secondary text-white text-[14px] lg:text-[16px] font-medium leading-10 ml-8 text-left ">
              Style Guide <br /> 
              Changelog <br />
              Licenses <br />
              Protected <br />
              Not Found <br />
            </span>
          </div>

          <div className="w-full md:w-[30%] flex flex-col  gap-4">
            <div className="h-[100px] w-full bg-white bg-opacity-10 flex items-center">
              <span className="font-primary font-medium text-white text-2xl ml-8">
                Subscribe
              </span>
            </div>

            <div className="flex flex-col items-start gap-4 ml-8">
              <div>
                <input
                  className="w-full p-2 border border-[#4E5683] bg-transparent  text-white"
                  type="email"
                  id="email"
                  placeholder="Email here*"
                />
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                <button
                  className="flex items-center justify-center  w-[164px] h-[50px] bg-yellow-gradient hover:bg-blue-700 text-blacked  text-base  font-semibold  py-2 px-4 rounded-md "
                  type="submit"
                >
                  Sent Now
                </button>

                <div className="flex items-center gap-8 lg:gap-2">
                  <img src={Linkedin} alt="instagram" />
                  <img src={Twitter} alt="Twitter" />
                  <img src={Fb} alt="fb" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row items-center lg:items-start justify-between w-full border-t border-[#4E5683] py-8 padding">
          <span className="text-white font-secondary font-normal text-base lg:text-left w-full lg:w-1/2">
            Copyright © TransitFlow | Designed by VictorFlow - Powered by
            Webflow.
          </span>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-8 text-[#8388A7] text-base font-secondary font-normal">
            <span>Style Guide </span>
            <span> Licenses </span>
            <span> Changelog </span>
            <span> Password</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
