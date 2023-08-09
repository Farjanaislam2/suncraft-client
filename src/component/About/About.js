import React, { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';
// import intro from '../../Video/Intro1.mp4';
import VideoList from '../../Video/Intro1.mp4';
import AboutVideo from "./AboutVideo";
import ManagementTeam from "./ManagementTeam";

function About(props) {


    const [about,setAbout] = useState([])



    useEffect(() => {
      fetch('https://suncraft-server-avh2.vercel.app/getAbout')
        .then(res => res.json())
        .then(data => setAbout(data))
    }, [])
  
    console.log(about)



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


                <div className="mt-10">
    <h1 className="text-[30px] mb-5 align-middle">Who We Are</h1>
    <p>Scholar Lab Foundation is a “Not for Profit” Organisation formed by a group of IITians to work as an extended arm of premier Institutions to facilitate productive research and bridge the gap between Institutional framework and the Industrial requirement. The idea is to develop the products for the market with a focus on value for customers, betterment of the society and overall growth of the company to pave the way for self-reliance/ Attmanirbhar Bharat under Make in India Initiative. The group has 200+ Years of cumulative experience in renewable energy, IT, water management, healthcare and analytics, oil and gas and rural development as business leaders and entrepreneurs. We focus on Science & Engineering, Management & Humanities, and Social Science & Finance as our area of work. Our associate companies are working with UN, WWF, INSA, Indian Railways and IITs / premier Indian Universities and R&D Labs. We have a pool of experts of IIT Alumni from India and abroad from industrial research to academic research catering various sectors.</p>
</div>

<div className="mt-10">
    <h1 className="text-[30px] mb-5 align-middle">Our Mission</h1>
    <p>Enable technological innovation through product and process development and support the Industrial Ecosystem to build new standard of excellence and self-reliance in Nation’s Industrial growth Engine.</p>
</div>
<div className="mt-10">
    <h1 className="text-[30px] mb-5 align-middle">Our Vision</h1>
    <p>
Become the benchmark product and process Development Company providing best in class deliverables to satisfied stakeholders through continuous innovations and improvement driven by the integrity, teamwork and creativity of our people.</p>
</div>
<h1 className="text-center text-[40px] bg-lime-400 mt-[100px] rounded p-1">Our Leadership</h1>
<ManagementTeam></ManagementTeam>

            </div>


        </div>
    );
}

export default About;