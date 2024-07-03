"use client"
import Image from "next/image";
import DropdownArrow from "../../../public/images/dropdown-arrow_svgrepo.com.svg";
import { Button } from "@headlessui/react";

interface DropdownFiltersProps {
  typeValue: string;
  setTypeValue: (value: string) => void;
  priorityValue: string;
  setPriorityValue: (value: string) => void;
  statusValue: string;
  setStatusValue: (value: string) => void;
  handleReset: () => void;
}

const DropdownFilters: React.FC<DropdownFiltersProps> = ({
  typeValue,
  setTypeValue,
  priorityValue,
  setPriorityValue,
  statusValue,
  setStatusValue,
  handleReset,
}) => {
  return (
    <div className="flex gap-2 font-normal mt-2">
      <div className="relative">
        <select
          name="type"
          id="type"
          value={typeValue}
          onChange={(e) => setTypeValue(e.target.value)}
          className="w-[21em] p-2 pl-3 pr-8 border-2 border-[#E8E8E8] rounded-md text-[#8E8E8E] appearance-none bg-white"
        >
          <option value="Type">Type</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <Image src={DropdownArrow} alt="drop" width={20} />
        </div>
      </div>

      <div className="relative">
        <select
          name="priority"
          id="priority"
          value={priorityValue}
          onChange={(e) => setPriorityValue(e.target.value)}
          className="w-[21em] p-2 pl-3 pr-8 border-2 border-[rgb(232,232,232)] rounded-md text-[#8E8E8E] appearance-none bg-white"
        >
          <option value="Priority">Priority</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none ">
          <Image src={DropdownArrow} alt="drop" width={20} />
        </div>
      </div>

      <div className="relative">
        <select
          name="status"
          id="status"
          value={statusValue}
          onChange={(e) => setStatusValue(e.target.value)}
          className="w-[21em] p-2 pl-3 pr-8 border-2 border-[#E8E8E8] rounded-md text-[#8E8E8E] appearance-none bg-white"
        >
          <option value="Status">Status</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <Image src={DropdownArrow} alt="drop" width={20} />
        </div>
      </div>

      <Button
        onClick={handleReset}
        className="flex justify-center rounded bg-[#5027D9] py-2 px-4 text-sm text-white items-center gap-2 w-[100%]"
      >
        Reset
      </Button>
    </div>
  );
};

export default DropdownFilters;
