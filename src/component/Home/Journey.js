import React from 'react';
import { Link } from 'react-router-dom';

const videoData = [
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=lq6a9GKrtck',
    title: 'Video 1',
  }

];

function Journey() {
  return (
    <div className=' py-10 flex justify-center items-center'>
      {videoData.map((video) => (
        <Link to='/form'>
          <div>
            <video url={video.url} controls={true} autoPlay={false} />
            <h3>{video.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Journey;
