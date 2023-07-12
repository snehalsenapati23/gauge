import React from 'react'
import heroimg from "../assets/gaugeimage.webp"
const Hero = () => {
  return (
<>

<div className="text-center">Nav bar</div>
<div className="hero mt-14 ">

    <div className="conatiner md:flex place-content-center w-full ">
        <div className="left p-14 hover:translate-y-1 ease-in duration-300 w-6/11   ">
            <img src={heroimg}  alt="" />
        </div>
        <div className="right flex-col gap-5 content-around">
       <div className=" text-white text-6xl mt-12 text-center leading-tight  mr-0 align-middle">
       Gauge Water Purifier <br /> <span className='letters font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-pink-300 '>Puts An End </span> To RO Service <br /> Pain
       </div>
       <div className="ri-3 text-[#6b6b6b] text-center mt-3">Fully automatic water purifier provides the highest water savings while ensuring a <br /> seamless service experience.</div>
       <div className='text-center mt-7'><button className='btn bg-blue-500 rounded-full hover:bg-blue-600 text-white p-3 font-[700]  px-6 pt-3 pm-4'>Take a product Tour</button></div>
       <div className="text-[#b5b5b5] text-[1rem] text-center mt-9">Experience Convenience Like Never Before With Our Smart Water Purifier</div>
        </div>
    </div>
</div>
</>
    
    )
}

export default Hero