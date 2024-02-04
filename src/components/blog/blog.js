// import React from 'react'
// import Blog1 from "../../assets/blog1.png"
// import Calender from "../../assets/calender.png"

// const Blog = () => {
//   return (
//     <div className="flex items-center justify-center bg-white w-full min-h-screen">

// <div className="flex flex-col items-center justify-center bg-white w-full max-w-max min-h-screen">

    
//     <div className="flex flex-col gap-2">
//     <div className="flex w-[250px] h-[30px]">
//                 <div className="w-[4%] bg-yellow-200"></div>
//                 <div className="bg-[#E8E8E880]">
//                 <span className="text-black">Our Blog</span>
//                 </div>
               
//             </div>

//                 <span className="sub-heading">Our Latest News</span>


//     </div>


//     {/* bottom */}

//     <div className="flex flex-col ">

// {/* box1 */}

// <div className="flex items-center justify-between h-[350px] border-y border-[#D6D6D6] py-8 ">

//     {/* left */}
//     <img src={Blog1}/>

//     {/* center  */}
//     <div className="flex flex-col gap-2 items-center justify-center">
//         <img src={Calender} className="h-[40px] w-[40px]"/>
//         <span className="sub-heading">08</span>
//         <span className="contents">September</span>

//     </div>

 

//     {/* right */}

//     <div className=" border-[#D6D6D6] border-l flex flex-col h-full w-4/5 p-8 text-left">

//         <span className="text-2xl text-[#1C1F35] font-normal font-primary">Inland freight a worthy solution for your business</span>

//         <span className="contents">We are dedicated in creating added value for our customers by implementing modern technology in our work. </span>

//         <ul className="list-disc text-[#1C1F35] font-secondary font-medium text-base ">
//             <li>Urgent transport solutions</li>
//             <li>Reliable & experienced staffs</li>
//             <li>Urgent transport solutions</li>
//             <li>Reliable & experienced staffs</li>
          
//         </ul>

//     </div>

// </div>



// {/* box2 */}

// <div className="flex items-center justify-between h-[350px] border-y border-[#D6D6D6] py-8 ">

//     {/* left */}
//     <img src={Blog1}/>

//     {/* center  */}
//     <div className="flex flex-col gap-2 items-center justify-center">
//         <img src={Calender} className="h-[40px] w-[40px]"/>
//         <span className="sub-heading">08</span>
//         <span className="contents">September</span>

//     </div>

 

//     {/* right */}

//     <div className=" border-[#D6D6D6] border-l flex flex-col h-full w-4/5 p-8 text-left">

//         <span className="text-2xl text-[#1C1F35] font-normal font-primary">Inland freight a worthy solution for your business</span>

//         <span className="contents">We are dedicated in creating added value for our customers by implementing modern technology in our work. </span>

//         <ul className="list-disc text-[#1C1F35] font-secondary font-medium text-base ">
//             <li>Urgent transport solutions</li>
//             <li>Reliable & experienced staffs</li>
//             <li>Urgent transport solutions</li>
//             <li>Reliable & experienced staffs</li>
          
//         </ul>

//     </div>

// </div>




// {/* box3 */}

// <div className="flex items-center justify-between h-[350px] border-y border-[#D6D6D6] py-8 ">

//     {/* left */}
//     <img src={Blog1}/>

//     {/* center  */}
//     <div className="flex flex-col gap-2 items-center justify-center">
//         <img src={Calender} className="h-[40px] w-[40px]"/>
//         <span className="sub-heading">08</span>
//         <span className="contents">September</span>

//     </div>

 

//     {/* right */}

//     <div className=" border-[#D6D6D6] border-l flex flex-col h-full w-4/5 p-8 text-left">

//         <span className="text-2xl text-[#1C1F35] font-normal font-primary">Inland freight a worthy solution for your business</span>

//         <span className="contents">We are dedicated in creating added value for our customers by implementing modern technology in our work. </span>

//         <ul className="list-disc text-[#1C1F35] font-secondary font-medium text-base ">
//             <li>Urgent transport solutions</li>
//             <li>Reliable & experienced staffs</li>
//             <li>Urgent transport solutions</li>
//             <li>Reliable & experienced staffs</li>
          
//         </ul>

//     </div>

// </div>



//     </div>

      
//       </div>
      
//     </div>
//   )
// }

// export default Blog








import React from 'react';
import Blog1 from '../../assets/blog1.png';
import Calender from '../../assets/calender.png';
import ReadMore from "../../assets/readmore.jpg"

const blogPosts = [
  {
    id: 1,
    image: Blog1,
    date: '08 September',
    title: 'Inland freight a worthy solution for your business',
    content: 'We are dedicated to creating added value for our customers by implementing modern technology in our work.',
    points: [
      'Urgent transport solutions',
      'Reliable & experienced staffs',
      'Urgent transport solutions',
      'Reliable & experienced staffs',
    ],
  },
  {
    id: 2,
    image: Blog1,
    date: '08 September',
    title: 'Inland freight a worthy solution for your business',
    content: 'We are dedicated to creating added value for our customers by implementing modern technology in our work.',
    points: [
      'Urgent transport solutions',
      'Reliable & experienced staffs',
      'Urgent transport solutions',
      'Reliable & experienced staffs',
    ],
  },
  {
    id: 3,
    image: Blog1,
    date: '08 September',
    title: 'Inland freight a worthy solution for your business',
    content: 'We are dedicated to creating added value for our customers by implementing modern technology in our work.',
    points: [
      'Urgent transport solutions',
      'Reliable & experienced staffs',
      'Urgent transport solutions',
      'Reliable & experienced staffs',
    ],
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <div className="flex items-center justify-center bg-white w-full min-h-screen">
      <div className="flex flex-col items-center justify-center bg-white w-full max-w-max min-h-screen">
        {/* top */}
        <div className="flex flex-col">
          <div className="flex w-[250px] h-[30px]">
            <div className="w-[4%] bg-yellow-200"></div>
            <div className="bg-[#E8E8E880]">
              <span className="text-black">Our Blog</span>
            </div>
          </div>
          <span className="sub-heading">Our Latest News</span>
        </div>

        {/* Blog Posts middle section */}
        <div className="flex flex-col">
          {blogPosts.map((post,index) => (
            <div key={post.id} className="flex items-center justify-between h-[350px] border-y border-[#D6D6D6] py-8">
              {/* left */}
              <div className="relative">

              
              <img src={post.image} alt={`Blog ${post.id}`} className="w-full"/> 

                {/* Extra image above the second image */}
                {index === 1 && (
                <img src={ReadMore} alt="Extra Image" className=" w-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70" />
              )}
 
 </div>
              {/* center */}
              <div className="flex flex-col gap-2 items-center justify-center">
                <img src={Calender} className="h-[40px] w-[40px]" />
                <span className="sub-heading">{post.date}</span>
              </div>

              {/* right */}
              <div className="border-[#D6D6D6] border-l flex flex-col h-full w-4/5 p-8 text-left">
                <span className="text-2xl text-[#1C1F35] font-normal font-primary">{post.title}</span>
                <span className="contents">{post.content}</span>
                <ul className="list-disc text-[#1C1F35] font-secondary font-medium text-base ">
                  {post.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>


{/* last */}

<button className="button-layout">more blogs</button>

      </div>
    </div>
  );
};

export default Blog;
