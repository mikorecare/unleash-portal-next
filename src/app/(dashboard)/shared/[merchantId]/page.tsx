"use client";

import { useParams } from "next/navigation";
import GenericWrapperFullWidth from "@/app/components/wrappers/generic-wrapper-full-width.component";
import StoreProfileHeader from "./store-profile-header.component";
import { useEffect } from "react";
import StoreProfile from "./store-profile.component";
import { useGetMerchantProfileDetailsMutation } from "@/hooks/merchant.hooks";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import DashboardByThreesContainer from "@/app/components/analytics/containers/dashboard-by-threes-container.component";
import IncomeBarChart from "./store-profile-chart.component";
import { useGetMerchantDashboardMutation } from "@/hooks/dashboard/merchant-dashboard.hooks";
import MerchantDetailCategoryTable from "./table/merchant-id.table.component";
import GridWrapper from "@/app/components/wrappers/grid-wrapper.component";

const SharedStoreProfilePage = () => {
    const params = useParams();
    const id = params?.merchantId as string;

    const { mutate: fetchProfileDetails, data: profileData } =
        useGetMerchantProfileDetailsMutation();

    const { mutate: fetchDashboard, data: dashboardData } =
        useGetMerchantDashboardMutation((data) => {
            console.log(data);
        });

    const token = useSelector((state: RootState) => state.Auth.token) || "";

    useEffect(() => {
        fetchDashboard({ merchantId: id, queryParams: { type: "all" }, token });
        fetchProfileDetails({ merchantId: id, token });
        console.log(dashboardData);
    }, [token]);

    return (
        <>
            <GenericWrapperFullWidth flex="row">
                <StoreProfileHeader
                    title={"Store Profile"}
                    previousPage={"Dashboard"}
                />
            </GenericWrapperFullWidth>
            <GridWrapper>
                {profileData && <StoreProfile merchant={profileData} />}
                {dashboardData && (
                    <DashboardByThreesContainer size="lg" dashboardData={dashboardData} />
                )}
                <IncomeBarChart />
            </GridWrapper>
            {dashboardData && (
                <MerchantDetailCategoryTable category={dashboardData.list} />
            )}
        </>
    );
};

export default SharedStoreProfilePage;
