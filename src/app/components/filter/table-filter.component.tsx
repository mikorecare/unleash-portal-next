"use client";

import { useState } from "react";

interface ITableFilterProps {
    pageHeader: string;
    count: number;
    isExpandable: boolean;
}

const TableFilter = ({
    pageHeader,
    count,
    isExpandable = true,
}: ITableFilterProps) => {
    const searchTerm = "";
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="flex flex-col space-y-4 mb-4 pt-4">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
                <div className="flex items-start">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {pageHeader}
                    </h1>
                    <span className="ml-3 text-gray-500 text-lg">
                        ({count})
                    </span>
                    {isExpandable && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="ml-4 text-gray-500 hover:text-gray-700"
                        >
                            {isExpanded ? "Collapse" : "Expand"}
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
                                onChange={(e) => {}}
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

                        {/* Advanced filters (optional) */}
                        <div className="hidden md:flex items-center bg-gray-100 rounded-full border border-gray-300 px-3 py-2">
                            <button className="text-gray-600 flex items-center gap-1">
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
                                Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableFilter;
