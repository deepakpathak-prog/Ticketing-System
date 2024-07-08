'use client';
import ButtonPurple from "../../Components/common/ButtonPurple";
import Arrow from "../../../public/images/Arrow 2.svg";
import Image from "next/image";
import Circle from "../../../public/images/Icon_Order.svg";
import Table from "../../Components/common/Table";
import Link from "next/link";
// import Bell from "../../../public/images/bell.svg"
// import userBg from "../../../public/images/User.svg"
// import Tabs from "../../Components/common/Tabs"
// import Form from "../../Components/common/form"
import TableThree from "../../Components/common/TableThree"
import React, { useState } from 'react';
import Pagination from '../../Components/common/Pagination'

import Bell from "../../../public/images/bell.svg";
import userBg from "../../../public/images/User.svg";
import Tabs from "../../Components/common/Tabs";
import Form from "../../Components/common/form";

export default function Page() {
  const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 3;
  return (
    <div className="">
      <div className="flex justify-between items-center shadow-md p-8 sticky top-0 z-50 bg-white">
        <div className="text-[#2A2C3E] text-xl">Ticket Management</div>
        <div className="flex gap-4 justify-center items-center">
          <div>
            <Image src={Bell} alt="hhh" width={25} />
          </div>
          <div>
            <Image src={userBg} alt="hhh" width={50} />
          </div>
        </div>
      </div>
      <div className="mt-10 ml-8 mr-8">
        <h1 className="text-3xl text-[#2A2C3E]">Profile</h1>
      </div>

      {/* Tabs starts */}

      <div className="p-2 m-8 bg-[#F9F9F9]">
        <Tabs />
      </div>
    </div>
  );

}
