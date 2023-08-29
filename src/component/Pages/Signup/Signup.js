import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../../hooks/useToken";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser } = useContext(AuthContext);
  const [signupError, setSignupError] = useState("");

  const[createdUserEmail, setCreatedUserEmail]=useState('')
  const[token]=useToken(createdUserEmail);
  const navigate = useNavigate();

if(token){
  navigate('/')
}


  const onSubmit = (data) => {
    console.log(data);

    // setSignupError('');
    console.log(data?.name);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast("User update successfully.");

        const userInfo = {
          displayName: data.name,
        };
        console.log(data.name);
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignupError(error.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email)
       
      });
  };

// const getUserToken=email=>{
//   fetch(`http://localhost:5000/jwt?email=${email}`)
//   .then(res=>res.json())
//   .then(data=>{
//     if(data.accessToken){
//       localStorage.setItem('accessToken', data.accessToken)
//       navigate('/')
//     }
//  
//   })
// }


  return (
    <div className="flex justify-center h-[800px] items-center  border-gray-300 border-2">
      <div className="w-96 p-7 border border-gray-400 rounded">
        <h1 className="text-[24px] text-center font-medium mb-5">Signup </h1>

        {/* ******* --- Signup form  ---**** */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">What is your name?</span>
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500" role="alert">
                Name is required
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Email Address</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500" role="alert">
                email is required
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password  is required",
                minLength: {
                  value: 6,
                  message: "Password  must be 6 characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter Your Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>

          <input className="btn w-full mt-5" type="submit" value="Signup" />
          {signupError && <p className="text-red-500">{signupError}</p>}
        </form>
        <h2 className="mt-2">
          Already have an Account?
          <Link className="text-blue-500 ml-2" to="/login">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Signup;
