"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Button,
} from "@headlessui/react";
import breadcrumbArrow from "../../../../public/images/BreadcrumbArrow.svg";
import Bell from "../../../../public/images/bell.svg";
import userBg from "../../../../public/images/User.svg";
import SearchBar from "../common/SearchBar";
import CustomerForm from "../common/CustomerForm";
import Plus from "../../../public/images/Plus.svg";
import View from "../../../public/images/eye.svg";
import Delete from "../../../public/images/delete.svg";
import ProfilePic from "../../../public/images/Group 206.svg";
import memberpic from "../../../../public/images/unsplash_8YG31Xn4dSw.png";
import DropdownBlack from "../../../../public/images/DropdownBlack.svg";
import info from "../../../../public/images/info-circle_svgrepo.com.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import green from "../../../../public/images/Ellipse262.svg";

interface Customer {
  id: string;
  name: string;
  url: string;
  area: string;
  phone: string;
  email: string;
}

const designations = ["Manager", "Developer", "Designer", "Analyst", "Intern"];


const customers: Customer[] = [
  {
    id: "123",
    name: "Shankara",
    url: "www.example.com",
    area: "IT",
    phone: "123-456-7890",
    email: "john@example.com",
  },
  {
    id: "234",
    name: "Jane Doe",
    url: "www.example.com",
    area: "Marketing",
    phone: "987-654-3210",
    email: "jane@example.com",
  },
];

