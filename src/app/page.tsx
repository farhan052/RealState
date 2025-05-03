'use client'
const Carousel = dynamic(() => import("@/@components/Carousel"),
  {
    loading: () => <></>
  });
const ContactForm = dynamic(() => import("@/@components/ContactForm"), {
  loading: () => <></>
});
const FeedbackCarosel = dynamic(() => import("@/@components/FeedbackCarosel"), {
  loading: () => <></>
});
const HillSideSanctury  =dynamic(() => import("@/@components/HillSideSanctury"),{
  loading: () => <></>
});
const Image = dynamic(() => import("next/image"),{
  loading: () => <></>
});
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoIosPeople, IoIosPerson, IoIosTrophy, } from "react-icons/io";
import { IoCalendar, IoClose } from "react-icons/io5";

import { LuBath, LuBedDouble, LuSquareActivity, LuUserRound } from "react-icons/lu";

export default function Home() {

  const [state, setstate] = useState<any>(false);
  return (
    <>
      <main className="   bg-[#202020] text-white">
     {state && <div className="fixed  container py-8 overflow-auto flex items-center z-[999] top-0 bg-[#20202062]  w-screen h-screen">
       
      <div
            className=" z-30 max-w-md relative container mx-auto px-2  opacity-100  p-2  rounded-2xl bg-white  overflow-hidden shadow-lg"
          >

            <IoClose  onClick={()=>setstate(false)} className="text-4xl  absolute  right-5  text-red-500"/>

            <div className="border-[1.5px] py-8 lg:pb-14 px-14 rounded-2xl border-[#2C462B] ">
              <div className="font-bold font-Playfair  text-4xl text-black ">Start Your Hillside Journey Today.</div>

       <ContactForm />
        </div>
      </div>
        </div>}
        {/* </div> */}
        <section className="relative mx-auto overflow-hidden w-full  aspect-square  sm:aspect-[4/3] lg:aspect-[16/6.5]">
          <Image quality={100}
            alt="beautiful-shot-big-farmhouse-clear-blue"
            className=" w-full owl-lazy aspect-square  sm:aspect-[4/3] lg:aspect-[16/7]  absolute"
            src={'/Banner/image_256.png'}
            width={1000} height={1000} />
          <div className="z-10 bg-transparent text-center w-9/12 md:w[550px] left-[50%]   absolute -translate-x-[50%] -translate-y-1/2 top-[50%]">
            <h1 className="  font-Playfair sm:text-5xl  line-clamp-3   text-3xl ">Elevate Your Lifestyle<br />Hillside Homes Crafted with Expertise</h1>
            <p className="md:text-xl md:py-5  line-clamp-4 py-2 sm:text-lg text-xs">
              Discover bespoke villas designed to harmonize with the breathtaking landscapes of the UK hills. We build more than homes we create sanctuaries.
            </p>
            <button  onClick={()=>setstate(true)}   className="md:px-6 mt-5  md:mt-0 md:py-3 py-2 px-4 md:text-base text-sm rounded-3xl inline-flex bg-[#fdfbfb73]">
              Explore Our Properties  <FaArrowUp className="text-[#fffff] m-1 md:text-[18px] text-[12px] rotate-45" />
            </button>
          </div>

        </section>


        <section className="w-full block    aspect-square  sm:aspect-[4/3] lg:aspect-[16/5] mx-auto py-12 lg:py-24 container   ">

          <div className="flex mx-2 md:px-0  items-center">
            <span className=" hidden md:block w-[150px]  mr-[70px] border h-0 border-white"></span>
            <h4 className="md:text-5xl  font-Playfair text-3xl">A Builder You Can Trust,  <span className="text-[#AC8E46]">Rooted in the Hills.</span></h4>
          </div>

          <div className="lg:pt-[100px] pt-7 flex lg:flex-row flex-col gap-8 lg:gap-[100px] text-[20px]">
            <Image alt="hhsh" loading="eager" height={'511'} className=" aspect-[5/3] lg:aspect-[16/8] w-full" src={'/Why_Build/image_259.jpg'} width={'501'} />
            <div className=" flex pb-5 lg:pb-10  gap-y-5 lg:pt-[20px] mx-4 sm:mx-0 flex-col justify-between" >
              <p style={{ lineHeight: 1.3 }} className=" pb-3 sm:mb-0 md:w-2/3  ">We are a dedicated team of architects, engineers, and builders specializing in the unique challenges and rewards of hillside property development. With years of experience and a deep understanding of the region, we craft homes that are both luxurious and sustainable.</p>
              <p style={{ lineHeight: 1.3 }} className="md:w-2/3   ">Our commitment to quality, transparency, and client satisfaction sets us apart. We believe in building lasting relationships, not just houses. We're passionate about preserving the natural beauty of the hills while creating exceptional living spaces.</p>
              <ul className="text-[13px] lg:text-[15px] list-disc mx-3">
                <li>
                  Expertise in hillside construction and engineering.
                </li>
                <li>
                  Sustainable and eco-friendly building practices.
                </li>
                <li>
                  Bespoke designs tailored to your unique vision.
                </li>
                <li>
                  Transparent communication and project management.
                </li>
                <li>
                  Dedication to quality craftsmanship and lasting value.
                </li>

              </ul>
              <div className="grid place-items-start grid-cols-2 w-full sm:p-4 sm:py-0 ">

                <Image alt="hhsh" height={145}
                  src={'/Why_Build/image_261.png'}
                  className="md:h-[145px] md:w-[150px] aspect-[150/145]  h-28 w-32"
                  width={150} />

                <Image alt="hhsh" height={150} src={'/Why_Build/image_260.jpg'}
                  className="lg:w-[300px] w-[150px]  md:w-[225px] lg:aspect-[1.7/1]  aspect-[3/2]"
                  width={300} />
              </div>
            </div>
          </div>
        </section>

        <section className="    mx-auto  sm:aspect-[5/3] lg:aspect-[16/5]  ">
          <Carousel />
        </section>

        <section className=" w-screen    md:flex  px-4 sm:px-0   mx-auto py-8 md:py-12  lg:pt-32 lg:pb-16 container   ">

          <HillSideSanctury />
          <div className="lg:w-1/2 hidden lg:flex relative">

            <div className="  absolute  -top-[10%]  left-[35%]  rounded-full aspect-square border border-[#fff] w-[728px]">
              <div className="flex  aspect-square relative w-full">

                <div className="w-[32px]  border-[#020202] border-4  top-[2%] left-[30%]  rounded-full bg-[#AC8E46] -translate-x-1/2  absolute aspect-square  " />
                <div style={{ backgroundImage: '/Connecting/image_245.jpg' }} className="max-w-[460px]  border-[.125px]  p-1 border-[#AC8E46] w-1/2 rounded-full  top-[45%] right-2/3 -translate-y-1/2 absolute aspect-square  ">
                  <img className="w-full rounded-full aspect-square" src="/Connecting/image_245.jpg" />
                </div>
                <div className="w-[158px]  rounded-full -bottom-[0px]  left-[33%]  -translate-x-[100%] absolute aspect-square  ">
                  <img className="w-full rounded-full aspect-square" src="/Connecting/image_246.jpg" />

                </div>
                <div className="w-[32px]  rounded-full bg-[#AC8E46]  -bottom-[15px]  left-[45%]  translate-x-[100%] absolute aspect-square " />


              </div>
            </div>

          </div>


        </section>


        <section className=" w-screen px-4 sm:px-0  aspect-[16/9] mx-auto py-8 lg:py-16 container   ">

          <div className="  items-center">
            <h4 className="text-5xl font-Playfair">Our Popular  <span className="text-[#AC8E46]">Property Design</span></h4>
            {/* <p  className="mt-6 text-[15px] lg:pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius sapien id dignissim maxi mus. Maecenas <br/> suscipit, mi non egestas euismod, urna arcu consequat risus, at commodo erat diam at est.</p> */}

          </div>

          <div className="lg:pt-[70px] pt-8 grid  gap-[30px] text-[20px]">

            <div className="border  border-[#3D3D3D]  grid grid-cols-5 gap-5 lg:gap-11 p-2">
              <div className="relative  col-span-5 lg:col-span-2 max-w-[600px] lg:min-w-[350px]  ">

                <Image alt="hhsh" height={'400'} className="rounded-lg !w-full  aspect-[3/2]" src={'/our_popular/image_247.jpg'} width={'620'} />
                <span className="absolute top-3  text-black left-3 rounded-full text-[15px] font-medium px-4 py-2 bg-[#D9D9D9]"> $ 10,000</span>
              </div>
              <div className="lg:pr-32 col-span-5 lg:col-span-3 my-auto">
                <h3 className="text-3xl font-medium">Panoramic Views</h3>
                <div className=" flex gap-3 pt-2 items-center text-[16px]">
                  <FiMapPin className="text-[#AC8E46] text-[18px]" />Pineville, North Carolina
                </div>
                <p className="sm:py-6 py-3 line-clamp-3 text-[15px]"> Expansive windows maximize breathtaking hillside vistas.</p>

                <div className="border-t text-[15px] border-[#7E7E7E] sm:border-b border-dashed grid  grid-cols-3  items-center sm:gap-0 gap-2 py-2 ">
                  <div className=" flex justify-evenly  col-span-3 sm:col-span-2 ">

                    <div className="flex items-center gap-2">
                      <LuBedDouble className="text-[18px] text-[#AC8E46]" /> 6 Beds
                    </div>
                    |
                    <div className="flex items-center gap-2">
                      <LuBath className="text-[18px] -scale-x-100  text-[#AC8E46]" /> 2 Baths
                    </div>
                    |
                    <div className="flex items-center gap-2">
                      <LuSquareActivity className="text-[18px] text-[#AC8E46]" /> 600 Sqft
                    </div>
                  </div>
                  <div className="border-dashed pt-3 sm:pt-0 col-span-3 sm:col-span-1 border-[#7E7E7E] w-full  flex justify-center mx-auto border-t sm:border-t-0 sm:border-l">
                    <button className="border-[#AC8E46] mx-auto flex border  rounded-full my-auto py-2 px-5">
                      View Details<FaArrowUp className="text-[#AC8E46] m-0.5 text-[18px] rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border  border-[#3D3D3D]  grid grid-cols-5 gap-5 lg:gap-11 p-2">
              <div className="relative  col-span-5 lg:col-span-2 max-w-[600px] lg:min-w-[350px]  ">

                <Image alt="hhsh" height={'400'} className="rounded-lg !w-full  aspect-[3/2]" src={'/our_popular/image_248.jpg'} width={'620'} />
                <span className="absolute top-3  text-black left-3 rounded-full text-[15px] font-medium px-4 py-2 bg-[#D9D9D9]"> $ 10,000</span>
              </div>
              <div className="lg:pr-32 col-span-5 lg:col-span-3 my-auto">
                <h3 className="text-3xl font-medium">Sustainable Integration</h3>
                <div className=" flex gap-3 pt-2 items-center text-[16px]">
                  <FiMapPin className="text-[#AC8E46] text-[18px]" />Pineville, North Carolina
                </div>
                <p className="sm:py-6 py-3 text-[15px]"> Eco-friendly materials and energy-efficient designs.</p>

                <div className="border-t text-[15px] border-[#7E7E7E] sm:border-b border-dashed grid  grid-cols-3  items-center sm:gap-0 gap-2 py-2 ">
                  <div className=" flex justify-evenly  col-span-3 sm:col-span-2 ">

                    <div className="flex items-center gap-2">
                      <LuBedDouble className="text-[18px] text-[#AC8E46]" /> 6 Beds
                    </div>
                    |
                    <div className="flex items-center gap-2">
                      <LuBath className="text-[18px] -scale-x-100  text-[#AC8E46]" /> 2 Baths
                    </div>
                    |
                    <div className="flex items-center gap-2">
                      <LuSquareActivity className="text-[18px] text-[#AC8E46]" /> 600 Sqft
                    </div>
                  </div>
                  <div className="border-dashed pt-3 sm:pt-0 col-span-3 sm:col-span-1 border-[#7E7E7E] w-full  flex justify-center mx-auto border-t sm:border-t-0 sm:border-l">
                    <button className="border-[#AC8E46] mx-auto flex border  rounded-full my-auto py-2 px-5">
                      View Details<FaArrowUp className="text-[#AC8E46] m-0.5 text-[18px] rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border  border-[#3D3D3D]  grid grid-cols-5 gap-5 lg:gap-11 p-2">
              <div className="relative  col-span-5 lg:col-span-2 max-w-[600px] lg:min-w-[350px]  ">

                <Image alt="hhsh" height={'400'} className="rounded-lg !w-full  aspect-[3/2]" src={'/our_popular/image_249.jpg'} width={'620'} />
                <span className="absolute top-3  text-black left-3 rounded-full text-[15px] font-medium px-4 py-2 bg-[#D9D9D9]"> $ 10,000</span>
              </div>
              <div className="lg:pr-32 col-span-5 lg:col-span-3 my-auto">
                <h3 className="text-3xl font-medium">Bespoke Luxury</h3>
                <div className=" flex gap-3 pt-2 items-center text-[16px]">
                  <FiMapPin className="text-[#AC8E46] text-[18px]" />Pineville, North Carolina
                </div>
                <p className="sm:py-6 py-3 text-[15px]">Customizable layouts and high-end finishes.</p>

                <div className="border-t text-[15px] border-[#7E7E7E] sm:border-b border-dashed grid  grid-cols-3  items-center sm:gap-0 gap-2 py-2 ">
                  <div className=" flex justify-evenly  col-span-3 sm:col-span-2 ">

                    <div className="flex items-center gap-2">
                      <LuBedDouble className="text-[18px] text-[#AC8E46]" /> 6 Beds
                    </div>
                    |
                    <div className="flex items-center gap-2">
                      <LuBath className="text-[18px] -scale-x-100  text-[#AC8E46]" /> 2 Baths
                    </div>
                    |
                    <div className="flex items-center gap-2">
                      <LuSquareActivity className="text-[18px] text-[#AC8E46]" /> 600 Sqft
                    </div>
                  </div>
                  <div className="border-dashed pt-3 sm:pt-0 col-span-3 sm:col-span-1 border-[#7E7E7E] w-full  flex justify-center mx-auto border-t sm:border-t-0 sm:border-l">
                    <button className="border-[#AC8E46] mx-auto flex border  rounded-full my-auto py-2 px-5">
                      View Details<FaArrowUp className="text-[#AC8E46] m-0.5 text-[18px] rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="border  border-[#3D3D3D]  grid grid-cols-5 gap-5 lg:gap-11 p-2">
              <div className="relative  col-span-5 lg:col-span-2 max-w-[600px] lg:min-w-[350px]  ">

                <Image alt="hhsh" height={'400'} className="rounded-lg !w-full  aspect-[3/2]" src={'/our_popular/image_250.jpg'} width={'620'} />
                <span className="absolute top-3  text-black left-3 rounded-full text-[15px] font-medium px-4 py-2 bg-[#D9D9D9]"> $ 10,000</span>
              </div>
              <div className="lg:pr-32 col-span-5 lg:col-span-3 my-auto">
                <h3 className="text-3xl font-medium">Hillside Engineering</h3>
                <div className=" flex gap-3 pt-2 items-center text-[16px]">
                  <FiMapPin className="text-[#AC8E46] text-[18px]" />Pineville, North Carolina
                </div>
                <p className="sm:py-6 py-3 text-[15px]">Expertly designed for stability and longevity.</p>

                <div className="border-t text-[15px] border-[#7E7E7E] sm:border-b border-dashed grid  grid-cols-3  items-center sm:gap-0 gap-2 py-2 ">
                  <div className=" flex justify-evenly  col-span-3 sm:col-span-2 ">

                    <div className="flex items-center gap-2">
                      <LuBedDouble className="text-[18px] text-[#AC8E46]" /> 6 Beds
                    </div>
                    |
                    <div className="flex items-center gap-2">
                      <LuBath className="text-[18px] -scale-x-100  text-[#AC8E46]" /> 2 Baths
                    </div>
                    |
                    <div className="flex items-center gap-2">
                      <LuSquareActivity className="text-[18px] text-[#AC8E46]" /> 600 Sqft
                    </div>
                  </div>
                  <div className="border-dashed pt-3 sm:pt-0 col-span-3 sm:col-span-1 border-[#7E7E7E] w-full  flex justify-center mx-auto border-t sm:border-t-0 sm:border-l">
                    <button className="border-[#AC8E46] mx-auto flex border  rounded-full my-auto py-2 px-5">
                      View Details<FaArrowUp className="text-[#AC8E46] m-0.5 text-[18px] rotate-45" />
                    </button>
                  </div>
                </div>
              </div>
            </div>







          </div>
        </section>


        <section className=" w-screen px-4 sm:px-0 aspect-square md:aspect-[16/9] mx-auto py-8 lg:py-16 container   ">

          <div className="   md:grid place-items-center">
            <h4 className="md:text-5xl font-Playfair text-3xl">Why Build Your <span className="text-[#AC8E46]"> Hillside Home with Us?</span></h4>
            <p className="mt-6 text-[15px]  text-[#ECECEC] text-center md:max-w-[850px] lg:px-12">Choosing a builder for your hillside home is a significant decision. We understand the importance of trust, reliability, and expertise. We are committed to providing a seamless and stress-free building experience.</p>

          </div>

          <div className="lg:mt-[100px] mt-5   container relative   md:grid   gap-[30px] text-[20px]">
            <div
              style={{ borderImage: ' linear-gradient(to bottom, rgba(0, 0, 0, 0),white,white, rgba(0, 0, 0, 0)) 1 100%' }}
              className="absolute left-1/2 pt  -translate-x-1/2  h-full  border-[1.5px]"
            >
              <div className="relative lg:py-0 py-[70px] h-full">
                <div
                  className="  absolute     flex  top-[17%]  -translate-y-[50%] -translate-x-4 sm:-translate-x-6  lg:-translate-x-8 "
                >
                  <div className="sm:border-4 text-base  lg:p-4 border-2   h-fit p-1 sm:p-2  rounded-full bg-[#AC8E46] border-[#f0ede538]">
                    <img src="/Builder/20-Worker.svg" className="aspect-square md:w-6  sm:w-4 !max-w-6"  />
                  </div>

                  <div className="md:pl-8 pl-3  md:w-[300px] lg:w-[350px]">
                    <h3 className="lg:text-2xl w-[150px]  md:w-full md:text-lg text-xs font-medium">Highly skilled and experienced team</h3>
                    {/* <p className=" text-[9px]  md:text-[13px] lg:text-[15px] line-clamp-2  text-[#ECECEC]"></p> */}
                  </div>
                </div>
                <div
                  className="  absolute    flex   top-[37%]  -translate-y-[50%] -translate-x-4  sm:-translate-x-6  lg:-translate-x-8 "
                >
                  <div className="sm:border-4 text-base  lg:p-4 border-2   h-fit p-1 sm:p-2  rounded-full bg-[#AC8E46] border-[#f0ede538]">
                    <img src="/Builder/Vector.svg" className="md:w-6  sm:w-4"/>
                  </div>

                  <div className="md:pl-8 pl-3 w-[150px] md:w-[300px] lg:w-[400px]">
                    <h3 className="lg:text-2xl  md:text-lg text-xs  font-medium">Commitment to quality and attention to detail</h3>
                    {/* <p className=" text-[9px]  md:text-[13px] lg:text-[15px]   text-[#ECECEC]"></p> */}
                  </div>
                </div>
                <div
                  className="  absolute flex   top-[57%] lg:top-[68%]  -translate-y-[50%]  -left-[50vw] md:-left-[300px] lg:-left-[400px]  lg:-translate-x-7  md:-translate-x-5 sm:translate-x-5  translate-x-4 "
                >
                  <div className="pl-8  max-w-full md:w-[300px] lg:w-[400px]">
                    <h3 className="lg:text-2xl  md:text-lg text-xs   font-medium">Transparent communication and project updates</h3>
                    {/* <p className=" text-[12px] md:w-2/3 md:text-[13px] lg:text-[15px]  line-clamp-3   text-[#ECECEC]"></p> */}
                  </div>
                  <div className="sm:border-4  text-base   lg:p-4  border-2     h-fit p-1 sm:p-2  rounded-full bg-[#AC8E46] border-[#f0ede538]">
                    <img src="/Builder/Group.svg"  className="aspect-square md:w-6  sm:w-4 !max-w-6" />
                  </div>

                </div>
                <div
                  className="  absolute     flex  top-[82%] md:top-[88%]   md:-left-[300px] -left-[50vw] lg:-left-[400px] -translate-y-[50%] lg:-translate-x-8 md:-translate-x-6 sm:-translate-x-0  translate-x-4 "
                >
                  <div className="pl-8 max-w-full  md:w-[300px] lg:w-[400px]">
                    <h3 className="lg:text-2xl  md:text-lg text-xs   font-medium">Comprehensive warranties and after-sales support</h3>
                    {/* <p className=" md:w-2/3 line-clamp-3 md:text-[13px] lg:text-[15px]   text-[12px]  text-[#ECECEC]"></p> */}
                  </div>
                  <div className="sm:border-4 lg:p-4 text-base   border-2     h-fit p-1 sm:p-2  rounded-full bg-[#AC8E46] border-[#f0ede538]">
                    <img src="/Builder/20-Worker.svg" className="aspect-square md:w-6  sm:w-4 !max-w-6" />
                    
                  </div>

                </div>



              </div>
            </div>
            <div className=" grid grid-cols-2  py-16 lg:py-0 lg:gap-11 ">
              <div className="relative  flex-1  flex  justify-start lg:justify-center  max-w-1/2 lg:min-w-[350px]  ">

                <Image alt="hhsh" height={'400'} className="rounded-full w-4/6  aspect-square" src={'/Builder/image_251.jpg'} width={'620'} />
                <Image alt="hhsh" height={'400'} className="rounded-full w-1/3   border-5 lg:border-[20px]   border-[#202020] bottom-0 right-[15%]  lg:right-[5%] absolute aspect-square" src={'/Builder/image_253.jpg'} width={'620'} />
              </div>
            </div>
            <div className=" flex  justify-end  py-16   lg:p-2">
              <div className=" flex-1"></div>
              <div className="relative  flex-1  flex   items-center justify-end  md:justify-center  max-w-1/2  lg:min-w-[350px]  ">

                <Image alt="hhsh" height={'400'} className="rounded-full w-4/6  aspect-square" src={'/Builder/image_252.jpg'} width={'620'} />
                <Image alt="hhsh" height={'400'} className="rounded-full w-1/3 border-4 lg:border-[20px]   border-[#202020]  absolute md:top-0 -top-[10%] md:right-[5%]   -right-[5%]  aspect-square" src={'/Builder/image_68.jpg'} width={'620'} />

              </div>
            </div>







          </div>
        </section>


        <section className="relative w-full h-full min-h-[350px] mx-auto  pt-10 bg-[#A7873B]    ">
          <div className="overflow-visible     lg:absolute bottom-0 w-full  h-full place-items-baseline  px-2 md:px-0 mx-auto grid lg:grid-cols-2">


            <div className=" ">
              <Image
                alt="beautiful-shot-big-farmhouse-clear-blue"
                className="w-full lg:max-w-[600px]  md:min-h-[500px]    bottom-0  lg:aspect-1/2 lg:absolute"
                src={'/Dream/feafa.png'}
                width={500} height={500} />
            </div>

            <div className="z-10  lg:min-h-[300px] md:h-full flex flex-col  items-start  justify-center  relative  text-start w-9/12 md:w[400px]    ">
              <Image
                alt="beautiful-shot-big-farmhouse-clear-blue"
                className="w-full z-10 lg:max-w-[600px]  max-h-[90%]  bottom-0 opacity-40  absolute"
                src={'/Dream/Group.svg'} quality={100} width={500} height={500} />
              <div className="z-20 pt-4  pr-8 lg:pr-0 lg:pt-0 ">

                <h1 className="md:text-5xl sm:text-5xl text-2xl font-serif">Ready to Build your Dream Home?</h1>
                <h4 className="md:text-xl md:py-5  py-2 sm:text-lg text-xs">
                  Speak to us today.
                </h4>
                <button  onClick={()=>setstate(true)} className="md:px-6 z-10 mb-12 md:py-3 py-2 px-4 md:text-base text-black text-sm rounded-3xl inline-flex bg-[#fff]">
                  Contact Us <FaArrowUp className=" m-1 md:text-[18px] text-[12px] rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </section>


        <section className=" w-full relative container mx-auto  lg:py-32   md:pt-20 py-8  ">
          <div className="overflow-visible  px-2 md:px-0 grid md:grid-cols-2">


            <div className="   px-2 col-span-2 lg:col-span-1 ">
              <Image alt="beautiful-shot-big-farmhouse-clear-blue"
                className="   rounded-3xl z-10 w-full md:max-w-[600px] max-w-full  bottom-0  aspect-[4/2] "
                src={'/Feedback/vertical-shot-walkie-talkie-tower-buildings-london-england.jpg'}
                width={500} height={500} />
            </div>
            <div className="z-10 col-span-2 lg:col-span-1 relative  text-start md:w-9/12 md:w[400px] lg:py-5 py-3  ">
              <h4 className=" lg:text-5xl font-Playfair  md: text-4xl font-semibold mb-2 ">What Our  <span className="  text-[#AC8E46]">Clients Say.</span></h4>
              <p>Quotes from satisfied homeowners: Highlight positive experiences and feedback.</p>

            </div>

            <div className=" lg:absolute  overflow-hidden md:overflow-visible  col-span-2   lg:bottom-0   lg:w-3/4  bottom-0  left-1/4">
              <FeedbackCarosel />
            </div>




          </div>
        </section>


        <section className="relative w-full container  lg:py-11   gap-y-8  md:gap-y-16 mx-auto  grid md:grid-cols-2   grid-cols-1  ">
          <div className="  col-span-2 text-center  ">
            <h4 className=" font-Playfair text-5xl">Latest Blogs &   <span className="text-[#AC8E46]">Insights</span></h4>
            <p className="mt-6 text-[15px] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius sapien id dignissim maxi mus. Maecenas <br /> suscipit, mi non egestas euismod, urna arcu consequat risus, at commodo erat diam at est.</p>

          </div>

          <div className=" px-5  md:col-span-1  col-span-2 ">
            <Image alt="beautiful-shot-big-farmhouse-clear-blue2" className="w-full pb-3 aspect-[2/1] md:aspect-[4/2] rounded-3xl  " src={'/Blogs/image_254.jpg'} width={500} height={500} />
            <h4 className=" text-3xl">Vestibulum ante ipsum primis in faucibus orci luctus et.</h4>
            <p className="   py-2 text-[15px] lg:pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius sapien id dignissim maxi mus. Maecenas <br /> suscipit, mi non egestas euismod, urna arcu consequat risus, at commodo erat diam at est.</p>

            <div className="md:text-[13px] flex  gap-2 items-center text-[11px] text-[#AC8E46]">
              <IoCalendar className="text-sm" /> March 6, 2023
            </div>
          </div>
          <div className=" px-5   md:col-span-1  col-span-2">
            <Image alt="beautiful-shot-big-farmhouse-clear-blue"
              className="w-full pb-3 aspect-[2/1] md:aspect-[4/2] rounded-3xl"
              src={'/Blogs/image_255.jpg'}
              width={500} height={500} />
            <h4 className=" text-3xl">Vestibulum ante ipsum primis in faucibus orci luctus et.</h4>
            <p className="   py-2 text-[15px] lg:pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius sapien id dignissim maxi mus. Maecenas <br /> suscipit, mi non egestas euismod, urna arcu consequat risus, at commodo erat diam at est.</p>

            <div className="md:text-[13px] flex  gap-2 items-center text-[11px] text-[#AC8E46]">
              <IoCalendar className="text-sm" /> March 6, 2023
            </div>
          </div>
          <div className="  col-span-2 text-center  ">
            <button  onClick={()=>setstate(true)} className="border-[#AC8E46] mx-auto flex border  rounded-full my-auto py-2 px-5">
              Discover More<FaArrowUp className="text-[#AC8E46] m-0.5 text-[18px] rotate-45" />
            </button>
          </div>

        </section>
        <section className="  pt-8  mx-auto  max-h-fit  ">

          <Link
            href="https://www.google.com/maps/place/KORMAN/@30.3193116,-97.7609747,13.62z/data=!4m5!3m4!1s0x8644ca873856164f:0x59dacdd4e3a7ac7c!8m2!3d30.3216868!4d-97.7390392?shorturl=1"
            data-uw-rm-brl="PR"
            data-uw-original-href="https://www.google.com/maps/place/KORMAN/@30.3193116,-97.7609747,13.62z/data=!4m5!3m4!1s0x8644ca873856164f:0x59dacdd4e3a7ac7c!8m2!3d30.3216868!4d-97.7390392?shorturl=1"
            aria-label="google.com"
            data-uw-rm-empty-ctrl=""
            style={{ height: '100%' }}
          >
            <iframe
              className=" w-full lg:h-[450px] mt-8  lg:pr-2"
              allowFullScreen
              // height="500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223978.8022569218!2d77.22987184689994!3d28.69955288465399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1744329833462!5m2!1sen!2sin"
              width="100%"
              title="google"
              data-uw-rm-iframe="gn"
            />
          </Link>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223978.8022569218!2d77.22987184689994!3d28.69955288465399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1744329833462!5m2!1sen!2sin" width="100%"  height={'100%'}  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
        </section>

        <section className="  mx-auto container relative px-2 sm:px-0 py-8 lg:py-0">
          <div
            className=" z-30 max-w-md   right-[1%]  container mx-auto px-2 lg:absolute  -top-10 opacity-100  p-2  lg:p-0 rounded-2xl bg-white  overflow-hidden shadow-lg"
          >

            <div className="border-[1.5px] py-8 lg:pb-14 px-14 rounded-2xl border-[#2C462B] ">
              <div className="font-bold font-Playfair  text-4xl text-black ">Start Your Hillside Journey Today.</div>


              <ContactForm />

            </div>


          </div>
        </section>

      </main>
    </>
  );
}
