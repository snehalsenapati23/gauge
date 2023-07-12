import React from 'react'
import img2 from '../assets/water-lg.webp'
import {BsShieldFillCheck} from 'react-icons/bs'
import {BiSolidCheckCircle} from 'react-icons/bi'

const Customer = () => {
  return (
   <>
   <div className="hero-2 mt-12">
<div className="container-2 md:flex w-full ">
<div className="left-2 w-1/2 mt-12 ">
<div className=" place-content-center mt-16 align-middle flex items-center ml-8  "><button className='shadow-[0_14px_26px_0_#d9e2f3] rounded-full p-3 pl-9 pr-9 flex'><BsShieldFillCheck style={{"color":"blue"}} className='m mr-3 mt-1' /> Customers’ Needs Above All Else </button></div>
<div className="text-5xl mt-[92px] ml-[65px]">Take Control <br />
<span className='text-[#ff5f55] '>Monitor Usage & Change Filters</span><br />
No Technician Needed</div>
<div className="ml-[60px] mt-[30px] text-[#6b6b6b]">We have crafted a product that addresses the real frustrations of a customer. The first step is to ensure there are zero service delays.</div>
<div className="head4 mt-[15px]"><span className='text-2xl flex ml-[60px]'><BiSolidCheckCircle className=' mr-[19px] mt-1' style={{'color':"green"}} />Smart Water Purifier With Self Servicing Capability</span> <br />
<span className='ml-[100px] opacity-[.67]'>Say goodbye to the hassle of scheduling a technician for purifier maintenance with our <br /><span className='opacity-[100] font-bold ml-[100px]'>self-replacing</span> filters.</span></div>

<div className="head4 mt-[15px]"><span className='text-2xl flex ml-[60px]'><BiSolidCheckCircle className=' mr-[19px] mt-1' style={{'color':"green"}} />Compensation For Service Delay</span> <br />
<span className='ml-[100px] opacity-[.67]'>You are entitled to a compensation of <span className='font-bold'>100 Rs/Day</span> if service is delayed for more than 24 hours.</span></div>

<div className='text-center mt-7'><button className='btn bg-blue-500 rounded-full  text-white p-3 font-[700]  px-6 pt-3 pm-4'>Next: Smart Water Conservation</button></div>
</div>




<div className="right-2 w-1/2">
    <img src={img2} className='p-14 hover:translate-y-1 ease-in duration-300 w-full ' alt="" />
</div>



</div>




   </div>
   
   
   
   
   </>
  )
}

export default Customer