'use client';
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import Simplileap from "../../../public/images/simplileap_black_logo_2023 1.svg"; // Import mobile logo
import cover from "../../../public/images/cover.png";
import Illustration from "../../../public/images/Illustration.svg";
import btn from "../../../public/images/btn.svg";

// Define the interface for form data
interface FormData {
  username: string;
  password: string;
}

// test
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Specify the FormData type here

  const onSubmit = async (data: FormData) => {
    // Explicitly type the data parameter
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: data.username,
        password: data.password,
      });

      if (response.status === 200) {
        toast.success("Login successful!");

        console.log("Login successful:", response.data);

        localStorage.setItem("token", response.data.token);

        window.location.href = "/AccountDetails";
      }
    } catch (error) {
      toast.error("Error logging in. Please check your credentials.");
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <Toaster />
      <div className="h-screen flex flex-col md:flex-row">
        {/* Left Section for desktop only */}
        <div className="hidden md:block relative w-1/2 h-screen">
          <Image src={cover} alt="Cover" layout="fill" objectFit="cover" className="absolute" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-16">
            {/* Large logo for desktop */}
            <Image src={logo} alt="Logo" width={150} />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-44 w-full flex flex-col items-center">
            <Image src={Illustration} alt="Illustration" className="w-[50%] max-w-lg" />
            <div className="text-center mt-11 w-3/4">
              <h1 className="text-2xl font-bold text-white">Ticket Management System</h1>
              <p className="text-lg text-gray-200 mt-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-10 bg-white">
          <div className="block md:hidden mt-8 mb-8">
            {/* Mobile logo */}
            <Image src={Simplileap} alt="Logo" width={150} height={75} />
          </div>
          <div className="text-lg md:text-3xl font-semibold text-center text-black mb-4 md:mb-8 " style={{ width: '100%', maxWidth: '380px' }}>
            Welcome to Ticket Management System
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-light mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                {...register('username', {
                  required: 'Username is required',
                  validate: {
                    noSpaces: value => !/\s/.test(value) || 'Username should not contain spaces',
                  },
                })}
                id="username"
                type="text"
                className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#7F7F7F]"
                placeholder="Enter username"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
            </div>
            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-light mb-2">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                {...register('password', {
                  required: 'Password is required',
                  validate: {
                    noSpaces: value => !/\s/.test(value) || 'Password should not contain spaces',
                  },
                })}
                id="password"
                type="password"
                className=" border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#7F7F7F]"
                placeholder="Enter password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
            {/* Login Button */}
            <div className="mb-4 md:flex justify-center">
              <button
                type="submit"
                className="bg-[#5027D9] text-white py-4 px-10 rounded focus:outline-none focus:shadow-outline text-sm text-bold w-full md:w-auto">
                LOG IN
              </button>
            </div>
          
            {/* Forgot and Reset Password Links */}
            <div className="text-sm mt-4 flex justify-center">
              <Link href="/reset" className="md:font-normal font-bold text-[#5027D9] md:text-black mr-2 md:mr-4 " >Forgot Password?</Link>
              <span className="text-gray-500 hidden md:inline-block">|</span>
              <Link href="/reset" className="font-bold underline ml-2 md:ml-4 hidden md:inline-block">RESET PASSWORD</Link>
            </div>
            <div className="hidden md:block">
              
              </div>
              <div className=" md:hidden items-center justify-center flex mt-4">
               
                <p className="text-[#696969] font-bold">or</p>
              </div>
            
            {/* Button Image */}
            <div className="flex items-center justify-center mt-4 md:mt-8 ">
              <Image src={btn} alt="Icon " className="w-3/4 md:w-auto " />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;