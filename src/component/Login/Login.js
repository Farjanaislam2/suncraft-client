import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="flex justify-center h-[800px] items-center">
      <div>
        <h1 className="text-[24px] text-center font-medium">Login </h1>

        {/* ******* --- Login form  ---**** */}

        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              {...register("firstName")}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              {...register("firstName")}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Name"
            />
          </div>
          <p>{data}</p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
