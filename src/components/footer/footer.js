import React from 'react'
import FooterImage from "../../assets/footer-image.jpg"
import Logo from "../../assets/logo-transit-flow.png"
import Mail from "../../assets/mail.png"
import Phone from "../../assets/phone.png"
import Linkedin from "../../assets/linkedin-white.png"
import Twitter from "../../assets/twitter-white.png"
import Fb from "../../assets/fb-white.png"

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen ">



        <div
      style={{backgroundImage:`url(${FooterImage})`}}
        
        className="h-[350px] w-full bg-center bg-cover">

        </div>



{/* bluebox */}
        <div className="flex flex-col items-center justify-center w-full bg-[#091242]">
            {/* top */}

            <div className="w-full h-[140px] bg-[#091242] flex items-center justify-between ">
                <div className="w-1/5 bg-white bg-opacity-20 h-full">

                </div>

                <div className="w-1/5 flex items-center justify-center ">
                    <img src={Logo}/>

                </div>

                <div className="flex items-center justify-start gap-6 w-3/5 text-white font-primary text-2xl 
                font-medium bg-white bg-opacity-20 h-full">
                    <span>Pages</span>
                    <span>Utilities</span>
                    <span>Subscribe</span>

                </div>

            </div>

            {/* middle */}

            <div className="flex items-center justify-between w-4/5">

                <div className="flex flex-col gap-4 items-start justify-center text-white text-left font-secondary font-medium text-base">

                    <span className="text-base text-white font-medium font-secondary">Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</span>


                    <div className="flex items-center gap-2 ">
                            <img src={Mail}/>
                            <span>Email <br /> contact@logistics.com</span>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <img src={Phone}/>
                            <span>Call Us <br /> (00) 112 365 489</span>
                        </div>

                </div>


                <div className="flex">
                    <span className="font-secondary text-white text-base font-medium">
                    About Us <br />
Our Team <br />
Our Project <br />
Pricing <br />
Contact <br />
                    </span>


                    <span className="font-secondary text-white text-base font-medium">

                    Style Guide <br />

Changelog  <br />
Licenses <br />
Protected <br />
Not Found <br />
                    </span>
                </div>



                <div className="flex flex-col">


                <div className=" ml-2">
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
            type="email"
            id="email"
            placeholder="Email here*"
          />
        </div>


        <div className="flex items-center justify-between">

            <button className="button-layout">Submit</button>
            <div className="flex items-center gap-2">
               
                <img src={Linkedin} alt='instagram'/>
                <img src={Twitter} alt='Twitter'/>
                <img src={Fb} alt='fb'/>
            </div>

        </div>


                </div>

            </div>


            {/* bottom */}

            <div className="flex items-center justify-between w-full border-t border-[#4E5683] py-8">

                <span className="text-white font-secondary font-normal text-base">Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</span>

                <div className="flex items-center justify-between gap-8 text-[#8388A7] text-base font-secondary font-normal">
                      
                      <span>Style Guide    </span>
                      <span>     Licenses       </span>
                      <span>      Changelog         </span>
                      <span>         Password</span>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
