// import React from 'react'
// import Profile1 from "../../assets/profile1.png"
// import Profile2 from "../../assets/profile2.png"
// import Profile3 from "../../assets/profile3.png"
// import Fb from "../../assets/fb.png"
// import Insta from "../../assets/insta.png"
// import Twitter from "../../assets/twitter.png"
// import Linkedin from "../../assets/linkedin.png"

// const Team = () => {
//   return (
//     <div className="flex items-center justify-center bg-white w-full min-h-screen">
      

// <div className="flex flex-col items-center justify-center bg-white w-full min-h-screen max-w-max">

// <div className="flex flex-col">

// <div className="flex w-[250px] h-[30px]">
//                 <div className="w-[4%] bg-yellow-200"></div>
//                 <div className="bg-[#E8E8E880]">
//                 <span className="text-black">The Transporters</span>
//                 </div>
               
//             </div>

//                 <span className="sub-heading">Meet Expert Team</span>

//                 </div>


//                 {/* team btm */}

//                 <div className="flex flex-col md:flex-row  w-full justify-between">

//                     <div className=" h-[500px ]flex flex-col relative">
//                     <div className="">
//                         <img className="h-[420px] w-full" src={Profile1}/>

//                     </div>
//                     <div className="bg-blue-900 h-[80px] w-full flex flex-col items-start">
//                         <span>Name</span>
//                         <span>Position</span>
//                     </div>

//                     <div className="flex gap-2 absolute bg-yellowed h-[40px] w-[150px] items-center justify-center right-0 bottom-[65px]">
//                 <img src={Twitter} alt="" className="h-[20px] w-[20px]"/>
//                 <img src={Fb} alt="" className="h-[20px] w-[20px]"/>
//                 <img src={Insta} alt="" className="h-[20px] w-[20px]"/>
              
//                     </div>

//                     </div>



//                     <div className=" h-[500px ]flex flex-col relative">
//                     <div className="">
//                         <img className="h-[420px] w-full" src={Profile2}/>

//                     </div>
//                     <div className="bg-blue-900 h-[80px] w-full flex flex-col items-start">
//                         <span>Name</span>
//                         <span>Position</span>
//                     </div>

//                     <div className="flex gap-2 absolute bg-yellowed h-[40px] w-[150px] items-center justify-center right-0 bottom-[65px]">
//                     <img src={Linkedin} alt="" className="h-[20px] w-[20px]"/>
//                 <img src={Twitter} alt="" className="h-[20px] w-[20px]"/>
//                 <img src={Fb} alt="" className="h-[20px] w-[20px]"/>
//                 <img src={Insta} alt="" className="h-[20px] w-[20px]"/>
              
//                     </div>

//                     </div>



//                     <div className=" h-[500px ]flex flex-col relative">
//                     <div className="">
//                         <img className="h-[420px] w-full" src={Profile3}/>

//                     </div>
//                     <div className="bg-blue-900 h-[80px] w-full flex flex-col items-start">
//                         <span>Name</span>
//                         <span>Position</span>
//                     </div>

//                     <div className="flex gap-2 absolute bg-yellowed h-[40px] w-[150px] items-center justify-center right-0 bottom-[65px]">
               
//                 <img src={Fb} alt="" className="h-[20px] w-[20px]"/>
//                 <img src={Insta} alt="" className="h-[20px] w-[20px]"/>
              
//                     </div>

//                     </div>

//                 </div>

//                 </div>
//     </div>
//   )
// }

// export default Team

import React from 'react';
import Profile1 from '../../assets/profile1.png';
import Profile2 from '../../assets/profile2.png';
import Profile3 from '../../assets/profile3.png';
import Fb from '../../assets/fb.png';
import Insta from '../../assets/insta.png';
import Twitter from '../../assets/twitter.png';
import Linkedin from '../../assets/linkedin.png';

const teamMembers = [
  {
    id: 1,
    name: 'Jessca Arrow',
    position: 'Designer',
    profileImage: Profile1,
    socialIcons: [Twitter, Fb, Insta],
  },
  {
    id: 2,
    name: 'Kathleen Smith',
    position: 'Designer',
    profileImage: Profile2,
    socialIcons: [Linkedin, Twitter, Fb, Insta],
  },
  {
    id: 3,
    name: 'Rebecca Taylor',
    position: 'Designer3',
    profileImage: Profile3,
    socialIcons: [Fb, Insta],
  },
];

const Team = () => {
  return (
    <div className="flex items-center justify-center bg-white w-full min-h-screen">
      <div className="flex flex-col items-center justify-center bg-white w-full min-h-screen max-w-max">
        <div className="flex flex-col">
          <div className="flex w-[250px] h-[30px]">
            <div className="w-[4%] bg-yellow-200"></div>
            <div className="bg-[#E8E8E880]">
              <span className="text-black">The Transporters</span>
            </div>
          </div>
          <span className="sub-heading">Meet Expert Team</span>
        </div>

        {/* Team members */}
        <div className="flex flex-col md:flex-row w-full justify-between">
          {teamMembers.map((member) => (
            <div key={member.id} className="h-[500px] w-full md:w-[30%] flex flex-col relative">
              <div>
                <img className="h-[420px] w-full" src={member.profileImage} alt={`Profile ${member.id}`} />
              </div>
              <div className="bg-blue-900 h-[80px] w-full flex flex-col items-start">
                <span className="font-primary font-medium text-xl text-white">{member.name}</span>
                <span className="font-secondary font-medium text-base text-white ">{member.position}</span>
              </div>
              <div className="flex gap-2 absolute bg-yellowed h-[40px] w-[150px] items-center justify-center right-0 bottom-[65px]">
                {member.socialIcons.map((icon, index) => (
                  <img key={index} src={icon} alt={`Social Icon ${index}`} className="h-[20px] w-[20px]" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
