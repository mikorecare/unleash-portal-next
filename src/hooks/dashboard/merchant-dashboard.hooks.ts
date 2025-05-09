import { getMerchantDashboard, setupLocation, deleteLocation, getLocation } from "@/services/dashboard/merchant-dashboard.service";
import { useMutation } from "@tanstack/react-query";

export const useGetMerchantDashboardMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({
            merchantId,
            queryParams,
            token,
        }: {
            merchantId?: string;
            queryParams: Record<string, any>;
            token: string;
        }) => getMerchantDashboard(merchantId, queryParams, token),
        onSuccess,
        onError,
    });
};

export const useSetupLocationMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({
            data,
            token,
        }: {
            data: Record<string, any>;
            token: string;
        }) => setupLocation(data, token),
        onSuccess,
        onError,
    });
};

export const useDeleteLocationMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({
            locationId,
            data,
            token,
        }: {
            locationId: string;
            data?: Record<string, any>;
            token: string;
        }) => deleteLocation(locationId, data, token),
        onSuccess,
        onError,
    });
};

export const useGetLocationMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({
            queryParams,
            token,
        }: {
            queryParams: Record<string, any>;
            token: string;
        }) => getLocation(queryParams, token),
        onSuccess,
        onError,
    });
};
