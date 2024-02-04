import React from 'react'
import Logo from "../../assets/logo-transit-flow.png"
import Mail from "../../assets/mail.png"
import Phone from "../../assets/phone.png"
import Time from "../../assets/time.png"
import Linkedin from "../../assets/linkedin-white.png"
import Twitter from "../../assets/twitter-white.png"
import Fb from "../../assets/fb-white.png"
import Insta from "../../assets/insta-white.png"

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">

        <div className="bg-[#091242] w-full flex items-center justify-around h-[120px]">

            <div>
                <img src={Logo} alt="logo"/>
            </div>

            <div className="flex gap-4 text-white text-left font-secondary font-medium text-base">


            <div className="flex items-center gap-2 ">
                            <img src={Time}/>
                            <span>Mon - Sat 9.00 - 18.00 <br />Sunday Closed</span>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <img src={Mail}/>
                            <span>Email <br /> contact@logistics.com</span>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <img src={Phone}/>
                            <span>Call Us <br /> (00) 112 365 489</span>
                        </div>
                       

                    </div>

        </div>


        <div className="w-full h-[88px] flex items-center justify-between
         bg-white  bg-opacity-10">

            <div className="flex items-end gap-4 ">

                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>
                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>
                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>
                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>
                <span>
                    Home
                </span>
                <div className="w-1 h-5 bg-white"></div>

            </div>


            <div className="flex gap-4">
                <img src={Insta} alt="instagram"/>
                <img src={Fb} alt="fb"/>
                <img src={Twitter} alt="twiter"/>
                <img src={Linkedin} alt="linkedin"/>

            </div>

            <div className="w-[100px] h-full bg-white flex items-center justify-center">
                <span className="text-[#23212A] font-secondary text-base font-semibold">Request Quote</span>

            </div>

        </div>
      
    </div>
  )
}

export default Header
