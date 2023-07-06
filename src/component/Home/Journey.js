import React from 'react';
import { Link } from 'react-router-dom';

const videoData = [
  {
    id: 1,
    src: 'https://www.youtube.com/watch?v=m2htQJuFrnY',
    title: 'Video 1',
  }

];

function Journey() {
  return (
    <div className=' py-10 flex justify-center items-center'>
      {videoData.map((video) => (
        <Link to={`/video/${video.id}`} key={video.id}>
          <div>
            <video src={video.src} controls={true} autoPlay={true} />
            <h3>{video.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Journey;
