import { FC } from "react";
import logoWhite from "../../../public/images/sidebarLogo.svg";
import Image from "next/image";
import Link from "next/link";
import dashboardGrp from "../../../public/images/dashboardGrp.svg";
import profileGrp from "../../../public/images/profileGrp.svg";
import ticketmanagementgrp from "../../../public/images/ticketManagementGrp.svg";

interface SidebarProps {
  isExpanded: boolean;
  setIsSidebarExpanded: (isExpanded: boolean) => void; // Add setter for isExpanded state
}

const Sidebar: FC<SidebarProps> = ({ isExpanded, setIsSidebarExpanded }) => {
  const handleLinkClick = () => {
    setIsSidebarExpanded(false); // Close the sidebar when a link is clicked
  };

  return (
    <div
      className={`flex-col gap-10 bg-[#2A2C3E] h-full p-8 m-auto fixed z-50 ${
        isExpanded ? "w-full h-auto" : "w-[20%]"
      } ${isExpanded ? "block" : "hidden lg:block"}`}
    >
      <div className="flex justify-center items-center mb-10">
        <Image src={logoWhite} alt="logo" height={80} width={150} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 text-white pt-3 pb-3 pl-4 w-[90%] rounded-md hover:bg-[#5027D9]">
          <Image src={dashboardGrp} alt="dashboard" />
          <Link href="/Dashboard" onClick={handleLinkClick}>Dashboard</Link>
        </div>
        <div className="flex gap-3 text-white pt-3 pb-3 pl-3 w-[90%] rounded-md hover:bg-[#5027D9]">
          <Image src={ticketmanagementgrp} alt="Ticket Management" />
          <Link href="/TicketManagement" onClick={handleLinkClick}>Ticket Management</Link>
        </div>
        <div className="flex gap-3 text-white pt-3 pb-3 pl-4 w-[90%] rounded-md hover:bg-[#5027D9]">
          <Image src={profileGrp} alt="Profile" />
          <Link href="/Profile" onClick={handleLinkClick}>Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
