'use client';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Image from 'next/image';
import logo from "../../../public/images/logo.svg"
import cover from "../../../public/images/cover.png"
import Illustration from "../../../public/images/Illustration.svg"
import toast, { Toaster } from 'react-hot-toast';
// Define the interface for form data
interface FormData {
    username: string;
    password: string;
}

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>(); // Specify the FormData type here

    const onSubmit = async (data: FormData) => { // Explicitly type the data parameter
        try {
            const response = await axios.post('http://localhost:8000/login', {
                email: data.username,
                password: data.password,
            });

            if (response.status === 200) {
                toast.success('Login successful!');
                
                console.log('Login successful:', response.data);
                
                localStorage.setItem('token', response.data.token);
                
                window.location.href = '/Dashboard'; 
            }
        } catch (error) {
            toast.error('Error logging in. Please check your credentials.');
            console.error('Error logging in:', error);
            
        }
    };
     
    return (
<>
        <Toaster /> 
        <div className="min-h-screen flex">
            <div className="relative w-1/2 h-screen">
                <Image src={cover} alt="Background" layout="fill" objectFit="cover" className="absolute" />
                <div className="absolute top-10 w-full flex justify-center">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </div>
                <div className="absolute top-40 w-full flex justify-center">
                    <Image src={Illustration} alt="Illustration" width={300} height={300} className=' 3xl:w-[50%]' />
                </div>
                <div className="absolute  bottom-60 w-full flex justify-center mt-4">
                    <h1 className="text-white text-2xl font-bold ">Ticket Management System</h1>
                </div>
                <div className="absolute bottom-40 w-full flex justify-center mt-4">
                    <p
                        className="text-white text-2xl font-bold text-center"
                        style={{
                            fontFamily: 'Zen Kaku Gothic Antique, sans-serif',
                            color: '#F5F5F5',
                            fontWeight: '400',
                            fontSize: '16px',
                            width:'380px,',
                            font:'Zen Kaku Gothic Antique',
                        }}
                    >

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.
                    </p>
                </div>
                {/* <div className="flex-grow flex items-center justify-center">
                  <img src="/illustration.svg" className="h-90" alt="Illustration" /> 
                </div> */}
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center p-10 bg-white">
                <h1
                    className="text-3xl font-bold mb-6 text-center "
                    style={{
                        width: '380px',
                        height: '75px',
                        top: '183px',
                        left: '919px',
                        lineHeight: '37.5px',
                        fontFamily: 'Zen Kaku Gothic Antique',
                        fontWeight: '700',
                        fontSize: '31.25px',
                        letterSpacing: '-0.5px',
                        alignContent: 'center',
                        color: '#242424',

                    }}
                >
                    Welcome to Ticket Management System
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                    <div className="mb-4 relative">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="username"
                            style={{
                                width: '75px',
                                height: '18px',
                                color: '#5E626C',
                                fontWeight: '400',
                                fontSize: '17px',
                            }}
                        >
                            Username <span className="text-red-500">*</span>
                        </label>
                        <input
                            {...register("username", { required: true })}
                            id="username"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                            style={{
                                width: '520px',
                                height: '46px',
                                borderRadius: '4px',
                                border: '1px solid #7F7F7F',
                            }}
                            placeholder="Enter your username"
                        />
                        {errors.username && <p className="text-red-500 text-xs italic">Username is required.</p>}
                    </div>
                    <div className="mb-4 relative">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                            style={{
                                width: '75px',
                                height: '18px',
                                color: '#5E626C',
                                fontWeight: '400',
                                fontSize: '17px',
                            }}
                        >
                            Password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            id="password"
                            type="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                            style={{
                                width: '520px',
                                height: '46px',
                                borderRadius: '4px',
                                border: '1px solid #7F7F7F',
                            }}
                            placeholder="Enter your password"
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">Password is required.</p>}
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            style={{
                                width: '153px',
                                height: '56px',
                                borderRadius: '8px',
                                backgroundColor: '#5027D9',
                            }}
                        >
                            LOGIN
                        </button>
                    </div>
                    <div className="text-sm mt-4 flex justify-center">
                        <a href="#" className="text-blue-500 hover:underline mr-2">Forgot Password?</a>
                        <span className="text-gray-500">|</span>
                        <a href="#" className="text-blue-500 hover:underline ml-2">RESET PASSWORD</a>
                    </div>
                </form>
            </div>
        </div>
</>
    );
};

export default LoginForm;
