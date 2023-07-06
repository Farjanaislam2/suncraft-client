import React, { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';
// import intro from '../../Video/Intro1.mp4';
import VideoList from '../../Video/Intro1.mp4';
import AboutVideo from "./AboutVideo";

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



            </div>


        </div>
    );
}

export default About;