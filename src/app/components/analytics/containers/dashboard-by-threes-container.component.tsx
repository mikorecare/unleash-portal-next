"use client";

import { dashboardMetricsConfig } from "@/app/(dashboard)/dashboard-data-card.mapper";
import { IDashboardAnalytics } from "@/models/dashboard/dashboard-analytics.interface";
import DashboardDefaultCard from "../cards/dashboard-default-card.component";

const DashboardByThreesContainer = ({
    dashboardData,
    size = "sm",
}: {
    dashboardData: IDashboardAnalytics;
    size?: "sm" | "md" | "lg";
}) => {
    const sizesMap = new Map<string, string>([
        ["sm", "max-w-[909px]"],
        ["md", "max-w-[1280px]"],
        ["lg", ""],
    ]);

    const renderMetricCards = (analytics: IDashboardAnalytics) => {
        if (!analytics) return [];

        const currencyKeys = ["totalRevenue", "totalSales"];

        return dashboardMetricsConfig.map(({ key, title, icon }) => {
            const rawValue = analytics[key];

            const valueDisplay = currencyKeys.includes(key)
                ? new Intl.NumberFormat("en-PH", {
                      style: "currency",
                      currency: "PHP",
                  }).format(Number(rawValue ?? 0))
                : rawValue?.toString() ?? "0";

            return {
                title,
                valueDisplay,
                change: 0,
                iconElement: icon,
                data: rawValue,
            };
        });
    };

    return (
        <div className={`w-full mb-4 ${sizesMap.get(size)}`}>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(217px,_1fr))] gap-4">
                {renderMetricCards(dashboardData).map((card, index) => (
                    <DashboardDefaultCard key={index} data={card} />
                ))}
            </div>
        </div>
    );
};

export default DashboardByThreesContainer;
