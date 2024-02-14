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
      <div className="bg-[#091242] w-full flex flex-col md:flex-row items-center justify-between h-auto md:h-[120px] py-4 md:py-0 gap-6 md:gap-0 padding">
        <div className="w-full flex items-center justify-center md:justify-start md:w-[20%]">
          <img src={Logo} alt="logo" />
        </div>

        <div className="flex flex-col md:flex-row gap-4 lg:gap-8 text-white text-left font-secondary font-medium text-base w-full md:w-3/4 justify-end">
          <div className="flex items-center gap-2 ">
            <img src={Time} className="header-icons" alt="time"/>
            <span className="header-spans">
              Mon - Sat 9.00 - 18.00 <br />  
              Sunday Closed 
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <img src={Mail} className="header-icons" alt="mail"/>
            <span className="header-spans">
              Email <br /> contact@logistics.com
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <img src={Phone} className="header-icons" alt="phone" /> 
            <span className="header-spans">
              Call Us <br /> (00) 112 365 489
            </span>
          </div>
        </div>
      </div>

      <div
        className="w-full h-auto md:h-[68px] flex flex-col md:flex-row items-center justify-between padding py-4 md:py-0
         bg-white  bg-opacity-10 gap-4 md:gap-0"
      >
        <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 lg:gap-8 xl:gap-10 navlinks w-full md:w-1/2">
          <span>Home</span>
          {/* Home */}
          <div className="navline "></div>
          <span>About</span>
          {/* About */}
          <div className="navline "></div>
          <span>Pages</span>
          {/* Pages */}

          <div className="navline "></div>
          <span>Project</span>
          {/* Project */}
          <div className="navline"></div>
          <span>Contact</span>
          {/* Contact */}
        </div>

        <div className="flex gap-4 w-full md:w-1/4 items-center justify-center">
          <img src={Insta} alt="instagram" />
          <img src={Fb} alt="fb" />
          <img src={Twitter} alt="twiter" />
          <img src={Linkedin} alt="linkedin" />
        </div>

        <div className=" h-full bg-white flex items-center justify-center md:w-[15%] lg:w-1/4 p-2 md:p-0">
          <span className="text-[#23212A] font-secondary text-base font-semibold">
            Request Quote
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
