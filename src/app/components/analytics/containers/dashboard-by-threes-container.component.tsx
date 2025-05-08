"use client";

import { dashboardMetricsConfig } from "@/app/dashboard/dashboard-data-card.mapper";
import { IDashboardAnalytics } from "@/models/dashboard/dashboard-analytics.interface";
import DashboardDefaultCard from "../cards/dashboard-default-card.component";

const DashboardByThreesContainer = ({
    dashboardData,
}: {
    dashboardData: IDashboardAnalytics<unknown>;
}) => {
    const renderMetricCards = (analytics: IDashboardAnalytics<unknown>) => {
        if (!analytics) return [];

        return dashboardMetricsConfig.map(({ key, title, icon }) => ({
            title,
            valueDisplay: analytics[key]?.toString() ?? "0",
            change: 0,
            iconElement: icon,
            data: analytics[key],
        }));
    };

    return (
        <div className="w-full max-w-none">
            <div className="grid grid-cols-3 gap-3 mb-3">
                {renderMetricCards(dashboardData).map((card, index) => (
                    <DashboardDefaultCard key={index} data={card} />
                ))}
            </div>
        </div>
    );
};

export default DashboardByThreesContainer;
