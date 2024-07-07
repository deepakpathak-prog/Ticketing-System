import React from 'react';

// Define the type for a single ticket
type Ticket = {
  id: number;
  ticket_type: string;
  subject: string;
  priority: string;
  createdAt: string; // Assuming this represents the date
  updatedAt: string; // Assuming this represents the updated date
  status: string; // Added status field
};

// Define the type for the table data
type TableRow = {
  "Ticket ID": string;
  "Ticket Type": string;
  Subject: string;
  Priority: string;
  Date: string;
  Updated: string;
  Status: string; // Added status field
};

type TableProps = {
  tickets: Ticket[];
};

const Table: React.FC<TableProps> = ({ tickets }) => {
  const tableHead: (keyof TableRow)[] = [
    "Ticket ID",
    "Ticket Type",
    "Subject",
    "Priority",
    "Status",
    "Date",
    "Updated",
  ];

  // Map fetched tickets data to TableRow format
  const tableData: TableRow[] = tickets.map((ticket) => ({
    "Ticket ID": ticket.id.toString(),
    "Ticket Type": ticket.ticket_type,
    Subject: ticket.subject,
    Priority: ticket.priority,
    Date: new Date(ticket.createdAt).toLocaleDateString(),
    Updated: new Date(ticket.updatedAt).toLocaleDateString(),
    Status: ticket.status,
  }));

  // Function to determine priority text color
  const getPriorityColor = (priority: string): string => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-blue-600';
      case 'low':
        return 'text-purple-600';
      default:
        return '';
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
            <tr key={index} className={`odd:bg-white odd:dark:bg-[#FFFFFF] even:bg-[#FBFBFB] dark:border-gray-700`}>
              {tableHead.map((heading) => (
                <td key={heading} className={`px-6 py-4 ${heading === "Ticket ID" || heading === "Ticket Type" ? 'text-blue-500' : (heading === "Subject" ? 'text-black' : (heading === "Status" && row[heading] === "Active" ? 'text-red-600 ' : (heading === "Status" && row[heading] === "Closed" ? 'text-green-500' : getPriorityColor(row["Priority"]))))}`}>
                  {row[heading]}
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
