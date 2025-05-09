"use-client";

import GenericWrapperProfile from "@/app/components/wrappers/generic-wrapper-profile.component";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Cell,
} from "recharts";

const data = [
    { name: "Jun", income: 600000 },
    { name: "Jul", income: 600000 },
    { name: "Aug", income: 600000 },
    { name: "Sep", income: 600000 },
    { name: "Oct", income: 647890, highlight: true },
    { name: "Nov", income: 600000 },
    { name: "Dec", income: 600000 },
];

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 rounded shadow font-montserrat">
                <p className="text-sm font-semibold">{`Oct 2030`}</p>
                <p className="text-lg font-bold">{`₱${payload[0].value.toLocaleString()}`}</p>
            </div>
        );
    }
    return null;
};

const IncomeBarChart = () => {
    return (
        <GenericWrapperProfile>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-between gap-2">
                    <span className="font-montserrat font-normal text-[12px] leading-[130%] tracking-[0%] text-[#6E6F78]">
                        Total Income
                    </span>
                    <p className="font-montserrat font-semibold text-[26px] leading-[110%] tracking-[0%] text-[#222432]">
                        P2,000,000
                    </p>
                    <span className="font-montserrat font-normal text-[12px] leading-[130%] tracking-[0%] text-[#1683FF]">
                        3.45%
                    </span>
                </div>
                <div className="flex flex-row justify-end">
                    <div className="flex justify-start bg-gray-100 rounded-full border border-gray-300 h-max w-max px-4 py-2">
                        <div className="absolute left-2 text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </div>
                        <select className="font-montserrat px-2 bg-transparent border-none focus:outline-none focus:ring-0">
                            <option>7 months</option>
                        </select>
                    </div>
                </div>
            </div>
            <ResponsiveContainer className="font-montserrat font-normal text-[12px] leading-[130%] tracking-[0%] text-[#6E6F78]">
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                        tickFormatter={(value) =>
                            `  ₱${(value / 1000).toLocaleString()}K`
                        }
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey="income"
                        fill="#D1D5DB"
                        radius={[10, 10, 0, 0]}
                        barSize={20}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.highlight ? "#1D4ED8" : "#D1D5DB"}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </GenericWrapperProfile>
    );
};

export default IncomeBarChart;
