import axios from 'axios';
import React, { useState } from 'react';

const AboutVideo = () => {
const [video, setVideo]=useState(null)


const handleFileChange = (e) => {
    setVideo(e.target.files[0]);
  };


  const handleImageClick = async (e) => {
    e.preventDefault();

     
        const formdata=new FormData();
        formdata.append('video', video);

        try{
            const response=await axios.post("http://localhost:5000/addAboutData", formdata, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            console.log(response.data);
        }
        catch(error){

        }
      
      };
    return (
        <div className="mx-[30px] mt-5 flex flex-col">
        <p className='text-2xl font-bold mb-3'>Add About video</p>
        <form onSubmit={handleImageClick}>
        <input type="file" onChange={handleFileChange}  name="video" className="file-input w-full max-w-xs" />
          
          <button className="btn m- mt-5 " type="submit">
            Post
          </button>
        </form>
      </div>
    );
};

export default AboutVideo;