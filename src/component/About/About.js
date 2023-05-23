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
            about: 'Starting with a zeal to bring transformative changes in the Renewable Energy space, the company could endeavour to provide Advisory Services, EPC solutions, RESCO solutions. The company ventured into product development being incubated under IIT Kharagpur and delivered Off Grid Inverter, Array Junction Box, IT enabled monitoring system (AMR) etc. It has served more than 50 clients and some of the prominent clients have been "UNDP, Indian Railways, NTPC, RBI, SBI, UBI, ICICI, IOCL, WWF, Godrej, Ambuja etc". The company has started in the year of 2011 from Kolkata and could penetrate into Assam, Orissa, Uttar Pradesh, Uttarkhand, Andhra Pradesh, Jharkhand, Delhi, Maharastra, Madhya Pradesh, Nagaland, Manipur and Arunachal Pradesh" with RE solutions. Our advisory services could extend their reach to Africa where they are doing complete engineering for MWp level Utility scale Solar PV Projects.',
            imageUrl: 'https://1000logos.net/wp-content/uploads/2020/10/Aegon-Logo.png',

        },

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
                            <div>
                                <h1 className="text-center py-3 font-bold text-lime-600 text-2xl"> <span className="text-gray-800">ABOUT</span> SUNCRAFT ENERGY</h1>
                                <p>{video.about}</p>
                            </div>
                            <div>
                                <img src={video.imageUrl} alt="#" />


                            </div>

                        </div>
                    ))}
                </div>



            </div>


        </div>
    );
}

export default About;