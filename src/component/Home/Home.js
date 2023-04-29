import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
// import 'pure-react-carousel/dist/react-carousel.es.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"


import solar1 from '../images/solar1.jpg';
import solar2 from '../images/solar2.png';
import solar3 from '../images/solar3.jpg';
import solar4 from '../images/solar4.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
 
  


    const [img,setImg]=useState([])
    

    useEffect(()=>{
fetch('http://localhost:5000/getImage')
.then(res => res.json())
.then(data=>setImg(data ))
    } ,[])
console.log(img[0]?.image?.url)
  return (
    // Banner
    <div className='container mx-[30px] my-5 relative'>
      <div style={{position:'relative'}}>
      <button style={{position:'absolute',top:'46%',left:'44%'}} className="btn btn-primary rounded-3xl">Start your Journey</button>
  <div className='flex px-1 py-1' > 
    <img className='object-cover h-80 w-full' src={img[0]?.image?.url} alt="#"/> 
    
    <img className='object-cover h-80 w-full' src={img[1]?.image?.url} alt="#"/> 
  </div>
  <div className='flex px-1 py-1'> 
    <img className='object-cover h-80 w-full' src={img[2]?.image?.url} alt="#"/> 
    <img className='object-cover h-80 w-full' src={img[3]?.image?.url} alt="#"/> 
  </div>
</div>
<div>

</div>
   {/* <slider></slider> */}
<div>
<div>
        <h1 className="text-3xl text-black font-bold text-center mt-4">Our Clients</h1>
        <div className="lg:pl-10 hidden lg:flex mt-10">
      
      <Swiper
        modules={[Navigation, Pagination,  A11y, Autoplay]}
        spaceBetween={5}
        slidesPerView={6}
        autoplay ={{delay: 1000}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
    
        <SwiperSlide>
         
          <div className="col-1 w-1/2 ">
          <img className="w-auto pt-7 pb-8 bg-white p-2" src={solar1} alt="" />
          {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity w-full">
          <Link to="../Customer" > 
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ">
        Know Our Customer
      </button>
    </Link>
    </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
          <img className="w-auto pt-8 pb-8 bg-white p-2" src={solar2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
          <img className="w-auto bg-white p-2 pt-10 pb-10" src={solar3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="col-1 w-1/2">
          <img className="w-auto bg-white p-2" src={solar4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
        <div className="col-1 w-1/2">
            <img className="w-auto bg-white p-2 pt-3 pb-3" src={solar1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
        <div className="col-1 w-1/2">
            <img className="w-auto  pb-10" src={solar2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto pt-7 pb-8 bg-white p-2" src={solar3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto pt-8 pb-8 bg-white p-2" src={solar4} alt="" />
          </div>
          </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto bg-white p-2 pt-10 pb-10" src={solar1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto bg-white p-2" src={solar2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto bg-white p-2 pt-3 pb-3" src={solar3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto  pb-10" src={solar4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>



</div>

    </div>
  );
};

export default Home;