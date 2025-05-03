import React, { useState, useRef, useEffect } from "react";

import "../component.index.scss";
import { Column, DataTableProps } from "./data-table.interface";
import DataTableCellImage from "./data-table-cells/data-table-cell-image.component";
import DataTableCellDate from "./data-table-cells/data-table-cell-date.component";
import DataTableCellNumeric from "./data-table-cells/data-table-cell-number.component";
import DataTableCellStatus from "./data-table-cells/data-table-cell-status.component";
import DataTableCellButton from "./data-table-cells/data-table-cell-button.component";
import DataTableCellAction from "./data-table-cells/data-table-cell-action.component";
import DataTableCellDefault from "./data-table-cells/data-table-cell-default.component";
import DataTableLoader from "./data-table-loaders/data-table.loader.component";
import DataTableHeaderDefault from "./data-table-headers/data-table-header-default.component";

const DataTable = <T,>({ columns, data, isLoading }: DataTableProps<T>) => {
  // Refs for synchronized scrolling
  const headerRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);

  // Set up synchronized scrolling between header and body
  useEffect(() => {
    const handleBodyScroll = () => {
      if (headerRef.current && bodyRef.current) {
        headerRef.current.scrollLeft = bodyRef.current.scrollLeft;
      }
    };

    const bodyElement = bodyRef.current;
    if (bodyElement) {
      bodyElement.addEventListener("scroll", handleBodyScroll);
      return () => {
        bodyElement.removeEventListener("scroll", handleBodyScroll);
      };
    }
  }, []);

  // Render cell content based on column type
  const renderCellContent = (item: T, column: Column<T>): React.ReactNode => {
    switch (column.type) {
      case "image": {
        const src =
          (item[column.key as keyof T] as string) ||
          "https://via.placeholder.com/40";
        const shopName = (item["Shop_Name" as keyof T] as string) || "Shop";

        return <DataTableCellImage src={src} shopName={shopName} />;
      }

      case "date":
        return <DataTableCellDate date={String(item[column.key as keyof T])} />;
      case "number":
        return (
          <DataTableCellNumeric number={String(item[column.key as keyof T])} />
        );
      case "status":
        return (
          <DataTableCellStatus status={String(item[column.key as keyof T])} />
        );
      case "button":
        return <DataTableCellButton column={column} item={item} />;
      case "action":
        return <DataTableCellAction item={item} column={column} />;
      default:
        return (
          <DataTableCellDefault text={String(item[column.key as keyof T])} />
        );
    }
  };

  // Generate table columns with consistent widths
  const columnWidths = columns
    .map((col) => `minmax(${col.minWidth || "100px"}, ${col.width || "1fr"})`)
    .join(" ");

  return (
    <>
      <DataTableLoader isLoading={isLoading} />
      {!isLoading && (
        <div className="mx-auto max-w-full">
          <div className="bg-[#F9F9F9] rounded-xl shadow-md">
            <div className="overflow-x-auto">
              <table
                className="min-w-full divide-y divide-gray-200 bg-white"
                style={{ tableLayout: "fixed" }}
              >
                <DataTableHeaderDefault columns={columns} />

                <tbody className="divide-y divide-gray-100">
                  {data.map((item) => (
                    <tr key={`${(item as any).id}-${Math.random()}`} className="hover:bg-gray-50">
                      {columns.map((column, index) => (
                        <td
                          key={index}
                          className="px-4 py-3 whitespace-nowrap text-xs font-medium text-gray-900"
                          style={{ minWidth: column.minWidth || "100px" }}
                        >
                          {renderCellContent(item, column)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DataTable;
