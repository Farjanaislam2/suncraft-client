import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import solar1 from '../images/solar1.jpg';
import solar2 from '../images/solar2.png';
import solar3 from '../images/solar3.jpg';
import solar4 from '../images/solar4.jpg';



const Home = () => {

  return (
    <div className='container mx-auto'>
      <div style={{position:'relative'}}>
      <button style={{position:'absolute',top:'46%',left:'44%'}} className="btn btn-primary rounded-3xl">Start your Journey</button>
  <div className='flex px-1 py-1' > 
    <img className='object-cover h-80 w-full' src={solar1}/> 
    <img className='object-cover h-80 w-full' src={solar2}/> 
  </div>
  <div className='flex px-1 py-1'> 
    <img className='object-cover h-80 w-full' src={solar3}/> 
    <img className='object-cover h-80 w-full' src={solar4}/> 
  </div>
</div>
{/* <div className='container mx-auto'>
<div className="carousel w-full py-2 ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={solar1} className="w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={solar2} className="w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={solar3} className="w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={solar4} className="w-full h-80" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div> */}
<div>
<div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} naturalSlideHeight={125} isIntrinsicHeight={true} totalSlides={3} isPlaying={true} visibleSlides={2} step={1} infinite={true} interval={3000} >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide  >
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={solar1} alt="black chair and white table" className="object-cover object-center w-full h-24 rounded-2xl" />
                                        
                                        </div>
                                    </Slide>
                                    <Slide >
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={solar2} alt="sitting area" className="object-cover object-center w-full h-24 rounded-2xl" />
                                           
                                        </div>
                                    </Slide>
                                    <Slide >
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <img src={solar3} alt="sitting area" className="object-cover object-center w-full h-24 rounded-2xl" />
                                          
                                        </div>
                                    </Slide>
                                    <Slide >
                                        <div className="flex flex-shrink-0 relative w-full h-24 sm:w-auto">
                                            <img src={solar4} alt="sitting area" className="object-cover object-center w-full rounded-2xl" />
                                            
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
                
            </div>
        </div>
</div>

    </div>
  );
};

export default Home;