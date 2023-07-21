import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function Journey() {
  const [media, setMedia] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);




useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getHomeVideo');
        setMedia(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch media data');
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }




  return (

    <div className='flex justify-center items-center'>
    {media.map((item) => (
      <Link to="/form">
<div key={item._id}>

      <iframe title='video'

className=" my-5 h-[1000px] sm:h-64 md:h-56 lg:h-64 xl:h-72 rounded-md "
src={item.url}
frameborder="0"
allow="autoplay; encrypted-media"
allowfullscreen
></iframe>

{/* Render additional media data aadsas needed */}
</div>
</Link>
))}
</div>





    // <div className=' py-10 flex justify-center items-center'>
    //   {videoData.map((video) => (
    //     <Link to='/form'>
    //       <div>
    //         <video url={video.url} controls={true} autoPlay={false} />
    //         <h3>{video.title}</h3>
    //       </div>
    //     </Link>
    //   ))}
    // </div>
  );
}

export default Journey;
