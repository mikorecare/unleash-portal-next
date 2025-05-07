"use client";

import { useGetAdminDashboardMutation } from "@/hooks/dashboard.hooks";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ITableFilter } from "../components/filter/table-filter.interface";
import DashboardDefaultContainer from "../components/analytics/containers/dashboard-default-container.component";
import AdminDashboardTable from "./pages/admin/admin-dashboard-table";

const DashboardPage = () => {
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

    const token = useSelector((state: RootState) => state.Auth.token);

    useEffect(() => {
        if (!token) return;
        mutate({ queryParams, token });

        console.log(data);
    }, [token]);

    return (
        <>
            {data && <DashboardDefaultContainer dashboardData={data} />}
            <AdminDashboardTable />
        </>
    );
};

export default DashboardPage;
