"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import addticket from "../../../../../public/images/add.svg";
import Bell from "../../../../../public/images/bell.svg";
import userBg from "../../../../../public/images/User.svg";
import breadcrumbArrow from "../../../../../public/images/BreadcrumbArrow.svg";
import DropdownArrow from "../../../../../public/images/dropdown-arrow_svgrepo.com.svg";
import Delete from "../../../../../public/images/deleteTicket.svg";
import Link from "next/link";
import { Button } from "@headlessui/react";
import axios, { AxiosResponse } from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "@/Components/common/Loader";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const value = parts[parts.length - 1];
  // value contains the ticket id params

  const [ticketType, setTicketType] = useState("Select Ticket Type");
  const [priority, setPriority] = useState("Select Priority");
  const [subject, setSubject] = useState("");
  const [requestDetails, setRequestDetails] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  //   const [ticketFile, setTicketFile] = useState<File>([]);
  const [ticketFilename, setTicketFilename] = useState<string>("");

  const [fileCombination, setfileCombination] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState({
    ticketType: false,
    priority: false,
    subject: false,
    requestDetails: false,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTickets();
  }, []);


  console.log("fileCombination", fileCombination)

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

      if (response) {
        let ticketfilename = response.data.ticketDetails[0].details_images_url;
        ticketfilename = ticketfilename.replace(/[\[\]"]+/g, "");
        let arrayOfArrays = ticketfilename
          .split(",")
          .map((item: string) => item.split(","));
        let combinedArray = arrayOfArrays.reduce((acc: string | any[], currentArray: any) => {
          return acc.concat(currentArray);
        }, []);

        setfileCombination(combinedArray)

        // let combinedArray = array1.concat(array2);

        // ticketfilename = ticketfilename[ticketfilename.length - 1];
        // console.log(one, two);
        setTicketType(response.data.ticketDetails[0].ticket_type);
        setPriority(response.data.ticketDetails[0].priority);
        setSubject(response.data.ticketDetails[0].subject);
        setRequestDetails(response.data.ticketDetails[0].details);
        setTicketFilename(ticketfilename);
      }
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const handleTicketTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTicketType(e.target.value);
    setErrors({ ...errors, ticketType: false });
  };

  const handlePriorityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value);
    setErrors({ ...errors, priority: false });
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
    setErrors({ ...errors, subject: false });
  };

  const handleRequestDetailsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setRequestDetails(e.target.value);
    setErrors({ ...errors, requestDetails: false });
  };

  const handleAddNewClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)]);
    }
  };

  const handleCancel = () => {
    setTicketType("Select Ticket Type");
    setPriority("Select Priority");
    setSubject("");
    setRequestDetails("");
    setSelectedFiles([]);
    setErrors({
      ticketType: false,
      priority: false,
      subject: false,
      requestDetails: false,
    });
  };

  const validateForm = () => {
    let valid = true;
    if (ticketType === "Select Ticket Type") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ticketType: true,
      }));
      valid = false;
    }
    if (priority === "Select Priority") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        priority: true,
      }));
      valid = false;
    }
    if (subject.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: true,
      }));
      valid = false;
    }
    if (requestDetails.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        requestDetails: true,
      }));
      valid = false;
    }
    return valid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const formData = new FormData();
      formData.append("ticket_type", ticketType);
      formData.append("priority", priority);
      formData.append("subject", subject);
      formData.append("details", requestDetails);

      console.log({ selectedFiles });

      selectedFiles.forEach((file) => formData.append("files", file));

      try {
        const response = await axios.put(
          `http://localhost:8000/editTicketDetails/${value}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust as needed
            },
          }
        );
        toast.success("New Ticket Added Successfully");

        handleCancel();
      } catch (error) {
        console.error("Error adding new ticket:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleRemoveSelectedFile = (index: number) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter((_, i) => i !== index)
    );
  };

  const handleRemoveUploadedFile = async (index: any) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/deleteTicketImage/${value}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust as needed
          },
        },
        index,
        
      );
      console.log({ response });
      toast.success("Ticket files deleted successfully");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="">
      <Toaster />

      <div className="p-10 mx-10 my-12 bg-[#F9F9F9] rounded-md h-screen shadow-md">
        <div className="text-[#2A2C3E] text-2xl mb-6">Edit Ticket</div>

        <form className="space-y-6" onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div className="">
              <label htmlFor="ticketType" className="block text-[#5E626C] pb-2">
                Ticket Type <span className="text-red-600 text-md">*</span>
              </label>
              <div className="flex items-center border border-gray-300 bg-white rounded-md">
                <select
                  id="ticketType"
                  name="ticketType"
                  value={ticketType}
                  onChange={handleTicketTypeChange}
                  className={`mt-1 text-[#5E626C] w-full p-2 px-3 bg-white rounded-md appearance-none focus:outline-none ${
                    errors.priority ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="Select Priority">Choose Ticket Type</option>
                  <option value="Type 1">Type 1</option>
                  <option value="Type 2">Type 2</option>
                  <option value="Type 3">Type 3</option>
                </select>
                {errors.ticketType && (
                  <p className="text-red-500 text-xs mt-1">
                    Please select a ticket type
                  </p>
                )}
                <div className="pr-3">
                  <Image src={DropdownArrow} alt="drop" width={20} />
                </div>
              </div>
            </div>

            <div className="">
              <label htmlFor="priority" className="block text-[#5E626C] pb-2">
                Priority <span className="text-red-600 text-md">*</span>
              </label>
              <div className="flex items-center border border-gray-300 bg-white rounded-md">
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={handlePriorityChange}
                  className={`mt-1 text-[#5E626C] w-full p-2 px-3 bg-white rounded-md appearance-none focus:outline-none ${
                    errors.priority ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="Select Priority">Choose Priority Type</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                {errors.priority && (
                  <p className="text-red-500 text-xs mt-1">
                    Please select a priority
                  </p>
                )}
                <div className="pr-3">
                  <Image src={DropdownArrow} alt="drop" width={20} />
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <label htmlFor="subject" className="block text-[#5E626C] pb-2">
              Subject <span className="text-red-600 text-md">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              placeholder="Enter Subject"
              onChange={handleSubjectChange}
              className={`mt-1 text-[#5E626C] w-full p-2 px-3 border bg-white rounded-md ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs mt-1">
                Please enter a subject
              </p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="requestDetails"
              className="block text-[#5E626C] pb-2"
            >
              Request Details <span className="text-red-600 text-md">*</span>
            </label>
            <textarea
              id="requestDetails"
              name="requestDetails"
              rows={4}
              value={requestDetails}
              placeholder="Enter request details"
              onChange={handleRequestDetailsChange}
              className={`mt-1 text-[#5E626C] w-full p-2 px-3 border bg-white rounded-md ${
                errors.requestDetails ? "border-red-500" : "border-gray-300"
              }`}
            ></textarea>
            {errors.requestDetails && (
              <p className="text-red-500 text-xs mt-1">
                Please enter request details
              </p>
            )}
          </div>

          <div className="rounded-md bg-[#F0ECFB] p-8">
            <div className="flex justify-between items-center ">
              <div>
                <h1 className="text-md font-medium text-lg">Attach files</h1>
              </div>
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleAddNewClick}
              >
                <div>
                  <Image src={addticket} alt="Add new" width={20} />
                </div>
                <div className="text-[#5027D9] text-lg">Add new</div>
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              multiple
            />
            <div className="mt-4">
              {fileCombination && (
                <div className="flex items-center">
                  <ul className="list-disc pl-5">
                  {fileCombination.map((file: any, index:any) => (
                      <li key={index} className="text-[#5E626C]">
                        {file}
                        <button
                          type="button"
                          onClick={() => handleRemoveUploadedFile(index)}
                          className="text-red-500 ml-2"
                        >
                          <Image src={Delete} width={20} alt="delete" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedFiles.length > 0 && (
                <div>
                  <h2 className="text-md font-medium text-lg">
                    Attached Files:
                  </h2>
                  <ul className="list-disc pl-5">
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="text-[#5E626C]">
                        {file.name}
                        <button
                          type="button"
                          onClick={() => handleRemoveSelectedFile(index)}
                          className="text-red-500 ml-2"
                        >
                          <Image src={Delete} width={20} alt="delete" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-5 justify-end">
            <div>
              <Button
                type="button"
                onClick={handleCancel}
                className="flex rounded bg-transparent py-3 px-7 text-sm text-[#5027D9] items-center gap-2 border-[#5027D9] border-2"
              >
                Cancel
              </Button>
            </div>
            <div>
              <Button
                type="submit"
                className="flex rounded bg-[#5027D9] py-3 px-7 text-sm text-white items-center gap-2"
              >
                Update ticket
              </Button>
            </div>
          </div>
        </form>
        {loading && <Loader />}
      </div>
    </div>
  );
}
