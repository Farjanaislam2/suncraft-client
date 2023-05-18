import React from 'react';

const AboutUs = () => {

    const handleSubmit=async(event)=>{
        event.preventDefault();
    
        const form=event.target;
        console.log(form)
       
        const capasity=form.capasity.value;
        const file = event.target.homeImage.files[0];
        const video = event.target.video.value;
     
    const allData={capasity,file}

        console.log(allData)


      
       
       
    
        if (file) {
          try {
            // Create a FormData object and append the file to it
            const formData = new FormData();
            formData.append("image", file);
    
            // Upload the image to ImageBB API using fetch
            const response = await fetch(
              `https://api.imgbb.com/1/upload?key=b1535f27f9d4809ccba56e7f3ae76fea`,
              {
                method: "POST",
                body: formData,
              }
            );
    
            // Parse the response as JSON
            const data = await response.json();
    
            // Check if the image was uploaded successfully
            if (data.status === 200) {
              // You can access the uploaded image URL from the response data
              console.log("Image URL:", data.data.url);
    
              fetch("http://localhost:5000/addLogo", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(data.data),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                });
            } else {
              console.error("Failed to upload image:", data.error.message);
            }
          } finally {
          }
        }
      };
    return (
        <div>
              <form className='border border-gray-800 rounded p-5 mx-10 mt-16' onSubmit={handleSubmit}>
        

        <div className="  max-w-xs mx-10 ">
          <label className="label">
            <span className="label-text">Text</span>
          </label>
          <input
            type="text"
            name="avalable"
            placeholder="Type here"
            className="input input-bordered w-96  max-w-xs"
            required
          />
        </div>

        <div className="mx-[39px]  flex flex-col">
        <label className="label">
            <span className="label-text">Image</span>
          </label>
        <input type="file"  name="homeImage" className="file-input w-96  max-w-xs " />
          
        
      </div>
      <div className="mx-[35px]  flex flex-col">
        <label className="label">
            <span className="label-text">Video</span>
          </label>
          <input type="video/mp4" name='video' className='w-[320px] rounded-md p-3' 
          placeholder="Enter video URL" />
          
          <button className="btn m- mt-5 " type="submit">
            Post
          </button>
      </div>
        </form>
              
        </div>
    );
};

export default AboutUs;