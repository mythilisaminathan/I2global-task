import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import './Login.css';
import { Link,useNavigate } from "react-router-dom";

const Account = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    dispatch(setUserData(data));
    navigate('/')
   
    
  };

  return (
    <div className="parent-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h3 className="text-center">Sign Up</h3>
      <div>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          className="input"
          {...register("userName", {
            required: "Username is required",
          })}
        />
        {errors.userName && <p className="error-message text-danger">{errors.userName.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className="input"

          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="error-message text-danger">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="input"

          id="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        {errors.password && <p className="error-message text-danger">{errors.password.message}</p>}
      </div>

      <div>
        <label htmlFor="cPassword">Confirm Password</label>
        <input
          type="password"
          className="input"

          id="cPassword"
          {...register("cPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.cPassword && <p className="error-message text-danger">{errors.cPassword.message}</p>}
      </div>

      <button type="submit">Submit</button>
      <p className="text-center">  Already have an Account <Link to='/'>Login</Link></p>
    </form>
    </div>
  );
};

export default Account;
