import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Consulting = () => {


  const [consult,setConsult] = useState([])



  useEffect(() => {
    fetch('https://suncraft-server-avh2.vercel.app/getConsulting')
      .then(res => res.json())
      .then(data => setConsult(data))
  }, [])

  console.log(consult)



  return (
    <div className="flex px-20">
      <div className="w-1/2">
        {consult.map((project) => (
          <div key={project.id} className="flex my-4">
            <div className="w-2/4">
              <img src={project.url} alt="#" className="w-50 " />
              {/* If using video, replace the <img> tag with a <video> tag */}
            </div>
            <div className="w-2/3 mx-10">
             
              <p>{project.consult}</p>
            <div className='flex gap-3 mt-4'>
            <button
                // onClick={() => handleDelete(project.id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                // onClick={() => handleDelete(project.id)}
                className="bg-sky-500 text-white px-4 py-2 mt-3 rounded hover:bg-red-600"
              >
                Update
              </button>
            </div>
            </div>
            
          </div>
          
        ))}
       
      </div>
      <div className=" flex justify-center items-center m-40 ">
     <Link to='/login'> <button className="bg-lime-600 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-lg ">
        LET US KNOW YOUR REQUIREMENT
      </button></Link>
    </div>
    
    </div>
    
  );
};

export default Consulting;
