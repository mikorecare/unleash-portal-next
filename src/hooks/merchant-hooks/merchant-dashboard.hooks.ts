import {
    deleteMerchantLocation,
    getMerchantDashboardData,
    getMerchantLocation,
    setupMerchantLocation,
} from "@/services/merchant/merchant-dashboard.service";
import { useMutation } from "@tanstack/react-query";

export const useGetMerchantDashboardDataMutation = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    return useMutation({
        mutationFn: ({ queryParams, token }: { queryParams: string; token: string }) =>
            getMerchantDashboardData(queryParams, token),
        onSuccess,
        onError,
    });
};

export const useMerchantSetupLocationMutation = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    return useMutation({
        mutationFn: ({ data, token }: { data: Record<string, any>; token: string }) => setupMerchantLocation(data, token),
        onSuccess,
        onError,
    });
};

export const useGetMerchantLocationMutation = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    return useMutation({
        mutationFn: ({ queryParams, token }: { queryParams: Record<string, any>; token: string }) => getMerchantLocation(queryParams, token),
        onSuccess,
        onError,
    });
};

export const useDeleteMerchantLocationMutation = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    return useMutation({
        mutationFn: ({ locationId, data, token }: { locationId: string; data: Record<string, any>; token: string }) =>
            deleteMerchantLocation(locationId, data, token),
        onSuccess,
        onError,
    });
};
