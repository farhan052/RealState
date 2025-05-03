'use client'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {

  ssr: false,
});

const Carousel = () => {

    const carouselConfig = {
       
        smartSpeed: 1000,
        loop: true,
        arrow:'false',
        nav:true,
        // navText:['prev', 'next'],
        lazyLoad:true,
        items:1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000
      }

  return (
    <OwlCarousel  className="main-carousel" {...carouselConfig}>
    <div><img data-src="/image_258.jpg"  className="sm:aspect-[5/3]  owl-lazy lg:aspect-[16/5]"/></div>
    <div><img data-src="/image_258.jpg" className="sm:aspect-[5/3]  owl-lazy lg:aspect-[16/5]"/></div>
    <div><img data-src="/image_258.jpg" className="sm:aspect-[5/3]  owl-lazy lg:aspect-[16/5]"/></div>
  </OwlCarousel>
  )
}

export default Carousel
