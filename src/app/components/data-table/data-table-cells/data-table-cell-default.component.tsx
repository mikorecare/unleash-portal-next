"use client";

interface IDataTableCellDefault {
  text: string;
}

const DataTableCellDefault = ({ text }: IDataTableCellDefault) => {
  return <span title={text} className="flex flex-row justify-center">{text || "-"}</span>;
};

export default DataTableCellDefault;
