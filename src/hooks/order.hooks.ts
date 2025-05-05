import { useMutation } from "@tanstack/react-query";

import {
    getAllOrdersByMerchant,
    getAllServiceOrdersByMerchant,
    viewOrderDetails,
    viewOrderWaybill,
    getAllReturnOrders,
    viewReturnOrderDetails,
    getAllCancelOrders,
    viewCancelOrderDetails,
    updateSingleOrderByMerchant,
    updateSingleReturnOrder,
    updateSingleCancelAndReturnOrder,
} from "@/services/orders/orders.merchart.service";
import { ITableFilter } from "@/app/components/filter/table-filter.interface";
import { IProductOrder } from "@/models/product/product.interface";

export const useGetAllOrdersByMerchantMutation = (
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
        }) => getAllOrdersByMerchant(queryParams, token),
        onSuccess,
        onError,
    });
};

export const useGetAllServiceOrdersByMerchantMutation = () => {
    return useMutation({
        mutationFn: getAllServiceOrdersByMerchant,
    });
};

export const useViewOrderDetailsMutation = () => {
    return useMutation({
        mutationFn: viewOrderDetails,
    });
};

export const useViewOrderWaybillMutation = () => {
    return useMutation({
        mutationFn: viewOrderWaybill,
    });
};

export const useGetAllReturnOrdersMutation = () => {
    return useMutation({
        mutationFn: getAllReturnOrders,
    });
};

export const useViewReturnOrderDetailsMutation = () => {
    return useMutation({
        mutationFn: viewReturnOrderDetails,
    });
};

export const useGetAllCancelOrdersMutation = () => {
    return useMutation({
        mutationFn: getAllCancelOrders,
    });
};

export const useViewCancelOrderDetailsMutation = () => {
    return useMutation({
        mutationFn: viewCancelOrderDetails,
    });
};

export const useUpdateSingleOrderByMerchantMutation = () => {
    return useMutation({
        mutationFn: updateSingleOrderByMerchant,
    });
};

export const useUpdateSingleReturnOrderMutation = () => {
    return useMutation({
        mutationFn: updateSingleReturnOrder,
    });
};

export const useUpdateSingleCancelAndReturnOrderMutation = () => {
    return useMutation({
        mutationFn: updateSingleCancelAndReturnOrder,
    });
};
