import { useMutation } from "@tanstack/react-query";
import {
  authLoginUsingEmail,
  authSignupUsingEmail,
  authVerifyOtpUsingEmail,
  authResendOtpUsingEmail,
  completeMerchantProfile,
} from "@/services/auth/auth.service";

export const useAuthLoginMutation = () => {
  return useMutation({
    mutationFn: authLoginUsingEmail,
  });
};

export const useAuthSignupMutation = () => {
  return useMutation({
    mutationFn: authSignupUsingEmail,
  });
};

export const useAuthVerifyOtpMutation = () => {
  return useMutation({
    mutationFn: authVerifyOtpUsingEmail,
  });
};

export const useAuthResendOtpMutation = () => {
  return useMutation({
    mutationFn: authResendOtpUsingEmail,
  });
};

export const useCompleteMerchantProfileMutation = () => {
  return useMutation({
    mutationFn: completeMerchantProfile,
  });
};