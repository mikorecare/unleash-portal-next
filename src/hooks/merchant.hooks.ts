import {
    getMerchantProfileDetails,
    updateMerchantProfileDetails,
    updateDeliverySettingPerArea,
    getProductCategories,
    getProductSubCategories,
} from "@/services/merchant/merchant.service";
import { useMutation } from "@tanstack/react-query";

export const useGetMerchantProfileDetailsMutation = (
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
        }) => getMerchantProfileDetails(merchantId, token),
        onSuccess,
        onError,
    });
};

export const useUpdateMerchantProfileDetailsMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({ payload, token }: { payload: any; token: string }) =>
            updateMerchantProfileDetails(payload, token),
        onSuccess,
        onError,
    });
};

export const useUpdateDeliverySettingPerAreaMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({ payload, token }: { payload: any; token: string }) =>
            updateDeliverySettingPerArea(payload, token),
        onSuccess,
        onError,
    });
};

export const useGetProductCategoriesMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({ token }: { token: string }) =>
            getProductCategories(token),
        onSuccess,
        onError,
    });
};

export const useGetProductSubCategoriesMutation = (
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: ({
            categoryId,
            token,
        }: {
            categoryId: string;
            token: string;
        }) => getProductSubCategories(categoryId, token),
        onSuccess,
        onError,
    });
};
