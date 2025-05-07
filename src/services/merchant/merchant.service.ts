import axiosInstance from "@/store/axios.instance";

export const getMerchantProfileDetails = async (
    merchantId: string,
    token: string
): Promise<any> => {
    const response = await axiosInstance.get(`/v1/merchants/${merchantId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.d;
};

export const updateMerchantProfileDetails = async (
    payload: any,
    token: string
): Promise<any> => {
    const response = await axiosInstance.put(`/v1/merchants/me`, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

export const updateDeliverySettingPerArea = async (
    payload: any,
    token: string
): Promise<any> => {
    const response = await axiosInstance.put(
        `/v1/merchants/set-delivery-settings`,
        payload,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data;
};

// Optional (previously commented-out)
export const getProductCategories = async (token: string): Promise<any> => {
    const response = await axiosInstance.get(`/v1/shop/categories`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.d;
};

export const getProductSubCategories = async (
    categoryId: string,
    token: string
): Promise<any> => {
    const response = await axiosInstance.get(
        `/v1/shop/categories/${categoryId}/sub-category`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
    return response.data.d;
};
