"use client";

import { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { useAuthVerifyOtpMutation, useAuthResendOtpMutation } from "@/hooks/auth.hook";

import { ILoginTypesProps } from "../login.type";

const OTPPageComponent = ({ onSwitchForm }: ILoginTypesProps) => {

  const { signupEmail, signupUserId } = useSelector((state: RootState) => state.Auth);

  const { mutate: verifyOtpMutate, isPending: verifyIsPending } = useAuthVerifyOtpMutation();
  const { mutate: resendOtpMutate, isPending: resendIsPending } = useAuthResendOtpMutation();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { otp: Array(6).fill("") },
  });

  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(""));
  const [resendTimer, setResendTimer] = useState<number>(0);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const resendOTP = () => {
    /**
     * TODO: Waiting for OTP resend endpoint for forgot password
     */
    resendOtpMutate({userId: signupUserId}, {
      onSuccess: () => {
        console.log("Sent OTP!");
        setResendTimer(60);
      },
    });
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [resendTimer]);

  useEffect(() => {
    setOtpValues(getValues("otp"));
  }, [getValues]);

  const handleChange = (
    index: number,
    value: string,
    onChange: (value: string[]) => void
  ) => {
    const updatedOtp = [...otpValues];
    updatedOtp[index] = value;
    setOtpValues(updatedOtp);
    onChange(updatedOtp);

    if (value && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (
      e.key === "Backspace" &&
      !otpValues[index] &&
      inputsRef.current[index - 1]
    ) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const onSubmit = () => {
        /**
     * TODO: Waiting for verifyOtpMutate for Forgot password
     */
    
    verifyOtpMutate({userId: signupUserId, otpNumber: otpValues.join("")}, {
      onSuccess: (response) => {
        console.log("OTP Verified!", response);
      },
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <p className="font-montserrat text-base font-bold">{signupEmail}</p>

        <div className="font-montserrat text-xs font-medium text-website-gray">
          Please enter the verification code sent to your email
        </div>

        <div className="w-full h-[1px] bg-website-gray rounded-full"></div>

        <Controller
          name="otp"
          control={control}
          rules={{
            validate: (value) =>
              value.every((v) => v !== "") || "All fields are required",
          }}
          render={({ field: { onChange } }) => (
            <div className="w-full flex flex-row justify-between gap-2">
              {otpValues.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  className="w-10 h-10 text-center outline-2 outline-website-gray-300 rounded-sm bg-website-gray-100"
                  value={val}
                  maxLength={1}
                  ref={(el) => {
                    if (el) inputsRef.current[i] = el;
                  }}
                  onChange={(e) => handleChange(i, e.target.value, onChange)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                />
              ))}
            </div>
          )}
        />
        {errors.otp && (
          <p className="text-red-500 text-xs mt-2">{errors.otp.message}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 cursor-pointer hover:brightness-90 font-montserrat font-medium text-white bg-unleash-blue rounded-sm flex justify-center items-center text-xs"
          disabled={verifyIsPending}
        >
          {verifyIsPending ? "Verifying..." : "Continue"}
        </button>
      </form>

      <div className="w-full font-montserrat font-medium text-website-gray rounded-sm flex justify-center items-center text-sm mt-4">
        Did not receive code? &nbsp;
        <span
          className={`text-unleash-blue underline cursor-pointer hover:brightness-90 ${
            resendIsPending || resendTimer > 0 ? "pointer-events-none opacity-50" : ""
          }`}
          onClick={() => resendOTP()}
        >
          {resendIsPending
            ? "Resending..."
            : resendTimer > 0
            ? `Resend in ${resendTimer}s`
            : "Resend code"}
        </span>
      </div>
    </>
  );
};

export default OTPPageComponent;
