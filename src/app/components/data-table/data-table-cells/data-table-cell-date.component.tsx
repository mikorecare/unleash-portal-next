"use client";

import { DateTimeHelper } from "@/helpers/DateTimeHelper";

interface IDataTableCellDate {
  date: string;
}

const DataTableCellDate = (data: IDataTableCellDate) => {
  const date = DateTimeHelper.formatDate(data.date);
  return <span title={date} className="flex items-center justify-center">{date}</span>;
};

export default DataTableCellDate;
