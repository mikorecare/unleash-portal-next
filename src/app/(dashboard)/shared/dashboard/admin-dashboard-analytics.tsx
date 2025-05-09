"use client";

import DashboardByThreesContainer from "@/app/components/analytics/containers/dashboard-by-threes-container.component";
import DefaultDashboardByThreesContainer from "@/app/components/analytics/containers/dashboard-default-container.component";
import { ITableFilter } from "@/app/components/filter/table-filter.interface";
import { useGetAdminDashboardMutation } from "@/hooks/dashboard/admin-dashboard.hooks";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AdminDashboardAnalytics = () => {
    const [queryParams, setQueryParams] = useState<ITableFilter>({
        type: "all",
    });
    const { mutate, data, isPending, isError, error } =
        useGetAdminDashboardMutation();

    const token = useSelector((state: RootState) => state.Auth.token) || "";

    useEffect(() => {
        mutate({ queryParams, token });
    }, [token]);
    return <>{data && <DefaultDashboardByThreesContainer size="lg" cardHeightInPx="110" dashboardData={data} />}</>;
};

export default AdminDashboardAnalytics;
