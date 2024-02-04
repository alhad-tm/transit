import React from "react";
import Logo from "../../assets/logo-transit-flow.png";
import Mail from "../../assets/mail.png";
import Phone from "../../assets/phone.png";
import Time from "../../assets/time.png";
import Linkedin from "../../assets/linkedin-white.png";
import Twitter from "../../assets/twitter-white.png";
import Fb from "../../assets/fb-white.png";
import Insta from "../../assets/insta-white.png";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <div className="bg-[#091242] w-full flex flex-col md:flex-row items-center justify-between h-auto md:h-[120px] py-4 md:py-0 gap-6 md:gap-0 px-4 md:px-24">
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 text-white text-left font-secondary font-medium text-base ">
          <div className="flex items-center gap-2 ">
            <img src={Time} className="w-[50px] h-[50px]" />
            <span className="text-sm font-secondary font-medium text-white">
              Mon - Sat 9.00 - 18.00 <br />
              Sunday Closed
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <img src={Mail} className="w-[50px] h-[50px]" />
            <span className="text-sm font-secondary font-medium text-white">
              Email <br /> contact@logistics.com
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <img src={Phone} className="w-[50px] h-[50px]" />
            <span className="text-sm font-secondary font-medium text-white">
              Call Us <br /> (00) 112 365 489
            </span>
          </div>
        </div>
      </div>

      <div
        className="w-full h-auto md:h-[68px] flex flex-col md:flex-row items-center justify-between px-4 md:px-24 py-4 md:py-0
         bg-white  bg-opacity-10 gap-4 md:gap-0"
      >
        <div className="flex items-center justify-center gap-2 md:gap-8 navlinks ">
          <span>Home</span>
          <div className="navline "></div>
          <span>About</span>
          <div className="navline "></div>
          <span>Pages</span>

          <div className="navline "></div>
          <span>Project</span>
          <div className="navline"></div>
          <span>Contact</span>
        </div>

        <div className="flex gap-4">
          <img src={Insta} alt="instagram" />
          <img src={Fb} alt="fb" />
          <img src={Twitter} alt="twiter" />
          <img src={Linkedin} alt="linkedin" />
        </div>

        <div className="w-[280px] h-full bg-white flex items-center justify-center">
          <span className="text-[#23212A] font-secondary text-base font-semibold">
            Request Quote
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
