'use client';
import bell from "../../../../public/images/bell.svg"
import Image from "next/image";
import TabTwo from '../../../Components/common/TabTwo'
import Link from "next/link";
import Profile from "../../../../public/images/Profile.svg"
import { useState, ChangeEvent } from 'react';
// import Bell from "../../../public/images/bell.svg"
// import userBg from "../../../public/images/User.svg"


export default function Page() {
    

    return (
        <div className="p-8 ">
            <div className=" bg-[#FFFFFF] shadow-md p-8">
                <div className="">
                    <h1 className="text-[#222222] font-semibold font-lato ">Account Details</h1></div>
                <h2 className="font-lato font-semibold  text-[#000000] mt-8">Basic Details</h2>

                <div className="flex mt-4">

                    <div className="w-32 flex justify-center items-start">
                        <Image src={Profile} alt="Profile" className="rounded-full object-cover" width={130} height={128} />
                    </div>


                    <div className="w-full ml-4">

                        <form>
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/2">
                                    <label htmlFor="fullname" className="block text-[#232323] font-lato font-normal text-base">Customer Name*</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="gender" className="block text-[#232323] font-lato font-normal text-base">Customer Company*</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-4">
                                <div className="w-full">
                                    <label htmlFor="department" className="block text-[#232323] font-lato font-normal text-base">Company URL</label>
                                    <input type="text" id="department" name="department" className="w-full px-3 py-2 border rounded-lg focus:outline-none mt-2" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex mt-4">
                    <div className="w-full ">

                        <form>
                            <div className="">
                                <h2 className="text-[#222222] font-semibold font-lato ">Contact Details</h2></div>
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/2 mt-4">
                                    <label htmlFor="fullname" className="block text-[#232323] font-lato font-normal text-base">Phone Number</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                                <div className="w-1/2 mt-4">
                                    <label htmlFor="gender" className="block text-[#232323] font-lato font-normal text-base">Email*</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-4">
                            <div className="w-1/2 mt-2">
                                    <label htmlFor="fullname" className="block text-[#232323] font-lato font-normal text-base">Company Address</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                                <div className="w-1/2 mt-2">
                                    <label htmlFor="gender" className="block text-[#232323] font-lato font-normal text-base">City</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-4">
                            <div className="w-1/2 mt-2">
                                    <label htmlFor="fullname" className="block text-[#232323] font-lato font-normal text-base">Country</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                                <div className="w-1/2 mt-2">
                                    <label htmlFor="gender" className="block text-[#232323] font-lato font-normal text-base">Postal Code</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                            </div>
                            <div className="flex space-x-4 mb-4">
                            <div className="w-full mt-2">
                                    <label htmlFor="fullname" className="block text-[#232323] font-lato font-normal text-base">About Company</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-4 py-8 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                               </div>
    
                               <div className="flex space-x-4 mb-4">
                            <div className="w-full mt-2">
                                    <label htmlFor="fullname" className="block text-[#232323] font-lato font-normal text-base">Work Domain</label>
                                    <input type="text" id="fullname" name="fullname" className="w-full px-4 py-8 mt-2 border rounded-lg focus:outline-none" />
                                </div>
                               </div>
                        </form>

        <div className="flex flex-row justify-end space-x-4">
   <button className="text-[#5027D9]">Skip for now</button>
   <button className="bg-[#5027D9] text-[#FFFFFF] px-8 py-3 rounded">Next</button>

        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
