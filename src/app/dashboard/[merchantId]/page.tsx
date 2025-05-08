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
import { mockData } from "./mock-data.merchant.analytics";
import IncomeBarChart from "./store-profile-chart.component";

const StoreProfilePage = () => {
    const params = useParams();
    const id = params?.merchantId as string;

    const { mutate, data } = useGetMerchantProfileDetailsMutation(
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
        mutate({ merchantId: id, token });
        console.log(data);
    }, [token]);

    return (
        <>
            <GenericWrapperFullWidth>
                <StoreProfileHeader
                    title={"Store Profile"}
                    previousPage={"Dashboard"}
                />
            </GenericWrapperFullWidth>
            <GenericWrapperFullWidth>
                {data && <StoreProfile merchant={data} />}
                <DashboardByThreesContainer dashboardData={mockData} />
                <IncomeBarChart />
            </GenericWrapperFullWidth>
        </>
    );
};

export default StoreProfilePage;
