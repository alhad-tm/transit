// import React from 'react'
// import LeftArrow from "../../assets/left-arow.svg"
// import RightArrow from "../../assets/right-arrow.svg"
// import Star from "../../assets/star.png"
// import User1 from "../../assets/user1.png"
// import User2 from "../../assets/user-2.png"
// import Quotes from "../../assets/quotes.png"

// const Testimonial = () => {
//   return (
//     <div className="flex items-center justify-center bg-white min-h-screen w-full">
      
//  <div className="flex flex-col items-center justify-center w-full max-w-max">


// {/* top */}

// <div className="flex flex-col md:flex-row items-center justify-between w-full">
//     <div className="flex flex-col">
//     <div className="flex w-[350px] h-[30px]">
//                 <div className="w-[4%] bg-yellow-200"></div>
//                 <div className="bg-[#E8E8E880]">
//                 <span className="text-black">Testimonials</span>
//                 </div>
               
//             </div>


// <span className="sub-heading">What Our Customer Say</span>

//     </div>


//     <div className="flex items-center gap-2">
//         <img src={LeftArrow}/>
//         <img src={RightArrow}/>
//     </div>





// </div>

// {/* bottom */}

// <div className="flex items-center justify-between w-full ">
//     <div className="w-1/2 h-[350px] flex flex-col bg-gray-400 justify-around">

//  <div className="flex justify-between">
//     <div className="flex">
//         <img  src={User1} alt='user1'/>
//         <div className="flex flex-col">
//             <span>Name</span>
//             <span>Position</span>
//         </div>
//     </div>

//     <div>
//         <img src={Quotes}/>
//     </div>
//  </div>

//  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor magnam ipsum quia beatae corporis dolores eius minima, obcaecati ipsa suscipit fugit earum doloribus necessitatibus quasi perspiciatis eaque cumque ratione magni?</span>

// <div className="flex gap-2">
// <img src={Star} alt='star'/>
// <img src={Star} alt='star'/>
// <img src={Star} alt='star'/>
// <img src={Star} alt='star'/>
// <img src={Star} alt='star'/>


// </div>

//     </div>
// </div>



//  </div>

//     </div>
//   )
// }

// export default Testimonial







import React from 'react';
import LeftArrow from "../../assets/left-arow.svg";
import RightArrow from "../../assets/right-arrow.svg";
import Star from "../../assets/star.png";
import User1 from "../../assets/user1.png";
import User2 from "../../assets/user-2.png";
import Quotes from "../../assets/quotes.png";

const testimonialData = [
  {
    id: 1,
    userImage: User1,
    userName: 'John Doe',
    userPosition: 'CEO',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    stars: 5,
    color:"bg-yellow-500",
  },
  {
    id: 2,
    userImage: User2,
    userName: 'John Doe',
    userPosition: 'CEOnn',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    stars: 4,
    color:"bg-red-500"
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  return (
    <div className="flex items-center justify-center bg-white min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full max-w-max">
        {/* top */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          <div className="flex flex-col">
            <div className="flex w-[350px] h-[30px]">
              <div className="w-[4%] bg-yellow-200"></div>
              <div className="bg-[#E8E8E880]">
                <span className="text-black">Testimonials</span>
              </div>
            </div>
            <span className="sub-heading">What Our Customer Say</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={LeftArrow} alt="left arrow" />
            <img src={RightArrow} alt="right arrow" />
          </div>
        </div>

        {/* bottom */}
        <div className="flex items-center justify-between w-full ">
          {testimonialData.map((testimonial) => (
            <div key={testimonial.id} 
            className={`w-1/2 h-[350px] flex flex-col justify-around ${testimonial.color}`}>
              <div className="flex justify-between">
                <div className="flex">
                  <img src={testimonial.userImage} alt={`user-${testimonial.id}`} />
                  <div className="flex flex-col">
                    <span>{testimonial.userName}</span>
                    <span>{testimonial.userPosition}</span>
                  </div>
                </div>
                <div>
                  <img src={Quotes} alt="quotes" />
                </div>
              </div>

              <span>{testimonial.quote}</span>

              <div className="flex gap-2">
                {Array.from({ length: testimonial.stars }).map((_, index) => (
                  <img key={index} src={Star} alt={`star-${index + 1}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
