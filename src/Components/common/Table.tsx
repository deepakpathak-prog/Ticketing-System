
// Define the type for the table data
type TableRow = {
  "Ticket ID": string;
  "Ticket Type": string;
  Subject: string;
  Priority: string;
  Status: string;
  Date: string;
  Updated: string;
};

const tableHead: (keyof TableRow)[] = [
  "Ticket ID",
  "Ticket Type",
  "Subject",
  "Priority",
  "Status",
  "Date",
  "Updated"
];

const tableData: TableRow[] = [
  {
    "Ticket ID": "1",
    "Ticket Type": "Bug",
    Subject: "App crash on login",
    Priority: "High",
    Status: "Open",
    Date: "2023-06-01",
    Updated: "2023-06-10"
  },
  {
    "Ticket ID": "2",
    "Ticket Type": "Feature",
    Subject: "Add dark mode",
    Priority: "Medium",
    Status: "In Progress",
    Date: "2023-06-02",
    Updated: "2023-06-15"
  },
  {
    "Ticket ID": "3",
    "Ticket Type": "Support",
    Subject: "Unable to reset password",
    Priority: "Low",
    Status: "Closed",
    Date: "2023-06-03",
    Updated: "2023-06-20"
  },
  {
    "Ticket ID": "4",
    "Ticket Type": "Bug",
    Subject: "Page not loading",
    Priority: "High",
    Status: "Open",
    Date: "2023-06-04",
    Updated: "2023-06-25"
  },
  {
    "Ticket ID": "5",
    "Ticket Type": "Feature",
    Subject: "Integrate with third-party API",
    Priority: "Medium",
    Status: "In Progress",
    Date: "2023-06-05",
    Updated: "2023-06-30"
  }
];

const Table: React.FC = () => {
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
