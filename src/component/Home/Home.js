import React, { useState, useEffect } from 'react';
import Slider from './Slider';


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
  
<Slider></Slider>

    </div>
  );
};

export default Home;