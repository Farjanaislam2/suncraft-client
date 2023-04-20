import React from 'react';
import solar1 from '../images/solar1.jpg';
import solar2 from '../images/solar2.png';
import solar3 from '../images/solar3.jpg';
import solar4 from '../images/solar4.jpg';



const Home = () => {
  return (
    <div className='container mx-auto'>
      <div style={{position:'relative'}}>
      <button style={{position:'absolute',top:'46%',left:'44%'}} className="btn btn-primary rounded-2xl">Start your Journey</button>
  <div className='flex px-1 py-1' > 
    <img className='object-cover h-80 w-full' src={solar1}/> 
    <img className='object-cover h-80 w-full' src={solar2}/> 
  </div>
  <div className='flex px-1 py-1'> 
    <img className='object-cover h-80 w-full' src={solar3}/> 
    <img className='object-cover h-80 w-full' src={solar4}/> 
  </div>
</div>
<div className='container mx-auto'>
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
</div>
    </div>
  );
};

export default Home;