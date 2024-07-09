"use client"
import Image from "next/image";
import Bell from "../../../public/images/bell.svg";
import userBg from "../../../public/images/User.svg";
import { useState } from "react";
import { Button } from "@headlessui/react";
import Folder from "../../../public/images/folder.svg";
import Plus from "../../../public/images/Plus.svg";
import Table from "../../Components/common/Table"
import SearchBar from "../../Components/common/SearchBar";
import Filterdropdowns from "../../Components/common/Filterdropdowns"

export default function Page() {
  // State variables to manage dropdown values
  const [typeValue, setTypeValue] = useState("Type");
  const [priorityValue, setPriorityValue] = useState("Priority");
  const [statusValue, setStatusValue] = useState("Status");

  // Function to handle reset button click
  const handleReset = () => {
    console.log("test")
    setTypeValue("Type");
    setPriorityValue("Priority");
    setStatusValue("Status");
  };

  return (
    <div className="">
      <div className="flex justify-between items-center shadow-md p-8 sticky top-0 z-50 bg-white">
        <div className="text-[#2A2C3E] text-xl">Ticket Management</div>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <Image src={Bell} alt="Notification Bell" width={25} />
          </div>
          <div>
            <Image src={userBg} alt="User" width={50} />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10 ml-8 mr-8">
        <div>
          <h1 className="text-3xl text-[#2A2C3E]">Tickets</h1>
        </div>
        <div className="flex justify-around items-center gap-2">
          <div>
            <SearchBar />
          </div>
          <div>
            <Button className="flex rounded bg-white py-2 px-4 text-sm text-[#5027D9] items-center gap-2 border-2 border-[#5027D9]">
              <Image src={Folder} alt="Folder Icon" width={22} height={22} />
              Export report
            </Button>
          </div>
          <div>
            <Button className="flex rounded bg-[#5027D9] py-2 border-2 border-[#5027D9] px-4 text-sm text-white items-center gap-2">
              <Image src={Plus} alt="Plus Icon" width={22} height={22} />
              New Ticket
            </Button>
          </div>
        </div>
      </div>

      <div className="py-7 px-5 font-semibold rounded-md m-8 bg-[#F9F9F9]">
        <p>Filter ticket by</p>
        <Filterdropdowns
          typeValue={typeValue}
          setTypeValue={setTypeValue}
          priorityValue={priorityValue}
          setPriorityValue={setPriorityValue}
          statusValue={statusValue}
          setStatusValue={setStatusValue}
          handleReset={handleReset}
        />
      </div>
    <div className="mx-8">
    <Table />
    </div>
     
    </div>
  );
}
