import React from 'react'
import Plane from "../../assets/aeroplane-2.png"
import Fly from "../../assets/fly-icon.png"
import Package from "../../assets/safe-package.png"
import Tracking from "../../assets/global-tracking.png"
import Delivery from "../../assets/time-delivery.png"
import Ship from "../../assets/ship-everywhere.png"
import Support from "../../assets/support24.png"
import Pricing from "../../assets/pricing.png"

const WhyChoose = () => {
const serviceArray=[
    {
        title:"Safe Package",
        image:Package
    },
    {
        title:"Ship Everywhere",
        image:Ship
    },
    {
        title:"Global Tracking",
        image:Tracking
    },
    {
        title:"24/7 support",
        image:Support
    },
    {
        title:"In Time Delivery",
        image:Delivery
    },
    {
        title:"Transparent Pricing",
        image:Pricing
    },
]

  return (
    <div className="flex items-center w-full min-h-sreen">

<div className="flex flex-col md:flex-row items-center justify-center w-full max-w-max min-h-screen">

    {/* left */}
    <div className="w-full md:w-1/2 bg-blue-900 min-h-screen flex items-center justify-end">
        <img src={Plane} className=' h-[300px] mr[-5rem] relative' alt='plane'/>
    </div>


    {/* right */}
    <div className="w-full md:w-1/2 bg-gray-200 min-h-screen flex flex-col">

<div className="flex flex-col">
<div className="flex w-[250px] h-[30px]">
                <div className="w-[4%] bg-yellow-200"></div>
                <div className="bg-[#E8E8E880]">
                <span className="text-black">What We Do</span>
                </div>
               
            </div>

                <span className="sub-heading">We create opportunity to reach potential</span>

                <span>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </span>
</div>


<div className="flex flex-wrap gap-4">
      {serviceArray.map((service, index) => (
        <div key={index} className="w-full md:w-[40%] flex flex-col">
          <div className="flex items-center justify-start gap-4">
            <img src={service.image} alt={service.title} />
            <span>{service.title}</span>
          </div>
        </div>
      ))}
    </div>

    </div>
</div>
      
    </div>
  )
}

export default WhyChoose
