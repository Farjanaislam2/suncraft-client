import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const {signIn} =useContext(AuthContext)
  const [loginError, setLoginError]= useState('');
  const location=useLocation();
  const navigate=useNavigate();

  const from=location.state?.from?.pathname || '/';


const handleLogin =data =>{
  console.log(data)
  setLoginError('');


  signIn(data.email, data.password)
  .then(result =>{
    const user =result.user;
    console.log(user);
    navigate(from, {replace:true});
  })
  .catch(error=>{
    console.log(error.message)
    setLoginError(error.message)
  }
  )

}


  return (
    <div className="flex justify-center h-[800px] items-center  border-gray-300 border-2">
      <div className="w-96 p-7 border border-gray-400 rounded">
        <h1 className="text-[24px] text-center font-medium mb-5">Login </h1>

        {/* ******* --- Login form  ---**** */}

        <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", {required:true})}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Name"
            />
               {errors.email?.type === 'required' && <p className='text-red-500' role="alert">email no is required</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Mobile No</span>
            </label>
            <input
              type="password"
              {...register("password", {required:"Mobile No is required"})}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Email Address"
            />
               {errors.password?.type === 'required' && <p className='text-red-500' role="alert">mobile no is required</p>}
          </div>
          
          
          <input className="btn w-full mt-5" type="submit" value="Login"/>
          <div>
{loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </form>
        <h2 className="mt-2">New at sustiknow?
          <Link className="text-blue-500 ml-2" to='/signup'>Create An Account</Link> 
        </h2>
      </div>
      
    </div>
  );
};

export default Login;
