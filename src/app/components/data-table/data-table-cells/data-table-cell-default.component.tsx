"use client";

interface IDataTableCellDefault {
  text: string;
}

const DataTableCellDefault = ({ text }: IDataTableCellDefault) => {
  return (
    <span
      title={text}
      className="overflow-hidden text-ellipsis"
      style={{ maxWidth: "150px" }}
    >
      {text || "-"}
    </span>
  );
};

export default DataTableCellDefault;
