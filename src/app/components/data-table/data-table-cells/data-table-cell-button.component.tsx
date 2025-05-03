"use client";

import { Column } from "../data-table.interface";

interface IDataTableCellButton<T> {
  column: Column<T>;
  item: T;
}

const DataTableCellButton = <T,>({ column, item }: IDataTableCellButton<T>) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => column.onClick?.(item)}
        className="bg-unleash-blue-light hover:bg-blue-600 border text-white px-3 py-1 rounded-full text-xs font-medium transition-colors"
      >
        {column.buttonText || "Action"}
      </button>
    </div>
  );
};

export default DataTableCellButton;