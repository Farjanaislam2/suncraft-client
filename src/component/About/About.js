import React, { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';
import intro from '../../Video/Intro1.mp4';

function About(props) {
    const [showVideo, setShowVideo] = useState(false);
    const handleVideoClick = () => {
        setShowVideo(true);
    };

    const handleModalClose = () => {
        setShowVideo(false);
    };
    
    return (
        <div >
            <div className="grid grid-cols-1 container py-5 px-40">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200" >
                    <h1 className="text-4xl font-bold mb-8 text-lime-600 ">Suncraft Energy!</h1>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleVideoClick}
                    >
                        Click Here
                    </button>


                    {showVideo && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-10">
                            <div className="relative w-full max-w-md mx-auto">
                                <div className="bg-white rounded-lg shadow-lg p-8">
                                    <div className="flex justify-end">
                                        <button className="text-gray-400 hover:text-gray-500" onClick={handleModalClose}>
                                            <FaTimes />
                                        </button>
                                    </div>

                                    <video src={intro} className="w-full object-cover" controls autoplay />


                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <h1 className='font-bold text-3xl text-center text-gray-700 py-3'>ABOUT <span className='text-lime-600'>SUNCRAFT ENERGY</span>

                </h1>

                 <h2 className='container font-semibold text-gray-500 px-20 py-3 '>Starting with a zeal to bring transformative changes in the Renewable Energy space, the company could endeavour to provide Advisory Services, EPC solutions, RESCO solutions. The company ventured into product development being incubated under IIT Kharagpur and delivered Off Grid Inverter, Array Junction Box, IT enabled monitoring system (AMR) etc. It has served more than 50 clients and some of the prominent clients have been "UNDP, Indian Railways, NTPC, RBI, SBI, UBI, ICICI, IOCL, WWF, Godrej, Ambuja etc". The company has started in the year of 2011 from Kolkata and could penetrate into Assam, Orissa, Uttar Pradesh, Uttarkhand, Andhra Pradesh, Jharkhand, Delhi, Maharastra, Madhya Pradesh, Nagaland, Manipur and Arunachal Pradesh" with RE solutions. Our advisory services could extend their reach to Africa where they are doing complete engineering for MWp level Utility scale Solar PV Projects.</h2>
            </div>
        </div>
    );
}

export default About;