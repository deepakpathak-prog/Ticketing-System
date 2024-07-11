import React, { useState } from "react";
import Image from "next/image";
import threeDots from "../../../public/images/three-dots.png";
import { useRouter } from "next/navigation";
import edit from "../../../public/images/editTable.svg";

type Ticket = {
  id: number;
  ticket_type: string;
  subject: string;
  priority: string;
  createdAt: string;
  updatedAt: string;
  status: string;
  actions: string;
};

type TableRow = {
  "Ticket ID": string;
  "Ticket Type": string;
  Subject: string;
  Priority: string;
  Date: string;
  Updated: string;
  Status: string;
  Actions: string;
};

type TableProps = {
  tickets: Ticket[];
};

const Table: React.FC<TableProps> = ({ tickets }) => {
  const router = useRouter();

  const [viewingTicket, setViewingTicket] = useState<Ticket | null>(null);

  const tableHead: (keyof TableRow)[] = [
    "Ticket ID",
    "Ticket Type",
    "Subject",
    "Priority",
    "Status",
    "Date",
    "Updated",
    "Actions", // New column header for the three dots option
  ];

  const tableData: TableRow[] = tickets.map((ticket) => ({
    "Ticket ID": ticket.id.toString(),
    "Ticket Type": ticket.ticket_type,
    Subject: ticket.subject,
    Priority: ticket.priority,
    Date: new Date(ticket.createdAt).toLocaleDateString(),
    Updated: new Date(ticket.updatedAt).toLocaleDateString(),
    Status: ticket.status,
    Actions: "view",
  }));

  const getPriorityColor = (priority: string): string => {
    switch (priority.toLowerCase()) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-blue-600";
      case "low":
        return "text-purple-300";
      default:
        return "";
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-red-600";
      case "closed":
        return "text-green-500";
      default:
        return "";
    }
  };

  const handleViewClick = (ticketId: number) => {
    const selectedTicket = tickets.find((ticket) => ticket.id === ticketId);
    if (selectedTicket) {
      setViewingTicket(selectedTicket);
      console.log(selectedTicket); // Log all details of the selected ticket
      router.push(`/TicketManagement/ViewTicket/${selectedTicket.id}`);
    }
  };

  const handleEditClick = (ticketId: number) => {
    const selectedTicket = tickets.find((ticket) => ticket.id === ticketId);
    if (selectedTicket) {
      setViewingTicket(selectedTicket);
      console.log(selectedTicket); // Log all details of the selected ticket
      router.push(`/TicketManagement/EditTicket/${selectedTicket.id}`);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#FFFFFF] dark:text-gray-400">
          <tr>
            {tableHead.map((heading) => (
              <th key={heading} scope="col" className="px-6 py-3">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr
              key={index}
              className={`odd:bg-white odd:dark:bg-[#FFFFFF] even:bg-[#FBFBFB] dark:border-gray-700`}
            >
              {tableHead.map((heading) => (
                <td
                  key={heading}
                  className={`px-6 py-4 ${
                    heading === "Ticket ID" || heading === "Ticket Type"
                      ? "text-blue-500"
                      : heading === "Subject"
                      ? "text-black"
                      : heading === "Status"
                      ? getStatusColor(row[heading])
                      : heading === "Priority"
                      ? getPriorityColor(row[heading])
                      : ""
                  }`}
                >
                  {heading === "Actions" ? (
                    <div>
                      <button
                        className="focus:outline-none"
                        onClick={() =>
                          handleViewClick(parseInt(row["Ticket ID"], 10))
                        }
                      >
                        <Image
                          src={threeDots}
                          alt="threedots"
                          width={15}
                          height={15}
                        />
                      </button>
                      <button
                        className="focus:outline-none"
                        onClick={() =>
                          handleEditClick(parseInt(row["Ticket ID"], 10))
                        }
                      >
                        <Image
                          src={edit}
                          alt="edit"
                          width={15}
                          height={15}
                        />
                      </button>
                    </div>
                  ) : (
                    row[heading]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
