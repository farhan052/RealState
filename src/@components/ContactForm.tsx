'use client'
import React, { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ContactForm = () => {
    const [state, setstate] = useState({});
     const handleSubmit=(e :any) => {
         console.log(e)

         return false;
    
     }

    
  return (
      <form onSubmit={handleSubmit} className="relative text-black w-full  h-full mt-6 space-y-6">
                <div className="relative  ">
                   {/* <label className="absolute px-2 ml-2 -mt-3 font-medium z bg-white">Name</label> */}
                   <input type="text" className="block w-full   mt-2  bg-white border    placeholder:text-[16px] focus:outline-none focus:border-black" placeholder="Enter Your Name"/>
                   <span  className='text-red-500'></span>
                </div>
               
                <div className="relative">
                   {/* <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Email Address</label> */}
                   <span  className='text-red-500'></span>
                   <input type="text" className="block w-full     mt-2 text-base placeholder-gray-400 bg-white border  focus:outline-none focus:border-black" placeholder="Enter Your Email"/>
                </div>
                <div className="relative">
                   {/* <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Phone</label> */}
                   <select className="block w-full mt-2 text-base placeholder-gray-400 bg-white border  rounded-xl focus:outline-none focus:border-black" >
                    <option>New Build</option>
                   </select>
                </div>
                {/* <div className="relative">
                   <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Where do you want to build?</label>
                   <select  className="block w-full px-4 py-2 mt-2 text-base placeholder-gray-400 bg-white border  rounded-xl focus:outline-none focus:border-black" >
                    <option>Geeloong Region</option>
                   </select>
                </div> */}
                <div className="relative">
                   {/* <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Message</label> */}
                   <textarea  
                   className="block w-full  text-base placeholder-gray-400 bg-white border  rounded-xl focus:outline-none focus:border-black" placeholder="Enter Your Message"/>
                </div>
                <div className="text-black  col-span-2   ">
                        <button  style={{backgroundColor:'#2C462B'}} className="bg-[#2C462B] text-white  flex border  rounded-full my-auto py-2 px-5">
                               Submit<FaArrowUp  className=" m-0.5 text-[18px] rotate-45"/>
                         </button>
                      </div>
             </form>
  )
}

export default ContactForm
