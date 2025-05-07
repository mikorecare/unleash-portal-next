"use client";

import { JSX } from "react";

export interface IDashboardDefaultCard {
    title: string;
    valueDisplay: string;
    change: number;
    iconElement: JSX.Element;
    data: any;
}

const DashboardDefaultCard = ({
    data,
}: {
    key: number;
    data: IDashboardDefaultCard;
}) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div className="font-montserrat">
                <h3 className="text-xs text-gray-500 font-medium">
                    {data.title}
                </h3>
                <p className="text-2xl font-semibold mt-1">
                    {data.valueDisplay}
                </p>
                <div
                    className={`flex items-center text-xs mt-1 ${
                        data.change >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-3 w-3 ${
                            data.change >= 0 ? "text-green-500" : "text-red-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={
                                data.change >= 0
                                    ? "M5 10l7-7m0 0l7 7m-7-7v18"
                                    : "M19 14l-7 7m0 0l-7-7m7 7V3"
                            }
                        />
                    </svg>
                    <span className="ml-1 font-medium text-gray">
                        {Math.abs(data.change)}% this month
                    </span>
                </div>
            </div>
            <div className="bg-gray-200 p-3 rounded-full">
                {data.iconElement}
            </div>
        </div>
    );
};

export default DashboardDefaultCard;
