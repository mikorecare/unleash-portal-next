"use client";

import { Controller, useForm } from "react-hook-form";

import { ILoginTypesProps } from "../login.type";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { useState } from "react";

const CreateNewPasswordComponent = ({ onSwitchForm }: ILoginTypesProps) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { password: "", confirmPassword: "" },
  });

  const password = watch("password");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    /**
     * TODO: wait for OTP verification ENDPOINT 
     for reset password must have USER ROLE on response as needed for ADMIN/MERCHANT identifier payload email
    **/
    onSwitchForm("OTP");
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <p className="font-montserrat text-base font-bold mt-2">
          Create new password
        </p>

        <div className="font-montserrat text-xs font-medium text-website-gray">
          Create and confirm your password.
        </div>
      </div>

      <div className="w-full h-[1px] bg-website-gray rounded-full"></div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
          className="w-full py-3 cursor-pointer hover:brightness-90 font-montserrat font-medium text-white bg-unleash-blue rounded-sm flex justify-center items-center text-xs"
        >
          Reset Password
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

export default CreateNewPasswordComponent;
