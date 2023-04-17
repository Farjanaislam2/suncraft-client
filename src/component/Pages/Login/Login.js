import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

const handleLogin =data =>{
  console.log(data)
}
  return (
    <div className="flex justify-center h-[800px] items-center  border-gray-300 border-2">
      <div className="w-96 p-7 border border-gray-400 rounded">
        <h1 className="text-[24px] text-center font-medium mb-5">Login </h1>

        {/* ******* --- Login form  ---**** */}

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">What is your name?</span>
            </label>
            <input
              type="text"
              {...register("firstName", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Mobile No</span>
            </label>
            <input
              type="password"
              {...register("password", {required:true})}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Name"
            />
          </div>
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
          </div>
          <div className="mt-3">
          <label className="label">
              <span className="label-text font-medium">Requirement</span>
            </label>
            <select
              required
              {...register("account", { required: "select account type" })}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="buyer">User</option>
              <option value="seller">Seller</option>
            </select>
          </div>
          <input className="btn w-full mt-5" type="submit" />
        </form>
      </div>
      
    </div>
  );
};

export default Login;
