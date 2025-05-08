"use client";

import DashboardByThreesContainer from "@/app/components/analytics/containers/dashboard-by-threes-container.component";
import { ITableFilter } from "@/app/components/filter/table-filter.interface";
import { useGetAdminDashboardMutation } from "@/hooks/dashboard.hooks";
import { RootState } from "@/store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AdminDashboardAnalytics = () => {
    const [queryParams, setQueryParams] = useState<ITableFilter>({
        type: "all",
    });
    const { mutate, data, isPending, isError, error } =
        useGetAdminDashboardMutation(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.error(error);
            }
        );

    const token = useSelector((state: RootState) => state.Auth.token) || "";

    useEffect(() => {
        mutate({ queryParams, token });

        console.log(data);
    }, [token]);
    return <>{data && <DashboardByThreesContainer dashboardData={data} />}</>;
};

export default AdminDashboardAnalytics;
