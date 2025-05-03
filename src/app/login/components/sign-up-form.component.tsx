"use client";

import { FaUserLarge, FaEye, FaEyeSlash } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

import { useAuthSignupMutation } from "@/hooks/auth.hook";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import { ILoginTypesProps } from "../login.type";
import { useDispatch } from "react-redux";
import { doSetSignupInfo } from "@/store/slices/auth.slice";

const SignUpFormComponent = ({ onSwitchForm }: ILoginTypesProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { mutate: signupMutate } = useAuthSignupMutation();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (data: any) => {
    const { confirmPassword, ...signupData } = data;
    signupMutate(signupData, {
      onSuccess: (response) => {
        console.log("Sign Up success!", response);

        dispatch(
          doSetSignupInfo({
            email: data.email,
            userId: response.d.userId,
          })
        );

        onSwitchForm("OTP");
      },
    });
  };

  const password = watch("password");

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <p className="font-montserrat text-base font-bold">Sign Up</p>
        <div className="w-full h-[1px] bg-website-gray rounded-full"></div>
        <div
          className={`flex flex-row gap-3 relative outline-unleash-blue rounded-sm px-2 py-3 w-full ${
            errors.email ? "outline-red-500" : "outline-1"
          }`}
        >
          <FaUserLarge className="text-website-gray h-6 w-6" />
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none w-full font-montserrat text-base border-none focus:outline-none focus:ring-0 text-black"
              />
            )}
          />
        </div>
        {errors.email && <p className="error-text">{errors.email.message}</p>}

        <div
          className={`flex flex-row gap-3 relative outline-unleash-blue rounded-sm px-2 py-3 w-full ${
            errors.password ? "outline-red-500" : "outline-1"
          }`}
        >
          <IoIosLock className="text-website-gray h-6 w-6" />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <input
                {...field}
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="bg-transparent outline-none w-full font-montserrat text-base border-none focus:outline-none focus:ring-0 text-black"
              />
            )}
          />
          {passwordVisible ? (
            <FaEyeSlash
              className="text-website-gray w-6 items-center justify-center cursor-pointer select-none"
              onClick={() => setPasswordVisible(false)}
            />
          ) : (
            <FaEye
              className="text-website-gray w-6 items-center justify-center cursor-pointer select-none"
              onClick={() => setPasswordVisible(true)}
            />
          )}
        </div>
        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}

        <div
          className={`flex flex-row gap-3 relative outline-unleash-blue rounded-sm px-2 py-3 w-full ${
            errors.confirmPassword ? "outline-red-500" : "outline-1"
          }`}
        >
          <IoIosLock className="text-website-gray h-6 w-6" />
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            render={({ field }) => (
              <input
                {...field}
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                className="bg-transparent outline-none w-full font-montserrat text-base border-none focus:outline-none focus:ring-0 text-black"
              />
            )}
          />
          {confirmPasswordVisible ? (
            <FaEyeSlash
              className="text-website-gray w-6 items-center justify-center cursor-pointer select-none"
              onClick={() => setConfirmPasswordVisible(false)}
            />
          ) : (
            <FaEye
              className="text-website-gray w-6 items-center justify-center cursor-pointer select-none"
              onClick={() => setConfirmPasswordVisible(true)}
            />
          )}
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full py-3 cursor-pointer hover:brightness-90 font-montserrat font-medium text-white bg-unleash-blue rounded-sm flex justify-center items-center text-xs mt-4"
        >
          Sign Up
        </button>
      </form>

      <div
        className="w-full cursor-pointer hover:brightness-90 font-montserrat font-medium text-unleash-blue rounded-sm flex justify-center items-center text-sm mt-4"
        onClick={() => onSwitchForm("LOGIN")}
      >
        Go back to Login page
      </div>
    </>
  );
};

export default SignUpFormComponent;
