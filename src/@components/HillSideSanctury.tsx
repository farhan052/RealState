'use client'
import React, { useState } from 'react'
import { GrDocumentText } from 'react-icons/gr'
import { HiOutlineBuildingOffice } from 'react-icons/hi2'
import { IoIosTrophy } from 'react-icons/io'
import { LuUserRound } from 'react-icons/lu'

const HillSideSanctury = () => {
const [hover, sethover] = useState<any>(0);

const handlehover =(e:any) =>{
    sethover(e)
}
  return (<>
  <div className="  lg:w-1/2">
       <h4 className="md:text-5xl  font-Playfair text-4xl">Discover Your Hillside Sanctuary
        {/* <br/><span className="text-[#AC8E46]"> home you love</span> */}
       </h4> 
       <p  className="mt-6  lg:pr-24">Explore our portfolio of meticulously designed villas, each offering panoramic views and a seamless connection to nature</p>
         
         <div className="grid discover md:pt-[70px]  pt-8 sm:grid-cols-2 grid-cols-1  sm:gap-4  md:gap-8 lg:gap-10 gap-y-4">

          <div onMouseOver={()=>sethover(1)} onMouseLeave={()=>sethover(0)} className="card   col-6">
            <div className={"p-2 w-14 relative aspect-square rounded-full "+(hover == 1 ?" ":"!bg-[#7d70363b]")}>
                <GrDocumentText className={"    absolute   right-[15%]  bottom-[15%]  text-5xl "+(hover == 1 ?" text-white":"text-[#ac8e46]")} />
             {/* <img src="/Connecting/document.png"  className="absolute  w-12 right-[15%] bottom-[15%]"/> */}
            </div>
            <p className="text-[20px] py-1 font-medium">Property Listings</p>
            <p className="text-[15px] font-normal">High-quality images and/or virtual tours</p>

          </div>
          <div onMouseOver={()=>sethover(2)} onMouseLeave={()=>sethover(0)} className="col-6 card">
            <div  className={"p-2 w-14  relative  aspect-square rounded-full "+(hover == 2 ?" ":"!bg-[#7d70363b]")}>
             <IoIosTrophy  className={"-rotate-45  absolute   right-0  bottom-0  text-6xl "+(hover == 2 ?" text-white":"text-[#ac8e46]")}/>
            </div>
            <p className="text-[20px] py-1 font-medium">Property name Key features</p>
            <p className="text-[15px] font-normal text-[#FFFFFF]"> panoramic views, open-plan living,
            sustainable materials</p>

          </div>
          <div onMouseOver={()=>sethover(3)} onMouseLeave={()=>sethover(0)}  className="col-6 card">
            <div  className={"p-2   relative w-14  aspect-square rounded-full "+(hover == 3 ?" ":"!bg-[#7d70363b]")}>
             <LuUserRound   className={"   absolute right-[10%] bottom-[10%]  text-6xl "+(hover == 3 ?" text-[#FFF]":"text-[#ac8e46]")}/>
            </div>
            <p className="text-[20px] py-1 font-medium">Floor plans and specifications.</p>
            {/* <p className="text-[15px] font-normal text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p> */}

          </div>
          <div onMouseOver={()=>sethover(4)} onMouseLeave={()=>sethover(0)}  className="col-6 col-6 card  ">
            <div  className={"p-2 w-14 relative aspect-square rounded-full "+(hover == 4 ?" ":"!bg-[#7d70363b]")}>
             <HiOutlineBuildingOffice    className={" text-6xl absolute right-[10%] bottom-[10%] "+(hover == 4 ?" text-[#FFF]":"text-[#ac8e46]")}/>
            </div>
            <p className="text-[20px] py-1 font-medium">Award wining home</p>
            {/* <p className="text-[15px] font-normal text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing.</p> */}

          </div>
          

         </div>
       </div>
  </>)
}

export default HillSideSanctury
