import { LocationFormPayload } from "@/models/payloads/location-form-payload.interface";
import { getMerchantDashboard, setupLocation, deleteLocation, getLocation } from "@/services/dashboard/admin-merchant-dashboard.service";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

interface MutationVariables {
    data: LocationFormPayload;
    token: string;
}

export const useGetMerchantDashboardMutation = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    return useMutation({
        mutationFn: ({ merchantId, queryParams, token }: { merchantId?: string; queryParams: Record<string, any>; token: string }) =>
            getMerchantDashboard(merchantId, queryParams, token),
        onSuccess,
        onError,
    });
};

export const useSetupLocationMutation = (onSuccess?: (data: any, variables: MutationVariables) => void, onError?: (error: any) => void) => {
    return useMutation({
        mutationFn: ({ data, token }: MutationVariables) => setupLocation(data, token),
        onSuccess,
        onError,
    });
};

export const useDeleteLocationMutation = (onSuccess?: (data: any) => void, onError?: (error: any) => void) => {
    return useMutation({
        mutationFn: ({ locationId, data, token }: { locationId: string; data?: Record<string, any>; token: string }) =>
            deleteLocation(locationId, data, token),
        onSuccess,
        onError,
    });
};

export const useGetLocationMutation = <T extends Record<string, any>>(
    onSuccess?: (data: T[]) => void,
    onError?: (error: any) => void
): UseMutationResult<T[], unknown, { queryParams: Record<string, any>; token: string }> => {
    return useMutation({
        mutationFn: ({ queryParams, token }: { queryParams: Record<string, any>; token: string }) => getLocation<T>(queryParams, token),
        onSuccess,
        onError,
    });
};
