"use client";

import React, { useEffect, useState } from "react";
import { ITablePaginatorProps } from "./table-paginator.interface";
import { ITableFilter } from "../filter/table-filter.interface";

const TablePaginator: React.FC<ITablePaginatorProps> = ({
    limit,
    count,
    totalPages,
    page,
    onPageChange,
}: ITablePaginatorProps) => {
    const itemsPerPageOptions = [10, 25, 50, 100];

    const [pageFilter, setPageFilter] = useState<ITableFilter>({
        page,
        limit,
    });

    useEffect(() => {
        setPageFilter({ page, limit });
    }, [page, limit]);

    const getPageNumbers = (): (number | string)[] => {
        const currentPage = pageFilter.page || 1;
        const pageNumbers: (number | string)[] = [];

        pageNumbers.push(1);
        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);

        if (currentPage <= 3) {
            endPage = Math.min(4, totalPages - 1);
        }
        if (currentPage >= totalPages - 2) {
            startPage = Math.max(2, totalPages - 4);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < totalPages - 1) pageNumbers.push("...");
        if (totalPages > 1) pageNumbers.push(totalPages);

        return pageNumbers;
    };

    const handlePageChange = (newPage: number) => {
        onPageChange({ page: newPage, limit: currentLimit });
    };

    const handleLimitChange = (newLimit: number) => {
        onPageChange({ page: 1, limit: newLimit });
    };

    const currentPage = pageFilter.page || 1;
    const currentLimit = pageFilter.limit || 10;
    const maxPage = Math.ceil(count / currentLimit);

    return (
        <div className="flex justify-between items-center mt-6 mx-9 pb-4">
            <div className="text-xs text-[#6D6D71] font-poppins font-medium flex items-center">
                <span>Showing</span>
                <select
                    value={currentLimit}
                    onChange={(e) => handleLimitChange(Number(e.target.value))}
                    className="mx-2 px-1 py-1 bg-[#E4EBF3] text-[#222A50] rounded-full focus:outline-none focus:ring-2 focus:ring-unleash-blue"
                >
                    {itemsPerPageOptions.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
                <span>out of {count}</span>
            </div>

            <div className="flex items-center">
                <button
                    onClick={() =>
                        handlePageChange(Math.max(1, currentPage - 1))
                    }
                    disabled={currentPage === 1}
                    className={`w-7 h-7 flex items-center justify-center mx-1 border rounded-full font-poppins font-medium border-[#EEEEEE] ${
                        currentPage === 1
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700"
                    }`}
                >
                    &lt;
                </button>

                {getPageNumbers().map((pageNum, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            typeof pageNum === "number" &&
                            handlePageChange(pageNum)
                        }
                        className={`w-7 h-7 flex items-center justify-center mx-1 cursor-pointer ${
                            currentPage === pageNum
                                ? "bg-unleash-blue-light text-white border-[#5932EA] border-2"
                                : "bg-[#F5F5F5] text-gray-700"
                        } border rounded-full text-xs font-poppins font-medium border-[#EEEEEE]`}
                        disabled={pageNum === "..."}
                    >
                        {pageNum}
                    </button>
                ))}

                <button
                    onClick={() =>
                        handlePageChange(Math.min(maxPage, currentPage + 1))
                    }
                    disabled={currentPage === maxPage || count === 0}
                    className={`w-7 h-7 flex items-center justify-center mx-1 border rounded-full font-poppins font-medium border-[#EEEEEE] ${
                        currentPage === maxPage || count === 0
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700"
                    }`}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default TablePaginator;
