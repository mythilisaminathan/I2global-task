import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setUserData } from "./redux/userSlice"; 
import { Link ,useNavigate} from "react-router-dom";
import "./Login.css";

const Home = () => {
  const dispatch = useDispatch();
console.log('home');

  const storedEmail = useSelector((state) => state.user.email);
  const storedPassword = useSelector((state) => state.user.password);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate=useNavigate()

  const sendInfo = (data) => {
    if (!storedEmail || !storedPassword) {
      alert("No user found. Please sign up first.");
      return;
    }

    if (data.email === storedEmail && data.password === storedPassword) {
      alert("Login successful");
      navigate('/notes')

      dispatch(setUserData({ email: data.email, password: data.password }));
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="parent-container">
      <form onSubmit={handleSubmit(sendInfo)} className="form">
        <h2 className="heading">Sign In</h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="error-message text-danger mt-3">{errors.email.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="error-message text-danger mt-3">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
        <p className="text-center">
          Don’t have an account? <Link to="/account">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Home;
