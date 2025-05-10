import { ObjectHelper } from "@/helpers/ObjectHelper";
import { IDashboardAnalytics } from "@/models/dashboard/dashboard-analytics.interface";
import axiosInstance from "@/store/axios.instance";

export const getMerchantDashboardData = async ( queryParams:string, token: string): Promise<IDashboardAnalytics> => {
    const queryString = queryParams ? `?type=${queryParams}` : "";

    const response = await axiosInstance.get(`/v1/shop/dashboards/merchant${queryString}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.d;
};

export const setupMerchantLocation = async (data: Record<string, any>, token: string): Promise<any> => {
    const response = await axiosInstance.post(`/v1/merchants/pick-up-location`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const deleteMerchantLocation = async (locationId: string, data: Record<string, any>, token: string): Promise<any> => {
    const response = await axiosInstance.delete(`/v1/merchants/pick-up-location/${locationId}`, {
        data,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

export const getMerchantLocation = async (queryParams: Record<string, any>, token: string): Promise<any[]> => {
    const queryOnlyHasAvalue = Object.fromEntries(Object.entries(queryParams).filter(([_, value]) => value !== ""));

    const response = await axiosInstance.get(`/v1/location`, {
        params: queryOnlyHasAvalue,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data.d.list.map((item: any) => ({
        ...item,
        value: item.name,
        label: ObjectHelper.capitalizeFirstLetter(item.name),
    }));
};