export default function CustomerManagement() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const [innerTabIndex, setInnerTabIndex] = useState(0);
  const [showAddMemberForm, setShowAddMemberForm] = useState(false);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);



  const handleAddMemberClick = () => {
    setShowAddMemberForm(true);
  };

  const handleCustomerClick = (customer: Customer) => {
    setSelectedCustomer(customer);
    setInnerTabIndex(0);
    setShowAddMemberForm(false);
  };

  const handleCancelAddCustomer = () => {
    setShowAddCustomerForm(false);
  };

  const handleAddCustomerClick = () => {
    setShowAddCustomerForm(true);
  };


  return (
    <TabPanel className="px-10 py-5 bg-white pt-0">
              {selectedCustomer ? (
                <div>
                  <div className="py-7 flex justify-between border-b-2">
                    <div>
                      <h2 className="text-2xl font-semibold">
                        {selectedCustomer.name} PVT LTD
                      </h2>
                    </div>
                    {innerTabIndex === 0 ? (
                      <div className="flex gap-5">
                        <Button
                          type="button"
                          className="rounded bg-transparent py-3 px-7 text-sm text-[#5027D9] border-[#5027D9] border-2"
                        >
                          Remove Client
                        </Button>
                        <Button
                          type="submit"
                          className="rounded bg-[#5027D9] py-3 px-16 text-sm text-white"
                        >
                          Save
                        </Button>
                      </div>
                    ) : showAddMemberForm ? (
                      <div className="flex gap-5">
                        <Button
                          type="button"
                          onClick={() => setShowAddMemberForm(false)}
                          className="rounded bg-transparent py-3 px-7 text-sm text-[#5027D9] border-[#5027D9] border-2"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="rounded bg-[#5027D9] py-3 px-7 text-sm text-white"
                        >
                          Save Member
                        </Button>
                      </div>
                    ) : (
                      <div className="flex gap-5">
                        <Button
                          type="button"
                          onClick={handleAddMemberClick}
                          className="rounded bg-[#5027D9] py-3 px-7 text-sm text-white flex items-center gap-2"
                        >
                          <Image src={Plus} alt="add" width={20} height={20} />
                          Add Member
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="flex mt-7 mb-10">
                    <div className="w-[15%] pr-4 pl-2 border-r-2">
                      <TabGroup
                        selectedIndex={innerTabIndex}
                        onChange={setInnerTabIndex}
                      >
                        <TabList className="space-y-4 ">
                          {["Edit Profile", "Team Members"].map(
                            (innerTab, index) => (
                              <Tab
                                as="div"
                                key={index}
                                className={({ selected }) =>
                                  `text-left cursor-pointer ${
                                    selected
                                      ? "text-white bg-[#5027D9] p-3"
                                      : "text-[#91919B] p-3"
                                  }`
                                }
                              >
                                {innerTab}
                              </Tab>
                            )
                          )}
                        </TabList>
                      </TabGroup>
                    </div>

                    <div className="w-[85%] p-5">
                      {innerTabIndex === 0 ? (
                        <div>
                          <CustomerForm />
                        </div>
                      ) : showAddMemberForm ? (
                        <div>
                          <h2 className="text-xl font-semibold mb-4">
                            Basic Details
                          </h2>
                          <div className="flex py-5">
                            <div className="w-[20%] pt-10">
                              <Image
                                src={ProfilePic}
                                alt="Profile Pic"
                                className="pr-3"
                              />
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-full">
                              <div>
                                <label
                                  htmlFor="customerName"
                                  className="block text-sm "
                                >
                                  Customer Name
                                </label>
                                <input
                                  id="customerName"
                                  type="text"
                                  // {...register("customerName", { required: true })}
                                  className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                                />
                                {/* {errors.customerName && (
              <span role="alert" className="text-red-600">
                Customer Name is required
              </span>
            )} */}
                              </div>
                              <div>
                                <label
                                  htmlFor="companyName"
                                  className="block text-sm  "
                                >
                                  Gender
                                </label>
                                <input
                                  id="companyName"
                                  type="text"
                                  // {...register("companyName", { required: true })}
                                  className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                                />
                                {/* {errors.companyName && (
              <span role="alert" className="text-red-600">
                Company Name is required
              </span>
            )} */}
                              </div>
                              <div>
                                <label
                                  htmlFor="companyUrl"
                                  className="block text-sm "
                                >
                                  Phone number
                                </label>
                                <input
                                  id="companyUrl"
                                  type="url"
                                  // {...register("companyUrl", { required: true })}
                                  className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                                />
                                {/* {errors.companyUrl && (
              <span role="alert" className="text-red-600">
                Company URL is required
              </span>
            )} */}
                              </div>
                              <div>
                                <label
                                  htmlFor="companyUrl"
                                  className="block text-sm "
                                >
                                  Email
                                </label>
                                <input
                                  id="companyUrl"
                                  type="url"
                                  // {...register("companyUrl", { required: true })}
                                  className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                                />
                                {/* {errors.companyUrl && (
              <span role="alert" className="text-red-600">
                Company URL is required
              </span>
            )} */}
                              </div>
                              <div>
                                <label
                                  htmlFor="companyUrl"
                                  className="block text-sm "
                                >
                                  Customer Company
                                </label>
                                <input
                                  id="companyUrl"
                                  type="url"
                                  // {...register("companyUrl", { required: true })}
                                  className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                                />
                                {/* {errors.companyUrl && (
              <span role="alert" className="text-red-600">
                Company URL is required
              </span>
            )} */}
                              </div>
                              <div>
                                <label
                                  htmlFor="designation"
                                  className="block text-sm "
                                >
                                  Designation
                                </label>
                                <select
                                  id="designation"
                                  className="input-field p-2 mt-2 mb-2 w-full border-2 border-[#DFEAF2] rounded-md focus:outline-none"
                                >
                                  <option value="">Select Designation</option>
                                  {designations.map((designation, index) => (
                                    <option key={index} value={designation}>
                                      {designation}
                                    </option>
                                  ))}
                                </select>
                                {/* {errors.companyUrl && (
              <span role="alert" className="text-red-600">
                Company URL is required
              </span>
            )} */}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <table className="min-w-full divide-y divide-gray-200 border-b-0">
                            <thead className="bg-white">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                  Customer ID
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                  Customer Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                  Company URL
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                  Area of Work
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                  Phone
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                                  Email
                                </th>
                                <th className=""></th>
                                <th className=""></th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {customers.map((customer) => (
                                <tr
                                  key={customer.id}
                                  className="cursor-pointer"
                                  onClick={() => handleCustomerClick(customer)}
                                >
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5027D9]">
                                    <p className="border-b-2 w-fit border-[#5027D9]">
                                      #{customer.id}
                                    </p>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5027D9]">
                                    <p className="border-b-2 w-fit border-[#5027D9]">
                                      {customer.name}
                                    </p>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {customer.url}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {customer.area}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {customer.phone}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {customer.email}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {!showAddCustomerForm && (
                    <div className="flex justify-between items-center py-7">
                    <h2 className="text-2xl font-semibold">
                      Customer Management
                    </h2>
                    <div className="flex gap-5">
                      <SearchBar />
                      <div className="flex gap-5">
                        <div>
                          <Button
                            type="button"
                            className="rounded bg-[#5027D9] py-2 px-4 text-sm text-white items-center gap-2  flex"
                            onClick={handleAddCustomerClick}
                          >
                            <Image
                              src={Plus}
                              alt="add"
                              width={22}
                              height={22}
                            />
                            Add customer
                          </Button>
                        </div>
                        {/* c */}
                      </div>
                    </div>
                  </div>
                  )}
                  

                  <div>
                    {showAddCustomerForm  ? (
                      <div>
                        <div className="py-7 flex justify-between border-b-2 mb-10">
                          <div>
                            <h2 className="text-2xl font-semibold">
                              Create a new customer
                            </h2>
                          </div>
                          <div className="flex gap-5">
                            <Button
                              type="button"
                              onClick={handleCancelAddCustomer}
                              className="rounded bg-transparent py-3 px-7 text-sm text-[#5027D9] border-[#5027D9] border-2"
                            >
                              Cancel
                            </Button>
                            <Button
                              type="submit"
                              className="rounded bg-[#5027D9] py-3 px-10 text-sm text-white"
                            >
                              Create Customer
                            </Button>
                          </div>
                        </div>
                        <CustomerForm />
                      </div>
                    ) : (
                      <table className="min-w-full divide-y divide-gray-200 border-b-0">
                        <thead className="bg-white">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                              Customer ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                              Customer Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                              Company URL
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                              Area of Work
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                              Phone
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
                              Email
                            </th>
                            <th className=""></th>
                            <th className=""></th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {customers.map((customer) => (
                            <tr
                              key={customer.id}
                              className="cursor-pointer"
                              onClick={() => handleCustomerClick(customer)}
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5027D9]">
                                <p className="border-b-2 w-fit border-[#5027D9]">
                                  #{customer.id}
                                </p>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5027D9]">
                                <p className="border-b-2 w-fit border-[#5027D9]">
                                  {customer.name}
                                </p>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {customer.url}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {customer.area}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {customer.phone}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {customer.email}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button>
                                  <Image src={View} alt="view" width={20} />
                                </button>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button>
                                  <Image src={Delete} alt="delete" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              )}
            </TabPanel>
  )
}



