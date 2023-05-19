import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Consulting = () => {
  const [project, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects'); // Replace with your backend API endpoint
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await axios.delete(`/api/projects/${projectId}`); // Replace with your backend API for deleting a project
      fetchProjects();
    } catch (error) {
      console.error(error);
    }
  };
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lorem vitae risus efficitur vulputate.',
      image: 'https://animationvisarts.com/wp-content/uploads/2016/10/airtel-logo-design.jpg',
      url:'https://www.youtube.com/embed/LZ1GnK45-As',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Nullam hendrerit purus augue, et lobortis neque efficitur vitae. Mauris eget nisi quis est laoreet faucibus.',
      image: 'https://animationvisarts.com/wp-content/uploads/2016/10/hindustan-unilever-logo-design.jpg', 
      url:'https://www.youtube.com/embed/LZ1GnK45-As',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Nullam hendrerit purus augue. Mauris eget nisi quis est laoreet faucibus.',
      image: 'https://animationvisarts.com/wp-content/uploads/2016/10/hero-logo-design.jpg', 
      url:'https://www.youtube.com/embed/LZ1GnK45-As',
    },
  
  ];

  return (
    <div className="flex px-20">
      <div className="w-1/2">
        {projects.map((project) => (
          <div key={project.id} className="flex my-4">
            <div className="w-2/4">
              <img src={project.image} alt={project.title} className="w-50" />
              {/* If using video, replace the <img> tag with a <video> tag */}
            </div>
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-sky-500 text-white px-4 py-2 mt-3 rounded hover:bg-red-600"
              >
                Update
              </button>
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
