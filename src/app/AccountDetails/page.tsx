'use client';
import React from 'react';
import { useForm } from 'react-hook-form';


// Define the interface for form data
interface FormData {
  username: string;
  password: string;
}

const FirstPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>(); // Specify the FormData type here

  const onSubmit = (data: FormData) => { // Explicitly type the data parameter
    console.log(data);
  };

  return (
<div className=" p-8">
    <div className="bg-[#FFFFFF] py-8 px-4 shadow-lg pt-6  w-[100%] rounded-md border border-gray-200">
  <div className=" flex flex-col  justify-center ms-8 mt-8">
    <h1 className="text-2xl  mb-4 font-semibold">Account Details</h1>
    
    
    <div className="mb-8 mt-8">
      <h2 className="text-base  mb-4 font-semibold">COMPANY DETAILS</h2>
      <div className="grid grid-cols-2 gap-4">
        
        <div>
          <label htmlFor="companyLegalName" className="block text-sm font-light text-slate-500  ">Company Legal Name</label>
          <input type="text" id="companyLegalName" name="companyLegalName" className="w-full px-3 py-2 border rounded-lg focus:outline-none  border-slate-500 mt-2 " />
        </div>
        
        
        <div>
          <label htmlFor="companyURL" className="block text-sm  text-slate-500 font-light">Company URL*</label>
          <input type="text" id="companyURL" name="companyURL" className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="areaOfWork" className="block text-sm font-light text-slate-500">Area of Work</label>
        <select id="areaOfWork" name="areaOfWork" className="w-full px-3 py-2 border border-slate-500 rounded-lg focus:outline-none bg-white mt-2 text-slate-500 font-light">
          <option value="">Select an option</option>
          <option value="ayurveda">Ayurveda</option>
          <option value="ecommerce">Ecommerce</option>
          <option value="skincare">Skin Care</option>
        </select>
      </div>
    </div>

    {/* Contact Details */}
    <div className="mb-8 mt-8">
      <h2 className="text-base  mb-4 font-semibold">CONTACT DETAILS</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Phone Number */}
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-light text-slate-500">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2" />
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-light text-slate-500">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2" />
        </div>
        
        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-light text-slate-500">Address</label>
          <input type="text" id="address" name="address" className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2" />
        </div>
        
        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-light text-slate-500">Country</label>
          <input type="text" id="country" name="country" className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2" />
        </div>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-end">
    <button className="text-[#5027D9] px-4 py-2 ">Skip for Now</button>
      <button className="bg-[#5027D9] text-white px-4 py-2 rounded-md mr-4">Next</button>
      
    </div>
  </div>
</div>
</div>


  );
}


export default FirstPassword;


