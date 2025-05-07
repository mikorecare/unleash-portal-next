import { ITableFilter } from "@/app/components/filter/table-filter.interface";
import { ObjectHelper } from "@/helpers/ObjectHelper";
import { IDashboardAnalytics } from "@/models/dashboard/dashboard-analytics.interface";
import { IGenericCollection } from "@/models/generic-collection/generic-collection.interface";
import { IMerchant } from "@/models/merchant/merchant.interface";
import axiosInstance from "@/store/axios.instance";

export const getAdminDashboard = async (
    queryParams: Record<string, any>,
    token: string
): Promise<IDashboardAnalytics<unknown>> => {
    const queryOnlyHasAvalue = ObjectHelper.filterQuery(queryParams);

    console.log(queryOnlyHasAvalue, token);
    const response = await axiosInstance.get(`/v1/shop/dashboards`, {
        params: queryOnlyHasAvalue,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.d;
};

export const getAllMerchants = async (
    queryParams: ITableFilter,
    token: string
): Promise<IGenericCollection<IMerchant>> => {
    const queryOnlyHasAvalue = ObjectHelper.filterQuery(queryParams);

    console.log(queryOnlyHasAvalue, token);
    const response = await axiosInstance.get(`/v1/merchants`, {
        params: queryOnlyHasAvalue,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.d;
};

export const deleteMerchantByAdmin = async (
    merchantId: string,
    token: string
): Promise<any> => {
    const response = await axiosInstance.delete(`/v1/merchants/${merchantId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.d;
};
