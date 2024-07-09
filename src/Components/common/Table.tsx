import React from 'react';


type Ticket = {
  id: number;
  ticket_type: string;
  subject: string;
  priority: string;
  createdAt: string; 
  updatedAt: string; 
};


type TableRow = {
  "Ticket ID": string;
  "Ticket Type": string;
  Subject: string;
  Priority: string;
  Date: string;
  Updated: string;
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
    "Date",
    "Updated"
  ];

  // Map fetched tickets data to TableRow format
  const tableData: TableRow[] = tickets.map((ticket) => ({
    "Ticket ID": ticket.id.toString(),
    "Ticket Type": ticket.ticket_type,
    Subject: ticket.subject,
    Priority: ticket.priority,
    Date: new Date(ticket.createdAt).toLocaleDateString(),
    Updated: new Date(ticket.updatedAt).toLocaleDateString()
  }));

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              {tableHead.map((heading) => (
                <td key={heading} className="px-6 py-4">
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
