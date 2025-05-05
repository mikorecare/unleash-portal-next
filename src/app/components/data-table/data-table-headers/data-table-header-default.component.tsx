"use client";

import { useState, useEffect, useRef } from "react";
import { RiExpandUpDownLine } from "react-icons/ri";
import { ITableFilter, TableSortEnum } from "../../filter/table-filter.interface";
import { Column } from "../data-table.interface";

interface DataTableHeaderDefaultProps<T> {
  columns: Column<T>[];
  onChangeSort: (value: ITableFilter) => void;
}

const DataTableHeaderDefault = <T,>({
  columns,
  onChangeSort,
}: DataTableHeaderDefaultProps<T>) => {
  const didMountRef = useRef(false);

  const [sortState, setSortState] = useState<{
    key?: keyof ITableFilter;
    direction?: TableSortEnum;
  }>({});

  const handleSortClick = (key: keyof ITableFilter) => {
    setSortState((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction:
            prev.direction === TableSortEnum.ASC
              ? TableSortEnum.DESC
              : TableSortEnum.ASC,
        };
      } else {
        return { key, direction: TableSortEnum.ASC };
      }
    });
  };

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    if (sortState.key && sortState.direction) {
      onChangeSort({
        page: 1,
        limit: 10,
        [sortState.key]: sortState.direction,
        searchBy: "",
      });
    }
  }, [sortState]);

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
            <div
              className="inline-flex items-center cursor-pointer"
              onClick={() => handleSortClick(column.sortKey as keyof ITableFilter)}
            >
              {column.label}
              {column.sortKey && (
                <RiExpandUpDownLine
                  className={`ml-1 text-xs align-middle ${
                    sortState.key === column.sortKey
                      ? "text-[#0034B3]"
                      : "text-[#6D6D71]"
                  }`}
                />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default DataTableHeaderDefault;
