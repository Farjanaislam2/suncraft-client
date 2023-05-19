import React, { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';
// import intro from '../../Video/Intro1.mp4';
import VideoList from '../../Video/Intro1.mp4';

function About(props) {
  
    const videos = [
        {
          id: 1,
          title: 'Video 1',
          url: 'https://www.youtube.com/embed/LZ1GnK45-As',
        },
       
        // Add more videos as needed
      ];
      const images = [
        {
          id: 1,
          name: 'Image 1',
          imageUrl: 'https://1000logos.net/wp-content/uploads/2020/10/Aegon-Logo.png',
          mapAreas: [
            { shape: 'rect', coords: '0,0,200,200', href: '#', alt: 'Area 1' },
            { shape: 'rect', coords: '200,0,400,200', href: '#', alt: 'Area 2' },
          ],
        },
        // {
        //   id: 2,
        //   name: 'Image 2',
        //   imageUrl: 'https://1000logos.net/wp-content/uploads/2018/01/Airtel-Logo.png',
        //   mapAreas: [
        //     { shape: 'rect', coords: '0,0,300,200', href: '#', alt: 'Area 1' },
        //     { shape: 'rect', coords: '300,0,600,200', href: '#', alt: 'Area 2' },
        //   ],
        // },
        // {
        //     id: 3,
        //     name: 'Image 3',
        //     imageUrl: 'https://1000logos.net/wp-content/uploads/2021/12/Bflix-Movies-Logo.png',
        //     mapAreas: [
        //       { shape: 'rect', coords: '0,0,300,200', href: '#', alt: 'Area 1' },
        //       { shape: 'rect', coords: '300,0,600,200', href: '#', alt: 'Area 2' },
        //     ],
        //   },
        //   {
        //
   
      ];
    
    return (
        <div >
            <div className="grid grid-cols-1 container py-5 px-40">
      
            <div className="grid grid-cols-3 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 px-20 ">
      {videos.map((video) => (
        <div key={video.id} className="p-2">
          <iframe
            className="w-full h-60 sm:h-64 md:h-56 lg:h-64 xl:h-72 rounded-md "
            src={video.url}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      ))}
    </div>
                <h1 className='font-bold text-3xl text-center text-gray-700 py-5'>ABOUT <span className='text-lime-600'>SUNCRAFT ENERGY</span>

                </h1>

                 <h2 className='container font-semibold text-gray-500 px-20 py-3 '>Starting with a zeal to bring transformative changes in the Renewable Energy space, the company could endeavour to provide Advisory Services, EPC solutions, RESCO solutions. The company ventured into product development being incubated under IIT Kharagpur and delivered Off Grid Inverter, Array Junction Box, IT enabled monitoring system (AMR) etc. It has served more than 50 clients and some of the prominent clients have been "UNDP, Indian Railways, NTPC, RBI, SBI, UBI, ICICI, IOCL, WWF, Godrej, Ambuja etc". The company has started in the year of 2011 from Kolkata and could penetrate into Assam, Orissa, Uttar Pradesh, Uttarkhand, Andhra Pradesh, Jharkhand, Delhi, Maharastra, Madhya Pradesh, Nagaland, Manipur and Arunachal Pradesh" with RE solutions. Our advisory services could extend their reach to Africa where they are doing complete engineering for MWp level Utility scale Solar PV Projects.</h2>

            </div>
            <div className="  px-80 flex justify-center items-center h-50" >
        {images.map((about) => (
          <div key={about.id}>
            <div className="max-w-full overflow-y-auto ">
              <img src={about.imageUrl} alt={about.name} />
            </div>
            <div className="max-w-full overflow-y-auto">
              <map name={`map-${about.id}`}>
                {about.mapAreas.map((area, index) => (
                  <area
                    key={index}
                    shape={area.shape}
                    coords={area.coords}
                    href={area.href}
                    alt={area.alt}
                  />
                ))}
              </map>
            </div>
          </div>
        ))}
      </div>
        </div>
    );
}

export default About;