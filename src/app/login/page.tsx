"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import cover from "../../../public/images/cover.png";
import Illustration from "../../../public/images/Illustration.svg";
import toast, { Toaster } from "react-hot-toast";
import logoWhite from "../../../public/images/sidebarLogo.svg";
import Link from "next/link";
// Define the interface for form data
interface FormData {
  username: string;
  password: string;
}

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
      <div className=" h-screen grid grid-cols-2">
        <div className=" relative h-screen flex flex-col items-center">
          <Image
            src={cover}
            alt="Background"
            layout="fill"
            className="absolute z-[-1]"
          />
          <div className="flex justify-center items-center mt-28 mb-28">
            <Image src={logoWhite} alt="Logo" height={50} />
          </div>
          <div className="">
            <Image src={Illustration} alt="Illustration" height={300} />
          </div>

          <div className="flex justify-center mt-14">
            <h1 className="text-white text-3xl font-bold ">
              Ticket Management System
            </h1>
          </div>
          <div className="flex justify-center  text-white mt-14">
          Streamline your ticketing process: Efficient, intuitive, and reliable ticket management for seamless service.
          </div>
        </div>

        {/* ========================================== */}
        <div className=" flex flex-col justify-center items-center gap-14 w-[70%] mx-auto">
          <div className="text-3xl font-bold text-center text-black">
            Welcome to <br></br>Ticket Management System
          </div>
          <div className="flex flex-col justify-start w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('username', {
                    required: 'Username is required',
                    validate: {
                      noSpaces: (value) =>
                        !/\s/.test(value) || 'Username should not contain spaces',
                    },
                  })}
                  id="username"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-2"
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <p className="text-red-500 text-xs ">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('password', {
                    required: 'Password is required',
                    validate: {
                      noSpaces: (value) =>
                        !/\s/.test(value) || 'Password should not contain spaces',
                    },
                  })}
                  id="password"
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-2"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <p className="text-red-500 text-xs ">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-center p-6">
                <button
                  type="submit"
                  className="bg-[#5027d9] hover:bg-blue-700 text-white py-4 px-10 rounded-xl focus:outline-none focus:shadow-outline font-xs"
                >
                  LOG IN
                </button>
              </div>
              <div className="text-sm mt-4 flex justify-center gap-3">
                <Link href="/reset">Forgot Password?</Link>
                <span className="text-gray-500">|</span>
                <Link href="/reset" className="font-bold underline">RESET PASSWORD</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default LoginForm;
