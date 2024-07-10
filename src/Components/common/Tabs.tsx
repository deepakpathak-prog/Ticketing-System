"use client";
import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import ProfilePic from "../../../public/images/Group 206.svg";
import { useForm, SubmitHandler, FieldErrors, UseFormRegister } from "react-hook-form";
import Image from 'next/image';
import ProfilePic from "../../../public/images/Group 206.svg";
import Close from "../../../public/images/closebutton.svg"
import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import AccountDetailsForm from "./AccountDetailsFrom";


// Define types for form inputs
type FormInputs = {
  email: string;
  companyName: string;
  phoneNumber: string;
  companyUrl: string;
  companyAddress: string;
  city: string;
  country: string;
  postalCode: string;
  aboutCompany: string;
  workDomain: string;
};

type SecurityInputs = {
  currentPassword: string;
  newPassword: string;
};

// Define props for WorkDomainInput component
type WorkDomainInputProps = {
  register: UseFormRegister<FormInputs>;
  errors: FieldErrors<FormInputs>;
};

const WorkDomainInput: React.FC<WorkDomainInputProps> = ({ register, errors }) => {
  const [workDomains, setWorkDomains] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      setWorkDomains([...workDomains, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleRemove = (index: number) => {
    setWorkDomains(workDomains.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full px-2">
      <label htmlFor="workDomain" className="block mt-6">
        Work Domain
      </label>
      <div className="border-2 border-[#DFEAF2] rounded-md p-2 mt-2 bg-white h-40 cursor-pointer">
        {workDomains.map((domain, index) => (
          <span
            key={index}
            className="inline-block bg-[#E8E3FA] rounded-full pl-5 pr-7 py-3 text-sm  text-black mr-2 mb-2 "
          >
            {domain}
            <button
              onClick={() => handleRemove(index)}
              className="ml-5 text-black"
            >
              <Image src={Close} alt="hhh" width={10} />
            </button>
          </span>
        ))}
        <input
          id="workDomain"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="input-field p-2 mt-2 w-full border-none focus:outline-none"
        />
      </div>
      <input
        type="hidden"
        {...register("workDomain", { required: true })}
        value={workDomains.join(",")}
      />
      
    </div>
  );
};

const Example: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const {
    register: registerSecurity,
    handleSubmit: handleSubmitSecurity,
    formState: { errors: securityErrors },
  } = useForm<SecurityInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data); // Replace with your logic to handle form submission
  };

  const onSubmitSecurity: SubmitHandler<SecurityInputs> = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:8000/resetPassword',
        {
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Reset password executed successfully");
      }
    } catch (error) {
      toast.error("Error in resetting the password");
      console.log("error in resetting the password");
    }
  };

  const categories = [
    {
      name: "Edit Profile",
      posts: [],
    },
    {
      name: "Member management",
      posts: [],
    },
    {
      name: "Security",
      posts: [],
    },
  ];

  return (
    <div className="w-full p-2">
      <div className="w-full max-w">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="py-1 px-3 text-[#9291A5] focus:outline-none focus:border-b-4 focus:border-[#5027D9] focus:text-[#5027D9] data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-none"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="m-5">
            {categories.map(({ name }) => (
              <TabPanel key={name}>
                {name === "Edit Profile" && (
                  // <div className="flex">
                  //   <div className="py-7 pr-10">
                  //     <Image src={ProfilePic} alt="Profile Pic" width={400} />
                  //   </div>
                  //   <div>
                  //     <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-2">
                  //       <div className="flex flex-wrap -mx-2">
                  //         <div className="w-1/2 px-2 ">
                  //           <label htmlFor="companyName" className="block mt-3">
                  //             Company Name
                  //           </label>
                  //           <input
                  //             id="companyName"
                  //             type="text"
                  //             {...register("companyName", { required: true })}
                  //             className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //           />
                  //           {errors.companyName && (
                  //             <span role="alert" className="text-red-600">
                  //               Company Name is required
                  //             </span>
                  //           )}
                  //         </div>
                  //         <div className="w-1/2 px-2">
                  //           <label htmlFor="email" className="block mt-3">
                  //             Email
                  //           </label>
                  //           <input
                  //             id="email"
                  //             type="email"
                  //             {...register("email", { required: true })}
                  //             className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //           />
                  //           {errors.email && (
                  //             <span role="alert" className="text-red-600">
                  //               Email is required
                  //             </span>
                  //           )}
                  //         </div>
                  //         <div className="w-1/2 px-2">
                  //           <label htmlFor="phoneNumber" className="block mt-6">
                  //             Phone Number
                  //           </label>
                  //           <input
                  //             id="phoneNumber"
                  //             type="tel"
                  //             {...register("phoneNumber", { required: true })}
                  //             className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //           />
                  //           {errors.phoneNumber && (
                  //             <span role="alert" className="text-red-600">
                  //               Phone Number is required
                  //             </span>
                  //           )}
                  //         </div>
                  //         <div className="w-1/2 px-2">
                  //           <label htmlFor="companyUrl" className="block mt-6">
                  //             Company URL
                  //           </label>
                  //           <input
                  //             id="companyUrl"
                  //             type="text"
                  //             {...register("companyUrl", { required: true })}
                  //             className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //           />
                  //           {errors.companyUrl && (
                  //             <span role="alert" className="text-red-600">
                  //               Company URL is required
                  //             </span>
                  //           )}
                  //         </div>
                  //         <div className="w-1/2 px-2">
                  //           <label htmlFor="companyAddress" className="block mt-6">
                  //             Company Address
                  //           </label>
                  //           <input
                  //             id="companyAddress"
                  //             type="text"
                  //             {...register("companyAddress", { required: true })}
                  //             className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //           />
                  //           {errors.companyAddress && (
                  //             <span role="alert" className="text-red-600">
                  //               Company Address is required
                  //             </span>
                  //           )}
                  //         </div>
                  //         <div className="w-1/2 px-2">
                  //           <label htmlFor="city" className="block mt-6">
                  //             City
                  //           </label>
                  //           <input
                  //             id="city"
                  //             type="text"
                  //             {...register("city", { required: true })}
                  //             className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //           />
                  //           {errors.city && (
                  //             <span role="alert" className="text-red-600">
                  //               City is required
                  //             </span>
                  //           )}
                  //         </div>
                  //         <div className="w-1/2 px-2">
                  //           <label htmlFor="country" className="block mt-6">
                  //             Country
                  //           </label>
                  //           <input
                  //             id="country"
                  //             type="text"
                  //             {...register("country", { required: true })}
                  //             className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //           />
                  //           {errors.country && (
                  //             <span role="alert" className="text-red-600">
                  //               Country is required
                  //             </span>
                  //           )}
                  //         </div>
                  //         <div className="w-1/2 px-2">
                  //           <label htmlFor="postalCode" className="block mt-6">
                  //             Postal Code
                  //           </label>
                  //           <input
                  //             id="postalCode"
                  //             type="text"
                  //             {...register("postalCode", { required: true })}
                  //             className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //           />
                  //           {errors.postalCode && (
                  //             <span role="alert" className="text-red-600">
                  //               Postal Code is required
                  //             </span>
                  //           )}
                  //         </div>
                  //       </div>
                  //       <div className="w-full px-2">
                  //         <label htmlFor="aboutCompany" className="block mt-6">
                  //           About Company
                  //         </label>
                  //         <textarea
                  //           id="aboutCompany"
                  //           {...register("aboutCompany", { required: true })}
                  //           className="input-field p-2 mt-2 w-full h-40 border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                  //         />
                  //         {errors.aboutCompany && (
                  //           <span role="alert" className="text-red-600">
                  //             About Company is required
                  //           </span>
                  //         )}
                  //       </div>
                  //       <WorkDomainInput register={register} errors={errors} />
                  //       <div className="flex justify-end w-full mt-6">
                  //         <button
                  //           type="submit"
                  //           className="btn-submit ml-auto block rounded bg-[#5027D9] py-3 px-5 text-sm text-white"
                  //         >
                  //           Save details
                  //         </button>
                  //       </div>
                  //     </form>
                  //   </div>
                  // </div>
                  <AccountDetailsForm />
                )}
                {name === "Member management" && (
                  <div>
                    <p>Member management content goes here.</p>
                  </div>
                )}
                {name === "Security" && (
                  <div className="w-[50%] bg-white p-5 rounded-md">
                    <form onSubmit={handleSubmitSecurity(onSubmitSecurity)} className="space-y-4 p-2">
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-2">
                          <label htmlFor="currentPassword" className="block mt-6">
                            Current Password <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="currentPassword"
                            type="password"
                            {...registerSecurity("currentPassword", { required: true })}
                            className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                          />
                          {securityErrors.currentPassword && (
                            <span role="alert" className="text-red-600">
                              Current Password is required
                            </span>
                          )}
                        </div>
                        <div className="w-full px-2">
                          <label htmlFor="newPassword" className="block mt-6">
                            New Password  <span className="text-red-600">*</span>
                          </label>
                          <input
                            id="newPassword"
                            type="password"
                            {...registerSecurity("newPassword", { required: true })}
                            className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                          />
                          {securityErrors.newPassword && (
                            <span role="alert" className="text-red-600">
                              New Password is required
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-end w-full  p-3">
                        <button
                          type="submit"
                          className="btn-submit ml-auto block rounded bg-[#5027D9] py-3 px-5 text-sm text-white"
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Example;
