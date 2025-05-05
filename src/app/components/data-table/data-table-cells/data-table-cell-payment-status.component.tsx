"use client";

interface IDataTableCellPaymentStatus {
  status: string;
}

const DataTableCellPaymentStatus = ({ status }: IDataTableCellPaymentStatus) => {
  const statusClasses = new Map<string, string>([
    ["APPROVED", "bg-green-50 bg-opacity-10 text-green-400"],
    ["PENDING", "bg-amber-50 bg-opacity-10 text-yellow-400"],
    ["CANCELLED", "bg-red-50 bg-opacity-10 text-red-400"],
  ]);

  const getStatusClass = (status: string) =>
    statusClasses.get(status.toLocaleUpperCase()) || "bg-blue-50 bg-opacity-10 text-blue-400";

  return (
    <div className="flex items-center justify-center">
      <span
        className={`inline-flex items-center px-2.5 py-0.5 text-xs uppercase font-medium ${getStatusClass(
          status
        )}`}
      >
        {status || "Pending"}
      </span>
    </div>
  );
};

export default DataTableCellPaymentStatus;
