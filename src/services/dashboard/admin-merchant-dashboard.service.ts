import { ObjectHelper } from "@/helpers/ObjectHelper";
import { IDashboardAnalytics } from "@/models/dashboard/dashboard-analytics.interface";
import { LocationFormPayload } from "@/models/payloads/location-form-payload.interface";
import axiosInstance from "@/store/axios.instance";

export const getMerchantDashboard = async (
    merchantId?: string,
    queryParams: Record<string, any> = {},
    token?: string
): Promise<IDashboardAnalytics> => {
    const queryOnlyHasAvalue = ObjectHelper.filterQuery(queryParams);
    const response = await axiosInstance.get(`/v1/shop/dashboards/merchant${merchantId ? `/${merchantId}` : ""}`, {
        params: queryOnlyHasAvalue,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
        },
    });
    return response.data.d;
};

export const setupLocation = async (data: LocationFormPayload, token?: string): Promise<any> => {
    const response = await axiosInstance.post(`/v1/merchants/pick-up-location`, data, {
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
        },
    });
    return response.data;
};

export const deleteLocation = async (locationId: string, data?: Record<string, any>, token?: string): Promise<any> => {
    const response = await axiosInstance.delete(`/v1/merchants/pick-up-location/${locationId}`, {
        data: data || {},
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
        },
    });
    return response.data;
};

export const getLocation = async <T extends Record<string, any>>(
    queryParams: Record<string, any>,
    token?: string
): Promise<(T & { label: string; value: string })[]> => {
    const filteredQuery = ObjectHelper.filterQuery(queryParams);
    const response = await axiosInstance.get(`/v1/location`, {
        params: filteredQuery,
        headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
        },
    });

    return response.data.d.list.map((item: T) => ({
        ...item,
        value: item.name,
        label: ObjectHelper.capitalizeFirstLetter(item.name),
    }));
};
