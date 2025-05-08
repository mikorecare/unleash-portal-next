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
            <div className="bg-white p-2 rounded shadow">
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
                <div className="flex flex-col justify-between">
                    <span>Total Income</span>
                    <h2>P2,000,000</h2>
                    <span>3.45%</span>
                </div>
                <div className="flex flex-row justify-end">
                    <select className="bg-gray-600 rounded-2x1 text-white">
                        <option>7 months</option>
                    </select>
                </div>
            </div>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis
                        tickFormatter={(value) =>
                            `₱${(value / 1000).toLocaleString()}K`
                        }
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey="income"
                        fill="#D1D5DB"
                        radius={[10, 10, 0, 0]}
                        barSize={30}
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
