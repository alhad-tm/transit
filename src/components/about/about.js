import React from 'react'
import SeaTransport from "../../assets/sea-transport.svg"
import Warehousing from "../../assets/warehousing.svg"
import AirFreight from "../../assets/air-fright.svg"
import LocalShipping from "../../assets/local-shipping.svg" 

const About = () => {
    const contentArray = [ 
        {
          title: 'Sea Transport Service',
          description: 'Following the quality of our service thus having gained trust of our many clients.',
          image: SeaTransport,
        },
        {
          title: 'Warehousing Services',
          description: 'Following the quality of our service thus having gained trust of our many clients.',
          image: Warehousing,
        },
        {
          title: 'Air Freight Service',
          description: 'Following the quality of our service thus having gained trust of our many clients.',
          image: AirFreight,
        },
        {
          title: 'Local Shipping Services',
          description: 'Following the quality of our service thus having gained trust of our many clients.',
          image: LocalShipping,
        },
      ];
    
      
  return (
    <div className='bg-white flex items-center justify-center w-full '>

        <div className="flex flex-col md:flex-row justify-between items-center max-w-max w-full min-h-screen text-blue-400">

           {/* left */}
            <div className='w-1/5 flex flex-col gap-4'>

            <div className="flex w-[250px] h-[30px]">
                <div className="w-[4%] bg-yellow-200"></div>
                <div className="bg-[#E8E8E880]">
                <span className="text-black">What We Do</span>
                </div>
               
            </div>

                <span className="sub-heading">Safe & Reliable Cargo Solutions</span>

            </div>

            {/* right */}

          

            <div className='w-4/5 flex flex-wrap gap-4'>

                  {/* box1 */}

                {/* <div className='bg-white h-[200px] w-2/5 text-black flex items-center justify-between gap-4'>
                    <img src={SeaTransport} alt="sea-transport"/>

                    <div className="bg-[#D8D8D8] w-px h-full"></div>

                    <div className="flex flex-col gap-4 items-start justify-center">

                        <span className="font-primary text-2xl font-normal ">Sea Transport Service</span>
                        <span className="font-secondary font-base font-medium text-left">Following the quality of our service thus having gained trust of our many clients.</span>
                    </div>
                    
                    
                     </div> */}

{contentArray.map((item, index) => (
            <div key={index} className="bg-white h-[200px] w-2/5 text-black flex items-center justify-between gap-4">
         <img src={item.image} alt={item.title} className="w-[50px] h-[50px]" /> 
              <div className="bg-[#D8D8D8] w-px h-full"></div>
              <div className="flex flex-col gap-4 items-start justify-center">
                <span className="font-primary text-2xl font-normal ">{item.title}</span>
                <span className="font-secondary font-base font-medium text-left">{item.description}</span>
              </div>
            </div>
          ))}
 

     {/* box2 */}
       {/* box3 */}
       {/* box4 */}



             

                
            </div>



        </div>
      
    </div>
  )
}

export default About
