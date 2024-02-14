import React from "react";
import Profile1 from "../../assets/profile1.png";
import Profile2 from "../../assets/profile2.png";
import Profile3 from "../../assets/profile3.png";
import Fb from "../../assets/fb.png";
import Insta from "../../assets/insta.png";
import Twitter from "../../assets/twitter.png";
import Linkedin from "../../assets/linkedin.png";

const teamMembers = [
  {
    id: 1,
    name: "Jessca Arrow",
    position: "Designer",
    profileImage: Profile1,
    socialIcons: [Twitter, Fb, Insta],
  },
  {
    id: 2,
    name: "Kathleen Smith",
    position: "Designer",
    profileImage: Profile2,
    socialIcons: [Linkedin, Twitter, Fb, Insta],
  },
  {
    id: 3,
    name: "Rebecca Taylor",
    position: "Designer3",
    profileImage: Profile3,
    socialIcons: [Fb, Insta],
  },
];

const Team = () => {
  return (
    <div className="flex items-center justify-center bg-white w-full min-h-screen py-6">
      <div className="flex flex-col gap-8 items-center justify-center bg-white w-full min-h-screen max-w-max">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <div className="flex w-[150px] h-[30px]">
            <div className="w-[4%] bg-yellow-gradient"></div>
            <div className="bg-[#E8E8E880] flex items-center justify-center p-2">
              <span className="text-blacked text-sm font-primary font-normal">
                The Transporters
              </span>
            </div>
          </div>
          <span className="sub-heading">Meet Expert Team</span>
        </div>

        <div className="flex flex-col gap-6 md:flex-row w-4/5 md:w-[90%] lg:w-4/5 xl:w-[60%] justify-between items-center">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="h-[400px] w-[275px]  md:w-[300px] flex flex-col relative"
            >
              <div>
                <img
                  className="h-[260px] w-full"
                  src={member.profileImage}
                  alt={`Profile ${member.id}`}
                />
              </div>
              <div className="bg-blue-900 h-[80px] w-full flex flex-col items-start py-4 pl-4">
                <span className="font-primary font-medium text-xl text-white">
                  {member.name}
                </span>
                <span className="font-secondary font-medium text-base text-white ">
                  {member.position}
                </span>
              </div>
              <div className="flex gap-2 absolute bg-yellowed h-[40px] px-4 items-center justify-center right-0 bottom-[120px]">
                {member.socialIcons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`Social Icon ${index}`}
                    className="h-[20px] w-[20px]"
                  />
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
