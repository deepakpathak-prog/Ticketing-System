"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Button } from "@headlessui/react";
import axios, { AxiosResponse } from "axios";
import { useRouter, usePathname } from "next/navigation";
import sendAttachment from "../../../../../public/images/Attachment.svg";
import sendComment from "../../../../../public/images/sendComment.svg";
import addticket from "../../../../../public/images/add.svg";

interface Comment {
  user: string;
  text: string;
  attachments?: File[];
}

interface UploadedFile {
  filename: string;
  uploadedOn: string;
  fileUrl: string;
}

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
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        const imagesUrls = response.data.ticketDetails[0].details_images_url;
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

        const filesData = response.data.ticketDetails[0].details_images_url.map(
          (url: string, index: number) => ({
            filename: `File ${index + 1}`,
            uploadedOn: new Date().toLocaleDateString(),
            fileUrl: url,
          })
        );
        setFiles(filesData);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const handleAddAttachment = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

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

  const events = [
    { text: "Goutham closed the ticket on", date: "2nd June 2024" },
    { text: "Goutham left a comment on", date: "2nd June 2024 5:00pm" },
    { text: "Sheik replied to the comment on", date: "2nd June 2024 5:00pm" },
    { text: "Ticket was raised by Sheik on", date: "2nd June 2024" },
  ];

  const [comments, setComments] = useState<Comment[]>([
    { user: "Goutham", text: "I need some extra details on this" },
    { user: "Sheik", text: "@Gautham I have pasted in the file below" },
  ]);
  const [newComment, setNewComment] = useState("");
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleAddComment = () => {
    const newCommentObject: Comment = {
      user: "Kashish",
      text: newComment,
      attachments: attachments.length > 0 ? [...attachments] : undefined,
    };

    setComments([...comments, newCommentObject]);
    setNewComment("");
    setAttachments([]);
  };

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setAttachments(selectedFiles);
    }
  };

  const handleAddNewClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        filename: file.name,
        uploadedOn: new Date().toLocaleDateString(),
        fileUrl: URL.createObjectURL(file),
      }));

      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  return (
    <div className="">
      <div className="bg-[#F9F9F9] p-5 lg:p-7 m-5 lg:m-7 rounded-md">
        <div className="flex justify-between items-center mb-6 lg:mb-0">
          <div className="text-[#2A2C3E] text-2xl lg:mb-6">View Ticket</div>
          <div>
            <Button className="flex rounded bg-[#5027D9] py-3 px-12 lg:py-2 lg:px-12 text-sm text-white items-center gap-2">
              Edit
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 py-5">
          <div className="pb-5">
            <div className="text-sm lg:text-base lg:font-medium font-medium text-[#9A9A9A]">Ticket ID</div>
            <div>
              <p className="text-sm lg:text-base py-5 text-[#7D7D7D]">{ticketId}</p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-sm lg:text-base lg:font-medium font-medium text-[#9A9A9A]">Ticket Type</div>
            <div>
              <p className="text-sm lg:text-base py-5 text-[#7D7D7D]">{ticketType}</p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-sm lg:text-base lg:font-medium font-medium text-[#9A9A9A]">Created On</div>
            <div>
              <p className="text-sm lg:text-base py-5 text-[#7D7D7D]">{createdOn}</p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-sm lg:text-base lg:font-medium font-medium text-[#9A9A9A]">Priority</div>
            <div>
              <p className={`text-sm lg:text-base py-5 ${getPriorityColor(priority)}`}>
                {priority}
              </p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-sm lg:text-base lg:font-medium font-medium text-[#9A9A9A]">Status</div>
            <div>
              <p className={`text-sm lg:text-base py-5 ${getStatusColor(status)}`}>
                {status}
              </p>
            </div>
          </div>

          <div className="pb-5">
            <div className="text-sm lg:text-base lg:font-medium font-medium text-[#9A9A9A]">
              Total Hours Logged on Tickets
            </div>
            <div>
              <p className="text-sm lg:text-base py-5 text-[#7D7D7D]">{totalHours}</p>
            </div>
          </div>

          <div className="">
            <div className="text-sm lg:text-base lg:font-medium font-medium text-[#9A9A9A]">Raised By</div>
            <div>
              <p className="text-base py-5 text-[#7D7D7D]">{raisedBy}</p>
            </div>
          </div>

          <div className="">
            <div className="text-sm lg:text-base lg:font-medium text-[#9A9A9A]">Assigned To</div>
            <div>
              <p className="text-sm lg:text-base py-5 text-[#7D7D7D]">{assignedTo}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9F9F9] p-5 lg:p-7 m-5 lg:m-7 rounded-md">
        <div className="pb-10">
          <div className="text-sm lg:text-base lg:font-medium text-[#9A9A9A] pb-2">Subject</div>
          <div>
            <p className="text-sm text-[#7d7d7d] font-light">{subject}</p>
          </div>
        </div>

        <div className="">
          <div className="text-sm lg:text-base lg:font-medium text-[#9A9A9A] font-medium pb-2">Request Details</div>
          <div>
            <p className="text-sm text-[#7d7d7d] font-light">{description}</p>
          </div>
        </div>
      </div>

      <div className="m-5 lg:m-7 rounded-md border">
        <div className=" p-5 lg:p-7 bg-[#F9F9F9] text-base font-medium rounded-md">
          Activity
        </div>

        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <TabList className="flex space-x-1 bg-white py-2 lg:p-3 lg:px-7 cursor-pointer">
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
            <TabPanel className=" px-5 lg:px-10 py-5 bg-white">
              {events.map((event, index) => (
                <span key={index} className="text-[#535353] pb-5">
                  <li className="list-none relative pl-4">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#5027D9] rounded-full"></span>
                    {event.text.split(" ").map((word, idx) =>
                      word.toLowerCase() === "comment" ? (
                        <span key={idx} className="text-[#5027D9]">
                          {word}{" "}
                        </span>
                      ) : (
                        <span key={idx}>{word} </span>
                      )
                    )}
                    <span className="text-[#5027D9]">{event.date}</span>
                  </li>
                </span>
              ))}
            </TabPanel>

            <TabPanel className="p-5 lg:p-7 bg-white">
              <div>
                {comments.map((comment, index) => (
                  <div
                    key={index}
                    className="pb-5 flex justify-start items-center"
                  >
                    <div className="bg-[#041444] rounded-full w-12 h-12 flex items-center justify-center text-white mr-6">
                      {comment.user.charAt(0)}
                    </div>

                    <div>
                      <p className="font-bold text-[#4B4B4B]">{comment.user}</p>
                      <p className="text-[#4B4B4B]">
                        {comment.text.split(" ").map((word, idx) =>
                          word.startsWith("@") ? (
                            <span
                              key={idx}
                              className="text-[#F5862D] font-bold"
                            >
                              {word}{" "}
                            </span>
                          ) : (
                            <span key={idx}>{word} </span>
                          )
                        )}
                      </p>
                      {comment.attachments && (
                        <div className="mt-2">
                          {comment.attachments.map((attachment, idx) => (
                            <a
                              key={idx}
                              href={URL.createObjectURL(attachment)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#5027D9] underline block font-bold"
                            >
                              {attachment.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-between lg:mt-10 border rounded p-1 ">
                <div className="w-full mr-2 m-auto">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment"
                    className="w-full lg:p-4 focus:outline-none "
                  />

                  {attachments.length > 0 && (
                    <div className="mt-2">
                      <p className="text-base font-medium">
                        Selected Attachments:
                      </p>
                      <div className="list-disc list-inside">
                        {attachments.map((file, index) => (
                          <div className="grid grid-cols-3" key={index}>
                            <div className="text-sm text-gray-500">
                              {file.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="attachment"
                      className="hidden"
                      onChange={handleAttachmentChange}
                      multiple
                    />
                    <label htmlFor="attachment" className="cursor-pointer">
                      <button
                        className="bg-white text-white lg:p-4 rounded-md border-[#5027D9] border"
                        onClick={handleAddAttachment}
                      >
                        <Image src={sendAttachment} alt="" width={25} />
                      </button>
                    </label>
                  </div>
                  <div className="">
                    <button
                      onClick={handleAddComment}
                      className="bg-[#5027D9] text-white p-4 rounded border-[#5027D9] border"
                    >
                      <Image src={sendComment} alt="" width={25} />
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel className="p-7 bg-white">
              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold">All Uploaded Files</div>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleAddAttachment}
                >
                  <div>
                    <Image src={addticket} alt="Add new" width={20} />
                  </div>
                  <div className="text-[#5027D9] text-lg">Add new</div>
                </div>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Filename
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Uploaded On
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Download</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {uploadedFiles.map((file, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {file.filename}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {file.uploadedOn}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href={file.fileUrl}
                          className="text-[#5027D9] hover:text-[#5027D9] underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};

export default Page;
