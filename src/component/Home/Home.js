import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import { HiDotsVertical } from "react-icons/hi";


const Home = () => {

  const [img, setImg] = useState([])




  useEffect(() => {
    fetch('http://localhost:5000/getImage')
      .then(res => res.json())
      .then(data => setImg(data))
  }, [])

  console.log(img[0]?.image?.url)
  return (
    // Banner
    <div className='container  my-5 relative'>
      <div style={{ position: 'relative' }}>
        <button style={{ position: 'absolute', top: '46%', left: '44%' }} className="btn btn-primary rounded-3xl">Start your Journey</button>
        <div className=' grid grid-cols-1 md:grid-cols-2 px-1 py-1' >
          <div>
            <div className='flex '>
              <img className='object-cover h-80 w-full' src={img[0]?.image?.url} alt="#" />
              <div className="dropdown dropdown-left">
                <button onClick={HiDotsVertical}>
                  <HiDotsVertical />
                </button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Delete</a></li>
                  <li><a>Edit</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className='flex '>
              <img className='object-cover h-80 w-full' src={img[1]?.image?.url} alt="#" />
              <div className="dropdown dropdown-left">
                <button onClick={HiDotsVertical}>
                  <HiDotsVertical />
                </button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Delete</a></li>
                  <li><a>Edit</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div >
            <div className='flex '>
              <img className='object-cover h-80 w-full' src={img[2]?.image?.url} alt="#" />
              <div className="dropdown dropdown-left relative">
                <button onClick={HiDotsVertical}>
                  <HiDotsVertical />
                </button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Delete</a></li>
                  <li><a>Edit</a></li>
                </ul>
              </div></div></div>
          <div>
            <div className='flex'>
              <img className='object-cover h-80 w-full' src={img[3]?.image?.url} alt="#" />
              <div className="dropdown dropdown-left">
                <button onClick={HiDotsVertical}>
                  <HiDotsVertical />
                </button>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><a>Delete</a></li>
                  <li><a>Edit</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div>

      </div>

      <Slider></Slider>

    </div>
  );
};

export default Home;