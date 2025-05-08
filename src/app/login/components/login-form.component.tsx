"use client";
import { FaUserLarge, FaEye, FaEyeSlash } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { useState } from "react";

import { useForm, Controller } from "react-hook-form";
import { ILoginTypesProps } from "../login.type";
import { useAuthLoginMutation } from "@/hooks/auth.hook";
import { useDispatch } from "react-redux";
import { doSetAuthLogin } from "@/store/slices/auth.slice";

const LoginFormComponent = ({ onSwitchForm }: ILoginTypesProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });
  const dispatch = useDispatch();
  const { mutate: loginMutate, isPending } = useAuthLoginMutation();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = (data: any) => {
    loginMutate(data, {
      onSuccess: (response) => {
        console.log("Login success!", response);
        dispatch(doSetAuthLogin(response.d));
        // router.push("/dashboard");
      },
      onError: (error) => {
     
      },
    });
  };

  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <p className="font-montserrat text-base font-bold mt-2">
          Log in to your Account.
        </p>

        <div className="font-montserrat text-xs font-medium text-website-gray">
          New here? Sign up as a Merchant!
        </div>
        <p
          className="font-montserrat text-xs font-medium text-unleash-blue bg-website-gray-light border-[1px] border-unleash-blue rounded-sm w-full text-center py-4 cursor-pointer select-none hover:brightness-95"
          onClick={() => onSwitchForm("SIGNUP")}
        >
          Sign up as a Merchant
        </p>
      </div>

      {/* Email & Password Input */}
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
                className="bg-white outline-none w-full font-montserrat text-base border-none focus:outline-none focus:ring-0 text-black"
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

        {/* Primary Button */}
        <button
          type="submit"
          className="w-full py-3 cursor-pointer hover:brightness-90 font-montserrat font-medium text-white bg-unleash-blue rounded-sm flex justify-center items-center text-xs"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Log In"}
        </button>
      </form>

      {/* Secondary Button */}
      <div
        className="w-full cursor-pointer hover:brightness-90 font-montserrat font-medium text-unleash-blue rounded-sm flex justify-center items-center text-sm mt-4"
        onClick={() => onSwitchForm("FORGOT_PASSWORD")}
      >
        Forgot Password
      </div>
    </>
  );
};

export default LoginFormComponent;
