"use client";

import { Controller, useForm } from "react-hook-form";

import { ILoginTypesProps } from "../login.type";
import { FaUserLarge } from "react-icons/fa6";

const ForgotPasswordComponent = ({ onSwitchForm }: ILoginTypesProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "" },
  });

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
          Forgot your password?
        </p>

        <div className="font-montserrat text-xs font-medium text-website-gray">
          Input your email.
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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

export default ForgotPasswordComponent;
