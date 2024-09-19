import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { z } from 'zod';

export default function Register() {

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setformData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((d) => ({ ...d, [name]: value }));
  };

  const loginSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    toast.success('Successfully registered')
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col lg:flex-row items-center justify-between h-screen w-full bg-white">
        <div className="max-lg:order-3 order-4 w-full lg:w-[30%] p-10 max-md:px-4 h-full">
          <div className="relative">
            <p className="text-gray-900 ml-1 mb-1">Stump Storm</p>
            <h1 className="text-black uppercase text-7xl max-md:text-5xl font-normal">Register</h1>
          </div>
          {errors.username && <p className="mt-3 font-semibold text-red-500">{errors.username}</p>}
          {errors.email && <p className="mt-3 font-semibold text-red-500">{errors.email}</p>}
          {errors.password && <p className="mt-3 font-semibold text-red-500">{errors.password}</p>}
          <form className="mt-28 max-lg:mt-10" method="post" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-1 font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 text-gray-900 mt-1 border border-gray-300 rounded"
                placeholder="Your username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1 font-semibold">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 text-gray-900 mt-1 border border-gray-300 rounded"
                placeholder="micahcarroll@gmail.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-1 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 text-gray-900 mt-1 border border-gray-300 rounded"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <Link to="#" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <button className="w-full p-2 bg-black text-white rounded hover:bg-gray-800">
              Sign Up
            </button>
            <p className="mt-4 text-black">
              Do you have an account?{" "}
              <Link type="button" to="/login" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </p>
          </form>
        </div>

        <div className="max-lg:order-1 w-full order-2 lg:w-[70%] bg-black h-full flex-center relative">
          <div className="w-full h-full bgImage2 flex relative"></div>
        </div>
      </div>
    </div>
  );
}
