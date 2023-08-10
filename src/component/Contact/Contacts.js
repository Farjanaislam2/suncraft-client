import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import React, { useState } from 'react';
import styled from '@emotion/styled';

const Contact = () => {
 const Wrapper = styled.section` `;
  
    return   <Wrapper>
         <div className="flex  container">
        <div className="grid h-80 flex-grow  ">
        <h1 className='font-semibold px-20 py-5 text-xl text-lime-600		'>Get in touch with us</h1>
        
          <h3 className='font-semibold px-4 py-2'>Phone:</h3>
          <p className='px-4'>(+91)8902656796,(+91)9769007685</p>
          <h3 className='font-semibold px-4 py-2 '>Email:</h3>
          <p className='px-4'>contact@scholarlabfoundation.tech</p>
          <h3 className='font-semibold px-4 py-2'>Address:</h3>
          <p className='px-4'>369 Shanti Pally, Kolkata - 700107, West Bengal, India</p>
          <h3 className='font-semibold px-4 py-2'>Social Network:</h3>
          <ul className="list-inline">
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
        <h1 className='font-semibold px-28 py-3 text-xl text-center	text-lime-600		'>Our Office Location</h1>
        <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.517844234804!2d88.38654961103734!3d22.522266379442225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02715680946915%3A0xd291e3d4a54b5956!2sSuncraft%20Energy!5e0!3m2!1sen!2sbd!4v1684088562568!5m2!1sen!2sbd" width="100%" height="350" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </div>
        <div className='container px-40 py-5'>
          <h1 className='font-semibold text-center text-xl'>You Can Mail us</h1>
 <div className='contact-form'>
  <form action='https://formspree.io/f/xeqbagyg' method='POST' className='gap-2'>
  <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" name="name" required/>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" name="email" required/>
        </div>
        <div class="mb-3">
        <label for="subject" class="form-label">Subject</label>
        <input type="text" class="form-control" id="subject" name="subject" required/>
      </div>
        <div class="mb-3">
          <label for="message" class="form-label">Message</label>
          <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
  </form>

 </div>
</div>
            </div>
           
            
      </div>
    </Wrapper>;

     
      
    
};

export default Contact;