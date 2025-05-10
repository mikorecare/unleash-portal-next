"use client";

import DashboardByThreesContainer from "@/app/components/analytics/containers/dashboard-by-threes-container.component";
import { IDashboardAnalytics } from "@/models/dashboard/dashboard-analytics.interface";

const MerchantDashboardAnalytics = ({ dashboardData }: { dashboardData: IDashboardAnalytics }) => {
    return (
        <>
            <DashboardByThreesContainer size="lg" cardHeightInPx="114" dashboardData={dashboardData} />
        </>
    );
};

export default MerchantDashboardAnalytics;
