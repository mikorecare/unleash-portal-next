"use client";

import { useDebounce } from "@/hooks/utils/useDebounce";
import { useEffect, useRef, useState } from "react";

interface SearchInputProps {
    onDebouncedChange: (value: string) => void;
}

const SearchInput = ({ onDebouncedChange }: SearchInputProps) => {
    const didMountRef = useRef(false);
    const [searchTerm, setSearchTerm] = useState("");
    const debounceSearch = useDebounce(searchTerm);

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }

        onDebouncedChange(debounceSearch);
    }, [debounceSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
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
    );
};

export default SearchInput;
