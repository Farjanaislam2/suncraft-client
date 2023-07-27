import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Journey() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setIsVideoEnded(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getHomeVideo");
        setMedia(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch media data");
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
    <div className="flex justify-center items-center">
      {media.map((item) => (
       
          <div key={item._id}>
            {!isVideoEnded && (
              <video
                onEnded={handleVideoEnded}
                title="video"
                className=" my-5 h-[1000px] sm:h-64 md:h-56 lg:h-64 xl:h-72 rounded-md" 
                src={item.url}
                frameborder="0"
               autoPlay
               controls
                allowfullscreen
              ></video>
            )}

            {isVideoEnded && (
              <div className="text-center my-[150px] bg-green-100 px-5 font-medium py-7 rounded">
                <p>The video has finished playing.</p>
                <div className="mt-4">
                <Link to="/work with us" className="bg-blue-500 text-white font-bold py-2 px-4 rounded mr-4">
                  Do Project With Us
                </Link>
                <Link to="/work with us" className="bg-green-500 text-white font-bold py-2 px-4 rounded">
                  Buy Project From Us
                </Link>
                </div>
              </div>
            )}

            {/* Render additional media data aadsas needed */}
          </div>
       
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
