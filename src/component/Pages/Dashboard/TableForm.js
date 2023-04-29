import React from "react";

const TableForm = () => {

  const handleSubmit=event=>{
    event.preventDefault();

    const form=event.target;
    const code =form.code.value;
    const capasity=form.code.value;
    const location=form.code.value;
    const duration=form.code.value;
    const status=form.code.value;
    const rate=form.code.value;
    const avalable=form.code.value;
    console.log(code,capasity,location,duration,status,rate,avalable)



        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking confirmed');
                    refetch();
                }
                else{
                    toast.error(data.message);
                }
            })


    }
  




  return (
    <div>
      <h1 className="text-center text-lg font-bold mt-[30px]">
        Add Table Data
      </h1>
      <div className="mx-[150px]  mt-[30px] border border-2 h-[700px] p-2 rounded-md border-gray-600">
        <form onSubmit={handleSubmit}>
        <div className="form-control  max-w-xs mx-10 ">
          <label className="label">
            <span className="label-text">Project Code</span>
          </label>
          <input
            type="text"
            name="code"
            placeholder="Type here"
            className="input input-bordered w-96  max-w-xs"
          />
        </div>

        <div className="form-control  max-w-xs mx-10 ">
          <label className="label">
            <span className="label-text">Project Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Type here"
            className="input input-bordered w-96  max-w-xs"
          />
        </div>

        <div className="form-control  max-w-xs mx-10 ">
          <label className="label">
            <span className="label-text">Project Capacity</span>
          </label>
          <input
            type="text"
            name="capasity"
            placeholder="Type here"
            className="input input-bordered w-96  max-w-xs"
          />
        </div>

        <div className="form-control  max-w-xs mx-10 ">
          <label className="label">
            <span className="label-text">PPA Duration</span>
          </label>
          <input
            type="text"
            name="duration"
            placeholder="Type here"
            className="input input-bordered w-96  max-w-xs"
          />
        </div>

        <div className="form-control  max-w-xs mx-10 ">
          <label className="label">
            <span className="label-text">Project status</span>
          </label>
          <input
            type="text"
            name="status"
            placeholder="Type here"
            className="input input-bordered w-96  max-w-xs"
          />
        </div>

        <div className="form-control  max-w-xs mx-10 ">
          <label className="label">
            <span className="label-text">PPA rate</span>
          </label>
          <input
            type="text"
            name="rate"
            placeholder="Type here"
            className="input input-bordered w-96  max-w-xs"
          />
        </div>

        <div className="form-control  max-w-xs mx-10 ">
          <label className="label">
            <span className="label-text">Buy Project / Sold Out</span>
          </label>
          <input
            type="text"
            name="avalable"
            placeholder="Type here"
            className="input input-bordered w-96  max-w-xs"
          />
        </div>
        </form>
        <button className="btn mt-8  w-[310px] ml-12 " type="submit">
          Post
        </button>
      </div>
    </div>
  );
};

export default TableForm;
