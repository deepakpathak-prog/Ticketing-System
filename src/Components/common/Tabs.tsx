"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import ProfilePic from "../../../public/images/Group 206.svg";
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  date: string;
  commentCount: number;
  shareCount: number;
};

type Category = {
  name: string;
  posts: Post[];
};

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

const categories: Category[] = [
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

export default function Example() {
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

  const onSubmitSecurity: SubmitHandler<SecurityInputs> = (data) => {
    console.log(data); // Replace with your logic to handle security form submission
  };

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
                  <div className="flex">
                    <div className="py-7 pr-10">
                      <Image src={ProfilePic} alt="hhh" width={400} />
                    </div>
                    <div>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-2">
                        <div className="flex flex-wrap -mx-2">
                          <div className="w-1/2 px-2 ">
                            <label htmlFor="companyName" className="block mt-3">
                              Company Name
                            </label>
                            <input
                              id="companyName"
                              type="text"
                              {...register("companyName", { required: true })}
                              className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                            />
                            {errors.companyName && (
                              <span role="alert" className="text-red-600">
                                Company Name is required
                              </span>
                            )}
                          </div>
                          <div className="w-1/2 px-2">
                            <label htmlFor="email" className="block mt-3">
                              Email
                            </label>
                            <input
                              id="email"
                              type="email"
                              {...register("email", { required: true })}
                              className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                            />
                            {errors.email && (
                              <span role="alert" className="text-red-600">
                                Email is required
                              </span>
                            )}
                          </div>
                          <div className="w-1/2 px-2">
                            <label htmlFor="phoneNumber" className="block mt-6">
                              Phone Number
                            </label>
                            <input
                              id="phoneNumber"
                              type="tel"
                              {...register("phoneNumber", { required: true })}
                              className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                            />
                            {errors.phoneNumber && (
                              <span role="alert" className="text-red-600">
                                Phone Number is required
                              </span>
                            )}
                          </div>
                          <div className="w-1/2 px-2">
                            <label htmlFor="companyUrl" className="block mt-6">
                              Company URL
                            </label>
                            <input
                              id="companyUrl"
                              type="text"
                              {...register("companyUrl", { required: true })}
                              className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                            />
                            {errors.companyUrl && (
                              <span role="alert" className="text-red-600">
                                Company URL is required
                              </span>
                            )}
                          </div>
                          <div className="w-1/2 px-2">
                            <label htmlFor="companyAddress" className="block mt-6">
                              Company Address
                            </label>
                            <input
                              id="companyAddress"
                              type="text"
                              {...register("companyAddress", { required: true })}
                              className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                            />
                            {errors.companyAddress && (
                              <span role="alert" className="text-red-600">
                                Company Address is required
                              </span>
                            )}
                          </div>
                          <div className="w-1/2 px-2">
                            <label htmlFor="city" className="block mt-6">
                              City
                            </label>
                            <input
                              id="city"
                              type="text"
                              {...register("city", { required: true })}
                              className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                            />
                            {errors.city && (
                              <span role="alert" className="text-red-600">
                                City is required
                              </span>
                            )}
                          </div>
                          <div className="w-1/2 px-2">
                            <label htmlFor="country" className="block mt-6">
                              Country
                            </label>
                            <input
                              id="country"
                              type="text"
                              {...register("country", { required: true })}
                              className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                            />
                            {errors.country && (
                              <span role="alert" className="text-red-600">
                                Country is required
                              </span>
                            )}
                          </div>
                          <div className="w-1/2 px-2">
                            <label htmlFor="postalCode" className="block mt-6">
                              Postal Code
                            </label>
                            <input
                              id="postalCode"
                              type="text"
                              {...register("postalCode", { required: true })}
                              className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                            />
                            {errors.postalCode && (
                              <span role="alert" className="text-red-600">
                                Postal Code is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="w-full px-2">
                          <label htmlFor="aboutCompany" className="block mt-6">
                            About Company
                          </label>
                          <textarea
                            id="aboutCompany"
                            {...register("aboutCompany", { required: true })}
                            className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                          />
                          {errors.aboutCompany && (
                            <span role="alert" className="text-red-600">
                              About Company is required
                            </span>
                          )}
                        </div>
                        <div className="w-full px-2">
                          <label htmlFor="workDomain" className="block mt-6">
                            Work Domain
                          </label>
                          <textarea
                            id="workDomain"
                            {...register("workDomain", { required: true })}
                            className="input-field p-2 mt-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                          />
                          {errors.workDomain && (
                            <span role="alert" className="text-red-600">
                              Work Domain is required
                            </span>
                          )}
                        </div>
                        {/* <button type="submit" className="btn-submit">
                          Submit
                        </button> */}
                      </form>
                    </div>
                  </div>
                )}

                {name === "Security" && (
                  <form onSubmit={handleSubmitSecurity(onSubmitSecurity)} className="space-y-4 p-5 w-1/2 bg-white">
                    <h1 className="p-2 text-2xl font-medium text-[#333B69]">Change Password</h1>
                    <div className="w-full px-2">
                      <label htmlFor="currentPassword" className="block mt-6">
                        Current Password
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
                        New Password
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
                    <div className="w-full px-2">
                      <button type="submit" className="py-2 px-4 bg-[#5027D9] text-white rounded">
                        Change Password
                      </button>
                    </div>
                  </form>
                )}

                {name === "Member management" && (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Member ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Profile Image
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Member name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Organisation name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Email ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Action
                          </th>
                          <th
                            scope="col"
                            className="relative  py-3"
                          >
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #1234
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Type 1
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">
                            This is a ticket
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           Low
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #1234
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Type 1
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">
                            This is a ticket
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           Low
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #1234
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Type 1
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">
                            This is a ticket
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           Low
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #1234
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            Type 1
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm ">
                            This is a ticket
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                           Low
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </td>
                        </tr>
                        
                        
                      </tbody>
                    </table>
                  </div>
                )}

                {name !== "Edit Profile" && name !== "Security" && name !== "Member management" && (
                  <ul>
                    {categories
                      .find((category) => category.name === name)
                      ?.posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                        >
                          <a href="#" className="font-semibold text-black">
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                          <ul
                            className="flex gap-2 text-white/50"
                            aria-hidden="true"
                          >
                            <li>{post.date}</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{post.commentCount} comments</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{post.shareCount} shares</li>
                          </ul>
                        </li>
                      ))}
                  </ul>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
