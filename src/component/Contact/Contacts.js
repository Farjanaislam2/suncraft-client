import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import React from 'react'

export default function Contacts() {
  return (
    <div className="lg:flex container">
    <div className=" border border-2 m-10">
    <h1 className='font-semibold px-20 py-5 text-xl text-lime-600		'>Get in touch with us</h1>
    
      <h3 className='font-semibold px-4 py-2'>Phone:</h3>
      <p className='px-4'>(+91)8902656796,(+91)9769007685</p>
      <h3 className='font-semibold px-4 py-2 '>Email:</h3>
      <p className='px-4'>contact@scholarlabfoundation.tech</p>
      <h3 className='font-semibold px-4 py-2'>Address:</h3>
      <p className='px-4'>369 Shanti Pally, Kolkata - 700107, West Bengal, India</p>
      <h3 className='font-semibold px-4 py-2'>Social Network:</h3>
      <ul className="flex">
        <li className="list-inline-item px-2">
          <a href="https://www.facebook.com">
            <FaFacebook size={32} />
          </a>
        </li>
        <li className="list-inline-item px-2">
          <a href="https://www.twitter.com">
            <FaTwitter size={32} />
          </a>
        </li>
        <li className="list-inline-item px-2">
          <a href="https://www.instagram.com">
            <FaInstagram size={32} />
          </a>
        </li>
      </ul>
    
    </div>
    
    <div className="grid h-100 flex-grow   ">
    <h1 className='font-semibold px-28 py-3 text-xl text-center	text-lime-600		mb-8'>Our Office Location</h1>
    <div className="lg:w-[850px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.517844234804!2d88.38654961103734!3d22.522266379442225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02715680946915%3A0xd291e3d4a54b5956!2sSuncraft%20Energy!5e0!3m2!1sen!2sbd!4v1684088562568!5m2!1sen!2sbd" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer"></iframe>
      
    </div>
    <div className='container px-40 py-5'>
      <h1 className='font-semibold text-center text-xl'>You Can Mail us</h1>
<div className='contact-form '>
<form action='https://formspree.io/f/xeqbagyg' method='POST' className='gap-2 flex justify-center mt-5 mb-3'>
<div className="form-control w-full max-w-xs border-2 p-3 rounded ">
<input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs " /> 
<input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs mt-5" /> 
<input type="text" placeholder="subject" className="input input-bordered w-full max-w-xs mt-5" /> 
<textarea className="textarea textarea-bordered mt-5" placeholder="Bio"></textarea>
<button className="bg-lime-600 text-white p-2 rounded-md mt-4">Send Message</button>
</div>

</form>

</div>
</div>
        </div>
       
        
  </div>
  )
}
  
    
