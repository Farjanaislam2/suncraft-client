import React from 'react';

const ConsultingForm = () => {
    const handleSubmit=async(event)=>{
        event.preventDefault();
    
        const form=event.target;
        const consult=form.text.value;
        const file = form.Image.files[0];
       
     
    const allData={consult,file}

        console.log(allData)  
    
        if (allData) {
          try {
            // Create a FormData object and append the file to it
            const formData = new FormData();
            formData.append("image", file);
            formData.append("text", consult);
    
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
            if (data.status === 200) {
              // You can access the uploaded image URL from the response data
              console.log("Image URL:", data.data.url);

              
              const url = data.data.url;
              const allDatas= {consult, url}
              console.log(allDatas);
    
              fetch("https://suncraft-server-avh2.vercel.app/consulting", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(allDatas),
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
      name="text"
      placeholder="Type here"
      className="input input-bordered w-96  max-w-xs"
      required
    />
  </div>

  <div className="mx-[39px]  flex flex-col">
  <label className="label">
      <span className="label-text">Image</span>
    </label>
  <input type="file"  name="Image" className="file-input w-96  max-w-xs " />
    
  
</div>

<button className="btn w-[320px] ml-10 mt-5 " type="submit">
      Post
    </button>
  </form>
        
  </div>
    );
};

export default ConsultingForm;