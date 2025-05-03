'use client'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { SiComma } from "react-icons/si";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {

  ssr: false,
});

const FeedbackCarosel = () => {
    const carouselConfig = {
       
        smartSpeed: 1000,
        loop: true,
        nav:true,
       
        // navText:['prev', 'next'],
        lazyLoad:true,
        items:3,
        dots: false,
        autoplay: true,
        gap:'20px',
        responsive: {
            0:{
              items: 1
            },
            540:{
              items: 2
            },
            992:{
              items: 3
            }
           
        },
        autoplayTimeout: 3000
      }
  return (
    
       <OwlCarousel allowFullScreen className="feedback-carousel  gap-4" {...carouselConfig}>

        <div style={{fontFamily:'Urbanist'}} className="md:px-5 px-2  CarouselItem   shadow-lg shadow-white  py-7 text-black bg-white m-10">
            <div  style={{marginBottom:'10px'}} className=" w-[40px]  flex  rounded-full   ">
              
            {/* bg-[#AC8E46] */}
            <span   style={{backgroundColor:'rgb(172, 142, 70 ,.2)',
                 transform:'rotate(180deg)'
            }} className=" flex   px-2   items-center  m-3 justify-around  w-14 rounded-full border  aspect-square gap-1 ">

             <SiComma className="   text-[#AC8E46]"/>
             <SiComma className=" text-[#AC8E46]"/>
            </span>
              
            </div>
          <p  style={{ paddingBottom:'16px'}} className=" line-clamp-4 font-Urbanist italic my-6"><i>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere justo vitae diam dignissim ornare. Sed eu leo non velit sodales fermentum. Mauris euismod lorem ac elit rutrum, in pellentesque turpis hendrerit.”</i></p>
           

           <div style={{marginTop:'15px'}}  className="flex">
            <span className="w-6 mt-1 border-2 border-black h-0"></span>
            <div>
                <h6 className="font-medium text-lg">Ross Taylor</h6>
                <p>Developer</p>
            </div>
           </div>
        </div>
       
        
  </OwlCarousel>
   
  )
}

export default FeedbackCarosel
