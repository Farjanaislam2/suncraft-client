import React, { useEffect, useState } from 'react';
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
import './home.css';
import { Button, Slide } from '@mui/material';
import nature from './Slider.json';
import { HiDotsVertical } from "react-icons/hi";


const Slider = () => {

  const [logo, setLogo] = useState([])

  const allImage = [{
    id: 1,
    'logoImage': solar1
  },
  {
    id: 2,
    'logoImage': solar2
  }
  ]

  useEffect(() => {
    fetch('http://localhost:5000/getLogo')
      .then(res => res.json())
      .then(data => setLogo(data))
  }, [])

  console.log(logo[0]?.image?.url)
  return (
    <div>
      <div>
        <h1 className="text-3xl text-black font-bold text-center mt-4">Our Clients</h1>
        <div className="lg:pl-10 hidden lg:flex mt-10">

          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={5}
            slidesPerView={6}
            autoplay={{
              disableOnInteraction: false,
              delay: 1000,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}

          >
            {logo.map((logo, index) =>

              <SwiperSlide key={index}>

                <div className="col-1 w-1/2 contain flex ">
                  <img className="w-auto pt-7 pb-8 bg-white p-2" src={logo.image} alt="" />

                  <div className="col-1 w-1/2 contain ">
                    <img className="w-auto pt-7 pb-8 bg-white p-2" src={logo.image.url} alt="" />


                    <div className='overlay '>
                      <div className="dropdown dropdown-end">
                        <button onClick={HiDotsVertical}>
                          <HiDotsVertical />
                        </button>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                          <li><a>Delete</a></li>
                          <li><a>Edit</a></li>
                        </ul>
                      </div>
                      <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)}

            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto pt-8 pb-8 bg-white p-2" src={solar2} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={1} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto bg-white p-2 pt-10 pb-10" src={solar3} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={2} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="col-1 w-1/2 contain">
                <img className="w-auto bg-white p-2" src={solar4} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={3} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto bg-white p-2 pt-3 pb-3" src={solar1} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={4} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto  pb-10" src={solar2} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={5} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto pt-7 pb-8 bg-white p-2" src={solar3} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={6} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto pt-8 pb-8 bg-white p-2" src={solar4} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={7} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto bg-white p-2 pt-10 pb-10" src={solar1} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={8} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto bg-white p-2" src={solar2} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={9} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto bg-white p-2 pt-3 pb-3" src={solar3} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={10} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded'>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>

              <div className="col-1 w-1/2 contain">
                <img className="w-auto  pb-10" src={solar4} alt="" />

                <div className='overlay'>
                  <div className="dropdown dropdown-end">
                    <button onClick={HiDotsVertical}>
                      <HiDotsVertical />
                    </button>
                    <ul tabIndex={11} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a>Delete</a></li>
                      <li><a>Edit</a></li>
                    </ul>
                  </div>
                  <Link to='/customer'>  <button className='custom bg-blue-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded '>Know Our Customer</button></Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>


    </div>
  );
};

export default Slider;