import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { IoLogoTwitter, IoMenu, IoSearch } from 'react-icons/io5'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
    {/* <header   className="z-50  absolute w-screen bg-[#0000004a]">
    <div className="container mx-auto">
      <ul className="text-md md:flex hidden opacity-100 text-white items-center justify-evenly">
        <li>
          Home
        </li>
        <li>
          Home Design
        </li>
        <li>
         Display Home
        </li>
        <li className="text-[50px] font-mono">
          B2N
        </li>
        <li>
         Building with us
        </li>
        <li>
         Contact us
        </li>
        <li className="flex items-center  justify-between">
          <div><Image  alt="menu" className="mr-4" src={'/header/Group.png'} width={20} height={20}/></div>
          <div className=" rounded-full  !bg-[#ffffff4a] p-3">
           <IoSearch className="text-lg"/>
          </div>
        </li>
      </ul>
      <ul className="text-md md:hidden flex px-3 lg:px-0 opacity-100 text-white container items-center justify-between">
        <li>
          <IoMenu  className="text-3xl"/>
        </li>
      <li className="text-[50px] font-mono">
          B2N
        </li>
        <li className="flex items-center  justify-between">
          <div><Image  alt="menu" className="mr-4" src={'/header/Group.png'} width={20} height={20}/></div>
          <div className=" rounded-full  !bg-[#ffffff4a] p-3">
           <IoSearch className="text-lg"/>
          </div>
        </li>
      </ul>
    </div>
</header> */}
{children}
{/* <footer  style={{backgroundImage:'/Footer/modern.jpg'}} className="  flex  h-full bg-[#202020] relative   z-10 border-t-[#AC8E46]   border-t-4 opacity-90   ">
<img src=" /Footer/modern.jpg"  className="absolute opacity-10  w-full h-full" />
<div className=" grid mt-12 grid-cols-5 px-2 container mx-auto text-[#E0DFDF]  text-[16px] ">


  <div  className="  place-items-start h-fit grid grid-cols-3      mx-auto col-span-5 lg:col-span-3">
    <div  className="sm:min-h-[250px] min-h-48  flex flex-col col-span-3 sm:col-span-1 justify-center" >

    <h2 className="text-7xl font-Playfair text-[#AC8E46] font-semibold">
      B2N
    </h2>
    <p  className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in nisi sed est eleifend tempus.</p>
    </div>
    <div className="footerList  col-span-3  sm:col-span-1" >
    <h3 className="text-2xl    text-[#FFFFFF] font-semibold">
     Quick Link
    </h3>
    <ul  className="">
      <li>
        <span/>
        Home
      </li>
      <li>
        <span/>
        House Design
      </li>
      <li>
        <span/>
      Display Homes
      </li>
      <li>
        <span/>
      Building with Us
      </li>
      <li>
        <span/>
      Contact Us
      </li>
    </ul>
    </div>
    <div className="footerList col-span-3 sm:col-span-1 ">
    <h3 className="text-2xl text-[#FFFFFF]  font-semibold">
     Company
    </h3>
    <ul>
      <li>
        <span/>
        Our Blog
      </li>
      <li>
        <span/>
        Careers
      </li>
      <li>
        <span/>
      Disclaimer
      </li>
    </ul>
    </div>

    <div className="col-span-3 mt-12 w-full  border-[#969696] py-2 text-center border-y">
     Copyright © 2025 <span className="text-[#AC8E46]">B2N</span>. All rights reserved.
    </div>
    <div className="col-span-3 flex  justify-evenly w-full   py-2 text-center ">
      <Link  href={'#'}>Privacy Policy</Link>
      <Link  href={'#'}>Term of Service</Link>
    </div>
    <div className="w-full lg:py-8  pt-6 col-span-3 flex justify-center gap-3">
      <div className="p-3 hover:bg-[#AC8E46] hover:hover:border-[#AC8E46] border-[#FFFFFF] border rounded-full">
        <FaFacebookF/>

      </div>
      <div className="p-3 hover:bg-[#AC8E46] hover:hover:border-[#AC8E46] border-[#FFFFFF] border rounded-full">
        <FaInstagram/>

      </div>
      <div className="p-3 hover:bg-[#AC8E46] hover:hover:border-[#AC8E46]  border-[#FFFFFF] border rounded-full">
        <IoLogoTwitter/>

      </div>
      <div className="p-3 hover:bg-[#AC8E46] hover:hover:border-[#AC8E46] border-[#FFFFFF] border rounded-full">
        <FaLinkedin/>

      </div>
    </div>
  </div>
  


</div>
</footer> */}
</>
  )
}

export default layout
