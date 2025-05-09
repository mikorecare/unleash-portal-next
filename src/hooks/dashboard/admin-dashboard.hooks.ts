import { ITableFilter } from "@/app/components/filter/table-filter.interface";
import {
    getAdminDashboard,
    getAllMerchants,
    deleteMerchantByAdmin,
} from "@/services/dashboard/admin-dashboard.service";
import { useMutation } from "@tanstack/react-query";

export const useGetAdminDashboardMutation = (
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
        }) => getAdminDashboard(queryParams, token),
        onSuccess,
        onError
    });
};

export const useGetAllMerchantsMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({
            queryParams,
            token,
        }: {
            queryParams: ITableFilter;
            token: string;
        }) => getAllMerchants(queryParams, token),
        onSuccess,
        onError,
    });
};

export const useDeleteMerchantByAdminMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({
            merchantId,
            token,
        }: {
            merchantId: string;
            token: string;
        }) => deleteMerchantByAdmin(merchantId, token),
        onSuccess,
        onError,
    });
};
