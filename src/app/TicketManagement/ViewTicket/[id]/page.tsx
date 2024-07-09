"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import breadcrumbArrow from "../../../../../public/images/BreadcrumbArrow.svg";
import Bell from "../../../../../public/images/bell.svg";
import userBg from "../../../../../public/images/User.svg";
import axios, { AxiosResponse } from "axios";
import { useRouter, usePathname } from "next/navigation";
// import TicketFilesTable from "../../../../Components/others/ticketFilesTable";
import TicketFilesTable from "@/Components/others/ticketFilesTable";

const Page: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ticketId, setTicketId] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [createdOn, setCreatedOn] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [raisedBy, setRaisedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split("/");
  const value = parts[parts.length - 1];

  const tabClasses = ({ selected }: { selected: boolean }) =>
    `px-4 py-2 text-sm font-medium focus:outline-none ${
      selected ? "text-[#5027D9] border-b-2 border-[#5027D9]" : "text-gray-500"
    }`;

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response: AxiosResponse<any> = await axios.get(
        `http://localhost:8000/viewTicketDetails/${value}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.data) {
        const ticketDetails = response.data.ticketDetails[0];
        const user = response.data.user;

        setTicketId(ticketDetails.id);
        setTicketType(ticketDetails.ticket_type);
        setCreatedOn(new Date(ticketDetails.createdAt).toLocaleDateString());
        setPriority(ticketDetails.priority);
        setStatus(ticketDetails.status);
        setRaisedBy(user.customer_name);
        setSubject(ticketDetails.subject);
        setDescription(ticketDetails.details);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const files = [
    { filename: 'Document1.pdf', uploadedOn: '2024-07-09' },
    { filename: 'Spreadsheet.xlsx', uploadedOn: '2024-07-08' },
    { filename: 'Presentation.pptx', uploadedOn: '2024-07-07' }
  ];

  const handleDownload = (filename: string) => {
    console.log(`Downloading ${filename}`);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-300";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-300";
      default:
        return "text-gray-600";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-red-300";
      case "closed":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between shadow-md p-8 sticky top-0 z-50 bg-white">
        <div className="flex items-center gap-3">
          <div className="text-[#2A2C3E] text-xl">
            <Link href="/TicketManagement">Ticket Management </Link>
          </div>
          <div>
            <Image src={breadcrumbArrow} alt="breadcrumb" width={25} />
          </div>
          <div className="text-[#2A2C3E] text-xl">View Ticket</div>
          <div>
            <Image src={breadcrumbArrow} alt="breadcrumb" width={25} />
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center">
          <div>
            <Image src={Bell} alt="Notification Bell" width={25} />
          </div>
          <div>
            <Image src={userBg} alt="User" width={50} />
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-10 m-10 rounded-md">
        <div className="text-[#2A2C3E] text-2xl mb-6">View Ticket</div>

        <div className="grid grid-cols-3 py-5">
          <div className="pb-5">
            <div className="text-base font-medium">Ticket ID</div>
            <div>
              <p className="text-base py-5 text-[#7D7D7D]">{ticketId}</p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-base font-medium">Ticket Type</div>
            <div>
              <p className="text-base py-5 text-[#7D7D7D]">{ticketType}</p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-base font-medium">Created On</div>
            <div>
              <p className="text-base py-5 text-[#7D7D7D]">{createdOn}</p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-base font-medium">Priority</div>
            <div>
              <p className={`text-base py-5 ${getPriorityColor(priority)}`}>
                {priority}
              </p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-base font-medium">Status</div>
            <div>
              <p className={`text-base py-5 ${getStatusColor(status)}`}>
                {status}
              </p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-base font-medium">
              Total Hours Logged on Tickets
            </div>
            <div>
              <p className="text-base py-5 text-[#7D7D7D]">{totalHours}</p>
            </div>
          </div>

          <div className="">
            <div className="text-base font-medium">Raised By</div>
            <div>
              <p className="text-base py-5 text-[#7D7D7D]">{raisedBy}</p>
            </div>
          </div>

          <div className="">
            <div className="text-base font-medium">Assigned To</div>
            <div>
              <p className="text-base py-5 text-[#7D7D7D]">{assignedTo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-10 m-10 rounded-md">
        <div className="pb-10">
          <div className="text-base font-medium pb-2">Subject</div>
          <div>
            <p className="text-sm text-[#7d7d7d] font-light">{subject}</p>
          </div>
        </div>

        <div className="">
          <div className="text-base font-medium pb-2">Request Details</div>
          <div>
            <p className="text-sm text-[#7d7d7d] font-light">{description}</p>
          </div>
        </div>
      </div>

      <div className="m-10 rounded-md">
        <div className="p-10 bg-[#F9F9F9] text-base font-medium rounded-md">
          Activity
        </div>

        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList className="flex space-x-1 bg-white p-3 px-7 cursor-pointer">
            <Tab as="div" className={tabClasses}>
              Events Timeline
            </Tab>
            <Tab as="div" className={tabClasses}>
              Comments
            </Tab>
            <Tab as="div" className={tabClasses}>
              Files
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel className="p-10 bg-white">
              Events content goes here.
            </TabPanel>

            <TabPanel className="p-10 bg-white">
              Comments content goes here.
            </TabPanel>
            <TabPanel className="p-10 bg-white">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs p-3">
                    <tr>
                      <th>Filename</th>
                      <th>Uploaded On</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((file, index) => (
                      <tr key={index}>
                        <td>{file.filename}</td>
                        <td>{file.uploadedOn}</td>
                        <td>
                          <button onClick={() => handleDownload(file.filename)}>
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Page;
