"use server";

import axiosInstance from "@/store/axios.instance";

export const authLoginUsingEmail = async (payload: any) => {
  const res = await axiosInstance.post("/v1/signin/email", payload);
    return res.data;
};

export const authSignupUsingEmail = async (payload: any) => {
  const res = await axiosInstance.post("/v1/signup/email", payload);
    return res.data;
};

export const authVerifyOtpUsingEmail = async (payload: any) => {
  const res = await axiosInstance.post("/v1/signup/verify-otp-email", payload);
    return res.data;
};

export const authResendOtpUsingEmail = async (payload: any) => {
  const res = await axiosInstance.post("/v1/signup/resend-otp-email", payload);
    return res.data;
};

export const completeMerchantProfile = async (payload: any) => {
  const res = await axiosInstance.post("/v1/merchants", payload);
    return res.data;
};