'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

// Define the interface for form data
interface FormData {
  companyLegalName: string;
  companyURL: string;
  areaOfWork: string;
  phoneNumber: string;
  address: string;
  country: string;
}

const FirstPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>(); // Specify the FormData type here

  const onSubmit = async (data: FormData) => { // Explicitly type the data parameter
    console.log(data);
    try {
      const token = localStorage.getItem('token');

      const response = await axios.post('http://localhost:8000/addAccountDetails', {
        company_legal_name: data.companyLegalName,
        company_url: data.companyURL,
        area_of_work: data.areaOfWork,
        phone_number: data.phoneNumber,
        address: data.address,
        country: data.country,
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

      console.log('Response:', response.data);
      window.location.href = '/Dashboard';
    } catch (error) {
      console.error('Error adding account details:', error);
    }
  };

  return (
    <div className="p-8">
      <div className="bg-[#FFFFFF] py-8 px-4 shadow-lg pt-6 w-[100%] rounded-md border border-gray-200">
        <div className="flex flex-col justify-center ms-8 mt-8">
          <h1 className="text-2xl mb-4 font-semibold">Account Details</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-8 mt-8">
              <h2 className="text-base mb-4 font-semibold">COMPANY DETAILS</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="companyLegalName" className="block text-sm font-light text-slate-500">Company Legal Name</label>
                  <input
                    type="text"
                    id="companyLegalName"
                    {...register('companyLegalName', { required: true })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2"
                  />
                  {errors.companyLegalName && <span className="text-red-500">This field is required</span>}
                </div>

                <div>
                  <label htmlFor="companyURL" className="block text-sm text-slate-500 font-light">Company URL*</label>
                  <input
                    type="text"
                    id="companyURL"
                    {...register('companyURL', { required: true })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2"
                  />
                  {errors.companyURL && <span className="text-red-500">This field is required</span>}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="areaOfWork" className="block text-sm font-light text-slate-500">Area of Work</label>
                <select
                  id="areaOfWork"
                  {...register('areaOfWork', { required: true })}
                  className="w-full px-3 py-2 border border-slate-500 rounded-lg focus:outline-none bg-white mt-2 text-slate-500 font-light"
                >
                  <option value="">Select an option</option>
                  <option value="ayurveda">Ayurveda</option>
                  <option value="ecommerce">Ecommerce</option>
                  <option value="skincare">Skin Care</option>
                </select>
                {errors.areaOfWork && <span className="text-red-500">This field is required</span>}
              </div>
            </div>

            {/* Contact Details */}
            <div className="mb-8 mt-8">
              <h2 className="text-base mb-4 font-semibold">CONTACT DETAILS</h2>
              <div className="grid grid-cols-2 gap-4">
                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-light text-slate-500">Phone Number</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    {...register('phoneNumber', { required: true })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2"
                  />
                  {errors.phoneNumber && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-slate-500">Email</label>
                  <input
                    type="email"
                    id="email"
                    // {...register('email', { required: true })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2"
                    disabled={true}
                  />
                  {/* {errors.email && <span className="text-red-500">This field is required</span>} */}
                </div>

                {/* Address */}
                <div>
                  <label htmlFor="address" className="block text-sm font-light text-slate-500">Address</label>
                  <input
                    type="text"
                    id="address"
                    {...register('address', { required: true })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2"
                  />
                  {errors.address && <span className="text-red-500">This field is required</span>}
                </div>

                {/* Country */}
                <div>
                  <label htmlFor="country" className="block text-sm font-light text-slate-500">Country</label>
                  <input
                    type="text"
                    id="country"
                    {...register('country', { required: true })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none border-slate-500 mt-2"
                  />
                  {errors.country && <span className="text-red-500">This field is required</span>}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end">
              <button type="button" className="text-[#5027D9] px-4 py-2">Skip for Now</button>
              <button type="submit" className="bg-[#5027D9] text-white px-4 py-2 rounded-md mr-4">Next</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FirstPassword;
