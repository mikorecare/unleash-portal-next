"use client";

import { RiExpandUpDownLine } from "react-icons/ri";
import { Column } from "../data-table.interface";

interface DataTableHeaderDefaultProps<T> {
    columns: Column<T>[];
  };
  
  const DataTableHeaderDefault = <T,>({ columns }: DataTableHeaderDefaultProps<T>) => {
    return (
      <thead className="bg-gray-50 sticky top-0 z-10">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="px-4 py-6 text-center text-xs font-medium text-[#6D6D71] cursor-pointer whitespace-nowrap bg-gray-50"
              style={{ minWidth: column.minWidth || "100px" }}
            >
              <div className="inline-flex items-center">
                {column.label}
                {column.key && (
                  <RiExpandUpDownLine className="ml-1 text-[#6D6D71] text-xs align-middle" />
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    );
  };
  
  export default DataTableHeaderDefault;
  