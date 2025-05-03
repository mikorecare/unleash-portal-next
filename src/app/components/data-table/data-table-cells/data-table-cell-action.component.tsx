"use client";

import { BiSolidEdit } from "react-icons/bi";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { Column } from "../data-table.interface";

interface IDataTableCellAction<T> {
    item: T;
    column: Column<T>
}

const DataTableCellAction = <T,>({item, column}: IDataTableCellAction<T>) => {

  const actionIconStatus = new Map<string, React.ReactNode>([
    ["APPROVED", <FaCircleCheck className="text-green-600 text-xl" />],
    ["CANCELLED", <FaCircleXmark className="text-red-500 text-xl" />],
  ]);

  const actionIcon = (status: string) =>
    actionIconStatus.get(status.toLocaleUpperCase()) || <BiSolidEdit className="text-gray-500 text-xl" />;
  
  return (
    <div className="flex items-center justify-center">
      <button onClick={() => column.onClick?.(item)}>
        {actionIcon(item["Status" as keyof T] as string)}
      </button>
    </div>
  );
};

export default DataTableCellAction;
