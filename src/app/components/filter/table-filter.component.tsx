"use client";

import { useDebounce } from "@/hooks/utils/useDebounce";
import { useEffect, useRef, useState } from "react";
import {
    ITableFilter,
    statusEnumMap,
    TableAdminMerchantStatusEnum,
    TableCategoryEnum,
    TableOrderStatusEnum,
} from "./table-filter.interface";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export interface IFilterBy {
    value: string;
    label: string;
}
export interface ITableFilterProps {
    pageHeader: string;
    count: number;
    isExpandable: boolean;
    onSearchTermChange: (term: string) => void;
    onFilterByChange?: (value: ITableFilter) => void;
    statusFilters: keyof ITableFilter;
}

const TableFilter = ({
    pageHeader,
    count,
    isExpandable = true,
    onSearchTermChange,
    onFilterByChange,
    statusFilters,
}: ITableFilterProps) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterByValue, setFilterByValue] = useState<ITableFilter>({});
    const debounceSearch = useDebounce(searchTerm);
    const didMountRef = useRef(false);
    const filterBy: { label: string; value: TableCategoryEnum }[] = [
        {
            label: "Date",
            value: TableCategoryEnum.DATE,
        },
        {
            label: "Status",
            value: TableCategoryEnum.STATUS,
        },
    ];

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }

        setFilterByValue((prev) => {
            if (
                prev.filterBy === TableCategoryEnum.DATE &&
                statusFilters &&
                prev[statusFilters] !== undefined
            ) {
                return {
                    ...prev,
                    [statusFilters]: undefined,
                };
            }

            if (prev.filterBy === TableCategoryEnum.STATUS) {
                if (prev.dateFrom !== "" || prev.dateTo !== "") {
                    return {
                        ...prev,
                        dateFrom: "",
                        dateTo: "",
                    };
                }
            }

            return prev;
        });

        onFilterByChange?.(filterByValue);
        onSearchTermChange?.(debounceSearch);
    }, [debounceSearch, filterByValue]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex flex-col space-y-4 mb-4 pt-4">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                <div className="flex items-start">
                    <div className="flex items-end">
                        <h1 className="text-3xl font-bold text-gray-800">
                            {pageHeader}
                        </h1>
                        <span className="ml-2 text-gray-500 text-sm mb-1">
                            ({count})
                        </span>
                    </div>
                    {isExpandable && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="ml-4 text-gray-500 hover:text-gray-700"
                        >
                            {isExpanded ? (
                                <ChevronDownIcon className="h-5 w-5" />
                            ) : (
                                <ChevronRightIcon className="h-5 w-5" />
                            )}
                        </button>
                    )}
                </div>
            </div>

            {(!isExpandable || isExpanded) && (
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <div className="relative w-64">
                            <input
                                type="text"
                                placeholder="Search anything"
                                className="pl-10 pr-4 py-2 w-full rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-unleash-blue focus:border-unleash-blue"
                                value={searchTerm}
                                onChange={handleChange}
                            />
                            <div className="absolute left-3 top-1.5 text-black">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                            {searchTerm && (
                                <button
                                    onClick={() => {}}
                                    className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>

                        {filterBy && (
                            <div className="flex items-center bg-gray-100 rounded-full border border-gray-300 px-3 py-2">
                                <label
                                    htmlFor="filterBy"
                                    className="text-gray-600 mr-2 whitespace-nowrap"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                        />
                                    </svg>
                                </label>
                                <select
                                    id="filterBy"
                                    className="px-2 bg-transparent border-none focus:outline-none focus:ring-0"
                                    onChange={(e) => {
                                        const value = e.target
                                            .value as TableCategoryEnum;
                                        setFilterByValue((prev) => ({
                                            ...prev,
                                            filterBy: value,
                                        }));
                                    }}
                                    value={filterByValue.filterBy}
                                >
                                    <option key="1" value="">
                                        No Filter
                                    </option>
                                    {filterBy.map((filter, index) => (
                                        <option
                                            key={index}
                                            value={filter.value}
                                        >
                                            {filter.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {filterByValue.filterBy === "date" && (
                            <>
                                <input
                                    type="date"
                                    className="flex items-center bg-gray-100 rounded-full border border-gray-300 px-3 py-2"
                                    value={filterByValue.dateFrom || ""}
                                    onChange={(e) =>
                                        setFilterByValue((prev) => ({
                                            ...prev,
                                            dateFrom: e.target.value,
                                        }))
                                    }
                                />
                                <input
                                    type="date"
                                    className="flex items-center bg-gray-100 rounded-full border border-gray-300 px-3 py-2"
                                    value={filterByValue.dateTo || ""}
                                    onChange={(e) =>
                                        setFilterByValue((prev) => ({
                                            ...prev,
                                            dateTo: e.target.value,
                                        }))
                                    }
                                />
                            </>
                        )}

                        {filterByValue.filterBy === "status" &&
                            statusFilters &&
                            statusEnumMap.has(statusFilters) && (
                                <select
                                    className="flex items-center bg-gray-100 rounded-full border border-gray-300 px-3 py-2"
                                    value={
                                        (filterByValue as any)[statusFilters] ||
                                        ""
                                    }
                                    onChange={(e) =>
                                        setFilterByValue((prev) => ({
                                            ...prev,
                                            [statusFilters]: e.target.value,
                                        }))
                                    }
                                >
                                    <option value="">All</option>
                                    {Object.values(
                                        statusEnumMap.get(statusFilters)!
                                    ).map((value) => (
                                        <option key={value} value={value}>
                                            {value
                                                .replace(/_/g, " ")
                                                .toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                            )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableFilter;
