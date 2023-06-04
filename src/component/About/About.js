import React, { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';
// import intro from '../../Video/Intro1.mp4';
import VideoList from '../../Video/Intro1.mp4';
import AboutVideo from "./AboutVideo";

function About(props) {


    const [about,setAbout] = useState([])



    useEffect(() => {
      fetch('http://localhost:5000/getAbout')
        .then(res => res.json())
        .then(data => setAbout(data))
    }, [])
  
    console.log(about)


//     const videos = [
//         {
//             id: 1,
//             title: 'Video 1',
//             url: 'https://www.youtube.com/embed/LZ1GnK45-As',
//             about: 'Starting with a zeal to bring transformative changes in the Renewable Energy space, the company could endeavour to provide Advisory Services, EPC solutions, RESCO solutions. The company ventured into product development being incubated under IIT Kharagpur and delivered Off Grid Inverter, Array Junction Box, IT enabled monitoring system (AMR) etc. It has served more than 50 clients and some of the prominent clients have been "UNDP, Indian Railways, NTPC, RBI, SBI, UBI, ICICI, IOCL, WWF, Godrej, Ambuja etc". The company has started in the year of 2011 from Kolkata and could penetrate into Assam, Orissa, Uttar Pradesh, Uttarkhand, Andhra Pradesh, Jharkhand, Delhi, Maharastra, Madhya Pradesh, Nagaland, Manipur and Arunachal Pradesh" with RE solutions. Our advisory services could extend their reach to Africa where they are doing complete engineering for MWp level Utility scale Solar PV Projects.',
//             imageUrl: 'https://1000logos.net/wp-content/uploads/2020/10/Aegon-Logo.png',
// 
//         },
// 
//     ];

    return (
        <div >
            <div className="grid grid-cols-1 container py-5 px-40">
<AboutVideo></AboutVideo>
                <div className="grid grid-cols-3 gap-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 px-20 ">
                <h1 className="text-center py-3 font-bold text-lime-600 text-2xl"> <span className="text-gray-800">ABOUT</span> SUNCRAFT ENERGY</h1>
                    {about.map((data) => (
                        <div key={data.id} className="p-2">
                           
                            <div>
                             
                                <p>{data.about}</p>
                            </div>
                            <div className="flex justify-center">
                                <img className=" my-10 w-[650px] h-[200px]" src={data.url} alt="#" />


                            </div>

                        </div>
                    ))}
                </div>



            </div>


        </div>
    );
}

export default About;