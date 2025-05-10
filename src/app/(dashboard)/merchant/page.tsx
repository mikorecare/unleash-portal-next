"use client";

import { useGetMerchantDashboardDataMutation } from "@/hooks/merchant-hooks/merchant-dashboard.hooks";
import { useGetMerchantProfileDetailsMutation } from "@/hooks/merchant.hooks";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import MerchantDashboardAnalytics from "./dashboard/merchant-dashboard-analytics.component";
import { useEffect, useState } from "react";
import StoreProfile from "../shared/[merchantId]/store-profile.component";
import MerchantDetailCategoryTable from "../shared/[merchantId]/table/merchant-id.table.component";
import { IMerchant } from "@/models/merchant/merchant.interface";
import MerchantDashboardLocationForm from "./dashboard/merchant-dashboard-location-form.component";
import { IPickupLocation, PickupLocationType } from "@/models/location/pickup-location.interface";

const MerchantDashboard = () => {
    const [pickupLocationList, setPickupLocationList] = useState<IPickupLocation[]>([]);
    const [returnLocationList, setReturnLocationList] = useState<IPickupLocation[]>([]);

    const { mutate: fetchProfileDetails, data: profileData } = useGetMerchantProfileDetailsMutation((data: IMerchant) => {
        setPickupLocationList(data.pickupLocations.filter((pickupLocation) => pickupLocation.type === PickupLocationType.PICKUP));
        setReturnLocationList(data.pickupLocations.filter((pickupLocation) => pickupLocation.type === PickupLocationType.RETURN));
    });

    const { mutate: fetchDashboard, data: dashboardData } = useGetMerchantDashboardDataMutation();
    const token = useSelector((state: RootState) => state.Auth.token) || "";

    useEffect(() => {
        if (!token) return;

        fetchDashboard({
            queryParams: "all",
            token,
        });

        fetchProfileDetails({ merchantId: "me", token });
    }, [token]);

    return (
        <>
            <div className="flex gap-4 w-full">
                {/* Column 1 - Flexible */}
                <div className="flex-1 w-full">
                    {dashboardData && <MerchantDashboardAnalytics dashboardData={dashboardData} />}
                    <div className="flex flex-row gap-4 w-full">
                        <div className="flex-1">
                            {profileData && <MerchantDashboardLocationForm type={PickupLocationType.PICKUP} data={pickupLocationList} />}
                        </div>
                        <div className="flex-1">
                            {profileData && <MerchantDashboardLocationForm type={PickupLocationType.RETURN} data={returnLocationList} />}
                        </div>
                    </div>
                </div>

                {/* Column 2 - Fixed width */}
                <div className="flex flex-col gap-4 max-w-[584px] w-full">
                    {profileData && <StoreProfile merchant={profileData} buttons={["view"]} maxWidthInPx="584px" maxHeightInPx="575px" />}
                    {dashboardData && <MerchantDetailCategoryTable category={dashboardData.list} />}
                </div>
            </div>
        </>
    );
};

export default MerchantDashboard;
