"use client";

interface IDataTableCellNumeric {
  number: string;
}

const DataTableCellNumeric = ({ number }: IDataTableCellNumeric) => {
  return <div title={number} className="flex flex-row justify-center">{number}</div>;
};

export default DataTableCellNumeric;
