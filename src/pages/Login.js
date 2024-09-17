import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formData, setformData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((d) => ({ ...d, [name]: value }))
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col lg:flex-row items-center justify-between  h-screen w-full bg-white">
        <div className="max-lg:order-3 w-full lg:w-[30%] p-10 max-md:px-4  h-full">
          <div className="relative">
            <p className={` text-gray-900 ml-1 mb-1 `}>Stump Storm</p>
            <h1 className={` text-black uppercase text-7xl font-normal`}>Login</h1>
          </div>
          <form className="mt-28 max-lg:mt-10" method="post">
            <div className="mb-4">
              <label htmlFor="email" className={`block text-gray-700 mb-1 font-semibold `}>
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full p-2 text-gray-900 mt-1 border border-gray-300 rounded `}
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
                className={`w-full p-2 text-gray-900 mt-1 border border-gray-300 rounded  `}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className={`mb-4`}>
              <Link to="#" className="text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>
            <button className={`w-full p-2 bg-black text-white rounded hover:bg-gray-800 `}>
              Sign In
            </button>
            <p className={`mt-4 text-black `}>
              Dont u have an  account?{" "}
              <Link type="button" to={"/register"} className="text-blue-500 hover:underline" >
                Sign up
              </Link>
            </p>
          </form>
        </div>

        <div className="max-lg:order-1 w-full lg:w-[70%] bg-black  h-full flex-center relative">
          <div className="w-full h-full bgImage  flex relative">
          </div>
        </div>
      </div>
    </div>
  );
}
