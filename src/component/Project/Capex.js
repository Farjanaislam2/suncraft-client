import axios from 'axios';
import React, { useState } from 'react'
import { FaLongArrowAltDown, FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Capex() {

  const [meetingTitle, setMeetingTitle] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/schedule', {
        title: meetingTitle,
        time: meetingTime,
      });
      console.log(response.data); // Handle the response
     
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className='lg:flex justify-around mt-[100px]'>
        <div>
<h1 className='bg-green-200 text-lg p-2 text-center font-semibold rounded mb-10'>Process for Doing Project with us ( CAPEX) </h1>

<div className='flex mb-2'>
<label  className="text-white p-3 rounded bg-green-800 text-lg ">Show your interest</label>
<FaLongArrowAltRight  className='mt-5 mx-2 fill-green-500 w-10 h-10'></FaLongArrowAltRight>
  {/* The button to open modal */}
  <label htmlFor="my_modal_5" className="text-white p-3 rounded bg-green-500 text-lg ">Fill the form</label>
  {/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">

 <form action="">
 <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
 <button className='bg-green-500 p-2 text-white rounded mx-2'>Submit</button>
 </form>


    
  </div>
</div>
</div>

<FaLongArrowAltDown  className='mb-2 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>

<div className='flex mb-2'>
<label  className="text-white p-3 rounded bg-green-800 text-lg ">You want to speak to Management t</label>
<FaLongArrowAltRight  className='mt-5 mx-2 fill-green-500 w-10 h-10'></FaLongArrowAltRight>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-500 text-lg ">Set a video call in calender</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meeting Title"
          value={meetingTitle}
          onChange={(e) => setMeetingTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
        />
        <button type="submit">Schedule</button>
      </form>
      
    </div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
</div>


<FaLongArrowAltDown  className='mb-2 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='flex mt-2'>
  {/* The button to open modal */}
<label  className="text-white p-3 rounded bg-green-800 text-lg ">Receive a Proposal </label>

<FaLongArrowAltRight  className='mt-5 mx-2 fill-green-500 w-10 h-10'></FaLongArrowAltRight>

<label htmlFor="my_modal_7" className="text-white p-3 rounded bg-green-500 text-lg ">Download the Proposal</label>
{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_7" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

<FaLongArrowAltDown  className='mt-2 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='flex mt-2'>
<label  className="text-white p-3 rounded bg-green-800 text-lg ">Speak about the proposal</label>
<FaLongArrowAltRight  className='mt-5 mx-2 fill-green-500 w-10 h-10'></FaLongArrowAltRight>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-500 text-lg ">Set a video call in calender</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meeting Title"
          value={meetingTitle}
          onChange={(e) => setMeetingTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
        />
        <button type="submit">Schedule</button>
      </form>
      
    </div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
</div>

<FaLongArrowAltDown  className='mt-2 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='mt-5'>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-800 text-lg ">Negotiate the Proposal </label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

<FaLongArrowAltDown  className='mt-5 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='mt-5'>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-800 text-lg ">Want to Sign the contract</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

<FaLongArrowAltDown  className='mt-5 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='mt-5'>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-800 text-lg ">Singed the contact </label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

<FaLongArrowAltDown  className='mt-5 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='mt-5'>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-800 text-lg ">Payment to be made as mentioned in the payment Terms </label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>







        
        </div>

{/* //Process for Doing Project with us PPA */}
      
        <div>
<h1 className='bg-green-200 text-lg p-2 text-center font-semibold rounded mb-10'>Process for Doing Project with us PPA  </h1>

<div className='flex mb-2'>
<label  className="text-white p-3 rounded bg-green-800 text-lg ">Show your interest</label>
<FaLongArrowAltRight  className='mt-5 mx-2 fill-green-500 w-10 h-10'></FaLongArrowAltRight>
  {/* The button to open modal */}
  <label htmlFor="my_modal__5" className="text-white p-3 rounded bg-green-500 text-lg ">Fill the form </label>
  {/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal__5" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">

 <form action="">
 <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
 <button className='bg-green-500 p-2 text-white rounded mx-2'>Submit</button>
 </form>


    
  </div>
</div>
</div>

<FaLongArrowAltDown  className='mb-2 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>

<div className='flex mb-2'>
<label  className="text-white p-3 rounded bg-green-800 text-lg ">You want to speak to Management </label>
<FaLongArrowAltRight  className='mt-5 mx-2 fill-green-500 w-10 h-10'></FaLongArrowAltRight>
  {/* The button to open modal */}
<label htmlFor="my_modal_a" className="text-white p-3 rounded bg-green-500 text-lg ">Set a video call in calender</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_a" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meeting Title"
          value={meetingTitle}
          onChange={(e) => setMeetingTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
        />
        <button type="submit">Schedule</button>
      </form>
     
    </div>
    <div className="modal-action">
      <label htmlFor="my_modal_a" className="btn">Close!</label>
    </div>
    
  </div>
</div>
</div>


<FaLongArrowAltDown  className='mb-2 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='flex mt-2'>
  {/* The button to open modal */}
<label  className="text-white p-3 rounded bg-green-800 text-lg ">Receive a Proposal </label>

<FaLongArrowAltRight  className='mt-5 mx-2 fill-green-500 w-10 h-10'></FaLongArrowAltRight>

<label htmlFor="my_modal_b" className="text-white p-3 rounded bg-green-500 text-lg ">Download the Proposal</label>
{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_b" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_b" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

<FaLongArrowAltDown  className='mt-2 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='flex mt-2'>
<label  className="text-white p-3 rounded bg-green-800 text-lg ">Speak about the proposal</label>
<FaLongArrowAltRight  className='mt-5 mx-2 fill-green-500 w-10 h-10'></FaLongArrowAltRight>
  {/* The button to open modal */}
<label htmlFor="my_modal_c" className="text-white p-3 rounded bg-green-500 text-lg ">Set a video call in calender</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_c" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
  <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Meeting Title"
          value={meetingTitle}
          onChange={(e) => setMeetingTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
        />
        <button type="submit">Schedule</button>
      </form>
      
    </div>
    <div className="modal-action">
      <label htmlFor="my_modal_c" className="btn">Close!</label>
    </div>
  </div>
</div>
</div>

<FaLongArrowAltDown  className='mt-5 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='mt-5'>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-800 text-lg ">Negotiate the Proposal </label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

<FaLongArrowAltDown  className='mt-5 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='mt-5'>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-800 text-lg "> Signed the contract</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

<FaLongArrowAltDown  className='mt-5 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='mt-5'>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-800 text-lg ">Payments to made </label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

<FaLongArrowAltDown  className='mt-5 mx-12 fill-green-500 w-10 h-10'></FaLongArrowAltDown>
        
<div className='mt-5'>
  {/* The button to open modal */}
<label htmlFor="my_modal_6" className="text-white p-3 rounded bg-green-800 text-lg ">System is installed and mannite for PPA duration  </label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">This modal works with a hidden checkbox!</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

</div>

        
        </div>
    </div>
  )
}
