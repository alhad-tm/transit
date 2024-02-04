import React from 'react'
import Mail from "../../assets/mail.png"
import Phone from "../../assets/phone.png"
import Time from "../../assets/time.png"
import Place1 from "../../assets/place1.png"
import Place2 from "../../assets/place2.png"
import Place3 from "../../assets/place3.png"
import Place4 from "../../assets/place4.png"

const Contact = () => {
  return (
    <div className="flex bg-[#091242] items-center justify-center w-full min-h-screen">

        <div className="flex flex-col items-center justify-center w-full max-w-max min-h-screen">


            {/* top */}



            <div className="flex items-center justify-between w-full">

                {/* top-left */}

                <div className="flex flex-col w-full md:w-1/2 ">

                    <div className="flex flex-col text-left gap-2">
                
                    <div className="flex w-[250px] h-[30px]">
                <div className="w-[4%] bg-yellow-200"></div>
                <div className="bg-[#E8E8E880]">
                <span className="text-white">Contact</span>
                </div>  
                   </div>

                <span className="sub-heading-white">Get in touch with us</span>

                <span className="text-base text-white font-medium font-secondary">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</span>

                    </div>


                    <div className="flex flex-col gap-4 text-white text-left font-secondary font-medium text-base">

                        <div className="flex items-center gap-2 ">
                            <img src={Mail}/>
                            <span>Email <br /> contact@logistics.com</span>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <img src={Phone}/>
                            <span>Call Us <br /> (00) 112 365 489</span>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <img src={Time}/>
                            <span>Mon - Sat 9.00 - 18.00 <br />Sunday Closed
</span>
                        </div>

                    </div>






                </div>







                {/* top-right */}

                {/* form */}

                <div className="max-w-md mx-auto p- rounded-md">
      {/* First Row */}
      <div className="mb-4 flex flex-col md:flex-row">
        <div className="flex-1 mr-2">
          <label className="sr-only" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
            type="text"
            id="name"
            placeholder="Your Name*"
          />
        </div>
        <div className="flex-1 ml-2">
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
            type="email"
            id="email"
            placeholder="Email*"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="mb-4 flex flex-col md:flex-row">
        <div className="flex-1 mr-2">
          <label className="sr-only" htmlFor="number">Number</label>
          <input
            className="w-full p-2 border border-[#4E5683] bg-transparent  focus:outline-none text-white"
            type="tel"
            id="number"
            placeholder="Phone Number"
          />
        </div>
        <div className="flex-1 ml-2">
          <label className="sr-only" htmlFor="city">City</label>
          <input
            className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
            type="text"
            id="city"
            placeholder="City*"
          />
        </div>
      </div>

      {/* Third Row */}
      <div className="mb-4">
        <label className="sr-only" htmlFor="message">Your Message</label>
        <textarea
          className="w-full p-2 border border-[#4E5683] bg-transparent focus:outline-none text-white"
          id="message"
          rows="4"
          placeholder="Your Message"
        ></textarea>
      </div>

      {/* Fourth Row */}
      <div>
        <button
          className="flex items-center justify-start  w-[40%] bg-yellowed hover:bg-blue-700 text-black font-normal py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Submit message
        </button>
      </div>
    </div>
            </div>









            {/* bottom */}

            <div className="flex flex-col md:flex-row items-center justify-between w-full ">

               <img src={Place1} alt="place1" className="w-full md:w-1/4"/>
               <img src={Place2} alt="place2" className="w-full md:w-1/4"/>
               <img src={Place3} alt="place3" className="w-full md:w-1/4"/>
               <img src={Place4} alt="place4" className="w-full md:w-1/4"/>

            </div>

        </div>
      
    </div>
  )
}

export default Contact
