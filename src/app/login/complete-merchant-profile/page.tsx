"use client";

import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaPhone } from "react-icons/fa";
import { IoStorefrontSharp } from "react-icons/io5";
import { MdDescription, MdFileUpload } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import LoginLayout from "../login.layout";
import YouAreAllSet from "./you-are-all-set-modal.component";

const CompleteMerchantProfile = ({
  onSwitchForm,
}: {
  onSwitchForm: (form: string) => void;
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      description: "",
      phoneNumber: "",
      profilePicture: "",
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: any) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("phoneNumber", data.phoneNumber);

    if (fileInputRef.current?.files?.[0]) {
      formData.append("profilePicture", fileInputRef.current.files[0]);
    }

    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  };

  return (
    <LoginLayout>
      <div className="flex flex-col gap-4 mb-4">
        <YouAreAllSet />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute top-1/2 left-1/2 -translate-1/2 w-xl shadow-md rounded-2xl flex flex-col justify-center overflow-hidden"
        >
          <div className="relative bg-unleash-blue-light h-14 flex items-center justify-center">
            <p className="font-montserrat font-semibold text-white text-lg">
              Shop Profile
            </p>
            <IoCloseOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-white cursor-pointer" />
          </div>
          <div className="w-full flex flex-col px-14 py-9 bg-white gap-6">
            {/* SHOP LOGO */}
            <div
              className="flex flex-col mx-auto select-none cursor-pointer justify-center items-center gap-3"
              onClick={handleImageClick}
            >
              <div className="flex w-28 h-28 bg-website-gray-200 border-2 border-gray-300 rounded-full justify-center items-center overflow-hidden">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Logo Preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <MdFileUpload className="w-6 h-6 text-gray-400" />
                )}
              </div>
              <p className="font-montserrat font-medium text-base text-website-gray">
                Shop Logo
              </p>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                name="profilePicture"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="shop-name"
                className="font-montserrat font-medium text-sm"
              >
                Shop Name
              </label>
              <div className="flex items-center border rounded-sm outline-website-gray-300">
                <IoStorefrontSharp className="ml-2 text-gray-500" />
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="shop-name"
                      className="w-full px-2 py-2 outline-none"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="shop-description"
                className="font-montserrat font-medium text-sm"
              >
                Shop Description
              </label>
              <div className="flex items-start border rounded-sm outline-website-gray-300">
                <MdDescription className="ml-2 mt-2 text-gray-500" />
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id="shop-description"
                      className="w-full px-2 py-2 outline-none h-20 resize-none"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone-number"
                className="font-montserrat font-medium text-sm"
              >
                Phone Number
              </label>
              <div className="flex flex-col gap-1">
                <div className="flex items-center border rounded-sm outline-website-gray-300">
                  <FaPhone className="ml-2 text-gray-500" />
                  <span className="ml-2 text-gray-700 font-semibold">
                    +63
                  </span>{" "}
                  <Controller
                    name="phoneNumber"
                    control={control}
                    rules={{
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Phone number must be exactly 10 digits",
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <div className="w-full">
                        <input
                          {...field}
                          type="tel"
                          id="phone-number"
                          className={`w-full px-2 py-2 outline-none ${
                            fieldState.error ? "border-red-500" : ""
                          }`}
                          maxLength={10}
                          placeholder="9191234567"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "");
                            if (value.length > 10) {
                              value = value.slice(0, 10);
                            }
                            field.onChange(value);
                          }}
                          value={field.value || ""}
                        />
                      </div>
                    )}
                  />
                </div>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ fieldState }) => (
                    <p className="text-red-500 text-sm mt-1">
                      {fieldState.error?.message || "\u00A0"}
                    </p>
                  )}
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-sm bg-unleash-blue-light text-sm text-white font-medium font-montserrat w-full py-4 flex justify-center items-center select-none cursor-pointer hover:brightness-95"
            >
              Continue
            </button>
          </div>
        </form>

        <div
          className="w-full cursor-pointer hover:brightness-90 font-montserrat font-medium text-unleash-blue rounded-sm flex justify-center items-center text-sm mt-4"
          onClick={() => onSwitchForm("LOGIN")}
        >
          Continue
        </div>
      </div>
    </LoginLayout>
  );
};

export default CompleteMerchantProfile;
