"use server";

import { ObjectHelper } from "@/helpers/ObjectHelper";
import { IGenericCollection } from "@/models/generic-collection/generic-collection.interface";
import { IProductOrder } from "@/models/product/product.interface";
import axiosInstance from "@/store/axios.instance";

export const getAllOrdersByMerchant = async (
    queryParams: Record<string, any>,
    token: string
): Promise<IGenericCollection<IProductOrder>> => {
    const queryOnlyHasAvalue = ObjectHelper.filterQuery(queryParams);

    console.log(queryOnlyHasAvalue, token)
    const response = await axiosInstance.get(`/v1/shop/shop-order-history`, {
        params: queryOnlyHasAvalue,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.d;
};

export const getAllServiceOrdersByMerchant = async (
    queryParams: Record<string, any>
) => {
    const queryOnlyHasAvalue = ObjectHelper.filterQuery(queryParams);

    const response = await axiosInstance.get(
        `/v1/shop/shop-order-history/services`,
        { params: queryOnlyHasAvalue }
    );
    return response.data.d;
};

export const viewOrderDetails = async (transactionId: string) => {
    const response = await axiosInstance.get(
        `/v1/shop/shop-order-history/${transactionId}`
    );
    return response.data.d;
};

export const viewOrderWaybill = async (transactionId: string) => {
    const response = await axiosInstance.get(
        `/v1/shop/shop-order-history/waybill/${transactionId}`
    );
    return response.data.d;
};

export const getAllReturnOrders = async (queryParams: Record<string, any>) => {
    const queryOnlyHasAvalue = ObjectHelper.filterQuery(queryParams);

    const response = await axiosInstance.get(
        `/v1/shop/shop-order-history/return-order`,
        { params: queryOnlyHasAvalue }
    );
    return response.data.d;
};

export const viewReturnOrderDetails = async ({
    transactionId,
    productId,
    variantId,
}: {
    transactionId: string;
    productId: string;
    variantId: string;
}) => {
    const response = await axiosInstance.get(
        `/v1/shop/shop-order-history/return-order/${transactionId}/${productId}/${variantId}`
    );
    return response.data.d;
};

export const getAllCancelOrders = async (queryParams: Record<string, any>) => {
    const queryOnlyHasAvalue = ObjectHelper.filterQuery(queryParams);

    const response = await axiosInstance.get(
        `/v1/shop/shop-order-history/cancel-order`,
        { params: queryOnlyHasAvalue }
    );
    return response.data.d;
};

export const viewCancelOrderDetails = async (transactionId: string) => {
    const response = await axiosInstance.get(
        `/v1/shop/shop-order-history/cancel-order/${transactionId}`
    );
    return response.data.d;
};

export const updateSingleOrderByMerchant = async (payload: {
    id: string;
    data: Record<string, any>;
}) => {
    const response = await axiosInstance.put(
        `/v1/shop/shop-order-history/update-order-status/${payload.id}`,
        payload.data
    );
    return response.data;
};

export const updateSingleReturnOrder = async (payload: {
    transactionId: string;
    data: Record<string, any>;
}) => {
    const response = await axiosInstance.put(
        `/v1/shop/shop-order-history/update-return-order-status/${payload.transactionId}`,
        payload.data
    );
    return response.data;
};

export const updateSingleCancelAndReturnOrder = async (payload: {
    transactionId: string;
    data: Record<string, any>;
}) => {
    const response = await axiosInstance.put(
        `/v1/shop/shop-order-history/update-cancellation-order-status/${payload.transactionId}`,
        payload.data
    );
    return response.data;
};