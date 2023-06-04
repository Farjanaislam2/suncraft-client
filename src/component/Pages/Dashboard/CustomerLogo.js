import React from 'react';

const CustomerLogo = () => {
    const handleImageClick = async (event) => {
        event.preventDefault();
        const file = event.target.homeImage.files[0];
        console.log(file);
    
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
    
              fetch("http://localhost:5000/addCustomerLogo", {
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
        <div className="mx-[30px] mt-5 flex flex-col">
        <p className='text-2xl font-bold mb-3'>Add Customer Logo</p>
        <form onSubmit={handleImageClick}>
        <input type="file"  name="homeImage" className="file-input w-full max-w-xs" />
          
          <button className="btn m- mt-5 " type="submit">
            Post
          </button>
        </form>
      </div>
    );
};

export default CustomerLogo;