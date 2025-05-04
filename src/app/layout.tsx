import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import { IoLogoTwitter, IoLogoXbox, IoMenu, IoSearch } from "react-icons/io5";
import { IoLogoFacebook, IoLogoLinkedin } from "react-icons/io";
import { FaArrowUp, FaFacebook, FaFacebookF, FaForward, FaForwardStep, FaInstagram, FaLinkedin, FaTwitter, FaX } from "react-icons/fa6";
import Link from "next/link";
const Image =dynamic(()=>import("next/image"));

const geistSans = Playfair_Display({
    weight:['400','500','600'],
    subsets:['latin'],
    style:'normal'
});



export const metadata: Metadata = {
  title: " B2N",
  description: "The Future of Home Living ",
  // icons:'/Why_Build/image_259.jpg',
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-us">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap" rel="stylesheet"/>
      </head>
      <body
        className={`${geistSans} w-screen overflow-x-hidden font-normal font-Poppins  antialiased`}
      >

          {/* <header   className="z-50  absolute w-screen bg-[#0000004a]">
            <div className="container mx-auto">
              <ul className="text-md lg:grid py-4  grid-cols-7 hidden opacity-100 text-white items-center justify-evenly">
                <li>
                  Home
                </li>
                <li>
                  Home Design
                </li>
                <li>
                 Display Home
                </li>
                <li className="text-[50px] relative flex items-center   w-full  max-w-32 font-mono">
                  <img src="/logo.svg"  className=" aspect-square  lg:w-20 xl:w-28 absolute z-20 left-1/2 -translate-x-1/2 top-full" />
                </li>
                <li>
                 Building with us
                </li>
                <li>
                 Contact us
                </li>
                <li className="flex items-center  justify-evenly">
                  <div><Image  alt="menu" className="mr-4" src={'/header/Group.png'} width={20} height={20}/></div>
                  <div className=" rounded-full  !bg-[#ffffff4a] p-3">
                   <IoSearch className="text-lg"/>
                  </div>
                </li>
              </ul>
              <ul className="text-md lg:hidden flex px-3 lg:px-0 opacity-100 text-white container items-center justify-between">
               
              <li className="text-[50px] flex items-center  max-w-24  font-mono">
              <img src="/logo.svg"  className="my-2 w-16" />
                </li>
                <li className="flex items-center  justify-between">
                  <div><Image  alt="menu" className="mr-4" src={'/header/Group.png'} width={20} height={20}/></div>
                
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

              <img src="/header_logo.png"  className="my-2  w-[100px]" />
   
    <p  className="w-1/2 pt-3"> Trading Under Parakrith Ltd</p>
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
      </body>
      
    </html>
  );
}



