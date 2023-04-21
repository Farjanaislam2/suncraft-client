import React, { useContext } from 'react';
import { appendErrors, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const {createUser} =useContext(AuthContext)

    
const handleSignup =data =>{
    console.log(data)
    createUser(data.email, data.password)
    .then(result =>{
      const user =result.user;
      console.log(user);
    })
    .catch(error=>console.log(error))
  }

  
    return (
        <div className="flex justify-center h-[800px] items-center  border-gray-300 border-2">
        <div className="w-96 p-7 border border-gray-400 rounded">
          <h1 className="text-[24px] text-center font-medium mb-5">Signup </h1>
  
          {/* ******* --- Signup form  ---**** */}
  
          <form onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">What is your name?</span>
              </label>
              <input
                type="text"
                {...register("firstName", { required: "Name is required" })}
                className="input input-bordered w-full max-w-xs"
                placeholder="Enter Your Name"
              />
               {errors.firstName?.type === 'required' && <p className='text-red-500' role="alert">Name is required</p>}
                
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                {...register("email", {required:true})}
                className="input input-bordered w-full max-w-xs"
                placeholder="Enter Your Email"
              />
              {errors.email?.type === 'required' && <p className='text-red-500' role="alert">email is required</p>}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-medium">Mobile No</span>
              </label>
              <input
                type="password"
                {...register("password", {required:"Mobile No is required",minLength: {value: 10, message: "Mobile No must be 10 characters"}}, )}
                className="input input-bordered w-full max-w-xs"
                placeholder="Enter Your Mobile No"
              />
               {errors.password?.type === 'required' && <p className='text-red-500' role="alert">{errors.password.message}</p>}
            </div>
          
           
            <input className="btn w-full mt-5" type="submit" value="Signup"/>
        
          </form>
          <h2 className="mt-2">Already have an Account?
          <Link className="text-blue-500 ml-2" to='/login'>Login</Link> 
        </h2>
        </div>
        
      </div>
    );
};

export default Signup;